import Link from "next/link"; 
import Image from "next/image";
import Logo from '../../public/NYATFLIX.png'

interface linkPrpos {
    name: string;
    href: string;
}

const links: linkPrpos[] = [
    {name: 'Home', href: '/home'},
    {name: 'TV Shows', href: '/home/shows'},
    {name: 'Movies', href: '/home/movies'},
    {name: 'Recently Added', href: '/home/recently-added'},
    {name: 'My List', href: '/home/user/list'},
];
export default function Navbar () {
    return (
        <div 
        className="w-full ma-w-xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
            <div className="flex items-center">
                <Link href="/home" className="w-32">
                    <Image src={Logo} alt="Nyatflix logo" priority/>
                </Link>
                <ul className="lg:flex gap-x-4 ml-14 hidden">
                    {links.map((link, idx) => (
                        <div key={idx}>

                        </div>
                    ))}

                </ul>
            </div>

        </div>    
    )
}
