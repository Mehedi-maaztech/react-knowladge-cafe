import profile from '../../assets/images/boy2.png'
import './Header.css'
const Header = () => {
    return (
        <div>
            {/* <h1 className="text-4xl"></h1> */}
            <div className="navbar bg-base-100 shadow-xs flex justify-between py-3">
                <div className="">
                    <a className="btn btn-ghost text-4xl">Knowladge cafe</a>
                </div>
                <div className="profileImg">
                    <img src={profile} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;