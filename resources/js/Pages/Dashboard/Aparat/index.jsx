import DashboardLayouts from "@Layouts/DashboardLayouts";
import AparatTable from "@Fragments/Table/AparatTable";
import HeaderTable from "@Elements/TableCard/HeaderTable";
import FooterTable from "@Elements/TableCard/FooterTable";
export default function Aparat({aparats}) {
    return (
        <DashboardLayouts title="Pejabat Desa">
           <div className="w-full h-auto px-4 py-10 space-y-8 bg-white shadow-xl rounded-t-xl">

                <HeaderTable add="Add Aparat" href="/dashboard/aparatdesa/create" />

                <AparatTable datas={aparats} />

                <FooterTable datas={aparats} />

            </div>

        </DashboardLayouts>
    )
}
