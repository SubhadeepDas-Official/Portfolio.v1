"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    setIsTouchDevice(false);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if target has data-cursor attribute or is an interactive target
      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest("[data-cursor]") as HTMLElement | null;

      if (interactiveEl) {
        setIsHovered(true);
        setCursorText(interactiveEl.getAttribute("data-cursor") || "VIEW");
      } else {
        const linkOrButton = target?.closest("a, button, [role='button']");
        if (linkOrButton) {
          setIsHovered(true);
          setCursorText("");
        } else {
          setIsHovered(false);
          setCursorText("");
        }
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Primary Follower Dot / Ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[99999] rounded-full transition-transform duration-75 ease-out flex items-center justify-center font-mono font-bold uppercase tracking-wider text-[10px] ${
          cursorText
            ? "w-20 h-20 bg-orange text-white border border-ink shadow-lg scale-100"
            : isHovered
            ? "w-9 h-9 bg-ink/10 border-2 border-orange scale-100"
            : "w-3 h-3 bg-ink scale-100"
        } ${isClicking ? "scale-90" : ""}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {cursorText && (
          <span className="leading-none text-center select-none animate-in fade-in duration-150">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
