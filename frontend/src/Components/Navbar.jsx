import logo1 from '../../public/logo2.png';
import { IoLanguage } from "react-icons/io5";



const Navbar = () => {

    const navItems = [
        {link:"Overview", path:"home"},
        {link:"Features", path:"features"},
        {link:"About", path:"about"},
        {link:"Pricing", path:"pricing"},
    ]

  return (
    <nav>
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
            <div className="flex items-center space-x-14 pt-3">
                <a href="/" className="text-2xl font-semibold flex items-center space-x-3 pl-4  text-primary"><img src={logo1} alt="logo1" className="w-10 inline-block items-center"/><span>NexPlan</span></a>

                {/* showing nav Items */}

                <ul className="md:flex space-x-14">
                
                    {
                        navItems.map(({link,path})=> 
                        <a key={link} href={path} className="block hover:text-gray-300">{link}</a>
                        )
                    }
                    
                </ul>
            </div>

            {/* language and sign up */}

            <div className="space-x-12 hidden md:flex items-center pt-3">
                <a href="/" className="hidden lg:flex items-center hover:text-secondary"><IoLanguage className="mr-2"/><span>Languages</span></a>
                <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">Sign Up</button>
            </div>
        </div>
      
    </nav>
  )
}

export default Navbar
