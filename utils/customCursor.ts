import type { CustomCursorOptions } from "@/types/common";
export type { CustomCursorOptions } from "@/types/common";
export function setupCustomCursor({
  cursor,
  blocks,
  container,
}: CustomCursorOptions): () => void {
  const customCursor = cursor;
  const cursorBlocks = blocks.filter(Boolean);

  if (!customCursor || cursorBlocks.length === 0) {
    return () => {};
  }

  const parentContainer = container ?? customCursor.parentElement;

  document.body.appendChild(customCursor);

  customCursor.style.position = "fixed";
  customCursor.style.top = "0px";
  customCursor.style.left = "0px";
  customCursor.style.pointerEvents = "none";
  customCursor.style.zIndex = "99999";
  customCursor.style.opacity = "0";
  customCursor.style.transform = "translate(-50%, -50%) scale(0)";
  customCursor.style.transition = "transform 0.15s ease, opacity 0.2s ease";

  const handleBlockEnter = () => {
    customCursor.style.opacity = "1";
    customCursor.style.transform = "translate(-50%, -50%) scale(1)";
  };

  const handleBlockLeave = () => {
    customCursor.style.opacity = "0";
    customCursor.style.transform = "translate(-50%, -50%) scale(0)";
  };

  cursorBlocks.forEach((block) => {
    block.addEventListener("mouseenter", handleBlockEnter);
    block.addEventListener("mouseleave", handleBlockLeave);
  });

  const handleMouseMove = (e: MouseEvent) => {
    customCursor.style.top = `${e.clientY}px`;
    customCursor.style.left = `${e.clientX}px`;
  };

  const handleMouseDown = () => {
    customCursor.classList.add("dragging");
  };

  const handleMouseUp = () => {
    customCursor.classList.remove("dragging");
  };

  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mousedown", handleMouseDown);
  document.addEventListener("mouseup", handleMouseUp);

  return () => {
    cursorBlocks.forEach((block) => {
      block.removeEventListener("mouseenter", handleBlockEnter);
      block.removeEventListener("mouseleave", handleBlockLeave);
    });

    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mousedown", handleMouseDown);
    document.removeEventListener("mouseup", handleMouseUp);

    customCursor.style.opacity = "0";
    customCursor.style.transform = "translate(-50%, -50%) scale(0)";

    if (parentContainer && customCursor.parentElement === document.body) {
      document.body.removeChild(customCursor);
      parentContainer.appendChild(customCursor);
    }
  };
}
