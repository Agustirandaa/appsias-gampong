import { Link, usePage, router } from "@inertiajs/react";
import Input from "@Elements/Input";
import { Search } from "@Icons";
import Navbar from "@Fragments/Navbar";
import Button from "@Elements/Button";
import FooterTable from "@Elements/TableCard/FooterTable";
import moment from "moment";
import * as React from 'react'

export default function Posts() {
    const { posts } = usePage().props
    const [search, setSearch] = React.useState('')

    React.useEffect( () => {
        if ( search.trim() !== '' ) {
            const delayDebounceFn = setTimeout( () => {
                router.visit('/news/post', {
                    method: 'get',
                    data: {
                        search: search
                    },
                    replace: true,
                    preserveState: true
                })
            }, 1200 )
        return () => clearTimeout(delayDebounceFn)
       } else {
           router.replace('/news/post', {
               preserveState: true
           })
       }

    }, [search])

    return (
       <>
        <Navbar variant={`fixed top-0`} extraClass={`bg-white text-blue-600`}>
            <div className="w-full md:w-[30vw] px-3">
                <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)} 
                placeholder="Search Post by title & category..." icon={<Search color="text-blue-800" size="18" />}  />
            </div>
            <Button variant="px-3 bg-blue-600 rounded-lg border mx-3 md:-ms-10" >
                <Search color="text-white" size="18" />
                </Button>
        </Navbar>

        
        { posts.data && posts.data.length > 0 ? (

            <div className='flex justify-center w-full mt-16 animateFadeInToTop'>
            <div className="w-full xl:w-[60vw] grid grid-cols-2 gap-2">
                <div className="col-span-2 p-5 space-y-5">
                    <img className="w-full bg-center rounded-xl h-[30vh] md:h-[50vh]" src={`/${posts.data[0].image}`} />
                    <div className="flex flex-col items-center justify-center w-full gap-3">
                        
                        <div className="flex flex-col items-center">
                            <h1 className="text-xl font-semibold font-inter">{posts.data[0].title}</h1>
                            <span className="text-base text-center font-inter"> <span className="text-blue-600 underline underline-offset-4"> {posts.data[0].category.name} </span> , { moment(posts.data[0].created_at).format('DD MMMM YYYY') }</span>
                        </div>

                        <p className="text-justify">
                            {posts.data[0].excerpt}
                        </p>

                        <Link href={`/news/post/${posts.data[0].id}`} className="px-4 py-1.5 border rounded-md hover:text-white border-blue-400 hover:bg-blue-600 font-inter text-sm" >Selengkapnya...</Link>
                    </div>
                </div>
            </div>
            </div>


        ) : (
            <div className="flex items-center justify-center w-full min-h-screen">
                <h1 className="text-3xl font-semibold text-red-600 uppercase font-inter">404 <span className="text-slate-950">Post Not Found</span></h1>
            </div>
        ) }
        
        <div className="grid grid-cols-4 gap-5 p-5 mt-10">
            {posts.data.map((data, idx) => (
                idx !== 0 && (
                    <div key={idx} className="col-span-4 pb-3 space-y-3 overflow-hidden border rounded-lg shadow-xl md:col-span-2 xl:col-span-1">
                        <img className="w-full bg-center" src={`/${data.image}`} />
                        <div className="flex justify-between px-3">
                            <h1 className="text-base font-semibold font-inter">{data.title}</h1>
                            <span className="text-sm font-inter"> {moment(data.created_at).format('DD MMMM YYYY')}</span>
                        </div>
                        <div className="px-3 space-y-3">
                            <span className="text-sm text-blue-600 font-inter">Cat. {data.category.name}</span>
                            <p className="text-sm text-justify font-inter">
                                {data.excerpt}
                            </p>
                            <Link href={`/news/post/${data.id}`} className="text-sm text-blue-600 font-inter" >Selengkapnya ...</Link>
                        </div>
                    </div>
                )
            ))}
        </div>

        <div className="w-full p-5 pb-10">
            <FooterTable datas={posts} />
        </div>

       </>
    )
}