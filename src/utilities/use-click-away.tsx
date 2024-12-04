import { useEffect, RefObject, useCallback } from 'react';

type ClickOutside = {
  (ref: RefObject<HTMLElement>, callback: () => void): void;
};

const useClickOutside: ClickOutside = (ref, callback) => {
  const handleClick = useCallback(
    (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    },
    [callback, ref],
  );

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, [handleClick]);
};

export default useClickOutside;
