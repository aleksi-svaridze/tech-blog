import { Link } from "react-router-dom"
import scrollToTop from '../functions/scrollToTop'

export const SidebarArticleCard = ({post}) => {
    return(
        <Link 
            to={`/blog/${post.id}`} 
            onClick={scrollToTop}
            className={`block border-b-2 min-[550px]:border-b-0 min-[550px]:mb-0 bg-white py-3 lg:py-4 sm:px-3 sm:mt-4 lg:mt-0 cursor-pointer lg:px-5 xl:px-10 group font-poppins sm:hover:bg-red transition-all duration-300`}>
            <h2 className="font-semibold line-clamp-2 text-base lg:text-lg xl:text-xl text-blue-900 sm:group-hover:text-white capitalize">{post.title}</h2>
            <p className="sm:group-hover:text-white line-clamp-2 mt-2 text-sm md:text-base text-blue-500">{post.desc}</p>
        </Link>
    )
}

export const ArticlesCard = ({post}) => {
    return(
        <Link 
            to={`/blog/${post.id}`} 
            onClick={scrollToTop}
            className="group transition-all duration-300 block font-jakarta text-blue-400 bg-white overflow-hidden"
        >
            <div className="bg-center bg-cover bg-no-repeat w-full h-[196px] shrink-0 bg-gray-900 group-hover:scale-x-105 transition duration-500" style={{backgroundImage: `url(${post.image_primary})`}}></div>
            <h3 className="group-hover:text-red px-4 sm:px-0 line-clamp-2 font-bold text-lg mt-2 mb-1 capitalize">{post.title}</h3>
            <p className="group-hover:text-red px-4 sm:px-0 line-clamp-2 text-base">{post.desc}</p>
        </Link>
    )
}