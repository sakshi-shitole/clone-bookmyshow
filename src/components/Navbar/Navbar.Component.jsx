import React from 'react';
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
import { Link } from 'react-router-dom';

function NavSm() {
    return <>
        <div className="text-white mx-auto px-4 flex  items-center justify-between">
            <div className=" w-10 h-10 ">
                <Link to="/"><img
                    src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                    alt="logo"
                    className='w-full h-full'
                />
                </Link>
            </div>
            <div>
                <h3 classname="text-xl font-bold">It All Starts Here!</h3>
                <span className=" text-gray-400 text-xs flex 
            items-centre cursor-pointer hover:text-white">
                    Nagpur City <BiChevronDown />
                </span>
                <Link to="/plays" className="text-gray-400 text-xs flex items-centre cursor-pointer hover:text-white">
                    Plays
                </Link>
            </div>

            <div className="w-8 h-8 flex last:">
                <BiSearch className='w-full h-full' />
            </div>

        </div>
    </>;
}

function NavMd() {
    return <>
        <div className="container flex mx-auto px-4 items-center justify-between">
            <div className='flex items-center w-1/2 gap-3'>
                <div className=" w-10 h-10">
                    <Link to="/"><img
                        src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                        alt="logo"
                        className='w-full h-full'
                    />
                    </Link>
                </div>

                <div className=" w-full flex items-centre gap-3 bg-white px-3 py-1 rounded-md">
                    <BiSearch className='w-6 h-6' />
                    <input
                        type="search"
                        className='w-full bg-transparent border-none focus:outline-none'
                        placeholder=" Search for movies, events, plays, sports and activities"
                    />
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <span className='text-gray-200 text-base flex items-center cursor-pointer hover:text-white'>
                    Nagpur <BiChevronDown />
                </span>
                <Link to="/plays" className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
                    Plays
                </Link>
                <button className='bg-red-600 text-white px-2 py-1 text-sm rounded'>
                    Sign In
                </button>
                <div className='w-8 h-8 text-white'>
                    <BiMenu className='w-full h-full' />
                </div>
            </div>
        </div>
    </>;
}

function NavLg() {
    return <>
        <div className="container flex mx-auto px-4 items-center justify-between">
            <div className='flex items-center w-1/2 gap-3'>
                <div className="w-10 h-10">
                    <Link to="/"><img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                        alt="logo"
                        className=" w-full h-full"
                    /></Link>
                </div>
                <div className=" w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
                    <BiSearch />
                    <input
                        type="search"
                        className='w-full bg-transparent border-none focus:outline-none'
                        placeholder=" Search for movies, events, plays, sports and activities"
                    />
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <span className='text-gray-200 text-base flex items-center cursor-pointer hover:text-white'>
                    Nagpur <BiChevronDown />
                </span>
                <Link to="/plays" className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
                    Plays
                </Link>
                <button className='bg-red-600 text-white px-2 py-1 text-sm rounded'>
                    Sign In
                </button>
                <div className='w-8 h-8 text-white'>
                    <BiMenu className='w-full h-full' />
                </div>
            </div>
        </div>
    </>;
}

//Main Component
const Navbar = () => {
    return (<nav className='bg-gray-700 px-4 py-3'>
        {/*Mobile Screen Navbar*/}
        <div className="md:hidden">
            <NavSm />
        </div>
        {/*Medium/tab Screen Navbar*/}
        <div className="hidden md:flex lg:hidden">
            <NavMd />
        </div>
        {/*Large Screen Navbar*/}
        <div className="hidden md:hidden lg:flex">
            <NavLg />
        </div>
    </nav>
    );
};

export default Navbar;