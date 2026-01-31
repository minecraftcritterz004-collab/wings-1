import { Linkedin, Facebook, Instagram } from 'lucide-react';

const SocialFooter = () => {
  return (
    <>
      <div className="flex justify-center gap-1.5 mb-2">
            <a
              href="https://www.linkedin.com/company/tj-maxx"
              aria-label="LinkedIn"
                className="w-7 h-7 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-xl !bg-[#cf102d]">

              <Linkedin className="w-3 h-3 text-white" />
            </a>
            <a
              href="https://www.facebook.com/tjmaxx"
              aria-label="Facebook"
                className="w-7 h-7 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-xl !bg-[#cf102d]">

              <Facebook className="w-3 h-3 text-white" />
            </a>
            <a
              href="https://www.instagram.com/tjmaxx/"
              aria-label="Instagram"
                className="w-7 h-7 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-xl !bg-[#cf102d]">

            <Instagram className="text-white !w-3 !h-3" />
          </a>
      </div>
      <footer className="text-foreground/70 text-[9px]">
        <p className="!text-center !m-0 !p-0">© 2025</p>
        <p className="!text-center">All rights reserved</p>
      </footer>
    </>);

};

export default SocialFooter;