import React from 'react';

const Banner = () => {
    return (
        <div className='flex w-full justify-between p-8 lg:p-16 mb-10 lg:my-10 bg-gray-100 rounded-4xl'>
            <div className="text w-7/12">
                <h1 className='text-[84px]'>Books to freshen up <br /> your bookshelf</h1>
                <button className='btn bg-[#23BE0A] text-white'>View The List</button>
            </div>
            <div className="bannerImage w-5/12 flex items-end justify-center">
                <img src="/assets/bannerImage.png" alt="" />
            </div>
        </div>
    );
};  

export default Banner;