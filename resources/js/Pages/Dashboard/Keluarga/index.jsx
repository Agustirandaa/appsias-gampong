import DashboardLayouts from "@Layouts/DashboardLayouts";
import HeaderTable from "@Elements/TableCard/HeaderTable";
import FooterTable from "@Elements/TableCard/FooterTable";
import KeluargaTable from "@Fragments/Table/KeluargaTable";
import { usePage } from "@inertiajs/react";
export default function Keluarga() {
    const { keluargas } = usePage().props
    return (
        <DashboardLayouts title="Data Keluarga">
           <div className="w-full h-auto px-4 py-10 space-y-8 bg-white shadow-xl rounded-t-xl">

                <HeaderTable add="Add Keluarga" href="/dashboard/keluarga" />
                
                <KeluargaTable datas={keluargas} />

                <FooterTable datas={keluargas} />

            </div>

        </DashboardLayouts>
    )
}
