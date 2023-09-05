import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faTelegram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav className="bg-blue-100 p-2 sm:p-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center">
      {/* Company Logo */}
      <div className="flex items-center mb-2 sm:mb-0">
        <Image
          src="/logo.png"
          alt="Company Logo"
          width={200}
          height={50}
        />
      </div>

      {/* Social Media Icons */}
      <div className="flex items-center space-x-4">
        <a href="https://t.me/entryleveljobs" className="hover:text-blue-400">
          <FontAwesomeIcon icon={faTelegram} size="2x" />
        </a>
        <a href="https://www.facebook.com/groups/SummerInternshipUSA/" className="hover:text-blue-400">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://twitter.com/entrylevel_job" className="hover:text-blue-400">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
