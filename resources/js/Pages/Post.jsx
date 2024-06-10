import { Link } from "@inertiajs/react";
import Input from "@Elements/Input";
import { Search } from "@Icons";
import Navbar from "@Fragments/Navbar";
import Button from "@Elements/Button";

export default function Post() {

    const items = Array.from({ length: 10 });

    return (
       <>
        <Navbar variant={`fixed top-0`}>
            <div className="w-full md:w-[30vw] px-3">
                <Input placeholder="Search Post by title & category..." icon={<Search color="text-blue-800" size="18" />}  />
            </div>
            <Button variant="px-3 bg-blue-600 rounded-lg border mx-3 md:-ms-10" >
                <Search color="text-white" size="18" />
                </Button>
        </Navbar>

        <div className='flex justify-center w-full mt-16 animateFadeInToTop'>
          <div className="w-full xl:w-[60vw] grid grid-cols-2 gap-2">
                <div className="col-span-2 p-5 space-y-5">
                    <img className="w-full bg-center rounded-md h-[30vh] md:h-[50vh]" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" />
                    <div className="flex flex-col items-center justify-center w-full gap-3">
                        
                        <div className="flex flex-col items-center">
                            <h1 className="text-xl font-semibold font-inter">Acara Gotong Royong</h1>
                            <span className="text-sm text-center font-inter">29 Januari 2023</span>
                        </div>

                        <p className="text-justify">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat nihil ad nesciunt blanditiis earum veritatis hic consequatur eum ratione. Maiores libero iste aut pariatur iure sit incidunt ad eius facilis.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat nihil ad nesciunt blanditiis earum veritatis hic consequatur eum ratione. Maiores libero iste aut pariatur iure sit incidunt ad eius facilis.
                        </p>

                        <Link href="#" className="px-4 py-1.5 border rounded-md hover:text-white border-blue-400 hover:bg-blue-600 font-inter " >Selengkapnya...</Link>
                    </div>
                </div>
           </div>
        </div>

        <div className="grid grid-cols-4 gap-5 p-5 mt-10">
           
           {items.map((item, index) => (
            <div className="col-span-4 p-3 space-y-3 border rounded-lg shadow-lg md:col-span-2 xl:col-span-1">
                <img className="bg-center rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" />
                <div className="flex justify-between">
                        <h1 className="text-base font-semibold font-inter">Acara Gotong Royong</h1>
                        <span className="text-sm font-inter"> 29 Januari 2023</span>
                </div>
                <p className="text-sm text-justify font-inter">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores at laborum fugit, enim hic nesciunt, repellat blanditiis harum, repudiandae inventore praesentium...
                </p>
                <Link href="#" className="text-sm text-blue-600 font-inter" >Selengkapnya ...</Link>
            </div>
           ))}
        </div>


       </>
    )
}