import { useState, useEffect, useRef, useMemo } from 'react';

const useInView = (options = {}) => {
    const memoizedOptions = useMemo(() => options, [options]);
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsInView(entry.isIntersecting);
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, memoizedOptions]);

    return [ref, isInView];
};

export default useInView;
