import Button from './Button'


const SingleArticle = ({post}) => {
  
    return(
        <div className="lg:border-y flex flex-col lg:grid lg:grid-cols-5 py-5 lg:gap-x-5">
              <div className="lg:col-span-2 order-2 lg:order-none container mx-auto px-5 sm:px-7 md:px-10 lg:px-0">
                <div className="flex flex-col justify-center h-full text-blue-900">
                  <h2 className="font-poppins font-semibold capitalize text-xl xl:text-2xl pt-5 lg:pt-0">{post.title}</h2>
                  <p className="text-sm mt-2 mb-5">{post.desc}</p>
                  <Button 
                    content={'see details'} 
                    url={`/blog/${post.id}`} 
                    classNames={'bg-red text-white w-[110px] h-[35px] md:w-[120px] lg:w-[140px] xl:w-[180px] md:h-[40px] lg:h-[50px] xl:h-[60px] font-inter'} 
                  />
                </div>
              </div>
               
              <div className="lg:col-span-3 order-1 lg:order-none">
                <div 
                  className="bg-cover bg-center bg-no-repeat h-72 lg:h-96" 
                  style={{backgroundImage: `url(${post.image_primary})`}}></div>
              </div>
        </div>
    )
}

export default SingleArticle;