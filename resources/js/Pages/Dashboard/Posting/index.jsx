import DashboardLayouts from "@Layouts/DashboardLayouts";
import PostingTable from "@Fragments/Table/PostingTable";
import HeaderTable from "@Elements/TableCard/HeaderTable";
import FooterTable from "@Elements/TableCard/FooterTable";
import { usePage } from "@inertiajs/react";
export default function Posting() {
    const {postings} = usePage().props
    return (
        <DashboardLayouts title="Data Posting">
           
           <div className="w-full h-auto px-4 py-10 space-y-8 bg-white shadow-xl rounded-t-xl">
               
               <HeaderTable add="Add Posting" href="/dashboard/posting" />

               <PostingTable datas={postings} />

               <FooterTable datas={postings} />

           </div>

        </DashboardLayouts>
    )
}
