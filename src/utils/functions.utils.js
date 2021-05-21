export const debounce = (callback, wait, immediate = false) => {
  let timeout = null;

  return (...args) => {
    const callNow = immediate && !timeout;
    const next = () => callback(...args);

    clearTimeout(timeout);
    timeout = setTimeout(next, wait);

    callNow && next();
  };
};
