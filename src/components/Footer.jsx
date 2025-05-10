import { SlSocialFacebook, SlSocialYoutube } from "react-icons/sl";
import { FaXTwitter, FaPinterestP } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="bg-blue-900 pt-10 pb-5">
        <section className="container mx-auto px-5 sm:px-7 md:px-10 xl:px-20">
         <h2 className="capitalize text-center text-white font-medium lg:text-xl font-jakarta">follow us</h2>
         <div className="flex items-center justify-center gap-x-4 my-5 text-white">
          <a href='https://www.facebook.com/profile.php?id=61560683649631' className="hover:text-red transition-all duration-200" rel="noreferrer" target="_blank">
            <SlSocialFacebook className="w-6 h-6 md:h-8 md:w-8" />
          </a>
          <a href='https://x.com/OurTechBlogCom' className="hover:text-red transition-all duration-200" rel="noreferrer" target="_blank">
            <FaXTwitter className="w-6 h-6 md:h-8 md:w-8" />
          </a>
          <a href='https://www.pinterest.com/ourtechbloginfo' className="hover:text-red transition-all duration-200" rel="noreferrer" target="_blank">
            <FaPinterestP className="w-6 h-6 md:h-8 md:w-8" />
          </a>
          <a href='https://www.youtube.com/@OurTechBlog' className="hover:text-red transition-all duration-200" rel="noreferrer" target="_blank">
            <SlSocialYoutube className="w-6 h-6 md:h-10 md:w-10" />
          </a>
         </div>
         <nav className="flex items-center justify-center text-white gap-x-1">
          <Link className="text-sm capitalize block" to='privacy-policy'>privacy policy</Link>
          <span>&#x2022;</span>
          <Link className="text-sm capitalize block" to='terms-and-conditions'>terms & conditions</Link>
         </nav>
        </section>
        <p className="text-red py-5 text-center text-sm">Website is under construction..</p>
      </footer>
    )
  }
  
  export default Footer;