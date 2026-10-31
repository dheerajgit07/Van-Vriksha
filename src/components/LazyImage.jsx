import React, { useState, useRef, useEffect } from 'react';

/**
 * LazyImage - A performant image component that:
 * - Shows a skeleton/blur placeholder while loading
 * - Only starts loading when the image enters the viewport (IntersectionObserver)
 * - Smoothly fades in once loaded
 * - Falls back to a green placeholder on error
 *
 * The wrapper div is positioned relative and fills its parent fully.
 * The img is absolutely positioned inside to always fill the wrapper.
 */
export default function LazyImage({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  eager = false,   // set true for above-the-fold images
  style = {},
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [inView, setInView] = useState(eager);
  const wrapperRef = useRef(null);

  // IntersectionObserver – only start loading once visible
  useEffect(() => {
    if (eager) return; // skip for above-the-fold

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // start loading 200px before viewport
    );

    const el = wrapperRef.current;
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [eager]);

  return (
    <div
      ref={wrapperRef}
      className={`relative overflow-hidden ${wrapperClassName}`}
      style={style}
    >
      {/* Skeleton shimmer shown while loading */}
      {!loaded && !error && (
        <div className="absolute inset-0 skeleton-shimmer" aria-hidden="true" />
      )}

      {/* Error fallback */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-emerald-50">
          <svg className="w-10 h-10 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}

      {/* Actual image – absolutely fills the wrapper once in viewport */}
      {inView && (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => { setError(true); setLoaded(true); }}
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
        />
      )}
    </div>
  );
}
