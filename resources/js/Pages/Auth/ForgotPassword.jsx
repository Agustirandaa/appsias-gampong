import AuthLayouts from "@Layouts/AuthLayouts";
import FormForgotPassword from "@Fragments/Form/FormForgotPassword";

export default function ForgotPassword() {
    return (
        <AuthLayouts title="Forgot Password">
            <FormForgotPassword />
        </AuthLayouts>
    )
}