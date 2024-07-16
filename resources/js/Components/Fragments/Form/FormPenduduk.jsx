import * as React from 'react'
import Input from "@Elements/Input"
import Button from "@Elements/Button"
import {Person, Plus, House, Telephone} from "@Icons"
import Select from "@Elements/Select"
import OptionSelect from "@Elements/Select/OptionSelect"
import { useForm } from "@inertiajs/react";


const status = [
    {
       name: "Suami",
    },
    {
       name: "Istri",
    },
    {
       name: "Anak",
    },
]
const gender = [
    {
       name: "Laki-laki",
    },
    {
       name: "Perempuan",
    },
]

export default function FormPenduduk({ dataId, editResidentData = null, setShowAddResidentForm, setShowEditResidentForm  }) {
 
    const {data, setData, post, put, errors} = useForm({
        family_id: editResidentData ? editResidentData.family_id : dataId,
        name: editResidentData ? editResidentData.name : '',
        nik: editResidentData ? editResidentData.nik : '',
        birthdate: editResidentData ? editResidentData.birthdate : '',
        gender: editResidentData ? editResidentData.gender : '',
        status: editResidentData ? editResidentData.status : '',
        notelp: editResidentData ? editResidentData.notelp : '',
        place_of_birth: editResidentData ? editResidentData.place_of_birth : '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            editResidentData ? (
                    put(`/dashboard/penduduk/${editResidentData.id}`, {
                        onSuccess: () => setShowEditResidentForm(false),
                    })
                ) : (
                    post('/dashboard/penduduk', {
                        onSuccess: () => setShowAddResidentForm(false),
                    })
                )
        } catch(error) {
            console.log("Errornya :" + error);
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-8 px-5 fadeRight">
            <div className="col-span-4 md:col-span-2 xl:col-span-1">
                <Input 
                    label="Nik" 
                    name="nik" 
                    type="number" 
                    value={data.nik}
                    onChange={ (e) => setData('nik', e.target.value) }
                    icon={<Person color={`text-blue-600`} />} 
                    required />
                <span className="text-xs italic text-red-600 font-inter">{errors.nik}</span>
            </div>

            <div className="col-span-4 md:col-span-2 xl:col-span-1">
            <Input 
                    label="Nama Lengkap" 
                    name="name" 
                    type="text" 
                    value={data.name}
                    onChange={ (e) => setData('name', e.target.value) }
                    icon={<Person color={`text-blue-600`} />} 
                    required />
                <span className="text-xs italic text-red-600 font-inter">{errors.name}</span>
            </div>
            
            <div className="col-span-4 md:col-span-2 xl:col-span-1">
            <Input 
                    label="Tanggal Lahir" 
                    name="birthdate" 
                    type="date" 
                    value={data.birthdate}
                    onChange={ (e) => setData('birthdate', e.target.value) }
                    required />
                <span className="text-xs italic text-red-600 font-inter">{errors.birthdate}</span>
            </div>
            
            <div className="col-span-4 md:col-span-2 xl:col-span-1">
            <Select 
                label="Jenis Kelamin" 
                name="gender" 
                value={data.gender}
                onChange={(e) => setData('gender', e.target.value)} >
                    <OptionSelect value="" disabled>Select</OptionSelect>
                    {gender.map((option, index) => (
                    <OptionSelect key={index} value={option.name}>{option.name}</OptionSelect>
                    ))}
                </Select>
            </div>

            <div className="col-span-4 md:col-span-2 xl:col-span-1">
            <Select 
                label="Status" 
                name="status" 
                value={data.status}
                onChange={(e) => setData('status', e.target.value)} >
                    <OptionSelect value="" disabled>Select</OptionSelect>
                    {status.map((option, index) => (
                    <OptionSelect key={index} value={option.name}>{option.name}</OptionSelect>
                    ))}
                </Select>
            </div>
            
            <div className="col-span-4 md:col-span-2 xl:col-span-1">
            <Input 
                    label="No Telp" 
                    name="notelp" 
                    type="number" 
                    value={data.notelp}
                    onChange={ (e) => setData('notelp', e.target.value) }
                    icon={<Telephone color={`text-blue-600`} size={`16`} />} 
                    required />
                <span className="text-xs italic text-red-600 font-inter">{errors.notelp}</span>
            </div>

            <div className="col-span-4 md:col-span-2">
            <Input 
                    label="Tempat Lahir" 
                    name="place_of_birth" 
                    type="text" 
                    value={data.place_of_birth}
                    onChange={ (e) => setData('place_of_birth', e.target.value) }
                    icon={<House color={`text-blue-600`} size={`20`} />} 
                    required />
                <span className="text-xs italic text-red-600 font-inter">{errors.place_of_birth}</span>
            </div>
        
            <div className="flex justify-end col-span-4 gap-3">
                <Button 
                type="button" 
                variant={`rounded-full flex text-sm items-center gap-1 bg-red-600 text-white font-semibold px-5 py-1.5`}
                onClick={() => setShowEditResidentForm(false)}>
                    Batal
                </Button>

                <Button 
                type="submit" 
                variant={`rounded-full flex text-sm items-center gap-1 bg-blue-600 text-white font-semibold px-3 py-1.5`}>
                    <Plus color="text-white" size="20" />
                    Simpan
                </Button>
            </div>
        </form>
        </>
    )
}