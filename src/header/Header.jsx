import "./header.css"
import Image from '../assets/Images/blur-1972569_1280.jpg';

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
         <span className="headerTitleSm">React & Node</span>
         <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src={Image} alt="" />
    </div>
  )
}
