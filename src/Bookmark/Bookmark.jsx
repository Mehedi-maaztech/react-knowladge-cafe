
import React from 'react';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='pt-5'>
            <h2 className='text-[15px] bg-white p-4 rounded-xl'>{title}</h2>
        </div>
    );
};

export default Bookmark;