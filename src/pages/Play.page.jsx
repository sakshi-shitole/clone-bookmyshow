import React from 'react'
import DefaultlayoutHoc from '../layout/Default.layout';



//Components
import Poster from "../components/Poster/Poster.Component";
import PlayFilter from '../components/PlayFilters/PlayFilter.Component';

const Playpage = () => {
    return (
        <>
            <div className=" container mx-auto px-4 my-10">
                <div className='w-full flex flex-col-reverse lg:flex lg:flex-row-reverse gap-4'>
                    <div className='lg:w-3/4 p-4 bg-white rounded'>
                        <h2 className='text-2xl font-bold mb- mb-4'>Plays in Nagpur</h2>
                        <div className='flex flex-wrap'>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster
                                    isPlay={true}
                                    src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-chord-do-aanchal-india-tour-0-2023-5-16-t-13-44-6.jpg"
                                    title="Chord do Aanchal - India Tour"
                                    subtitle="Stand up Comedy | Hindi | 16yrs + | 1hr 15mins"
                                />
                            </div>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster
                                    isPlay={true}
                                    src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-gaurav-kapoor-live-0-2023-1-19-t-11-26-40.jpg"
                                    title="Gaurav Kapoor Live"
                                    subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 15mins"
                                />
                            </div>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster
                                    isPlay={true}
                                    src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-ayushawar-bolu-kahi-0-2023-6-20-t-11-49-37.jpg"
                                    title="Ayushawar Bolu Kahi"
                                    subtitle="Poetry | Marathi | 10yrs + | 3hrs"
                                />
                            </div>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster
                                    isPlay={true}
                                    src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-with-love-jaspreet-a-standup-solo-0-2022-7-29-t-4-44-8.jpg"
                                    title="With love, Jaspreet! - A standup solo"
                                    subtitle="Comedy Shows | Hindi | 16yrs + | 1hr 30mins"
                                />
                            </div>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster
                                    isPlay={true}
                                    src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-the-obsessed-tour-nagpur-0-2023-6-7-t-12-30-6.jpg"
                                    title="The Obsessed Tour - Nagpur"
                                    subtitle="Punjabi | Punjabi | 21yrs + | 1hr 30mins"
                                />
                            </div>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster
                                    isPlay={true}
                                    src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-punit-pania-live-the-never-ending-tour-0-2023-6-10-t-11-27-20.jpg"
                                    title="Punit Pania Live - The Never Ending Tour"
                                    subtitle="Comedy | English, Hindi | 16yrs + | 1hr 30mins"
                                />
                            </div>  <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster
                                    isPlay={true}
                                    src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-gem-of-a-person-by-devesh-dixit-0-2022-8-17-t-11-25-57.jpg"
                                    title="Gem Of A Person by Devesh Dixit"
                                    subtitle="Comedy Shows | English, Hindi | 16yrs + | 2hrs"
                                />
                            </div>

                        </div>
                    </div>
                    <div className='lg:w-1/4 p-4 bg-white rounded'>
                        <h2 className='text-2xl font-bold mb-4'>Filters</h2>
                        <div>
                            <PlayFilter
                                title='Date'
                                tags={["Today", "Tomorrow", "This Weekend"]}
                            />
                        </div>
                        <div>
                            <PlayFilter
                                title='Language'
                                tags={["English", "Hindi", "Marathi", "Tamil"]}
                            />
                        </div>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d29376.17435057492!2d72.538277!3d23.022972!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDAxJzIyLjciTiA3MsKwMzInMTcuOCJF!5e0!3m2!1sen!2sus!4v1688465411216!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="play location">
                </iframe>
            </div>
        </>
    )
}

export default DefaultlayoutHoc(Playpage);