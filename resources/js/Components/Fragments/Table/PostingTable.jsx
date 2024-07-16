import { Link, useForm } from "@inertiajs/react";
import { Trash, PencilSquare, ViewList } from "@Icons";
import Button from "@Elements/Button";
import moment from "moment";

export default function PostingTable({datas}) {
    
    const { delete: destroy } = useForm();
    const handleDelete = (id) => { 
        const result = confirm('Are you sure?');
        if (result) destroy('/dashboard/posting/' + id);
     }

    return (
      <div className="overflow-x-auto">
         <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-blue-300">
                    <thead >
                        <tr>
                            <th scope="col" className="px-3 py-3 text-sm font-semibold text-blue-600 uppercase font-inter text-start"> No</th>
                            <th scope="col" className="px-3 py-3 text-sm font-semibold text-blue-600 uppercase font-inter text-start"> Posting Date</th>
                            <th scope="col" className="px-3 py-3 text-sm font-semibold text-blue-600 uppercase font-inter text-start">Title</th>
                            <th scope="col" className="px-3 py-3 text-sm font-semibold text-blue-600 uppercase font-inter text-start">Kategori</th>
                            <th scope="col" className="px-3 py-3 text-sm font-semibold text-blue-600 uppercase font-inter text-start">Ringkasan</th>
                            <th scope="col" className="px-3 py-3 text-sm font-semibold text-center text-blue-600 uppercase font-inter">Action</th>
                        </tr>
                    </thead>
                    <tbody className="overflow-auto divide-y divide-neutral-100">
                    {datas.data.map((data, idx) =>(
                         <tr className="hover:bg-blue-50" key={idx}>
                            <td className="px-3 py-4 text-sm font-semibold font-inter text-start whitespace-nowrap">{idx + 1}</td>
                            <td className="px-3 py-4 text-sm font-inter text-start whitespace-nowrap">{moment(data.created_at).format('DD-MM-YYYY HH:mm:ss')}</td>
                            <td className="px-3 py-4 text-sm font-inter text-start whitespace-nowrap">{data.title}</td>
                            <td className="px-3 py-4 text-sm text-blue-600 font-inter text-start whitespace-nowrap">{data.category.name}</td>
                            <td className="px-3 py-4 text-sm font-inter text-start whitespace-nowrap lg:text-wrap">{data.excerpt}</td>
                            <td className="flex items-center justify-center gap-4 px-3 py-4 text-sm font-inter">
                                <Button onClick={() => handleDelete(data.id)} variant={``}>
                                    <Trash color="text-red-500" size="18" />
                                </Button>
                                <Link href={`/dashboard/posting/${data.id}/edit`}>
                                    <PencilSquare color="text-green-500" size="18" />
                                </Link>
                                <Link href={`/dashboard/posting/${data.id}`}>
                                    <ViewList color="text-indigo-500" size="18" />
                                </Link>
                            </td>
                     </tr>
                    ) )}
                    </tbody>
                </table>
            </div>
       </div>
      </div>
    )
}
