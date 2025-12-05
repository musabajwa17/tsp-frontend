import { useState, useEffect, useRef } from 'react';

/**
 * LazyImage Component - Optimized image loading with Intersection Observer
 * 
 * Features:
 * - Lazy loads images when they enter the viewport
 * - Shows loading placeholder while image loads
 * - Handles error states with fallback
 * - Supports all standard img attributes
 * 
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text for accessibility
 * @param {string} className - Tailwind classes for styling
 * @param {function} onError - Error handler callback
 * @param {object} ...props - Additional img element props
 */
const LazyImage = ({ src, alt, className = '', onError, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [hasError, setHasError] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        // Use Intersection Observer to detect when image enters viewport
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.disconnect(); // Stop observing once in view
                    }
                });
            },
            {
                rootMargin: '50px', // Start loading 50px before entering viewport
                threshold: 0.01
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (observer) observer.disconnect();
        };
    }, []);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    const handleError = (e) => {
        setHasError(true);
        if (onError) onError(e);
    };

    return (
        <div ref={imgRef} className={`relative ${className}`}>
            {/* Loading placeholder */}
            {!isLoaded && !hasError && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                    <svg
                        className="w-10 h-10 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                    </svg>
                </div>
            )}

            {/* Error state */}
            {hasError && (
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                        <svg
                            className="w-10 h-10 mx-auto mb-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <p className="text-xs">Failed to load</p>
                    </div>
                </div>
            )}

            {/* Actual image - only load when in viewport */}
            {isInView && (
                <img
                    src={src}
                    alt={alt}
                    className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                    onLoad={handleLoad}
                    onError={handleError}
                    loading="lazy" // Native browser lazy loading as fallback
                    {...props}
                />
            )}
        </div>
    );
};

export default LazyImage;
