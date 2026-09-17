"use client";

import { useEffect, useId, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { profile } from "@/data/portfolio";
import styles from "./featured-work-animation.module.css";

function EyeIcon() {
  return <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <path d="M50 8C61 8 66 17 73 22C84 25 92 37 92 50C92 63 84 75 73 78C66 83 61 92 50 92C39 92 34 83 27 78C16 75 8 63 8 50C8 37 16 25 27 22C34 17 39 8 50 8Z" stroke="currentColor" strokeWidth="7"/>
    <path d="M27 50Q50 23 73 50Q50 77 27 50Z" stroke="currentColor" strokeWidth="7"/>
    <ellipse cx="50" cy="50" rx="7" ry="13" fill="currentColor"/>
    <path d="M47 24h7v7h-7zM47 69h7v7h-7z" fill="currentColor"/>
  </svg>;
}

const artworks = [
  { key: "gear", src: "gear.jpg", alt: "Mechanical radial blueprint artwork" },
  { key: "deep", src: "deep-impact.jpg", alt: "Deep Impact artwork" },
  { key: "galaxy", src: "cosmic.jpg", alt: "Blue cosmic artwork" },
  { key: "orange", src: null, alt: "Eye identity artwork" },
  { key: "portrait", src: "portrait.jpg", alt: "Black and white designer portrait" },
  { key: "white", src: "editorial.jpg", alt: "Automotive design poster" },
  { key: "right", src: "casino.jpg", alt: "Casino artwork" },
];

export default function FeaturedWorkAnimation() {
  const root = useRef<HTMLElement>(null);
  const timeline = useRef<gsap.core.Timeline>();
  const typeCanvas = useRef<HTMLCanvasElement>(null);
  const id = useId().replace(/:/g, "");

  useEffect(() => {
    const section = root.current;
    const visibility = new IntersectionObserver(([entry]) => {
      section?.setAttribute("data-in-view", String(entry.intersectionRatio > 0.9));
    }, { threshold: [0, 0.9, 1] });
    if (section) visibility.observe(section);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        const loop = gsap.timeline({ repeat: -1, defaults: { ease: "sine.inOut" } });
        timeline.current = loop;
        // These are the original 100 captured letter-deformation frames, not font approximations.
        // Three typography revolutions fit the ten-second card cycle exactly.
        const canvas = typeCanvas.current;
        const context = canvas?.getContext("2d");
        const sheets = [new window.Image(), new window.Image()];
        const playhead = { frame: 0 };
        let lastFrame = -1;
        let disposed = false;
        const paintType = () => {
          const frame = Math.floor(playhead.frame) % 100;
          const sheet = sheets[Math.floor(frame / 50)];
          if (!context || !canvas || !sheet.complete || !sheet.naturalWidth || frame === lastFrame || disposed) return;
          const cell = frame % 50;
          context.clearRect(0, 0, 1030, 175);
          context.drawImage(sheet, (cell % 5) * 1030, Math.floor(cell / 5) * 175, 1030, 175, 0, 0, 1030, 175);
          canvas.dataset.ready = "true";
          lastFrame = frame;
        };
        sheets.forEach((sheet, i) => {
          sheet.onload = paintType;
          sheet.src = `/images/featured-motion/type-atlas-${i}.png`;
        });
        loop.to(playhead, { frame: 300, duration: 10, ease: "none", onUpdate: paintType }, 0);

        // The entire bloom pivots around the center of the ME disc.
        // At the peak (t=2s to 2.8s), the fan and disc rotate +28deg:
        // the orange card blooms into the upright 0deg center position, matching the reference image.
        loop.to("[data-fan], [data-disc]", { rotation: 28, duration: 0.8, ease: "power2.inOut" }, 2)
          .to("[data-fan], [data-disc]", { rotation: 0, duration: 1.6, ease: "sine.inOut" }, 3.6);

        // Elevate the orange card when centered to match reference layering
        loop.to('[data-card="orange"]', { zIndex: 35, duration: 0.1 }, 2)
          .to('[data-card="orange"]', { zIndex: 26, duration: 0.1 }, 3.6);
        const frame = process.env.NODE_ENV === "development"
          ? new URLSearchParams(window.location.search).get("featuredFrame") : null;
        const observer = new IntersectionObserver(([entry]) => {
          if (frame !== null) loop.pause(Number(frame));
          else if (entry.isIntersecting) loop.play(); else loop.pause();
        });
        if (root.current) observer.observe(root.current);
        return () => {
          disposed = true;
          sheets.forEach(sheet => { sheet.onload = null; });
          observer.disconnect();
          context?.clearRect(0, 0, 1030, 175);
          canvas?.removeAttribute("data-ready");
        };
      }, root);
      return () => { ctx.revert(); timeline.current = undefined; };
    });
    return () => { media.revert(); visibility.disconnect(); section?.removeAttribute("data-in-view"); };
  }, []);

  function step(direction: number) {
    const loop = timeline.current;
    if (loop) loop.time((loop.time() + direction * 2.5 + 10) % 10);
  }

  return <section ref={root} id="featured" className={styles.section} aria-label="Featured portfolio">
    <div className={styles.canvas}>
      <div aria-hidden="true" className={styles.registration}>
        {[5.5, 37.5].flatMap(y => [3.7, 36.9, 63.2, 96.3].map(x =>
          <span key={`${x}-${y}`} style={{ left: `${x}%`, top: `${y}%` }}>+</span>
        ))}
      </div>
      <div className={styles.welcome}>WELCOME<br/>TO MY</div>
      <div className={styles.eye}><EyeIcon/></div>
      <div className={styles.orangeBlock} aria-hidden="true"/>
      <h2 className={styles.type} aria-label="Portfolio">
        <canvas ref={typeCanvas} width={1030} height={175} aria-hidden="true" />
      </h2>
      <button className={`${styles.nav} ${styles.navLeft}`} aria-label="Previous animation frame" onClick={() => step(-1)}/>
      <button className={`${styles.nav} ${styles.navRight}`} aria-label="Next animation frame" onClick={() => step(1)}/>
      <div className={styles.author}>{profile.featuredSection.author}</div>
      <div className={styles.role}>{profile.featuredSection.title}</div>
      <div data-disc="" className={styles.circle} aria-hidden="true">
        <div className={styles.me}><span/>ME</div>
        <svg viewBox="0 0 500 500">
          <defs><path id={`${id}-circle`} d="M75 250a175 175 0 1 1 350 0a175 175 0 1 1-350 0"/></defs>
          <circle cx="250" cy="250" r="213" fill="none" stroke="currentColor" strokeDasharray="5 14"/>
          <text><textPath href={`#${id}-circle`} startOffset="9%">PORTFOLIO • PORTFOLIO •</textPath></text>
        </svg>
      </div>
      <div data-fan="" className={styles.fan}>
        {artworks.map(card => <div data-card={card.key} key={card.key} className={`${styles.card} ${styles[card.key]}`}>
          {card.src ? <Image src={`/images/cards/${card.src}`} alt={card.alt} fill sizes="(min-width: 1100px) 27svh, 30vw" className={styles.artwork}/> : <>
            <span className={styles.cardMark}>▴</span><div className={styles.cardEye}><EyeIcon/></div><span className={`${styles.cardMark} ${styles.bottomMark}`}>▴</span>
          </>}
        </div>)}
      </div>
    </div>
  </section>;
}
