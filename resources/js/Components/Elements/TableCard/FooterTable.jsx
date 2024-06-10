import { Link } from "@inertiajs/react";
import { Chevron } from "@Icons";


export default function FooterTable({datas}) {
    return (
        <div className="flex items-center justify-start w-full gap-3 my-8">
            <h1 className="text-sm font-inter">Displays page <span className="font-semibold text-blue-500"> {datas.current_page} of </span> <span className="font-semibold text-red-600">{datas.last_page}</span> Pages</h1>
                    
            <Link href={datas.prev_page_url} className="px-1 py-1 font-semibold text-blue-600 border rounded-md group hover:bg-blue-500">
                <Chevron color="text-blue-600 group-hover:text-white rotate-90" size="16" />
            </Link>

            <div className="px-2 font-semibold text-blue-600 border rounded-md">
                {datas.current_page}
            </div>

            <Link href={datas.next_page_url} className="px-1 py-1 font-semibold text-blue-600 border rounded-md group hover:bg-blue-500">
                 <Chevron color="text-blue-600 group-hover:text-white -rotate-90" size="16" />
            </Link>
        </div>
    )
}