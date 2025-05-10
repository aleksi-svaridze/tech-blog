import { useEffect, useState } from "react";
import { ArticlesCard, SidebarArticleCard } from "../components/Cards";
import SingleArticle from "../components/SingleArticle";
import SectionTitle from "../components/SectionTitle";
import PostsJson from '../data/Posts.json'


const Blog = () => {
    const [sidebarPosts, setSidebarPosts] = useState([]);
    const [mainPosts, setMainPosts] = useState([]);
    const [singlePost, setSinglePost] = useState('');

    useEffect(()=> {
        setSidebarPosts(PostsJson)
        setMainPosts(PostsJson)
        setSinglePost(PostsJson[2])
    },[])
    
    return(
        <div className="pb-16">
            <div className="bg-white min-[400px]:border-b sm:border-b-0">
                <div className="sm:container sm:mx-auto py-10 lg:py-16 xl:py-20 sm:px-7 md:px-10 xl:px-20">
            
                    <div className="grid sm:grid-cols-5 sm:gap-x-5 lg:gap-x-10">
                        <section className="sm:col-span-3">
                            <h2 className="text-blue-900 font-poppins text-xl lg:text-2xl xl:text-2xl leading-5 capitalize font-bold mb-5 lg:mb-7 xl:mb-10 px-5 sm:px-0">Latest</h2>
                            <div className="grid lg:grid-cols-2 gap-3"> 
                            {
                                mainPosts.map(post => (
                                    <ArticlesCard post={post} key={post.id} />
                                ))
                            }
                            </div>
                        </section>
            
                        <section className="sm:col-span-2 px-5 sm:px-0">
                            <h2 className="text-blue-900 font-poppins text-xl lg:text-2xl xl:text-2xl leading-5 capitalize font-bold mb-5 min-[400px]:mb-1 mt-8 sm:mt-0 lg:mb-7 xl:mb-10">trending articles</h2>
                            <div className="sm:flex sm:flex-col min-[550px]:grid min-[550px]:grid-cols-2 min-[550px]:gap-x-5">
                            {
                            sidebarPosts.map(post => (
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
                    <SectionTitle title={'New Technology'} classNames={'text-blue-900 px-4 sm:px-0'} />
                    <div className="grid gap-y-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-x-5 mt-5">
                    {
                    mainPosts.map(post => (
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

        </div>
       
    )
}

export default Blog;