import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
const Blogs = ({handleAddToBookmarks, handleMarkasRead}) => {
    const [blogs, setBlog] = useState([]);
    useEffect(()=>{

        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    } ,[])

    return (
        <div className='w-2/3'> 
            <h1 className='text-3xl bold md:w-[80%] mx-auto p-2'>Blogs {blogs.length}</h1>
            <div>
                {blogs.map(blog => 
                    <Blog key={blog.id} blog={blog} handleAddToBookmarks=
                    {handleAddToBookmarks} handleMarkasRead={handleMarkasRead}></Blog>
                )}
            </div>
        </div>
    );
};

export default Blogs;