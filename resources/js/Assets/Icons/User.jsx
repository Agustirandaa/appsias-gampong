export default function User({color, size}) {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={`bi bi-person ${color}`}  fill="currentColor">
        <rect width="20" height="20" fill="none"></rect>
        <circle cx="128" cy="96" r="64" fill="none" stroke="currentColor" strokeMiterlimit="10"
            strokeWidth="16">
        </circle>
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"
            d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002"></path>
    </svg>
    
    )
}
