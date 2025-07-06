import list from '../assets/list.svg'
import playicn from '../assets/play.jpg'
import search from '../assets/search.svg'
import addcontent from '../assets/plus-square.svg'
import notification from '../assets/bell.svg'
import profile from '../assets/person-circle.svg'
import './css/navbar.css'
import { Link } from 'react-router-dom'

const Navbar=({setSidebar})=>{
    return (<div className="navbar flex-dir">
                 <div className="navleft flex-dir">
                    <img src={list} alt="menu" className='menu' onClick={()=>setSidebar(prev=>prev===false?true:false)}/>
                    <Link to={`/`}><img src={playicn} alt="youtube" className='youtube' /></Link>
                    <Link to={`/`}><p>Video Mate</p></Link>
                 </div>
                 <div className="navmiddle flex-dir">
                    <input type="text" placeholder="Search"  />
                   <button><img src={search} alt="search" /></button> 
                 </div>
                 <div className="navright flex-dir">
                  <ul>
                     <li><img src={profile} alt="profile" /></li>
                     <li><img src={notification} alt="notification" /></li>
                     <li className='addcontent'><img src={addcontent} alt="add content"  />Create</li>
                  </ul>
                 </div>
            </div>);
}
export default Navbar;