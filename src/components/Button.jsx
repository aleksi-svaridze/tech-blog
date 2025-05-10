import { Link } from "react-router-dom";
import scrollToTop from "../functions/scrollToTop";


const Button = ({content, classNames, url}) => {
    return(
        <Link 
            to={`${url}`} 
            className={`capitalize text-xs md:text-sm lg:text-base flex items-center justify-center lg:font-bold ${classNames}`}
            onClick={scrollToTop}
        >
            {content}
        </Link>
    )
}

export default Button;