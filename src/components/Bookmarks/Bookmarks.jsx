import Bookmark from '../../Bookmark/Bookmark';
import './Bookmarks.css'
const Bookmarks = ({bookmarks, readTimes}) => {
    return (
        <div className='w-1/3 p-5 m-5'>
            <div className='timeSpent bg-gray-100 p-5 rounded mb-2'>
                <h3 className="text-3xl border-purple">Spent on Read : {readTimes}</h3>
            </div>
            <div className='bookMarks bg-gray-100 p-5 rounded'>
                <h4 className='text-2xl font-bold'>Bookmarked Blogs : {bookmarks.length}</h4>
                <div>
                    {
                        bookmarks.map((bookmark, id) => <Bookmark key={id} bookmark={bookmark}></Bookmark>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Bookmarks;