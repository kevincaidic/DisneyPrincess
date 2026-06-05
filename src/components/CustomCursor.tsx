import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [hoveredElType, setHoveredElType] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Interactive mouse coordinate tracking
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Cinematic custom spring settings for the lagging outer circle
  const springConfig = { damping: 30, stiffness: 350, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Elegant bypass: Only active on precision-pointer desktop devices
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Track interactive elements hovered below
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest(
        'button, a, [role="button"], input, textarea, select, .cursor-pointer, [data-cursor]'
      ) as HTMLElement | null;

      if (interactiveEl) {
        const customCursorAttr = interactiveEl.getAttribute("data-cursor");
        if (customCursorAttr) {
          setHoveredElType(customCursorAttr);
        } else if (interactiveEl.tagName === "A" || interactiveEl.closest("a")) {
          setHoveredElType("link");
        } else if (interactiveEl.tagName === "BUTTON" || interactiveEl.closest("button")) {
          setHoveredElType("button");
        } else {
          setHoveredElType("pointer");
        }
      } else {
        setHoveredElType(null);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  // Custom visual state maps based on target active styling
  let outerSize = 32;
  let innerSize = 8;
  let outerStyle: React.CSSProperties = {};
  let textLabel = "";

  if (isClicking) {
    outerSize = 16;
    innerSize = 4;
    outerStyle = {
      borderColor: "rgba(6, 182, 212, 0.8)",
      backgroundColor: "rgba(6, 182, 212, 0.1)",
    };
  } else if (hoveredElType === "link") {
    outerSize = 52;
    innerSize = 0; // Hide inner
    outerStyle = {
      backgroundColor: "rgba(6, 182, 212, 0.15)",
      borderColor: "rgba(6, 182, 212, 0.7)",
      borderWidth: "1.5px",
    };
  } else if (hoveredElType === "button" || hoveredElType === "pointer") {
    outerSize = 44;
    innerSize = 10;
    outerStyle = {
      backgroundColor: "rgba(147, 51, 234, 0.1)",
      borderColor: "rgba(147, 51, 234, 0.6)",
      borderWidth: "1.5px",
    };
  } else if (hoveredElType === "view") {
    outerSize = 60;
    innerSize = 0;
    textLabel = "VIEW";
    outerStyle = {
      backgroundColor: "rgba(6, 182, 212, 0.95)",
      borderColor: "#06B6D4",
      borderWidth: "1px",
    };
  } else if (hoveredElType === "expand") {
    outerSize = 60;
    innerSize = 0;
    textLabel = "OPEN";
    outerStyle = {
      backgroundColor: "rgba(147, 51, 234, 0.95)",
      borderColor: "#9333EA",
      borderWidth: "1px",
    };
  }

  return (
    <>
      {/* Hide the browser-native cursor only for precision pointer devices */}
      <style>{`
        @media (pointer: fine) {
          body, a, button, select, input, textarea, [role="button"], .cursor-pointer, [data-cursor] {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Smooth trailing outer circle */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center overflow-hidden"
        style={{
          x: smoothX,
          y: smoothY,
          width: outerSize,
          height: outerSize,
          translateX: "-50%",
          translateY: "-50%",
          borderWidth: hoveredElType ? "1.5px" : "1px",
          borderColor: hoveredElType ? "rgba(6, 182, 212, 0.4)" : "rgba(255, 255, 255, 0.25)",
          backgroundColor: "transparent",
          boxShadow: hoveredElType ? "0 0 15px rgba(6, 182, 212, 0.12)" : "none",
          transition: "width 0.2s cubic-bezier(0.16, 1, 0.3, 1), height 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease, border-color 0.2s ease, border-width 0.2s ease, box-shadow 0.2s ease",
          ...outerStyle,
        }}
      >
        {textLabel && (
          <span className="text-[9px] font-mono font-bold tracking-widest text-[#050505]">
            {textLabel}
          </span>
        )}
      </motion.div>

      {/* Instant snap center dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[10000]"
        style={{
          x: mouseX,
          y: mouseY,
          width: innerSize,
          height: innerSize,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: hoveredElType === "button" ? "#9333EA" : "#06B6D4",
          boxShadow: "0 0 10px rgba(6, 182, 212, 0.5)",
          transition: "width 0.15s cubic-bezier(0.16, 1, 0.3, 1), height 0.15s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.15s ease",
        }}
      />
    </>
  );
}
