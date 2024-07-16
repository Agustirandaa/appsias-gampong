import Button from "@Elements/Button";
import { Trash, PencilSquare } from "@Icons";
import { useForm } from "@inertiajs/react";
import FormPenduduk from "@Fragments/Form/FormPenduduk";
import axios from "axios";
import * as React from 'react'

export default function PendudukTable({ datas }) {
    const { delete: destroy } = useForm();
    const handleDelete = (id) => {
        const result = confirm('Anda yakin ingin menghapus data keluarga ini?');
        if (result) destroy('/dashboard/penduduk/' + id);
    }
    
    const [showEditResidentForm, setShowEditResidentForm] = React.useState(false);
    const [editResidentData, setEditResidentData] = React.useState(null);
    const handleEdit = (id) => {
        
        axios.get('/dashboard/penduduk/' + id + '/edit').then( response => {
              setEditResidentData(response.data)
              setShowEditResidentForm(!showEditResidentForm);
            })
            .catch(error => {
              console.log(error);
            });
    }

    return (
        <>
       <div className="overflow-x-auto fadeIn">
         <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-blue-300">
                    <thead className="bg-blue-50">
                        <tr>
                            <th scope="col" className="px-3 py-3 text-sm font-semibold text-blue-600 uppercase font-inter text-start"> No</th>
                            <th scope="col" className="px-3 py-3 text-sm font-semibold text-blue-600 uppercase font-inter text-start">Nik</th>
                            <th scope="col" className="px-3 py-3 text-sm font-semibold text-blue-600 uppercase font-inter text-start">Name</th>
                            <th scope="col" className="px-3 py-3 text-sm font-semibold text-blue-600 uppercase font-inter text-start">Jenis Kelamin</th>
                            <th scope="col" className="px-3 py-3 text-sm font-semibold text-blue-600 uppercase font-inter text-start">Tanggal Lahir</th>
                            <th scope="col" className="px-3 py-3 text-sm font-semibold text-blue-600 uppercase font-inter text-start">Tempat Lahir</th>
                            <th scope="col" className="px-3 py-3 text-sm font-semibold text-blue-600 uppercase font-inter text-start">Status</th>
                            <th scope="col" className="px-3 py-3 text-sm font-semibold text-blue-600 uppercase font-inter text-start">No. HP</th>
                            <th scope="col" className="px-3 py-3 text-sm font-semibold text-center text-blue-600 uppercase font-inter">Action</th>
                        </tr>
                    </thead>
                    <tbody className="overflow-auto divide-y divide-neutral-100">
                    {/* datas.data karena ini data dari api yang dikirim dari controller aparat desa dalam bentuk object */}
                    {datas.map((data, idx) =>(
                         <tr className="hover:bg-blue-50" key={idx}>
                            <td className="px-3 py-4 text-sm font-inter text-start whitespace-nowrap">{idx + 1}</td>
                            <td className="px-3 py-4 text-sm font-inter text-start text-nowrap">{data.nik}</td>
                            <td className="px-3 py-4 text-sm font-inter text-start text-nowrap">{data.name}</td>
                            <td className="px-3 py-4 text-sm font-inter text-start text-nowrap">{data.gender}</td>
                            <td className="px-3 py-4 text-sm font-inter text-start text-nowrap">{data.birthdate}</td>
                            <td className="px-3 py-4 text-sm font-inter text-start text-nowrap">{data.place_of_birth}</td>
                            <td className="px-3 py-4 text-sm font-inter text-start text-nowrap">{data.status}</td>
                            <td className="px-3 py-4 text-sm font-inter text-start text-nowrap">{data.notelp}</td>
                            <td className="flex items-center justify-center gap-4 px-3 py-4 text-sm font-inter">
                                <Button onClick={() => handleDelete(data.id)}>
                                    <Trash color="text-red-500" size="18" />
                                </Button>
                                <Button onClick={() => handleEdit(data.id)}>
                                    <PencilSquare color="text-green-500" size="18" />
                                </Button>
                            </td>
                     </tr>
                    ) )}
                    </tbody>
                </table>
            </div>
         </div>
      </div>

      { showEditResidentForm && <FormPenduduk editResidentData={ editResidentData } setShowEditResidentForm={ setShowEditResidentForm }  />}

      </>
    )
}