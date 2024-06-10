export default function Jumbotron() {
    return (
        <div id="home" className="w-full h-[92vh] bg-blue-500 flex opacity-90 flex-col items-center justify-center bg-center bg-fixed bg-cover" style={{backgroundImage: 'url("/images/hero-image.jpg")'}}>
            
           <div className="px-3 space-y-5 md:-mt-20 md:-ms-20 md:px-0">
                <span className="text-xl font-semibold text-blue-600 font-inter">
                    Selamat datang di <span className="px-5 py-1.5 text-white uppercase text-base bg-blue-600 rounded-full">Website</span> Resmi
                </span>
                <h1 className="mb-2 text-3xl font-semibold text-blue-600 uppercase md:text-5xl font-inter">Gampong. Mata Ie </h1>
                <span className="text-sm md:text-base font-inter">JLN. DESA Mata, Ie Kec. Montasik, Kab. Aceh Besar, Kode Pos 23362 </span>
                
                <div className="">
                     <a href="#profile" className="px-3 py-2 text-xs font-semibold tracking-wide text-white uppercase bg-blue-600 rounded-md hover:bg-blue-700 font-inter">Visi Misi</a>
               </div>
           </div>
               

        </div>
    )
}