type IntersectionObserverOptions = {
  onEnter?: (entry: IntersectionObserverEntry) => void;
  onExit?: (entry: IntersectionObserverEntry) => void;
};

export function intersectionObserver(
  node: HTMLElement,
  opts: IntersectionObserverOptions = {}
) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (opts.onEnter) opts.onEnter(entry);
      } else {
        if (opts.onExit) opts.onExit(entry);
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
