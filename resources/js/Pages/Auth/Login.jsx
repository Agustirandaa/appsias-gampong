import FormLogin from "@Fragments/Form/FormLogin";
import AuthLayouts from "@Layouts/AuthLayouts";

export default function Login() {
    return (
        <AuthLayouts title="Login">
            <FormLogin />
        </AuthLayouts>
    )
}