import { useState } from 'react';
import './App.css'
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header/Header';
function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTimes, setReadtimes] = useState(0);

  const handleAddToBookmarks = (blog) => {
   const newBookmarks = [...bookmarks, blog];
   setBookmarks(newBookmarks);
  }

  const handleMarkasRead = (time, id) => {
    setReadtimes(readTimes + time);

    //remove read bookmarks
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <div className='w-11/12 mx-auto'>
      <Header></Header>
      <div className='md:flex justify-between'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarkasRead={handleMarkasRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readTimes={readTimes}></Bookmarks>
      </div>
    </div>
  )
}

export default App
