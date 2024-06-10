import DashboardLayouts from "@Layouts/DashboardLayouts";
import { usePage } from "@inertiajs/react";

export default function Dashboard(){
    const { user } = usePage().props
    return (
        <DashboardLayouts title="Dashboard" userLogin={user}>
            <h1>Halaman Dashboard</h1>
        </DashboardLayouts>
    )
} 