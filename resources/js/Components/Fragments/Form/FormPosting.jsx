import Input from "@Elements/Input"
import {Person, Plus, Pen, Image} from "@Icons"
import Select from "@Elements/Select"
import OptionSelect from "@Elements/Select/OptionSelect"

const optionSelect = [
    {
        value: "Programming",
    },
    {
        value: "Desain Grafis",
    },
    {
        value: "Vidio Maker",
    },
]

export default function FormPosting() {

    return (
        <form action="" className="grid grid-cols-5 gap-2 p-5 border rounded-xl">
            
            <div className="col-span-5 space-y-8 xl:col-span-2">
                
                <Input 
                    label="Title Posting" 
                    name="title" 
                    type="text" 
                    icon={<Pen color={`text-blue-600`} size={`18`} />} 
                    required />

                <Select label="Category" name="category" >
                        <OptionSelect value="" disabled>Select</OptionSelect>
                        {optionSelect.map((option, index) => (
                        <OptionSelect key={index} value={option.value}>{option.value}</OptionSelect>
                        ))}
                </Select>

                <Input 
                label="Foto" 
                name="image" 
                type="file"
                icon={<Image color={`text-blue-600`} size={`18`} />} 
                required />
                
            </div>


            <div className="col-span-5 p-5 border xl:col-span-3">
                
            </div>


        </form>
    )
}