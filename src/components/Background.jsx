import { useEffect, useRef } from "react";

export default function Background() {
  // useRef for mutable pulse variable w/o re-render
  const pulseRef = useRef(0);

  useEffect(() => {
    const handleMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      document.body.style.setProperty("--mouse-x", x);
      document.body.style.setProperty("--mouse-y", y);
    };
    window.addEventListener("mousemove", handleMove);

    // pulse loop: animate a sinusoidal value between [0, 1]
    let running = true;
    const animate = () => {
      if (!running) return;
      const now = performance.now();
      // period in ms: longer = slower
      const period = 4000; // 4s
      // oscillate between 0.7 and 1.3
      const scale = 1 + 0.3 * Math.sin((2 * Math.PI * now) / period);
      document.body.style.setProperty("--pulse-scale", scale);
      pulseRef.current = scale;
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      running = false;
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
        width: "100vw",
        height: "100vh",
        background:
          "radial-gradient(calc(900px * var(--pulse-scale,1)) at calc(var(--mouse-x,0.5)*100vw) calc(var(--mouse-y,0.5)*100vh),rgba(34, 121, 105, 0.13) 0%, transparent 100%)",
        transition: "background 0.2s",
      }}
    />
  );
}
