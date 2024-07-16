import * as React from 'react';


export default function Navbar({children, variant, extraClass}) {

    
    const [scrolled, setScrolled] = React.useState(false);
 
    React.useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <nav className={` ${variant} shadow-md flex z-10 justify-center w-full py-4 md:gap-12 transition-all ${scrolled ? extraClass : 'bg-white text-blue-600'}`}>
           {children}
        </nav>
    )
}