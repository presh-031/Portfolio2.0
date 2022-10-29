import { BsGithub, BsTwitter } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

import "./FooterLinks.css";
const FooterLinks = () => {
  return (
    <>
      <section class="links homepage-footer-links">
        <div>
          <BsGithub className="footer-link" />
        </div>
        <div>
          <AiOutlineMail className="footer-link" />
        </div>
        <div>
          <BsTwitter className="footer-link" />
        </div>
      </section>
    </>
  );
};

export default FooterLinks;
