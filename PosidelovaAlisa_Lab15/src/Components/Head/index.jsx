import { NavLink } from 'react-router-dom';
import './style.css'
const setActive = ({isActive}) => (isActive ? "active" : "");

export function Head(){
    return(
    <div className="Head">
        <nav className="nav-container">
            <NavLink to="/news" className={setActive}>Новости</NavLink>
            <NavLink to="/about" className={setActive}>О нас</NavLink>
            <NavLink to="/contacts" className={setActive}>Контакты</NavLink>
        </nav>
    </div>
    )
}
export default Head;