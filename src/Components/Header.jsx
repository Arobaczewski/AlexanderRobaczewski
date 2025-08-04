import { UserRound, BrainCog, LaptopMinimalCheck, Contact } from "lucide-react";

const Header = () => {
    return (
        <>
        <div className="w-full bg-transparent">
            <header className="flex justify-between items-center text-white py-5 mx-auto">
                    <div className="flex flex-shrink-0 items-center">
                        <div className="block hover:opacity-80 transition-opacity cursor-default">
                            <div className="text-3xl md:text-4xl text-teal-400 font-bold">
                                Alex Robaczewski
                            </div>
                        </div>
                    </div>
                    <nav className="hidden md:block">
                            <ul className="flex space-x-6 text-lg">
                                <li>
                                    <a className="flex items-center gap-2 px-4 py-2 transition-all duration-200 hover:text-teal-400 hover:bg-gray-900/20 rounded-lg group" href="/#about">
                                        <UserRound className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                                        <span className="font-medium">About</span>
                                    </a> 
                                </li>
                                <li>
                                    <a className="flex items-center gap-2 px-4 py-2 transition-all duration-200 hover:text-teal-400 hover:bg-gray-900/20 rounded-lg group" href="/#skills">
                                        <BrainCog className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                                        <span className="font-medium">Skills</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-center gap-2 px-4 py-2 transition-all duration-200 hover:text-teal-400 hover:bg-gray-900/20 rounded-lg group" href="/#projects">
                                        <LaptopMinimalCheck className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                                        <span className="font-medium">Projects</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-center gap-2 px-4 py-2 transition-all duration-200 hover:text-teal-400 hover:bg-gray-900/20 rounded-lg group" href="/#contact">
                                        <Contact className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                                        <span className="font-medium">Contact</span>
                                    </a>
                                </li> 
                            </ul>
                        </nav>
            </header>
        </div>
        </>
    )
}

export default Header;