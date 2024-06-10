import Button from "@Elements/Button";
import { Trash } from "@Icons";
import { useForm } from "@inertiajs/react";

export default function AparatTable({ datas }) {

    const { delete: destroy } = useForm();

    const handleDelete = (id) => { 
        const result = confirm('Are you sure?');
        if (result) destroy('/dashboard/aparatdesa/' + id);
     }

    return (
      <div className="overflow-x-auto">
         <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-blue-300">
                    <thead >
                        <tr>
                            <th scope="col" className="px-3 py-3 text-sm font-semibold text-blue-600 uppercase font-inter text-start"> No</th>
                            <th scope="col" className="px-3 py-3 text-sm font-semibold text-blue-600 uppercase font-inter text-start">Nama</th>
                            <th scope="col" className="px-3 py-3 text-sm font-semibold text-blue-600 uppercase font-inter text-start">Jabatan</th>
                            <th scope="col" className="px-3 py-3 text-sm font-semibold text-blue-600 uppercase font-inter text-start">Deskripsi</th>
                            <th scope="col" className="px-3 py-3 text-sm font-semibold text-blue-600 uppercase font-inter text-start">Foto</th>
                            <th scope="col" className="px-3 py-3 text-sm font-semibold text-center text-blue-600 uppercase font-inter">Action</th>
                        </tr>
                    </thead>
                    <tbody className="overflow-auto divide-y divide-neutral-100">
                    {/* datas.data karena ini data dari api yang dikirim dari controller aparat desa dalam bentuk object */}
                    {datas.data.map((data, idx) =>(
                         <tr className="hover:bg-blue-50" key={idx}>
                            <td className="px-3 py-4 text-sm font-inter text-start whitespace-nowrap">{idx + 1}</td>
                            <td className="px-3 py-4 text-sm font-inter text-start text-nowrap">{data.name}</td>
                            <td className="px-3 py-4 text-sm tracking-wide text-blue-600 uppercase font-inter text-start text-nowrap">{data.position}</td>
                            <td className="px-3 py-4 text-sm font-inter text-start whitespace-nowrap lg:text-wrap">{data.description}</td>
                            <td className="px-3 py-4 text-sm text-blue-600 font-inter text-start">
                                <img className="w-10 h-10 border rounded-full" src={`/${data.image}`} alt="foto aparat" />
                            </td>
                            
                            <td className="flex items-center justify-center gap-4 px-3 py-4 text-sm font-inter">
                                <Button onClick={() => handleDelete(data.id)}>
                                    <Trash color="text-red-500" size="18" />
                                </Button>
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
