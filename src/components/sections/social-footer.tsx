import { Linkedin, Facebook, Instagram } from 'lucide-react';

const SocialFooter = () => {
  return (
    <>
        <div className="flex justify-center gap-1.5 mb-2">
        <a
          href="https://www.linkedin.com/company/wingstop-restaurants-inc-/"
          aria-label="LinkedIn"
            className="w-7 h-7 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-xl !bg-[rgb(207,16,45)]">

          <Linkedin className="w-3 h-3 text-white" />
        </a>
        <a
          href="https://www.facebook.com/Wingstop"
          aria-label="Facebook"
            className="w-7 h-7 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-xl !bg-[rgb(207,16,45)]">

          <Facebook className="w-3 h-3 text-white" />
        </a>
        <a
          href="https://www.instagram.com/wingstop/"
          aria-label="Instagram"
            className="w-7 h-7 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-xl !bg-[rgb(207,16,45)]">

          <Instagram className="text-white !w-3 !h-3" />
        </a>
      </div>
      <footer className="text-black/70 text-[9px]">
        <p className="!text-center !m-0 !p-0">© 2025</p>
        <p className="!text-center">All rights reserved</p>
      </footer>
    </>);

};

export default SocialFooter;