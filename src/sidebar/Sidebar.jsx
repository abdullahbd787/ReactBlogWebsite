import './sidebar.css'
import Image from '../assets/Images/blur-1972569_1280.jpg';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className='sidebarTitle'>ABOUT ME</span>
        <img src={Image} alt="About me" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis culpa labore ipsum unde error inventore et, nesciunt ad hic ut perspiciatis blanditiis, quas fuga id modi placeat quam saepe iste fugit voluptates quos neque corporis ipsa</p>
      </div>
      <div className="sidebarItem">
        <span className='sidebarTitle'>CATEORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i  className="sidebarIcon fa-brands fa-square-facebook"></i>    
          <i  className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i  className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i  className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  )
}
