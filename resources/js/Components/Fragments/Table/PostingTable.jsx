import { Link } from "@inertiajs/react";
import { Trash, PencilSquare, ViewList } from "@Icons";


const items = Array.from({length: 5})
export default function PostingTable() {
    return (
      <div className="overflow-x-auto">
         <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-blue-300">
                    <thead >
                        <tr>
                            <th scope="col" className="px-3 py-3 text-sm font-semibold text-blue-600 uppercase font-inter text-start"> Posting Date</th>
                            <th scope="col" className="px-3 py-3 text-sm font-semibold text-blue-600 uppercase font-inter text-start">Title</th>
                            <th scope="col" className="px-3 py-3 text-sm font-semibold text-blue-600 uppercase font-inter text-start">Kategori</th>
                            <th scope="col" className="px-3 py-3 text-sm font-semibold text-blue-600 uppercase font-inter text-start">Ringkasan</th>
                            <th scope="col" className="px-3 py-3 text-sm font-semibold text-center text-blue-600 uppercase font-inter">Action</th>
                        </tr>
                    </thead>
                    <tbody className="overflow-auto divide-y divide-neutral-100">
                    {items.map((item, idx) =>(
                         <tr className="hover:bg-blue-50" key={idx}>
                            <td className="px-3 py-4 text-sm font-inter text-start whitespace-nowrap">01-01-2022  15:15:07</td>
                            <td className="px-3 py-4 text-sm font-inter text-start">Pemograman bebarbasis web</td>
                            <td className="px-3 py-4 text-sm font-inter text-start">Programming</td>
                            <td className="px-3 py-4 text-sm font-inter text-start whitespace-nowrap lg:text-wrap">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt debitis fugiat animi quidem minus ea enimt </td>
                            <td className="flex items-center justify-center gap-4 px-3 py-4 text-sm font-inter">
                                <Link href="#">
                                    <Trash color="text-red-500" size="18" />
                                </Link>
                                <Link href="#">
                                    <PencilSquare color="text-green-500" size="18" />
                                </Link>
                                <Link href="#">
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
