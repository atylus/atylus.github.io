export function initHorizontalScroll(section: HTMLElement, track: HTMLElement) {
  if (track.dataset.horizontalScrollInitialized === "true") {
    return;
  }
  track.dataset.horizontalScrollInitialized = "true";

  // Duplicate content for infinite loop
  track.innerHTML = track.innerHTML + track.innerHTML;
  let totalWidth = track.scrollWidth / 2;

  const handleResize = () => {
    totalWidth = track.scrollWidth / 2;
  };

  window.addEventListener("resize", handleResize);

  const handleScroll = () => {
    const currentScroll = window.scrollY;
    const baseSpeed = 0.6; // pixels of horizontal movement per 1px vertical scroll

    const offset = (currentScroll * baseSpeed) % totalWidth;
    const x = -offset;
    track.style.transform = `translateX(${x}px)`;
  };

  // Apply initial transform in case the page loads scrolled
  handleScroll();

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("resize", handleResize);
    window.removeEventListener("scroll", handleScroll);
  };
}
