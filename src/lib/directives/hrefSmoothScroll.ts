export function hrefSmoothScroll(node: HTMLElement) {
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    const href = node.getAttribute("href");
    if (href) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

  node.addEventListener("click", handleClick, true);

  return {
    destroy() {
      node.removeEventListener("click", handleClick, true);
    },
  };
}
