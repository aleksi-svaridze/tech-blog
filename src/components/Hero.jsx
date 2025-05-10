import Button from "./Button";


const Hero = ({image, title, desc, buttonText}) => {
    return(
        <div 
            className="h-[600px] bg-blue-500 bg-cover bg-center bg-no-repeat font-poppins text-white" 
            style={{backgroundImage: image && `url(${image})`}}
        >
            <div className="container mx-auto h-full px-5 sm:px-7 md:px-10 xl:px-20">
                <div className="flex flex-col items-start justify-end h-full">
                    {title &&  <h1 className="font-bold text-4xl md:text-[48px] md:leading-[56px] lg:text-[70px] lg:leading-[89px] w-full md:w-[355px] lg:w-[510px]">{title}</h1>}
                    {desc &&  <p className="text-lg leading-5 w-full md:w-[600px] mt-12 mb-10 md:my-5 p-3 backdrop-blur-md bg-black/50 rounded-lg">{desc}</p>}
                    {buttonText && <Button 
                                        url={'/'} 
                                        content={buttonText} 
                                        classNames={'h-[60px] w-[180px] bg-red text-white mb-10'} />}
                </div>
            </div>
        </div>
    )
}

export default Hero;