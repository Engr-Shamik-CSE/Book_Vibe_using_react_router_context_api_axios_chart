import React, { Suspense} from 'react';
import Book from '../Book/Book';

const Books = ({bookData}) => {
    
    return (
        <div>
            <Suspense fallback={<span>Loading .. .. .. </span>}>
            {
                bookData.map((singleBookData)=> <Book key={singleBookData.bookId} singleBookData={singleBookData} ></Book>)
            }
                
                
            </Suspense>
        </div>
    );
};

export default Books;