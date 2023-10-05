import { useEffect, useRef } from 'react';

function useHorizontalScrollSnap(
  containerRef: React.RefObject<HTMLElement>,
  cardSelector: string
) {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const cards = container?.querySelectorAll(cardSelector);

    if (!container || !cards?.length) {
      return;
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleCard = entries.find((entry) => entry.isIntersecting);

        if (visibleCard) {
          const card = visibleCard.target as HTMLElement; // Typecast to HTMLElement
          container.scrollTo({
            left: card.offsetLeft,
            behavior: 'smooth',
          });
        }
      },
      {
        root: container,
        threshold: 0.5,
        rootMargin: '0px',
      }
    );

    cards.forEach((card) => {
      observer.current?.observe(card);
    });

    return () => {
      observer.current?.disconnect();
    };
  }, [containerRef, cardSelector]);

  return observer.current;
}

export default useHorizontalScrollSnap;
