import { useEffect, useRef } from 'react';

function useHorizontalScrollSnap(containerRef: React.RefObject<HTMLElement>) {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    let isScrolling = false;

    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;
        const scrollLeft = container.scrollLeft;
        const cardWidth = container.clientWidth; // Adjust this based on card size

        // Calculate the nearest card index
        const nearestCardIndex = Math.round(scrollLeft / cardWidth);

        // Scroll to the nearest card's position
        container.scrollTo({
          left: nearestCardIndex * cardWidth,
          behavior: 'smooth',
        });

        setTimeout(() => {
          isScrolling = false;
        }, 300); // Adjust the delay as needed to control snapping frequency
      }
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [containerRef]);

  return observer.current;
}

export default useHorizontalScrollSnap;
