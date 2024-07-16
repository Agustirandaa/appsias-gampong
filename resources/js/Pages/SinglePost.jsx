import { Link, usePage } from "@inertiajs/react";
import ReactHtmlParser from 'react-html-parser';
import { Arrow } from "@Icons";
import moment from "moment";
export default function SinglePost() {

    const { post } = usePage().props
    return (
        <>
           <div className='flex justify-center w-full mt-2 animateFadeInToTop'>
            <div className="w-full xl:w-[60vw] grid grid-cols-2 gap-2">
                <div className="col-span-2 p-5 space-y-5">
                    
               <div className="flex justify-center">
                    <Link href={`/news/post/`} className="px-4 py-1.5 border flex gap-2 rounded-md hover:text-white border-blue-400 hover:bg-blue-600 font-inter text-sm group" >
                    <Arrow color="text-blue-600 group-hover:text-white" size="20" />
                    Kembali
                    </Link>
               </div>


                    <img className="w-full bg-center rounded-xl h-[30vh] md:h-[50vh]" src={`/${post.image}`} />
                    <div className="flex flex-col items-center justify-center w-full gap-3">
                        
                        <div className="flex flex-col items-center">
                            <h1 className="text-xl font-semibold font-inter">{post.title}</h1>
                            <span className="text-base text-center font-inter"> <span className="text-blue-600 underline underline-offset-4"> {post.category.name} </span> , { moment(post.created_at).format('DD MMMM YYYY') }</span>
                        </div>
                        <p className="text-justify"> &nbsp; {ReactHtmlParser(post.content)} </p>
                    </div>
                </div>
            </div>
            </div>
        </> 
    )
}   