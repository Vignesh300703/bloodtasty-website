import { useState } from "react";

const images = {
  philosophy:
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/Y4LP4jBylnIykDn0/img_1752-KeuJj9kYbXfefLul.JPEG",

  development:
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/Y4LP4jBylnIykDn0/img_1760-hvDKt0vlkwmg6Lxv.PNG",

  interlude:
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/Y4LP4jBylnIykDn0/img_1753-MQUfWpKjZEhyOyqe.JPEG",

  brutal:
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/Y4LP4jBylnIykDn0/img_1598-DrkWLaKhRs0SjBKt.PNG",
};

export default function EnterWorld() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
  }

  return (
    <div className="bt-world-page">
      <style>{`
        .bt-world-page {
          width: 100%;
          background: #050505;
          color: #fff;
          overflow: hidden;
        }

        /* =========================
           FIRST SECTION
        ========================= */

        .bt-world-intro {
          min-height: 100vh;
          background: #050505;
          display: flex;
          align-items: center;
          padding: 150px 9vw 120px;
        }

        .bt-world-intro-inner {
          width: 100%;
          max-width: 1050px;
        }

        .bt-world-small-title {
          margin-bottom: 18px;
          color: #fff;
          font-family: Arial, sans-serif;
          font-size: clamp(18px, 2vw, 30px);
          font-weight: 400;
        }

        .bt-world-title {
          margin: 0;
          color: #b63b2f;
          font-family: Arial, sans-serif;
          font-size: clamp(70px, 13vw, 190px);
          font-weight: 700;
          line-height: 0.82;
          letter-spacing: -0.075em;
        }

        .bt-world-description {
          max-width: 430px;
          margin-top: 75px;
        }

        .bt-world-description p {
          margin: 0 0 15px;
          color: #fff;
          font-family: Georgia, serif;
          font-size: clamp(20px, 2.3vw, 32px);
          line-height: 1.08;
        }

        .bt-world-description p:last-child {
          color: #9a9992;
          font-family: Arial, sans-serif;
          font-size: 13px;
          line-height: 1.65;
        }


        /* =========================
           IMAGE SECTIONS
        ========================= */

        .bt-image-section {
          position: relative;
          width: 100%;
          height: min(90vh, 850px);
          overflow: hidden;
        }

        .bt-image-section img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
        }

        .bt-image-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px 9vw;
          z-index: 2;
        }

        .bt-image-overlay::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.15),
            rgba(0,0,0,0.35),
            rgba(0,0,0,0.5)
          );
          z-index: -1;
        }

        .bt-image-label {
          color: #ffffff;
          font-family: Arial, sans-serif;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          margin-bottom: 25px;
        }

        .bt-image-title {
          margin: 0;
          max-width: 900px;
          color: #fff;
          font-family: Georgia, serif;
          font-size: clamp(60px, 9vw, 135px);
          line-height: 0.82;
          letter-spacing: -0.07em;
          font-weight: 400;
        }

        .bt-image-title span {
          color: #b63b2f;
        }

        .bt-image-copy {
          margin-top: 55px;
          max-width: 600px;
        }

        .bt-image-copy p {
          margin: 0;
          color: #fff;
          font-family: Georgia, serif;
          font-size: clamp(25px, 3.2vw, 45px);
          line-height: 1.05;
          letter-spacing: -0.035em;
        }


        /* =========================
           DEVELOPMENT IMAGE
        ========================= */

        .bt-development-overlay {
          justify-content: flex-end;
          padding-bottom: 100px;
        }

        .bt-development-title {
          margin: 0;
          color: #fff;
          font-family: Arial, sans-serif;
          font-size: clamp(60px, 10vw, 150px);
          line-height: 0.8;
          letter-spacing: -0.07em;
          font-weight: 700;
        }

        .bt-development-title span {
          color: #b63b2f;
        }

        .bt-development-copy {
          margin-top: 45px;
          max-width: 560px;
        }

        .bt-development-copy p {
          margin: 0;
          color: #fff;
          font-family: Georgia, serif;
          font-size: clamp(25px, 3vw, 43px);
          line-height: 1.05;
        }


        /* =========================
           INTERLUDE IMAGE
        ========================= */

        .bt-interlude-overlay {
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 60px 24px;
        }

        .bt-interlude-text {
          max-width: 900px;
          color: #fff;
          font-family: Georgia, serif;
          font-size: clamp(48px, 7vw, 100px);
          line-height: 0.9;
          letter-spacing: -0.065em;
        }

        .bt-interlude-text span {
          color: #b63b2f;
        }


        /* =========================
           BRUTAL / BEAUTIFUL
        ========================= */

        .bt-brutal {
          position: relative;
          min-height: 780px;
          overflow: hidden;
        }

        .bt-brutal-background {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .bt-brutal-background img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .bt-brutal-background::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.35),
            rgba(0,0,0,0.6)
          );
        }

        .bt-brutal-content {
          position: relative;
          z-index: 2;
          min-height: 780px;
          padding: 100px 9vw 70px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .bt-brutal-label {
          color: #fff;
          font-family: Arial, sans-serif;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.18em;
        }

        .bt-brutal-title {
          margin: 20px 0 0;
          color: #fff;
          font-family: Georgia, serif;
          font-size: clamp(65px, 10vw, 150px);
          line-height: 0.8;
          letter-spacing: -0.075em;
          font-weight: 400;
        }

        .bt-brutal-title span {
          color: #b63b2f;
        }

        .bt-subscribe {
          width: 100%;
          max-width: 600px;
          margin-left: auto;
          margin-top: 80px;
        }

        .bt-subscribe p {
          margin: 0 0 25px;
          color: #fff;
          font-family: Georgia, serif;
          font-size: 24px;
        }

        .bt-subscribe-form {
          width: 100%;
          display: flex;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,0.7);
        }

        .bt-subscribe-form input {
          flex: 1;
          min-width: 0;
          height: 52px;
          border: 0;
          outline: 0;
          background: transparent;
          color: #fff;
          font-family: Arial, sans-serif;
          font-size: 13px;
        }

        .bt-subscribe-form input::placeholder {
          color: rgba(255,255,255,0.65);
        }

        .bt-subscribe-form button {
          height: 52px;
          padding: 0 5px 0 20px;
          border: 0;
          background: transparent;
          color: #fff;
          font-family: Arial, sans-serif;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          cursor: pointer;
        }

        .bt-success {
          color: #b63b2f;
          font-family: Arial, sans-serif;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }


        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 760px) {

          .bt-world-intro {
            min-height: 720px;
            padding: 130px 24px 90px;
          }

          .bt-world-description {
            margin-top: 55px;
          }

          .bt-image-section {
            height: 620px;
          }

          .bt-image-overlay {
            padding: 60px 24px;
          }

          .bt-image-title {
            font-size: clamp(55px, 14vw, 95px);
          }

          .bt-image-copy {
            margin-top: 40px;
          }

          .bt-development-overlay {
            padding-bottom: 70px;
          }

          .bt-development-title {
            font-size: clamp(55px, 14vw, 100px);
          }

          .bt-interlude-overlay {
            padding: 40px 24px;
          }

          .bt-interlude-text {
            font-size: clamp(42px, 12vw, 75px);
          }

          .bt-brutal {
            min-height: 700px;
          }

          .bt-brutal-content {
            min-height: 700px;
            padding: 80px 24px 50px;
          }

          .bt-subscribe {
            margin-top: 60px;
          }
        }
      `}</style>


      {/* =========================
          1. WORLD OF BLOODTASTY
      ========================= */}

      <section className="bt-world-intro">
        <div className="bt-world-intro-inner">

          <div className="bt-world-small-title">
            world of
          </div>

          <h1 className="bt-world-title">
            BLOODTASTY
          </h1>

          <div className="bt-world-description">
            <p>
              Bloodtasty is an independent horror studio.
            </p>

            <p>
              We don’t create noise.
              <br />
              We shape fear and brutality with control,
              precision and intent.
            </p>
          </div>

        </div>
      </section>


      {/* =========================
          2. PHILOSOPHY IMAGE
          TEXT IS INSIDE IMAGE
      ========================= */}

      <section className="bt-image-section">

        <img
          src={images.philosophy}
          alt="Bloodtasty philosophy"
        />

        <div className="bt-image-overlay">

          <div className="bt-image-label">
            philosophy of
          </div>

          <h2 className="bt-image-title">
            Fear
            <br />
            <span>doesn’t need a face.</span>
          </h2>

          <div className="bt-image-copy">
            <p>
              It needs space.
            </p>
          </div>

        </div>

      </section>


      {/* =========================
          3. DEVELOPMENT IMAGE
          TEXT IS INSIDE IMAGE
      ========================= */}

      <section className="bt-image-section">

        <img
          src={images.development}
          alt="Bloodtasty development"
        />

        <div className="bt-image-overlay bt-development-overlay">

          <div>

            <div className="bt-image-label">
              in
            </div>

            <h2 className="bt-development-title">
              <span>DEVELOPMENT</span>
            </h2>

            <div className="bt-development-copy">
              <p>
                It exists.
                <br />
                You’re not allowed to see it yet.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          4. INTERLUDE IMAGE
          TEXT IS INSIDE IMAGE
      ========================= */}

      <section className="bt-image-section">

        <img
          src={images.interlude}
          alt="Bloodtasty interlude"
        />

        <div className="bt-image-overlay bt-interlude-overlay">

          <div className="bt-interlude-text">
            It will be found,
            <br />
            <span>but not yet.</span>
          </div>

        </div>

      </section>


      {/* =========================
          5. BRUTAL BECOMES BEAUTIFUL
          TEXT + MAIL INSIDE IMAGE
      ========================= */}

      <section className="bt-brutal">

        <div className="bt-brutal-background">
          <img
            src={images.brutal}
            alt="Bloodtasty brutal becomes beautiful"
          />
        </div>

        <div className="bt-brutal-content">

          <div>
            <div className="bt-brutal-label">
              Brutal becomes
            </div>

            <h2 className="bt-brutal-title">
              <span>Beautiful.</span>
            </h2>
          </div>


          <div className="bt-subscribe">

            <p>
              Receive official announcements and studio updates.
            </p>

            {!subscribed ? (

              <form
                className="bt-subscribe-form"
                onSubmit={handleSubscribe}
              >

                <input
                  type="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  placeholder="Your soul... or just your mail ?"
                  required
                />

                <button type="submit">
                  Subscribe
                </button>

              </form>

            ) : (

              <div className="bt-success">
                Transmission confirmed.
              </div>

            )}

          </div>

        </div>

      </section>

    </div>
  );
}