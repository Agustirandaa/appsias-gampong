import Input from "@Elements/Input"
import {Person, Plus, Image} from "@Icons"
import Textarea from "@Elements/Textarea"
import Select from "@Elements/Select"
import Button from "@Elements/Button"
import OptionSelect from "@Elements/Select/OptionSelect"
import { useForm } from "@inertiajs/react"

const optionSelect = [
    {
        value: "Kepala Desa",
    },
    {
        value: "Bendahara",
    },
    {
        value: "Sekretaris",
    },
    {
        value: "Anggota",
    },
]

export default function FormAparat() {
    
    const {data, setData, post, errors} = useForm({
        name: '',
        position: optionSelect[0].value,
        description: 'Isi Deskripsi',
        image: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            post('/dashboard/aparatdesa/');
        }catch(error) {
            console.log("Errornya :" + error);
        }
    }
    
    return (
       <div className="w-full xl:w-[35vw] p-10 ">
         <form onSubmit={handleSubmit} className="space-y-8">
            <Input 
                label="Nama Lengkap" 
                name="name" 
                type="text" 
                value={data.name}
                onChange={ (e) => setData('name', e.target.value) }
                icon={<Person color={`text-blue-600`} />} 
                required />
            <span className="text-xs italic text-red-600 font-inter">{errors.name}</span>

            <Select label="Jabatan" name="position" onChange={ (e) => setData('position', e.target.value) }>
                <OptionSelect value="" disabled>Select</OptionSelect>
                    {optionSelect.map((option, index) => (
                     <OptionSelect key={index} value={option.value}>{option.value}</OptionSelect>
                    ))}
            </Select>

            <Input 
                label="Foto" 
                name="image" 
                type="file"
                onChange={ (e) => setData('image', e.target.files[0]) } 
                icon={<Image color={`text-blue-600`} size={`18`} />} 
                required />

            <Textarea 
                label="Deskripsi" 
                type="text" 
                name="description"
                maxLength={300}
                value={data.description}
                onChange={ (e) => setData('description', e.target.value) } />
            <span className="text-xs italic text-red-600 font-inter">{errors.description}</span>

            <Button type="submit" variant={`rounded-md flex  items-center gap-1 bg-blue-600 text-white font-semibold px-4 py-1`}>
            <Plus color="text-white" size="20" />
                Simpan
            </Button>
           
        </form>
       </div>
    )
}

 
           