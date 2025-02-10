import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageLoading = () => {
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [location]);

    return isLoading;
};

export default usePageLoading;
