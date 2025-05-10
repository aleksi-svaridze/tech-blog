import Button from "./Button";


const LatestArticle = ({data}) => {    
    return(
        <article className="">
            <h2 className="text-blue-900 block sm:hidden font-semibold text-3xl mb-5 capitalize font-poppins">{data.title}</h2>
            <div 
                className="w-full h-[240px] md:h-[270px] lg:h-[370px] bg-no-repeat bg-center bg-cover" 
                style={{backgroundImage: `url(${data.image_primary})`}}></div>
            <h2 className="text-blue-900 hidden sm:block font-semibold text-3xl xl:text-4xl font-poppins mt-5 capitalize">{data.title}</h2>
            <p className="font-inter text-base leading-7 text-gray-800 mt-3 mb-5 sm:mb-7 lg:mb-8 xl:mb-10">{data.content_top}</p>
            <Button 
                url={`blog/${data.id}`} 
                content={'read more'} 
                classNames={'bg-red text-white w-[110px] h-[35px] md:w-[120px] lg:w-[140px] xl:w-[180px] md:h-[40px] lg:h-[50px] xl:h-[60px] font-inter'} 
            />
       </article>
    )
}


export default LatestArticle;