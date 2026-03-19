import React from "react";

export default function Page() {
  const hello = "Hello,".split("");
  const world = "World".split("");

  // stagger delays: hello letters 0–5, comma included, then world letters
  const helloDelays = [0, 0.08, 0.16, 0.24, 0.32, 0.4];
  const worldDelays = [0.72, 0.82, 0.92, 1.02, 1.12];

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        padding: "2rem",
      }}
    >
      {/* Radial vignette */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(18,15,12,0.85) 100%)",
          pointerEvents: "none",
          animation: "vignettePulse 8s ease-in-out infinite",
        }}
      />

      {/* Decorative corner marks */}
      {["top-left", "top-right", "bottom-left", "bottom-right"].map((pos) => {
        const isTop = pos.includes("top");
        const isLeft = pos.includes("left");
        return (
          <div
            key={pos}
            aria-hidden
            style={{
              position: "absolute",
              top: isTop ? "2rem" : undefined,
              bottom: !isTop ? "2rem" : undefined,
              left: isLeft ? "2rem" : undefined,
              right: !isLeft ? "2rem" : undefined,
              width: "40px",
              height: "40px",
              borderTop: isTop ? "1px solid rgba(201,168,76,0.35)" : undefined,
              borderBottom: !isTop ? "1px solid rgba(201,168,76,0.35)" : undefined,
              borderLeft: isLeft ? "1px solid rgba(201,168,76,0.35)" : undefined,
              borderRight: !isLeft ? "1px solid rgba(201,168,76,0.35)" : undefined,
              opacity: 0,
              animation: "fadeUp 1s ease forwards",
              animationDelay: "3.5s",
            }}
          />
        );
      })}

      {/* Edition label */}
      <p
        className="edition-line"
        style={{
          fontFamily: "'Cormorant SC', serif",
          fontSize: "0.6rem",
          letterSpacing: "0.35em",
          color: "var(--gold)",
          textTransform: "uppercase",
          marginBottom: "3rem",
          textAlign: "center",
        }}
      >
        Vol. I &nbsp;·&nbsp; Est. 2026
      </p>

      {/* Top rule */}
      <div
        className="gold-rule"
        style={{
          width: "min(500px, 80vw)",
          height: "1px",
          background:
            "linear-gradient(to right, transparent, var(--gold) 20%, var(--gold-light) 50%, var(--gold) 80%, transparent)",
          marginBottom: "2.5rem",
          transformOrigin: "center",
        }}
      />

      {/* Main headline */}
      <div
        style={{
          textAlign: "center",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        {/* HELLO */}
        <div
          className="hello-word"
          style={{
            display: "block",
            fontSize: "clamp(5rem, 18vw, 14rem)",
            fontWeight: 300,
            letterSpacing: "-0.03em",
            color: "var(--cream)",
            textShadow:
              "0 0 80px rgba(201,168,76,0.12), 0 2px 40px rgba(0,0,0,0.6)",
          }}
        >
          {hello.map((char, i) => (
            <span
              key={i}
              className="letter"
              style={{ animationDelay: `${helloDelays[i]}s` }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* WORLD — outlined/stroked, offset right */}
        <div
          className="world-word"
          style={{
            display: "block",
            fontSize: "clamp(5rem, 18vw, 14rem)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "transparent",
            WebkitTextStroke: "1.5px var(--gold)",
            textShadow: "0 0 60px rgba(201,168,76,0.2)",
            marginTop: "-0.15em",
            marginLeft: "clamp(1rem, 4vw, 4rem)",
            fontStyle: "italic",
          }}
        >
          {world.map((char, i) => (
            <span
              key={i}
              className="letter"
              style={{ animationDelay: `${worldDelays[i]}s` }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom rule */}
      <div
        className="gold-rule"
        style={{
          width: "min(500px, 80vw)",
          height: "1px",
          background:
            "linear-gradient(to right, transparent, var(--gold) 20%, var(--gold-light) 50%, var(--gold) 80%, transparent)",
          marginTop: "2.5rem",
          transformOrigin: "center",
        }}
      />

      {/* Subtitle */}
      <p
        className="subtitle"
        style={{
          marginTop: "2rem",
          fontFamily: "'EB Garamond', Georgia, serif",
          fontStyle: "italic",
          fontSize: "clamp(0.85rem, 2vw, 1.1rem)",
          color: "var(--cream-dim)",
          letterSpacing: "0.08em",
          textAlign: "center",
          maxWidth: "380px",
          lineHeight: 1.7,
        }}
      >
        The oldest program, rendered anew.
      </p>
    </main>
  );
}
