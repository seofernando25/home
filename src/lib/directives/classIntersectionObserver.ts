export function classIntersectionObserver(node: HTMLElement, clazz: string) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("isIntersecting");
        entry.target.classList.add(clazz);
      } else {
        console.log("isNotIntersecting");
        entry.target.classList.remove(clazz);
      }
    });
  });

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}
