import { CreateTopBar } from "../components/CreateTopBar";
import { useState } from "react";
import axios from "axios";

export function Create() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const token = localStorage.getItem('token'); // Retrieve the JWT token from localStorage

        try {
            const response = await axios.post('http://localhost:3000/api/v1/post/create', {
                title,
                description,
                category
            }, {
                headers: {
                    'Authorization': `Bearer ${token}` // Include the token in the request headers
                }
            });
            alert('Post created successfully!');
            setTitle('');
            setDescription('');
            setCategory('');
        } catch (error) {
            console.error('Error creating post:', error);
            alert('Failed to create post. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <CreateTopBar text={"Create"} onClick={handleSubmit} />
            <div className="flex flex-col justify-center items-center p-4">
                <form onSubmit={handleSubmit} className="w-full max-w-sm">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <input
                            id="description"
                            type="text"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                            Category
                        </label>
                        <input
                            id="category"
                            type="text"
                            placeholder="Category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            disabled={!title || !description || !category || loading}
                        >
                            {loading ? 'Creating...' : 'Create Post'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
