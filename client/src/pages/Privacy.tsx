import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
  return (
    <div className="privacy-page">
      <style>{`
        .privacy-page {
          width: 100%;
          min-height: 100vh;
          background: #050505;
          color: #ffffff;
          overflow: hidden;
        }

        .privacy-container {
          width: 100%;
          max-width: 1050px;
          margin: 0 auto;
          padding: 145px 7vw 60px;
          box-sizing: border-box;
        }

        .privacy-title {
          margin: 0 0 45px;
          text-align: center;
          color: #ffffff;
          font-family: Arial, sans-serif;
          font-size: clamp(28px, 3.2vw, 44px);
          font-weight: 700;
          letter-spacing: -0.035em;
          line-height: 1;
        }

        .privacy-content {
          width: 100%;
        }

        .privacy-content p {
          margin: 0 0 20px;
          color: #ffffff;
          font-family: Arial, sans-serif;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.45;
          letter-spacing: -0.01em;
        }

        .privacy-content h2 {
          margin: 30px 0 10px;
          color: #b63b2f;
          font-family: Arial, sans-serif;
          font-size: 17px;
          font-weight: 700;
          line-height: 1.2;
        }

        .privacy-content ul {
          margin: 8px 0 22px;
          padding-left: 28px;
        }

        .privacy-content li {
          margin: 0 0 7px;
          color: #ffffff;
          font-family: Arial, sans-serif;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
        }

        .privacy-content a {
          color: #ffffff;
          text-decoration: underline;
        }

        .privacy-back {
          width: 100%;
          margin-top: 55px;
          display: flex;
          justify-content: center;
        }

        .privacy-back-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #ffffff;
          font-family: Arial, sans-serif;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: opacity 180ms ease;
        }

        .privacy-back-link:hover {
          opacity: 0.6;
        }

        @media (max-width: 760px) {
          .privacy-container {
            padding: 120px 24px 50px;
          }

          .privacy-title {
            margin-bottom: 38px;
            font-size: 27px;
          }

          .privacy-content p,
          .privacy-content li {
            font-size: 13px;
            line-height: 1.5;
          }

          .privacy-content h2 {
            font-size: 16px;
            margin-top: 27px;
          }

          .privacy-back {
            margin-top: 45px;
          }
        }
      `}</style>

      <main className="privacy-container">
        <h1 className="privacy-title">
          PRIVACY POLICY
        </h1>

        <div className="privacy-content">
          <p>
            BLOODTASTY is owned and operated by Bloodtasty and acts as the
            data controller of your personal data. We respect your privacy
            and are committed to protecting your personal information. This
            Privacy Policy explains what information we collect, how we use
            it, and the rights you have regarding your data.
          </p>

          <h2>
            Age Restriction &amp; Content Warning:
          </h2>

          <p>
            The BLOODTASTY website may contain graphic violence, disturbing
            imagery, and mature horror themes intended for a mature audience.
            While there is no sexual content, the material may be unsuitable
            for children.
          </p>

          <ul>
            <li>
              Access to this website is restricted to users who are 13 years
              of age or older.
            </li>
            <li>
              Users under 18 years of age should only access this website with
              the supervision and consent of a parent or legal guardian.
            </li>
            <li>
              By continuing to use this website, you confirm that you meet the
              above age requirements and understand that the content may be
              disturbing to some viewers.
            </li>
          </ul>

          <h2>
            Information We Collect:
          </h2>

          <p>
            When you visit BLOODTASTY, we may collect:
          </p>

          <p>
            1. Automatically Collected Data ("Device Information")
          </p>

          <ul>
            <li>Browser type, IP address, time zone.</li>
            <li>Pages you visit and how you interact with the site.</li>
            <li>Cookies and similar tracking technologies.</li>
          </ul>

          <p>
            2. Information You Provide
          </p>

          <ul>
            <li>
              Email address (for newsletters or contact forms).
            </li>
            <li>
              Name or other details you choose to share (optional).
            </li>
            <li>
              No payment details are collected unless stated otherwise.
            </li>
          </ul>

          <h2>
            Why We Collect Your Data:
          </h2>

          <p>
            We only collect and use data when necessary, including to:
          </p>

          <ul>
            <li>Operate and maintain our website.</li>
            <li>
              Improve user experience and site performance.
            </li>
            <li>
              Send newsletters and updates (if you have subscribed).
            </li>
            <li>
              Monitor and prevent fraudulent or abusive activities.
            </li>
            <li>
              Comply with legal requirements.
            </li>
          </ul>

          <p>
            We do not sell or rent your personal information to third parties.
          </p>

          <h2>
            Cookies:
          </h2>

          <p>
            We use cookies to help personalize your online experience. Some
            cookies are essential for the website to function, while others
            may be used for analytics and improvements. You may disable
            cookies in your browser settings, but some parts of the site may
            not work properly without them.
          </p>

          <h2>
            Your Rights:
          </h2>

          <p>
            If you are a resident of the European Union or regions with
            similar data protection laws, you have the right to:
          </p>

          <ul>
            <li>
              Access, update, or delete your personal information.
            </li>
            <li>
              Restrict or object to certain types of processing.
            </li>
            <li>
              Request a copy of the information we hold about you.
            </li>
            <li>
              Withdraw consent to data processing where applicable.
            </li>
          </ul>

          <p>
            To exercise these rights, please contact us at{" "}
            <a href="mailto:team.bloodtasty@gmail.com">
              team.bloodtasty@gmail.com
            </a>
            .
          </p>

          <h2>
            Data Security:
          </h2>

          <p>
            We use reasonable technical and administrative safeguards to
            protect your personal data. However, no method of transmission
            over the Internet is 100% secure. While we strive to protect your
            information, we cannot guarantee absolute security.
          </p>

          <h2>
            Third-Party Links:
          </h2>

          <p>
            Our website may include links to external websites. We are not
            responsible for the privacy practices of other websites. We
            encourage you to review the privacy policies of any third-party
            sites you visit.
          </p>

          <h2>
            Legal Disclosure:
          </h2>

          <p>
            We may disclose your information if required to do so by law or
            in response to valid legal requests (such as subpoenas,
            investigations, or to protect safety, prevent fraud, or enforce
            our Terms &amp; Conditions).
          </p>

          <h2>
            Contact Information:
          </h2>

          <p>
            If you have any questions about this Privacy Policy or how your
            data is handled, please contact us:
          </p>

          <p>
            Email{" "}
            <a href="mailto:contact@bloodtasty.com">
              contact@bloodtasty.com
            </a>
          </p>
        </div>

        <div className="privacy-back">
          <Link href="/" className="privacy-back-link">
            <ArrowLeft size={15} />
            Back
          </Link>
        </div>
      </main>
    </div>
  );
}