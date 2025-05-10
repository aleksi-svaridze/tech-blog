import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticlesCard, SidebarArticleCard } from "../components/Cards";
import SectionTitle from "../components/SectionTitle";
import SingleArticle from '../components/SingleArticle';

import PostsJson from '../data/Posts.json'

const SingleArticlePage = () => {
    const [post, setPost] = useState('');
    const [sidebarPosts, setSidebarPosts] = useState([]);
    const [posts, setPosts] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        setPost(PostsJson[id - 1])
        setSidebarPosts(PostsJson)
        setPosts(PostsJson)
    }, [id])

    return(
        <div className="pb-16">
            <div className="bg-white">
                <div className="container mx-auto py-10 lg:py-16 xl:py-20 px-5 sm:px-7 md:px-10 xl:px-20">
                    
                    <div className="grid sm:grid-cols-5 sm:gap-x-5 lg:gap-x-10">

                        <section className="sm:col-span-3">
                            <h2 className="text-blue-900 font-poppins text-3xl xl:text-4xl capitalize font-bold mb-5">{post.title}</h2>
                            <article className="">            
                                <div 
                                    className="w-full h-[240px] md:h-[270px] lg:h-[370px] bg-no-repeat bg-center bg-cover" 
                                    style={{backgroundImage: `url(${post.image_primary})`}}></div>
                                <p className="font-inter font-semibold text-base leading-7 text-gray-800 mt-3">{post.desc}</p>
                                <p className="font-inter text-base leading-7 text-gray-800 mt-3">{post.content_top}</p>
                                <div 
                                    className="w-full h-[240px] md:h-[270px] lg:h-[370px] bg-no-repeat bg-center bg-cover" 
                                    style={{backgroundImage: `url(${post.image_secondary})`}}></div>
                                <p className="font-inter text-base leading-7 text-gray-800 mt-3">{post.content_bottom}</p>
                            </article>
                        </section>
                        
                        <section className="sm:col-span-2">
                            <h2 className="text-blue-900 hidden sm:block font-poppins text-xl lg:text-2xl xl:text-2xl leading-5 capitalize font-bold mb-5 min-[400px]:mb-1 md:mb-5 lg:mb-6 xl:mb-7 mt-8 sm:mt-0">trending articles</h2>
                            <div className="sm:flex sm:flex-col min-[550px]:grid min-[550px]:grid-cols-2 min-[550px]:gap-x-5 mt-5 sm:mt-0">
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

            <div className="bg-white py-10 lg:py-14">
                <div className="lg:container lg:mx-auto lg:px-10 xl:px-20">
                    <SingleArticle post={post} />
                </div>
            </div> 

            <div className="min-[400px]:mt-5 sm:mt-0">
                <div className="sm:container sm:mx-auto sm:px-7 md:px-10 xl:px-20">
                    <SectionTitle title={'New Technology'} seeAll classNames={'text-blue-900 px-4 sm:px-0'} />
                    <div className="grid gap-y-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-x-5 mt-5">
                        {
                            posts.map(post => <ArticlesCard post={post} key={post.id} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleArticlePage;