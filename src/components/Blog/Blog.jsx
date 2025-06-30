import PropTypes from 'prop-types';
import React from 'react';
import { CiBookmark } from "react-icons/ci";

function Blog({blog ,handleAddToBookmarks, handleMarkasRead}){
    const {id, title, author, cover, author_img, posted_date, reading_time,hashtags} = blog;
    return (
        <div className='md:w-[80%] mx-auto m-5 p-5'>
            <div className='blogCover'>
                <img key={id} src={cover} alt="" className=''/>
                <div className='flex items-center justify-between'>
                    <div className='authorDetails flex py-5'> 
                        <div className='w-[30px] rounded-full'>
                            <img src={author_img} alt=""  className='object-cover pt-3'/>
                        </div>
                        <div className='px-2'>
                            <h3 className='text-2xl'>{author}</h3>
                            <p><small>{posted_date}</small></p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <span className='px-2'>{reading_time}</span>
                        <button onClick={()=> handleAddToBookmarks(blog)}><CiBookmark /> </button>
                    </div>
                </div>
                <h1 className='md:text-4xl sm:text-2xl'>{title}</h1>
                <div className='pb-3'>
                    {
                        hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                    }
                </div>
                <button 
                    className='text-purple-600 underline'
                    onClick={()=> handleMarkasRead(reading_time, id)}>Mark as REad</button>
            </div>
        </div>
    );
}

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}
export default Blog;