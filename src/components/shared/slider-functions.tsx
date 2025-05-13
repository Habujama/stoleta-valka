import { Dispatch, RefObject, SetStateAction } from 'react';

export const scrollToCenter = (groupRef: RefObject<HTMLDivElement>, index: number, instant?: boolean) => {
    setTimeout(() => {
      const chosenLand = document.getElementById(index.toString());
      if (chosenLand && groupRef.current) {
        const container = groupRef.current;
        const elementRect = chosenLand.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        const scrollLeft =
          container.scrollLeft +
          (elementRect.left - containerRect.left) -
          (container.clientWidth / 2 - elementRect.width / 2);

        container.scrollTo({
          left: scrollLeft,
          behavior: instant ? 'auto' : 'smooth',
        });
      }
    }, 100);
};

export   const selectIndex = (setActiveIndex: Dispatch<SetStateAction<number>> , setSelectedGroup: Dispatch<SetStateAction<string>>, array: Array<any>, index: number) => {
    if (index < 0 || index >= array.length) return;
    setActiveIndex(index);
    setSelectedGroup(array[index]);
  };
  
export   const changeIndexByOffset = (setActiveIndex: Dispatch<SetStateAction<number>> , setSelectedGroup: Dispatch<SetStateAction<string>>, array: Array<any>, activeIndex: number, offset: number) => {
    let newIndex = activeIndex + offset;

    if (newIndex < 0) {
      newIndex = array.length - 1; // Přeskoč na konec
    } else if (newIndex >= array.length) {
      newIndex = 0; // Přeskoč na začátek
    }
    setActiveIndex(newIndex);
    setSelectedGroup(array[newIndex]);
  };
