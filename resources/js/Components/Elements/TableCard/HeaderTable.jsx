import { Link } from "@inertiajs/react";
import Input from "@Elements/Input";
import { Plus, Search } from "@Icons";
export default function HeaderTable({add, href}) {
    return (
        <div className="w-full xl:w-1/2">
                <div className="flex justify-start w-full gap-5">
                    <Link href={href} className="flex items-center gap-1 px-3 py-2 text-xs text-white uppercase bg-blue-600 rounded-full w-44 md:w-auto hover:bg-blue-700 font-inter">
                        <Plus color="text-white" size="20" />
                            {add}
                    </Link>
                    <div className="w-full md:w-1/2">
                        <Input type="text" name="search" icon={<Search color="text-slate-500" size="18" />} placeholder="Search data ..." />
                </div>
            </div>
        </div>
    )
}