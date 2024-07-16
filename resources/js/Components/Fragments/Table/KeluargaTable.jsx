import Button from "@Elements/Button";
import { Trash, ViewList } from "@Icons";
import { useForm, Link } from "@inertiajs/react";

export default function KeluargaTable({ datas }) {

    const { delete: destroy } = useForm();
    const handleDelete = (id) => {
        const result = confirm('Anda yakin ingin menghapus data keluarga ini?');
        if (result) destroy('/dashboard/keluarga/' + id);
    }

    return (
        <div className="overflow-x-auto">
         <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-blue-300">
                    <thead >
                        <tr>
                            <th scope="col" className="px-3 py-3 text-sm font-semibold text-blue-600 uppercase font-inter text-start"> No</th>
                            <th scope="col" className="px-3 py-3 text-sm font-semibold text-blue-600 uppercase font-inter text-start">No. Kartu Keluarga</th>
                            <th scope="col" className="px-3 py-3 text-sm font-semibold text-blue-600 uppercase font-inter text-start">Name</th>
                            <th scope="col" className="px-3 py-3 text-sm font-semibold text-blue-600 uppercase font-inter text-start">Dusun</th>
                            <th scope="col" className="px-3 py-3 text-sm font-semibold text-center text-blue-600 uppercase font-inter">Action</th>
                        </tr>
                    </thead>
                    <tbody className="overflow-auto divide-y divide-neutral-100">
                    {/* datas.data karena ini data dari api yang dikirim dari controller aparat desa dalam bentuk object */}
                    {datas.data.map((data, idx) =>(
                         <tr className="hover:bg-blue-50" key={idx}>
                            <td className="px-3 py-4 text-sm font-inter text-start whitespace-nowrap">{idx + 1}</td>
                            <td className="px-3 py-4 text-sm font-inter text-start text-nowrap">{data.no_kk}</td>
                            <td className="px-3 py-4 text-sm font-inter text-start text-nowrap">{data.name}</td>
                            <td className="px-3 py-4 text-sm font-inter text-start text-nowrap">{data.dusun}</td>
                            <td className="flex items-center justify-center gap-4 px-3 py-4 text-sm font-inter">
                                <Button onClick={() => handleDelete(data.id)}>
                                    <Trash color="text-red-500" size="18" />
                                </Button>
                                <Link href={`/dashboard/keluarga/${data.id}`}>
                                    <ViewList color="text-indigo-500" size="18" />
                                </Link>
                            </td>
                     </tr>
                    ) )}
                    </tbody>
                </table>
            </div>
         </div>
      </div>
    )
}