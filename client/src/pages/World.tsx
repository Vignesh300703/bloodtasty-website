import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

export default function World() {
  return (
    <div className="inner-page world-page">
      <section className="world-hero noise-layer">
        <div className="inner-hero-copy reveal-up">
          <span className="eyebrow light">World of</span>
          <h1>Bloodtasty</h1>
          <p>Stories that linger<br />long after the screen goes dark.</p>
        </div>
        <div className="world-coordinate">ARCHIVE / 001<br /><span>STATUS: DEVELOPING</span></div>
      </section>
      <section className="world-statement section-pad">
        <div className="section-index">02 / 03</div>
        <div className="statement-layout">
          <span className="eyebrow">A studio note</span>
          <h2>We don't<br />create <em>noise.</em></h2>
          <p>We shape fear and brutality with control, precision and intent. Every image is a doorway. Every silence is deliberate.</p>
        </div>
      </section>
      <section className="fear-section">
        <div className="fear-grid-mark">+</div>
        <span className="eyebrow light">Philosophy of</span>
        <h2>FEAR</h2>
        <p>It exists.</p>
        <div className="fear-line" />
        <span className="fear-caption">You are not allowed to see it yet.</span>
      </section>
      <section className="development-section section-pad">
        <div className="section-heading-row"><span className="eyebrow">In development</span><span className="tiny-note">More to be found</span></div>
        <div className="development-grid">
          <div className="development-title"><span>It will be found,</span><em>but not yet.</em></div>
          <div className="development-copy"><p>Bloodtasty is building an interconnected slate of original properties for feature film and immersive formats.</p><Link className="text-link" href="/about">Read our story <ArrowUpRight size={15} /></Link></div>
        </div>
      </section>
      <div className="back-row section-pad"><Link className="text-link" href="/"><ArrowLeft size={15} /> Return to silence</Link></div>
    </div>
  );
}
