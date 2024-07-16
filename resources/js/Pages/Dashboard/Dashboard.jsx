import DashboardLayouts from "@Layouts/DashboardLayouts";
import { usePage } from "@inertiajs/react";
import { House, Copy, People, Person } from "@Icons";
import PieChart from "@Fragments/Charts/PieChart";
import SplineAreaChart from "@Fragments/Charts/SplineAreaChart";

export default function Dashboard(){

    const { totalPosting, totalKeluarga, totalPenduduk,  totalAparat } = usePage().props
    
    const cards = [
        {
            name: "Total Posting",
            icon: Copy,
            value: totalPosting
        },
        {
            name: "Total Penduduk",
            icon: People,
            value: totalPenduduk + totalKeluarga
        },
        {
            name: "Total Keluarga",
            icon: House,
            value: totalKeluarga
        },
        {
            name: "Total Aparat Desa",
            icon: Person,
            value: totalAparat
        },
    ];

    const { user } = usePage().props
    return (
        <DashboardLayouts title="Dashboard" userLogin={user}>
            
            <div className="grid grid-cols-4 gap-5 mt-3">
                {cards.map((card, index) => (
                    <div key={index} className="flex items-center justify-between col-span-4 p-5 py-10 border-l-4 border-blue-600 rounded-lg shadow-md ps-5 pe-10 md:col-span-2 xl:col-span-1 hover:bg-blue-300">
                        <div className="flex flex-col gap-1">
                            <span className="text-lg font-semibold font-inter"> { card.name } </span>
                            <span className="font-semibold text-blue-500 font-inter">{ card.value }</span>
                        </div>
                        <div className="p-3 bg-blue-600 border rounded-full">
                            <card.icon color="text-white" size="25" />
                        </div>
                    </div>
                ) )}
            </div>
            
            <div className="grid grid-cols-3 gap-5 mt-10 min-h-[60vh]">
                <div className="flex items-center justify-center col-span-3 shadow-2xl rounded-xl xl:col-span-1">
                    <PieChart posting={totalPosting} penduduk={totalPenduduk + totalKeluarga} keluarga={totalKeluarga} aparat={totalAparat} />
                </div>
                <div className="flex items-center justify-center col-span-3 shadow-2xl rounded-xl xl:col-span-2">
                    <SplineAreaChart />
                </div>
            </div>


        </DashboardLayouts>
    )
} 