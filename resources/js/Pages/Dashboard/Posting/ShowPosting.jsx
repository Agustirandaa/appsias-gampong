import DashboardLayouts from "@Layouts/DashboardLayouts";
import { Link, usePage } from "@inertiajs/react";
import ReactHtmlParser from 'react-html-parser';
import { Arrow } from "@Icons";
import moment from "moment";
export default function ShowPosting() {
    const {postings} = usePage().props
    return (
        <DashboardLayouts title="Detail Posting">
            <div className="w-full h-auto min-h-[80vh] space-y-8 bg-white shadow-xl rounded-t-xl">

            <div className='flex justify-center w-full animateFadeInToTop'>
                <div className="w-full xl:w-[50vw] grid grid-cols-2 gap-2">
                <div className="col-span-2 p-5 space-y-5">
                    <img className="w-full bg-center rounded-md h-[30vh] md:h-[50vh]" src={`/${postings.image}`} />
                    <div className="flex flex-col items-center justify-center w-full gap-3">
                        
                        <div className="flex flex-col items-center">
                            <h1 className="text-xl font-semibold font-inter">{postings.title}</h1>
                            <span className="text-sm text-center font-inter">{moment(postings.created_at).format('DD-MM-YYYY HH:mm:ss')}</span>
                        </div>
                        <div className="text-justify">
                             {ReactHtmlParser(postings.content)}
                        </div>
                    </div>
                </div>
             </div>
           
            </div>

                <div className="flex justify-end w-full gap-5 p-5">
                    <Link href="/dashboard/posting" className="flex items-center w-32 gap-1 px-3 py-2 text-xs text-white uppercase bg-blue-600 rounded-full hover:bg-blue-700 font-inter">
                        <Arrow color="text-white" size="20" />
                        Kembali
                    </Link>
                </div>

            </div>


        </DashboardLayouts>
    )
}