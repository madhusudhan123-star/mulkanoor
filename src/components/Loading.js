import React from 'react';

const Loading = () => {
    return (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
        </div>
    );
};

export default Loading;
