import { useEffect, useRef, useState } from 'react';

type IntersectionObserverOptions = IntersectionObserverInit;

function useIntersectionObserver(
  initialTargetElements: Element[], // Pass an initial set of target elements here
  options: IntersectionObserverOptions
): { activeSection: string | null; updateTargetElements: (newElements: Element[]) => void } {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  console.log('init',initialTargetElements);
  const [targetElements, setTargetElements] = useState<Element[]>(initialTargetElements); // Use the initialTargetElements

  useEffect(() => {
    console.log('useEffect')
    observer.current = new IntersectionObserver((entries) => {
      console.log('Intersection Observer triggered'); // Add this log
      const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
      if (visibleSection) {
        console.log('Visible section:', visibleSection.id); // Add this log
        setActiveSection(visibleSection.id);
      }
    }, options);

    console.log('target',targetElements);
    initialTargetElements.forEach((element) => {
      observer.current?.observe(element);
    });

    return () => {
      initialTargetElements.forEach((element) => {
        observer.current?.unobserve(element);
      });
    };
  }, [initialTargetElements, options]);

  // Function to update targetElements and store in local storage
  const updateTargetElements = (newElements: Element[]) => {
    setTargetElements(newElements);
    localStorage.setItem('targetElements', JSON.stringify(newElements));
  };

  return { activeSection, updateTargetElements };
}

export default useIntersectionObserver;


