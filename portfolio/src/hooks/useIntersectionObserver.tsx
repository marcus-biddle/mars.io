import { useEffect, useRef, useState } from 'react';

type IntersectionObserverOptions = IntersectionObserverInit;

function useIntersectionObserver(
  targetElements: Element[],
  options: IntersectionObserverOptions
): string | null {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting)?.target as HTMLElement;
      if (visibleSection) {
        setActiveSection(visibleSection.id);
        console.log(visibleSection.id)
      }
    }, options);

    targetElements.forEach((element) => {
      observer.current?.observe(element);
    });

    return () => {
      targetElements.forEach((element) => {
        observer.current?.unobserve(element);
      });
    };
  }, [targetElements, options]);

  return activeSection;
}

export default useIntersectionObserver;


