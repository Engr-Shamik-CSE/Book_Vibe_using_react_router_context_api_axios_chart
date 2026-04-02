import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const bookData = useLoaderData();
    console.log(bookData);
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto py-1 lg:py-3'>
            <Banner></Banner>
            <Books bookData={bookData}></Books>
        </div>

    );
};

export default Home;