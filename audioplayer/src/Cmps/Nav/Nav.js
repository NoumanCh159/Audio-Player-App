import './Nav.css';
import './CardMQ.css';
import logo from './logo1.png'
function Nav(){
    return(
        <div className="navcontainer">
        <div className="navbar">
            <div><img className="logo" id="logo" src={logo} alt="imagehere"/></div>
            <div><input className="search-box" type="text" placeholder="Search Song!"/></div>
        </div>
    </div>
    );
}