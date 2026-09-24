import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Instagram, Linkedin, Facebook } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    setMenuOpen(false);
  }, [location]);

  function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  }

  return (
    <div className="site-root">
      <header className="site-header">
        <Link href="/" className="brand-mark" aria-label="Bloodtasty home">
          <img
            className="brand-logo-image"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/Y4LP4jBylnIykDn0/white-logo--png-6ewmk9aZ7nhXw9b3.PNG"
            alt="Bloodtasty"
          />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link
            href="/"
            className={location === "/" ? "nav-link active" : "nav-link"}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={location === "/about" ? "nav-link active" : "nav-link"}
          >
            About
          </Link>
        </nav>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-inner">
            <span className="eyebrow">Navigate the unknown</span>

            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-nav-link"
              >
                <span>0{index + 1}</span>
                {item.label}
              </Link>
            ))}

            <div className="mobile-menu-foot">
              Brutal becomes beautiful.
            </div>
          </div>
        </div>
      )}

      <main>{children}</main>

      <footer
        style={{
          width: "100%",
          background: "#070707",
          color: "#ffffff",
          padding: "58px 7vw 22px",
        }}
      >
        <style>
          {`
            .bt-footer-main {
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              min-height: 230px;
            }

            .bt-footer-left {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
            }

            .bt-footer-brand {
              display: flex;
              align-items: center;
              gap: 2px;
              color: #ffffff;
              text-decoration: none;
              white-space: nowrap;
            }

            .bt-footer-brand img {
              width: 52px;
              height: 52px;
              object-fit: contain;
              display: block;
              flex-shrink: 0;
            }

            .bt-footer-brand-name {
              color: #ffffff;
              font-family:
                "Arial Narrow",
                "Roboto Condensed",
                "Helvetica Neue",
                Arial,
                sans-serif;
              font-size: 40px;
              font-weight: 500;
              font-stretch: condensed;
              letter-spacing: 0.10em;
              line-height: 0.92;
              transform: scaleX(0.78);
              transform-origin: left center;
              margin-left: -1px;
              padding: 0;
            }

            .bt-footer-links {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              gap: 13px;
              margin-top: 31px;
            }

            .bt-footer-link {
              color: #a0a0a0;
              font-family: Arial, sans-serif;
              font-size: 11px;
              line-height: 1.3;
              text-decoration: none;
              letter-spacing: 0.02em;
              transition: color 180ms ease;
            }

            .bt-footer-link:hover {
              color: #ffffff;
            }

            .bt-footer-socials {
              display: flex;
              align-items: center;
              gap: 32px;
              margin-top: 112px;
              margin-right: 8px;
            }

            .bt-footer-social {
              color: #ffffff;
              display: flex;
              align-items: center;
              justify-content: center;
              text-decoration: none;
              transition:
                transform 180ms ease,
                opacity 180ms ease;
            }

            .bt-footer-social:hover {
              transform: translateY(-2px);
              opacity: 0.65;
            }

            .bt-footer-bottom {
              width: 100%;
              padding-top: 20px;
              border-top: 1px solid rgba(255,255,255,0.08);
              display: flex;
              justify-content: center;
              align-items: center;
              color: #777777;
              font-family: Arial, sans-serif;
              font-size: 10px;
            }

            @media (max-width: 760px) {
              .bt-footer-main {
                flex-direction: column;
                min-height: auto;
                gap: 40px;
              }

              .bt-footer-brand img {
                width: 43px;
                height: 43px;
              }

              .bt-footer-brand-name {
                font-size: 33px;
              }

              .bt-footer-socials {
                margin-top: 0;
                margin-right: 0;
              }

              .bt-footer-bottom {
                justify-content: flex-start;
              }
            }
          `}
        </style>

        <div className="bt-footer-main">
          <div className="bt-footer-left">
            <Link
              href="/"
              className="bt-footer-brand"
              aria-label="Bloodtasty home"
            >
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/Y4LP4jBylnIykDn0/white-logo--png-6ewmk9aZ7nhXw9b3.PNG"
                alt="Bloodtasty logo"
              />

              <span className="bt-footer-brand-name">
                LOODTASTY
              </span>
            </Link>

            <nav className="bt-footer-links">
              <Link href="/" className="bt-footer-link">
                Home
              </Link>

              <Link href="/about" className="bt-footer-link">
                About
              </Link>

              <Link
                href="/terms-and-conditions"
                className="bt-footer-link"
              >
                Terms and Conditions
              </Link>

              <Link
                href="/privacy-policy"
                className="bt-footer-link"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>

          <div className="bt-footer-socials">
            <a
              href="https://www.linkedin.com/company/bloodtasty/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="bt-footer-social"
            >
              <Linkedin size={29} strokeWidth={1.8} />
            </a>

            <a
              href="https://www.instagram.com/bloodtasty_"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="bt-footer-social"
            >
              <Instagram size={29} strokeWidth={1.8} />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="bt-footer-social"
            >
              <Facebook size={29} strokeWidth={1.8} />
            </a>
          </div>
        </div>

        <div className="bt-footer-bottom">
          © 2026 Bloodtasty. All rights reserved.
        </div>
      </footer>
    </div>
  );
}