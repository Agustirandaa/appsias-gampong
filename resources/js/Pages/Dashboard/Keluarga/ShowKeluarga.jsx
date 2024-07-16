import DashboardLayouts from "@Layouts/DashboardLayouts";
import { Link, usePage } from "@inertiajs/react";
import { Arrow, Plus } from "@Icons";
import PendudukTable from "@Fragments/Table/PendudukTable";
import Button from "@Elements/Button";
import FormPenduduk from "@Fragments/Form/FormPenduduk";
import * as React from "react";

export default function ShowKeluarga() {
    const { keluarga, residents } = usePage().props

    const [showAddResidentForm, setShowAddResidentForm] = React.useState(false);

    return (
        <DashboardLayouts title="Data Keluarga">
           <div className="w-full h-auto min-h-[80vh] px-4 py-10 space-y-10  bg-white shadow-xl rounded-t-xl">
                <div className="flex justify-end w-full gap-5">
                    <Link href="/dashboard/keluarga" className="flex items-center gap-1 px-3 py-2 text-xs text-white uppercase bg-blue-600 rounded-full hover:bg-blue-700 font-inter">
                        <Arrow color="text-white" size="20" />
                        Kembali
                    </Link>
                </div>

                <div className="grid grid-cols-3 gap-8">
                    <div className="flex flex-col col-span-3 gap-3 p-3 md:col-span-1">
                        <span className="text-slate-950 font-inter">No. Kartu Keluarga</span>
                        <span className="px-3 py-3 text-sm rounded-lg text-slate-950 font-inter bg-slate-100"> {keluarga.no_kk}</span>
                    </div>
                    <div className="flex flex-col col-span-3 gap-3 p-3 md:col-span-1">
                        <span className="text-slate-950 font-inter">Kepala Keluarga</span>
                        <span className="px-3 py-3 text-sm rounded-lg text-slate-950 font-inter bg-slate-100"> {keluarga.name}</span>
                    </div>
                    <div className="flex flex-col col-span-3 gap-3 p-3 md:col-span-1">
                        <span className="text-slate-950 font-inter">Alamat / Dusun</span>
                        <span className="px-3 py-3 text-sm rounded-lg text-slate-950 font-inter bg-slate-100"> {keluarga.dusun}</span>
                    </div>
                </div>

                
                <div className="space-y-10">
                    <Button 
                    onClick={() => { setShowAddResidentForm(!showAddResidentForm) }}
                    type="submit"  
                    variant={`rounded-full text-sm items-center bg-blue-600 text-white font-semibold px-4 py-2`}>
                      { showAddResidentForm ? (
                        <div className="flex items-center gap-1">
                            <Arrow color="text-white" size="20" />
                            Kembali
                        </div>
                       
                      ) : (
                        <div className="flex items-center gap-1">
                             <Plus color="text-white" size="20" />
                             Add Keluarga
                        </div>
                      ) }
                    </Button>

                    { showAddResidentForm ?  (
                        <FormPenduduk dataId={ keluarga.id } setShowAddResidentForm={ setShowAddResidentForm } /> 
                    ) : (
                        <PendudukTable datas={ residents }  /> 
                    ) }
                
                </div>
           </div>
        </DashboardLayouts>
    )
}
