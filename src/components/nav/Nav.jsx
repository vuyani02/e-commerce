import "./css/nav.css"
import { FiHeart } from "react-icons/fi"
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai"

const Nav = ({search, handleSearch}) => {
  return (
    <nav className="nav">
      <input type="text" value={search} onChange={handleSearch} className="input-navi" placeholder="Enter your search" />
      <div className="nav-icons">
        <FiHeart className="nav-icon"/>
        <AiOutlineShoppingCart className="nav-icon"/>
        <AiOutlineUserAdd className="nav-icon"/>
      </div>
    </nav>
  )
}

export default Nav