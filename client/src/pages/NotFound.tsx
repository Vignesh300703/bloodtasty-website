import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return <div className="not-found section-pad"><span className="eyebrow">Signal lost / 404</span><h1>This page<br /><em>does not exist.</em></h1><p>Perhaps it was never meant to be found.</p><Link className="text-link" href="/"><ArrowLeft size={15} /> Return to silence</Link></div>;
}
