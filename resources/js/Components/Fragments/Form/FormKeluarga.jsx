import Input from "@Elements/Input"
import { Plus, Person } from "@Icons"
import Textarea from "@Elements/Textarea"
import Button from "@Elements/Button"
import * as React from 'react'
import { useForm } from "@inertiajs/react"

export default function FormKeluarga() {

    const {data, setData, post, errors} = useForm({
        no_kk: '',
        name: '',
        dusun: 'Isi Dusun',
        
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            post('/dashboard/keluarga');
        }catch(error) {
            console.log("Errornya :" + error);
        }
    }

    return (
        <div className="w-full xl:w-[35vw] p-10 ">
          <form onSubmit={handleSubmit} className="space-y-8">
             
             <Input 
                 label="No. Kartu Keluarga" 
                 name="no_kk" 
                 type="number" 
                 value={data.no_kk}
                 onChange={ (e) => setData('no_kk', e.target.value) }
                 icon={<Person color={`text-blue-600`} />} 
                 required />
             <span className="text-xs italic text-red-600 font-inter">{errors.no_kk}</span>
            
             <Input 
                 label="Nama Keluarga" 
                 name="name" 
                 type="text" 
                 value={data.name}
                 onChange={ (e) => setData('name', e.target.value) }
                 icon={<Person color={`text-blue-600`} />} 
                 required />
             <span className="text-xs italic text-red-600 font-inter">{errors.name}</span>
 
             <Textarea 
                label="Dusun" 
                type="text" 
                name="dusun"
                maxLength={300}
                value={data.dusun}
                onChange={ (e) => setData('dusun', e.target.value) } />
            <span className="text-xs italic text-red-600 font-inter">{errors.dusun}</span>
 
             <Button type="submit" variant={`rounded-md flex  items-center gap-1 bg-blue-600 text-white font-semibold px-4 py-1`}>
             <Plus color="text-white" size="20" />
                 Simpan
             </Button>
            
         </form>
        </div>
     )
}

