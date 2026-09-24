import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Terms() {
  return (
    <div className="terms-page">
      <style>{`
        .terms-page {
          width: 100%;
          min-height: 100vh;
          background: #050505;
          color: #ffffff;
          overflow: hidden;
        }

        .terms-container {
          width: 100%;
          max-width: 1050px;
          margin: 0 auto;
          padding: 145px 7vw 60px;
          box-sizing: border-box;
        }

        .terms-title {
          margin: 0 0 45px;
          text-align: center;
          color: #ffffff;
          font-family: Arial, sans-serif;
          font-size: clamp(28px, 3.2vw, 44px);
          font-weight: 700;
          letter-spacing: -0.035em;
          line-height: 1;
        }

        .terms-content {
          width: 100%;
        }

        .terms-content p {
          margin: 0 0 20px;
          color: #ffffff;
          font-family: Arial, sans-serif;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.45;
          letter-spacing: -0.01em;
        }

        .terms-content h2 {
          margin: 30px 0 10px;
          color: #b63b2f;
          font-family: Arial, sans-serif;
          font-size: 17px;
          font-weight: 700;
          line-height: 1.2;
        }

        .terms-content ul {
          margin: 8px 0 22px;
          padding-left: 28px;
        }

        .terms-content li {
          margin: 0 0 7px;
          color: #ffffff;
          font-family: Arial, sans-serif;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
        }

        .terms-content a {
          color: #ffffff;
          text-decoration: underline;
        }

        .terms-back {
          width: 100%;
          margin-top: 55px;
          display: flex;
          justify-content: flex-start;
        }

        .terms-back-link {
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

        .terms-back-link:hover {
          opacity: 0.6;
        }

        @media (max-width: 760px) {
          .terms-container {
            padding: 120px 24px 50px;
          }

          .terms-title {
            margin-bottom: 38px;
            font-size: 27px;
          }

          .terms-content p,
          .terms-content li {
            font-size: 13px;
            line-height: 1.5;
          }

          .terms-content h2 {
            font-size: 16px;
            margin-top: 27px;
          }

          .terms-back {
            margin-top: 45px;
          }
        }
      `}</style>

      <main className="terms-container">
        <h1 className="terms-title">
          TERMS AND CONDITIONS
        </h1>

        <div className="terms-content">
          <p>Welcome to BLOODTASTY!</p>

          <p>
            These terms and conditions outline the rules and regulations
            for the use of Bloodtasty's Website, located at{" "}
            <a href="https://bloodtasty.com">
              https://bloodtasty.com
            </a>.
          </p>

          <p>
            By accessing this website, we assume you accept these terms
            and conditions. Do not continue to use BLOODTASTY if you do
            not agree to take all of the terms and conditions stated on
            this page.
          </p>

          <h2>
            Age Restriction &amp; Content Warning:
          </h2>

          <p>
            The BLOODTASTY website may contain graphic violence,
            disturbing imagery, and mature horror themes intended for a
            mature audience. While there is no sexual content, the
            material may be unsuitable for children.
          </p>

          <ul>
            <li>
              Access to this website is restricted to users who are 13
              years of age or older.
            </li>
            <li>
              Users under 18 years of age should only access this website
              with the supervision and consent of a parent or legal
              guardian.
            </li>
            <li>
              By continuing to use this website, you confirm that you
              meet the above age requirements and understand that the
              content may be disturbing to some viewers.
            </li>
          </ul>

          <h2>Cookies:</h2>

          <p>
            The website uses cookies to help personalize your online
            experience. By accessing BLOODTASTY, you agreed to use the
            required cookies.
          </p>

          <p>
            A cookie is a text file that is placed on your hard disk by
            a web page server. Cookies cannot be used to run programs or
            deliver viruses to your computer. Cookies are uniquely
            assigned to you and can only be read by a web server in the
            domain that issued the cookie.
          </p>

          <p>
            We may use cookies to collect, store, and track information
            for statistical or marketing purposes to operate our website.
            You have the ability to accept or decline optional Cookies.
            There are some required Cookies that are necessary for the
            operation of our website. These cookies do not require your
            consent as they always work.
          </p>

          <p>
            Please keep in mind that by accepting required Cookies, you
            also accept third-party Cookies, which might be used via
            third-party provided services if you use such services on our
            website, for example, a video display window provided by
            third parties and integrated into our website.
          </p>

          <h2>License:</h2>

          <p>
            Unless otherwise stated, Bloodtasty and/or its licensors own
            the intellectual property rights for all material on
            BLOODTASTY. All intellectual property rights are reserved.
            You may access this from BLOODTASTY for your own personal use
            subjected to restrictions set in these terms and conditions.
          </p>

          <p>You must not:</p>

          <ul>
            <li>Copy or republish material from BLOODTASTY</li>
            <li>
              Sell, rent, or sub-license material from BLOODTASTY
            </li>
            <li>
              Reproduce, duplicate or copy material from BLOODTASTY
            </li>
            <li>
              Redistribute content from BLOODTASTY
            </li>
          </ul>

          <p>
            This Agreement shall begin on the date hereof.
          </p>

          <p>
            Parts of this website offer users an opportunity to post and
            exchange opinions and information in certain areas of the
            website. Bloodtasty does not filter, edit, publish or review
            Comments before their presence on the website. Comments do
            not reflect the views and opinions of Bloodtasty, its agents,
            and/or affiliates. Comments reflect the views and opinions
            of the person who posts their views and opinions. To the
            extent permitted by applicable laws, Bloodtasty shall not be
            liable for the Comments or any liability, damages, or
            expenses caused and/or suffered as a result of any use of
            and/or posting of and/or appearance of the Comments on this
            website.
          </p>

          <p>
            Bloodtasty reserves the right to monitor all Comments and
            remove any Comments that can be considered inappropriate,
            offensive, or causes breach of these Terms and Conditions.
          </p>

          <p>You warrant and represent that:</p>

          <ul>
            <li>
              You are entitled to post the Comments on our website and
              have all necessary licenses and consents to do so;
            </li>
            <li>
              The Comments do not invade any intellectual property right,
              including without limitation copyright, patent, or
              trademark of any third party;
            </li>
            <li>
              The Comments do not contain any defamatory, libelous,
              offensive, indecent, or otherwise unlawful material, which
              is an invasion of privacy.
            </li>
            <li>
              The Comments will not be used to solicit or promote
              business or custom or present commercial activities or
              unlawful activity.
            </li>
          </ul>

          <p>
            You hereby grant Bloodtasty a non-exclusive license to use,
            reproduce, edit and authorize others to use, reproduce and
            edit any of your Comments in any and all forms, formats, or
            media.
          </p>

          <h2>Hyperlinking to our Content:</h2>

          <p>
            The following organizations may link to our Website without
            prior written approval:
          </p>

          <ul>
            <li>Government agencies;</li>
            <li>Search engines;</li>
            <li>News organizations;</li>
            <li>
              Online directory distributors may link to our Website in
              the same manner as they hyperlink to the Websites of other
              listed businesses; and
            </li>
            <li>
              System-wide Accredited Businesses except soliciting
              non-profit organizations, charity shopping malls, and
              charity fundraising groups which may not hyperlink to our
              Web site.
            </li>
          </ul>

          <p>
            These organizations may link to our home page, to
            publications, or to other Website Information so long as the
            link: (a) is not in any way deceptive; (b) does not falsely
            imply sponsorship, endorsement, or approval of the linking
            party and its products and/or services; and (c) fits within
            the context of the linking party's site.
          </p>

          <p>
            We may consider and approve other link requests from the
            following types of organizations:
          </p>

          <ul>
            <li>
              Commonly-known consumer and/or business information
              sources;
            </li>
            <li>Dot.com community sites;</li>
            <li>
              Associations or other groups representing charities;
            </li>
            <li>Online directory distributors;</li>
            <li>Internet portals;</li>
            <li>Accounting, law, and consulting firms; and</li>
            <li>
              Educational institutions and trade associations.
            </li>
          </ul>

          <p>
            We will approve link requests from these organizations if we
            decide that: (a) the link would not make us look unfavorably
            to ourselves or to our accredited businesses; (b) the
            organization does not have any negative records with us; (c)
            the benefit to us from the visibility of the hyperlink
            compensates the absence of Bloodtasty; and (d) the link is
            in the context of general resource information.
          </p>

          <p>
            These organizations may link to our home page so long as the
            link: (a) is not in any way deceptive; (b) does not falsely
            imply sponsorship, endorsement, or approval of the linking
            party and its products or services; and (c) fits within the
            context of the linking party's site.
          </p>

          <p>
            If you are one of the organizations listed in paragraph 2
            above and are interested in linking to our website, you must
            inform us by sending an e-mail to Bloodtasty. Please include
            your name, your organization name, contact information as
            well as the URL of your site, a list of any URLs from which
            you intend to link to our Website, and a list of the URLs on
            our site to which you would like to link. Wait 2-3 weeks for
            a response.
          </p>

          <p>
            Approved organizations may hyperlink to our Website as
            follows:
          </p>

          <ul>
            <li>By use of our corporate name; or</li>
            <li>
              By use of the uniform resource locator being linked to; or
            </li>
            <li>
              Using any other description of our Website being linked to
              that makes sense within the context and format of content
              on the linking party's site.
            </li>
          </ul>

          <p>
            No use of Bloodtasty's logo or other artwork will be allowed
            for linking absent a trademark license agreement.
          </p>

          <h2>Content Liability:</h2>

          <p>
            We shall not be held responsible for any content that
            appears on your Website. You agree to protect and defend us
            against all claims that are raised on your Website. No
            link(s) should appear on any Website that may be interpreted
            as libelous, obscene, or criminal, or which infringes,
            otherwise violates, or advocates the infringement or other
            violation of, any third party rights.
          </p>

          <h2>Reservation of Rights:</h2>

          <p>
            We reserve the right to request that you remove all links or
            any particular link to our Website. You approve to
            immediately remove all links to our Website upon request. We
            also reserve the right to amend these terms and conditions
            and its linking policy at any time. By continuously linking
            to our Website, you agree to be bound to and follow these
            linking terms and conditions.
          </p>

          <h2>Removal of links from our website:</h2>

          <p>
            If you find any link on our Website that is offensive for any
            reason, you are free to contact and inform us at any moment.
            We will consider requests to remove links, but we are not
            obligated to or so or to respond to you directly.
          </p>

          <p>
            We do not ensure that the information on this website is
            correct. We do not warrant its completeness or accuracy, nor
            do we promise to ensure that the website remains available
            or that the material on the website is kept up to date.
          </p>

          <h2>Disclaimer:</h2>

          <p>
            To the maximum extent permitted by applicable law, we exclude
            all representations, warranties, and conditions relating to
            our website and the use of this website. Nothing in this
            disclaimer will:
          </p>

          <ul>
            <li>
              Limit or exclude our or your liability for death or
              personal injury;
            </li>
            <li>
              Limit or exclude our or your liability for fraud or
              fraudulent misrepresentation;
            </li>
            <li>
              Limit any of our or your liabilities in any way that is not
              permitted under applicable law; or
            </li>
            <li>
              Exclude any of our or your liabilities that may not be
              excluded under applicable law.
            </li>
          </ul>

          <p>
            The limitations and prohibitions of liability set in this
            Section and elsewhere in this disclaimer: (a) are subject to
            the preceding paragraph; and (b) govern all liabilities
            arising under the disclaimer, including liabilities arising
            in contract, in tort, and for breach of statutory duty.
          </p>

          <p>
            As long as the website and the information and services on
            the website are provided free of charge, we will not be
            liable for any loss or damage of any nature.
          </p>
        </div>

        <div className="terms-back">
          <Link href="/" className="terms-back-link">
            <ArrowLeft size={15} />
            Back
          </Link>
        </div>
      </main>
    </div>
  );
}