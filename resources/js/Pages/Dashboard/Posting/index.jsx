import DashboardLayouts from "@Layouts/DashboardLayouts";
import PostingTable from "@Fragments/Table/PostingTable";
import HeaderTable from "@Elements/TableCard/HeaderTable";
export default function Posting() {
    return (
        <DashboardLayouts title="Posting">
           
           <div className="w-full h-auto px-4 py-10 space-y-8 bg-white shadow-xl rounded-t-xl">
               
               <HeaderTable add="Add Posting" href="/dashboard/posting/create" />

               <PostingTable />

           </div>

        </DashboardLayouts>
    )
}
