import Jumbotron from "@Elements/Jumbotron";
import Navbar from "@Fragments/Navbar";
import * as React from 'react';
import Section from "@Elements/Section";
import { House, People, GlobeAsia, Journals, Rocket } from "@Icons";
import { Link, usePage } from "@inertiajs/react";


const itemsNav = [
    {
        name: "Profil",
        href: "#profile",
    },
    {
        name: "Desa",
        href: "#desa",
    },
    {
        name: "Home",
        href: "#home",
    },
    {
        name: "Aparat",
        href: "#aparat",
    },
    {
        name: "Berita",
        href: "#berita",
    },
]

export default function Home() {

    const { aparats, totalPosting, totalKeluarga, totalPenduduk, totalAparat } = usePage().props

    const infoDesa = [
        {
            name: "Jumlah Penduduk (Jiwa)",
            value: totalPenduduk + totalKeluarga,
            icon: People
        },
        {
            name: "Luas Wilayah (Ha)",
            value: 123,
            icon: House
        },
        {
            name: "Luas Perkebunan",
            value: 23,
            icon: GlobeAsia
        },
        {
            name: "Jumlah Dusun",
            value: 10,
            icon: Journals
        }
    ];

    const [active, setActive] = React.useState(2);
    const handleClick = (index) => {
        setActive(index);   
    }

    const [showSection, setShowSection] = React.useState(false);
    React.useEffect(() => {
        const handleScroll = () => {
            const sectionProfile = document.getElementById('profile');
            const sectionDesa = document.getElementById('desa');
            const screenHeight = window.innerHeight;

            if (sectionProfile) {
                const sectionProfilePosition = sectionProfile.getBoundingClientRect().top;
                if (sectionProfilePosition < screenHeight * 1.5) {
                    setShowSection(true);
                }
            }

            if (sectionDesa) {
                const sectionDesaPosition = sectionDesa.getBoundingClientRect().top;
                if (sectionDesaPosition < screenHeight * 5) {
                    setShowSection(true);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="">
            <Jumbotron />
            <Navbar variant={`sticky top-0`} extraClass="bg-blue-600 text-white">
                    {itemsNav.map((items, idx) => (
                    <a 
                    onClick={() => handleClick(idx)}
                    key={idx}
                    href={items.href} 
                    className={`px-4 py-1 rounded-full md:px-5 font-inter hover:bg-blue-500 transition-all  hover:text-white ${ active === idx ? 'bg-blue-500 text-white' : '' }`}>{items.name}</a>
                ))}
            </Navbar>


            {/* Profile */}

            <Section id="profile" title="Profile" showSection={showSection} variant="bg-white" caption="Lorem, ipsum dolor sit amet consectetur adipisicing elit.">
                <div className="grid grid-cols-2 gap-5 p-5">
                    <div className="flex justify-end col-span-2 rounded-lg lg:col-span-1">
                        <div className="w-full xl:w-[80%]">
                            <img src="https://images.unsplash.com/photo-1643870358098-3549ac3bca46?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="rounded-lg" />
                        </div>
                    </div>
                    <div className="col-span-2 px-3 space-y-5 rounded-lg lg:col-span-1">
                        <div className="space-y-2">
                            <span className="text-lg font-semibold text-gray-500 font-inter">Visi</span>
                            <p className="text-base italic text-justify">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, velit cupiditate! Laudantium odit porro cum ea, dolorum quam maiores in facere, velit fugit voluptatem labore ipsam, hic amet recusandae distinctio?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis aspernatur magni eligendi. Laboriosam rerum minus suscipit, ipsa quae fugiat ullam non, quasi, facilis eligendi repudiandae accusantium error sapiente delectus veniam.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <span className="text-lg font-semibold text-gray-500 font-inter">Misi</span>
                            <ul className="space-y-2 list-disc ps-4">
                                <li className="text-base italic text-justify">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, laborum hic? Nostrum beatae accusantium quam ut perspiciatis maxime sunt, voluptatibus consectetur facere autem minus eos necessitatibus culpa, alias ducimus iure.
                                </li>
                                <li className="text-base italic text-justify">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, laborum hic? Nostrum beatae accusantium quam ut perspiciatis maxime sunt, voluptatibus consectetur facere autem minus eos necessitatibus culpa, alias ducimus iure.
                                </li>
                                <li className="text-base italic text-justify">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, laborum hic? Nostrum beatae accusantium quam ut perspiciatis maxime sunt, voluptatibus consectetur facere autem minus eos necessitatibus culpa, alias ducimus iure.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Aparat */}

            <Section id="aparat" title="Aparat Desa" showSection={showSection} variant="bg-blue-50" caption="Lorem, ipsum dolor sit amet consectetur adipisicing elit.">
                <div className="flex justify-center w-full">
                    <div className="grid grid-cols-4 gap-20 xl:grid-cols-3 ps-12">
                        {aparats.map((data, idx) => (
                            <div key={idx} className="relative col-span-4 py-5 bg-white rounded-md shadow-md md:col-span-2 xl:col-span-1 ps-16 pe-5 min-h-44">
                                <div className="absolute w-20 h-20 -left-10">
                                    <img src={`/${data.image}`} className="w-full h-full bg-center bg-contain rounded-xl" />
                                </div>
                                <h1 className="text-xl font-semibold font-inter">{data.name}</h1>
                                <span className="text-sm text-gray-400 font-inter">{data.position}</span>
                                <p className="italic text-justify text-gray-500">
                                    &nbsp;&nbsp; {data.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </Section>

            {/* Desa */}

            <Section id="desa" title="Desa" showSection={showSection} variant="bg-white" caption="Lorem, ipsum dolor sit amet consectetur adipisicing elit.">
                <div className="space-y-16">
                    <div className="flex rounded-lg justify-star">
                        <div className="w-full ">
                            <div className="mapouter">
                                <div className="gmap_canvas">
                                    <iframe className="w-full rounded-xl" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Mata+ie&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid w-full grid-cols-4 px-10 gap-14">
                        {infoDesa.map((items, idx) => (
                            <div key={idx} className="relative flex flex-col items-center justify-center col-span-4 p-5 shadow-md bg-blue-50 md:col-span-2 rounded-xl shadow-blue-200 min-h-44 min-w-52 xl:col-span-1">
                                <div className="absolute p-4 bg-blue-600 border rounded-full -top-7">
                                    <items.icon color="text-white" size="28" />
                                </div>
                                <span className="text-3xl font-semibold text-blue-600">{items.value}</span>
                                <span className="font-inter">{items.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section id="desa" title="Foto Desa" showSection={showSection} variant="bg-white" caption="Lorem, ipsum dolor sit amet consectetur adipisicing elit.">
                <div className="flex justify-center w-full">
                    <div className="grid grid-cols-2 gap-4 w-[80vw] md:grid-cols-4">
                        <div className="grid gap-4">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Berita */}

            <Section id="berita" title="Berita" showSection={showSection} variant="bg-blue-50" caption="Kunjungi berita desa kami terkini">
                <div className="flex justify-center w-full p-5">
                    <Link href="/news/post" className="flex items-center gap-3 px-8 py-4 font-semibold text-blue-600 bg-white rounded-full shadow-lg font-inter hover:bg-blue-600 hover:text-white group">
                        Lihat semua
                        <Rocket color="text-blue-600 group-hover:text-white" size="20" />
                    </Link>
                </div>
            </Section>
            
        </div>
    )
}
