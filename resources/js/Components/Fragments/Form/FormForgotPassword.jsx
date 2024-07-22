import InputPassword from "@Elements/Input/InputPassword"
import Button from "@Elements/Button"
import { Key } from "@Icons"
import { useForm } from "@inertiajs/react";
export default function FormForgotPassword() {

    const { data, setData, post } = useForm({
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/auth/reset-password');

    }
    return (
       <>
            <form
                onSubmit={ handleSubmit } 
                className="px-6 py-4 space-y-5 md:px-20 md:space-y-8">

            <InputPassword 
                label="Reset Password" 
                name="password" 
                type="password"
                icon={<Key color={`text-blue-600`} />} 
                autocomplete ="current-password" 
                value={data.password}
                onChange={ (e) => setData('password', e.target.value) }
                required />

            <Button type="submit" variant={`rounded-full bg-blue-600 text-white w-full font-semibold px-4 py-2`}>Reset Password</Button>
            </form>
       </>
    )
}