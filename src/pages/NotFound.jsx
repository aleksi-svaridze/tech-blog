import NotFoundImage from '../images/404.avif'
import { SidebarArticleCard } from "../components/Cards";
import { ArticlesCard } from "../components/Cards";
import SectionTitle from "../components/SectionTitle";
import SingleArticle from "../components/SingleArticle";
import { useEffect, useState } from "react";
import axios from "axios";


const NotFound = () => {
  const [posts, setPosts] = useState([]);
  const [singlePost, setSinglePost] = useState('');


  useEffect(() => 
    {
      try {
        
        axios
          .get('https://6647639d2bb946cf2f9d89d2.mockapi.io/articles')
          .then(response => setPosts(response.data))

          axios
          .get('https://6647639d2bb946cf2f9d89d2.mockapi.io/articles/49')
          .then(response => setSinglePost(response.data))

      } catch (error) {
        console.log(error)
      }
    },[]);


  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto py-10 lg:py-16 xl:py-20 px-5 sm:px-7 md:px-10 xl:px-20">
          
          <div className="grid sm:grid-cols-5 sm:gap-x-5 lg:gap-x-10">
            <section className="sm:col-span-3">
              <h2 className="text-blue-900 hidden sm:block font-poppins text-xl lg:text-2xl xl:text-2xl leading-5 capitalize font-bold mb-5 lg:mb-7 xl:mb-10">Article not found</h2>
              <div 
                className="w-full h-[240px] md:h-[270px] lg:h-[370px] bg-no-repeat bg-center bg-cover" 
                style={{backgroundImage: `url(${NotFoundImage})`}}></div>
            </section>

            <section className="sm:col-span-2">
              <h2 className="text-blue-900 hidden sm:block font-poppins text-xl lg:text-2xl xl:text-2xl leading-5 capitalize font-bold mb-5 min-[400px]:mb-1 mt-8 sm:mt-0 lg:mb-7 xl:mb-10">trending articles</h2>
              <div className="sm:flex sm:flex-col min-[550px]:grid min-[550px]:grid-cols-2 min-[550px]:gap-x-5 mt-5 sm:mt-0">
                {
                  posts.slice(0, 6).map(post => (
                    <SidebarArticleCard post={post} key={post.id} />
                  ))
                }
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="min-[400px]:mt-5 sm:mt-0">
        <div className="sm:container sm:mx-auto sm:px-7 md:px-10 xl:px-20">
            <SectionTitle title={'New Technology'} seeAll classNames={'text-blue-900 px-4 sm:px-0'} />
            <div className="grid gap-y-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-x-5 mt-5">
            {
              posts.slice(5,9).map(post => (
                <ArticlesCard post={post} key={post.id} />
              ))
            }
            </div>
        </div>
      </div>

      <div className="bg-white py-10 lg:py-14">
        <div className="lg:container lg:mx-auto lg:px-10 xl:px-20">
          <SingleArticle post={singlePost} />
        </div>
      </div> 
    </>
  )
}

export default NotFound;