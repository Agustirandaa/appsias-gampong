import DashboardLayouts from "@Layouts/DashboardLayouts";
import { Link } from "@inertiajs/react";
import { Arrow } from "@Icons";
import FormPosting from "@Fragments/Form/FormPosting";
export default function CreatePosting() {
    return (
        <DashboardLayouts title="Posting">
          
           <div className="w-full h-auto min-h-[80vh] px-4 py-10 space-y-8 bg-white shadow-xl rounded-t-xl">
                <div className="flex justify-end w-full gap-5">
                    <Link href="/dashboard/posting" className="flex items-center gap-1 px-3 py-2 text-xs text-white uppercase bg-blue-600 rounded-full hover:bg-blue-700 font-inter">
                        <Arrow color="text-white" size="20" />
                        Kembali
                    </Link>
                </div>

                <FormPosting />

           </div>
        </DashboardLayouts>
    )
}
