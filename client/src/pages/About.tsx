import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const team = [
  {
    name: "Yusuf",
    role: "CEO & Founder",
    code: "01",
    photo:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,fit=crop/Y4LP4jBylnIykDn0/img_1598-DrkWLaKhRs0SjBKt.PNG",
  },
  {
    name: "Baffrin Fathima",
    role: "Managing Director & Co-Founder",
    code: "02",
    photo:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,fit=crop/Y4LP4jBylnIykDn0/img_1752-KeuJj9kYbXfefLul.JPEG",
  },
  {
    name: "Gigi A Boyle",
    role: "Head of Physical Production",
    code: "03",
    photo:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,fit=crop/Y4LP4jBylnIykDn0/img_1753-MQUfWpKjZEhyOyqe.JPEG",
  },
  {
    name: "Vignesh",
    role: "Head of Marketing",
    code: "04",
    photo:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,fit=crop/Y4LP4jBylnIykDn0/img_1760-hvDKt0vlkwmg6Lxv.PNG",
  },
  {
    name: "Yukti Gupta",
    role: "Head of Legal Affairs",
    code: "05",
    photo:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,fit=crop/Y4LP4jBylnIykDn0/img_1598-DrkWLaKhRs0SjBKt.PNG",
  },
];

export default function About() {
  return (
    <div className="about-page-new">
      <style>{`
        .about-page-new {
          width: 100%;
          background: #050505;
          color: #ffffff;
          overflow: hidden;
        }

        .about-intro {
          width: 100%;
          padding: 145px 8vw 70px;
          text-align: center;
        }

        .about-title {
          margin: 0 0 55px;
          color: #ffffff;
          font-family: Arial, sans-serif;
          font-size: clamp(34px, 4vw, 58px);
          font-weight: 700;
          letter-spacing: -0.045em;
          line-height: 1;
        }

        .about-copy {
          width: 100%;
          max-width: 1050px;
          margin: 0 auto;
        }

        .about-copy p {
          margin: 0 auto 28px;
          color: #ffffff;
          font-family: Arial, sans-serif;
          font-size: clamp(14px, 1.45vw, 19px);
          font-weight: 400;
          line-height: 1.55;
          letter-spacing: -0.015em;
        }

        .about-copy p:last-child {
          margin-bottom: 0;
        }

        .leadership-section {
          width: 100%;
          padding: 55px 7vw 55px;
        }

        .leadership-title {
          margin: 0 0 45px;
          text-align: center;
          color: #ffffff;
          font-family: Arial, sans-serif;
          font-size: clamp(27px, 3vw, 42px);
          font-weight: 700;
          letter-spacing: -0.04em;
        }

        .team-grid {
          width: 100%;
          max-width: 1050px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          column-gap: 34px;
          row-gap: 58px;
        }

        .team-card {
          text-align: center;
          min-width: 0;
        }

        .team-card:nth-child(1) {
          grid-column: 1 / span 2;
        }

        .team-card:nth-child(2) {
          grid-column: 3 / span 2;
        }

        .team-card:nth-child(3) {
          grid-column: 5 / span 2;
        }

        .team-card:nth-child(4) {
          grid-column: 2 / span 2;
        }

        .team-card:nth-child(5) {
          grid-column: 4 / span 2;
        }

        .team-photo-wrap {
          width: 100%;
          aspect-ratio: 0.82;
          overflow: hidden;
          background: #111111;
        }

        .team-photo {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
        }

        .team-name {
          margin-top: 14px;
          color: #ffffff;
          font-family: Arial, sans-serif;
          font-size: clamp(18px, 1.7vw, 25px);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.035em;
        }

        .team-role {
          margin-top: 6px;
          color: #ffffff;
          font-family: Arial, sans-serif;
          font-size: clamp(10px, 0.95vw, 13px);
          font-weight: 500;
          line-height: 1.25;
        }

        .about-back {
          width: 100%;
          padding: 25px 8vw 55px;
          display: flex;
          justify-content: center;
        }

        .about-back-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #ffffff;
          font-family: Arial, sans-serif;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: opacity 180ms ease;
        }

        .about-back-link:hover {
          opacity: 0.65;
        }

        @media (max-width: 760px) {
          .about-intro {
            padding: 120px 24px 55px;
          }

          .about-title {
            margin-bottom: 40px;
          }

          .about-copy p {
            font-size: 14px;
            line-height: 1.55;
            margin-bottom: 24px;
          }

          .leadership-section {
            padding: 40px 24px 45px;
          }

          .leadership-title {
            margin-bottom: 32px;
          }

          .team-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 22px;
            row-gap: 42px;
          }

          .team-card:nth-child(1),
          .team-card:nth-child(2),
          .team-card:nth-child(3),
          .team-card:nth-child(4),
          .team-card:nth-child(5) {
            grid-column: auto;
          }

          .team-card:nth-child(3) {
            grid-column: 1 / span 2;
            width: 50%;
            margin: 0 auto;
          }

          .team-name {
            font-size: 17px;
          }

          .team-role {
            font-size: 10px;
          }

          .about-back {
            padding: 10px 24px 50px;
          }
        }
      `}</style>

      <section className="about-intro">
        <h1 className="about-title">BLOODTASTY</h1>

        <div className="about-copy">
          <p>
            Bloodtasty is an original horror IP studio focused on building
            bold, character-driven worlds across film and immersive media.
          </p>

          <p>
            Founded with a long-term vision, the studio develops elevated
            horror rooted in atmosphere, psychological intensity, and enduring
            mythology. Bloodtasty approaches storytelling not as isolated
            releases, but as interconnected narratives designed for expansion
            across formats.
          </p>

          <p>
            Guided by its creative principle{" "}
            <span style={{ color: "#b63b2f", fontWeight: 700 }}>
              "Brutal Becomes Beautiful"
            </span>
            , the studio explores the intersection of raw emotion and
            cinematic craft, shaping stories that linger beyond the screen.
          </p>

          <p>
            Currently in active development, Bloodtasty is building a slate of
            original properties intended for feature film and multi-platform
            expansion. Each project is developed with a focus on longevity,
            global positioning, and franchise potential.
          </p>
        </div>
      </section>

      <section className="leadership-section">
        <h2 className="leadership-title">LEADERSHIP</h2>

        <div className="team-grid">
          {team.map((person) => (
            <div className="team-card" key={person.code}>
              <div className="team-photo-wrap">
                <img
                  className="team-photo"
                  src={person.photo}
                  alt={person.name}
                />
              </div>

              <div className="team-name">
                {person.name}
              </div>

              <div className="team-role">
                {person.role}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="about-back">
        <Link href="/" className="about-back-link">
          <ArrowLeft size={15} />
          Back
        </Link>
      </div>
    </div>
  );
}