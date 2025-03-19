import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import searchData from '../data/searchData';

const SearchResults = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q') || '';
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (query) {
            // Simulate search operation
            setIsLoading(true);
            setTimeout(() => {
                const filteredResults = searchData.filter(item =>
                    item.title.toLowerCase().includes(query.toLowerCase()) ||
                    item.content.toLowerCase().includes(query.toLowerCase())
                );
                setResults(filteredResults);
                setIsLoading(false);
            }, 500); // Simulate loading delay
        } else {
            setResults([]);
            setIsLoading(false);
        }
    }, [query]);

    return (
        <div className="min-h-screen pt-28 pb-16 px-4 md:px-8 lg:px-16 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl cursor-default md:text-4xl font-bold mb-2 text-gray-800">
                    Search Results
                </h1>
                <p className="text-lg cursor-default text-gray-600 mb-8">
                    {query ? `Showing results for "${query}"` : 'Please enter a search term'}
                </p>

                {isLoading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
                    </div>
                ) : (
                    <>
                        {results.length > 0 ? (
                            <div className="space-y-6">
                                {results.map((result, index) => (
                                    <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                        <Link to={result.path} className="block">
                                            <h2 className="text-xl cursor-default font-semibold text-yellow-600 hover:text-yellow-700 transition-colors mb-2">
                                                {result.title}
                                            </h2>
                                            <p className="text-gray-600 cursor-default">{result.content}</p>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <h2 className="text-2xl cursor-default font-semibold text-gray-700 mb-4">No results found</h2>
                                <p className="text-gray-500 cursor-default">
                                    Try using different keywords or check the spelling of your search term.
                                </p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default SearchResults;
