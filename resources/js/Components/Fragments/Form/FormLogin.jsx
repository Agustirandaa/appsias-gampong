import InputPassword from "@Elements/Input/InputPassword"
import Input from "@Elements/Input"
import Button from "@Elements/Button"
import {Key, Person} from "@Icons"
import { useForm } from "@inertiajs/react"

export default function FormLogin() {
   
    const {data, setData, post, errors} = useForm({
            email: '',
            password: ''
        });

    const handleChange = (e) => {
        const {name, value} = e.target
        setData({
            ...data,
            [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/auth/authenticate');
    }

    return (
       <>
           <form onSubmit={handleSubmit} encType="multipart/form-data" className="px-6 py-4 space-y-5 md:px-20 md:space-y-8">
                <Input 
                label="Email" 
                name="email" 
                type="email" 
                icon={<Person color={`text-blue-600`} />} 
                value={data.email}
                onChange={handleChange}
                required />

                <InputPassword 
                label="Password" 
                name="password" 
                type="password"
                icon={<Key color={`text-blue-600`} />} 
                autocomplete ="current-password" 
                value={data.password}
                onChange={handleChange} 
                required />
                
                <Button type="submit" variant={`rounded-full bg-blue-600 text-white w-full font-semibold px-4 py-2`}>SigIn</Button>
                
           </form>
       </>
    )
}