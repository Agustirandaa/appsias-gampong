export default function Section({ id, caption, title, showSection, children, variant }) {
    return (
        <section id={id} className={`w-full min-h-[40vh] py-16 px-2 md:px-16 space-y-5 ${variant} ${ showSection ? 'animateFadeInToTop' : ''}`}>
            <div className="flex flex-col items-center w-full gap-3 p-5">
               <div>
                     <span className="text-2xl md:text-3xl relative font-semibold flex items-center tracking-wide text-blue-600 uppercase font-inter 
                     before:content-[''] before:pe-8 before:w-12 before:h-1 before:absolute before:-left-16 before:rounded-full before:bg-blue-800   after:content-[''] after:pe-8 after:w-12 after:h-1 after:absolute after:-right-16 after:rounded-full after:bg-blue-800">{title}</span>
               </div>
                <span className="font-inter">{caption}</span>

            </div>
                {children}
        </section>
    );
}