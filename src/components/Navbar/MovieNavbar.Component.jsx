import React, { useContext } from 'react';
import { BiChevronDown, BiMenu, BiShareAlt, BiSearch } from 'react-icons/bi';
import { MovieContext } from '../../context/Movie.context';
import { Link } from 'react-router-dom';

const NavSm = () => {
    const { movie } = useContext(MovieContext);

    return (<>
        <div className='text-gray-700 w-full flex items items-center justify-between'>
            <div className="w-10 h-10">
                <Link to="/"><img src='https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png'
                    alt='logo'
                    className='w-full h-full'
                /></Link>
            </div>
            <div>
                <h3 className='text-xl font-bold'>
                    {movie.original_title}
                </h3>
            </div>
            <div className=' flex items-center justify-between'>
                <div className='w-8 h-8'>
                    <BiShareAlt className='w-full h-full' />
                </div>
                <div className='w-8 h-8'>
                    <BiMenu className='w-full h-full' />
                </div>
            </div>
        </div>

    </>
    );
};

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

                <div className=" w-full flex items-centre gap-3 bg-white px-3 py-1 rounded-md ">
                    <BiSearch className='w-6 h-6 ' />
                    <input
                        type="search"
                        className='w-full bg-transparent border-none focus:outline-none'
                        placeholder=" Search for movies, events, plays, sports and activities"
                    />
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <span className='text-gray-500 text-base flex items-center cursor-pointer hover:text-white'>
                    Nagpur <BiChevronDown />
                </span>
                <Link to="/plays" className="text-gray-500 text-base flex items-center cursor-pointer hover:text-white">
                    Plays
                </Link>
                <button className='bg-red-600 text-white px-2 py-1 text-sm rounded'>
                    Sign In
                </button>
                <div className='w-8 h-8 text-gray-500'>
                    <BiMenu className='w-full h-full' />
                </div>
            </div>
        </div>
    </>;
}

const NavLg = () => {
    return (<>
        <div className='container flex mx-auto px-4 items-center justify-between'>
            <div className='flex items-center w-1/2 gap-3'>
                <div className="w-10 h-10">
                    <Link to="/"><img src='https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png'
                        alt='logo'
                        className='w-full h-full'
                    /></Link>
                </div>
                <div className=" w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
                    <BiSearch />
                    <input
                        type="search"
                        className='w-full bg-transparent border-none focus:outline-none'
                        placeholder=" Search for movies, events, plays, sports and activities"
                    />
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <span className='text-gray-200 text-base flex items-center cursur-pointer hover:text-white'>
                    Nagpur <BiChevronDown />
                </span>
                <button className='bg-red-600 text-white px-2 py1 text-sm rounded'>
                    Sign In
                </button>
                <div className='w-8 h-8 text-white'>
                    <BiMenu className='w-full h-full' />
                </div>
            </div>
        </div>
    </>
    );
};

const MovieNavbar = () => {
    return <>
        <nav className='bg-white border-b-2 lg:border-b-0 lg:bg-darkBackground-700 p-4'>
            <div className='md:hidden lg:hidden'>
                {/*Mobile and medium Screens */}
                <NavSm />
            </div>
            <div className='hidden sm:hidden w-full md:flex lg:hidden'>
                {/*tablet and notes*/}
                <NavMd />
            </div>
            <div className='hidden w-full lg:flex'>
                {/*large Screens */}
                <NavLg />
            </div>

        </nav>
    </>
};
export default MovieNavbar;