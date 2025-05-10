import { RiCloseLargeFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useWindowSize } from "usehooks-ts";

const MobileMenu = ({isMenuOpen, handleClickOutside}) => {
    const {width} = useWindowSize()

   
    return(
        <div 
            style={{display: width >= 640 ? 'hidden' : 'block'}}
            className={`${isMenuOpen ? 'right-0' : '-right-full'} bg-blue-900 transition-all h-screen top-0 duration-500 fixed w-2/3 z-50`}>
            <div className="flex justify-between items-center container w-[80%] mx-auto text-white h-20">
                <h3 className="capitalize text-xl">Menu</h3>
                <RiCloseLargeFill className="w-5 h-5" onClick={handleClickOutside} />
            </div>
            <div className="container w-[80%] mx-auto border-t pt-10">
                <nav className="flex flex-col gap-y-4">
                    <NavLink to={''} className={({isActive}) => isActive ? 'text-red' : 'text-white'}>Home</NavLink>
                    <NavLink to={'blog'} className={({isActive}) => isActive ? 'text-red' : 'text-white'}>Blog</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default MobileMenu;