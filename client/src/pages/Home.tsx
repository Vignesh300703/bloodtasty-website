import { useState } from "react";
import { Link } from "wouter";

export default function Home() {
  const [pressed, setPressed] = useState(false);

  return (
    <div className="home-page original-home">
      <section className="hero-panel noise-layer">

        {/* Center Quote */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            zIndex: 5,
            textAlign: "center",
            color: "#ffffff",
            fontFamily: "Arial, sans-serif",
            fontSize: "clamp(22px, 2.5vw, 36px)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            whiteSpace: "nowrap",
            textShadow: "0 2px 12px rgba(0,0,0,0.6)",
          }}
        >
          THIS IS THE SILENCE.
        </div>

        {/* Enter Button */}
        <Link
          href="/world-of-bloodtasty"
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          onMouseLeave={() => setPressed(false)}
          style={{
            position: "absolute",
            left: "50%",
            bottom: "7%",
            transform: `translateX(-50%) ${
              pressed ? "scale(0.94)" : "scale(1)"
            }`,
            zIndex: 6,

            minWidth: "82px",
            height: "34px",
            padding: "0 18px",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            color: pressed ? "#000000" : "#ffffff",
            background: pressed ? "#b63b2f" : "rgba(0,0,0,0.15)",
            border: "2px solid #ffffff",

            fontFamily: 'Arial, "Helvetica Neue", sans-serif',
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",

            cursor: "pointer",
            transition:
              "all 180ms ease, transform 120ms ease",
            boxShadow: pressed
              ? "0 0 24px rgba(182,59,47,0.65)"
              : "0 0 12px rgba(0,0,0,0.25)",
          }}
        >
          ENTER
        </Link>

      </section>
    </div>
  );
}