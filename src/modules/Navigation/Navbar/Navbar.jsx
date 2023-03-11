import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { isUserLogin } from "../../../redux/auth/auth-selectors";

import NavbarAuth from "../NavbarAuth/NavbarAuth";
import UserMenu from "../UserMenu/UserMenu";

import items from "../../items";
import styles from "./Navbar.module.css";

const Navbar = ()=> {
    const isLogin = useSelector(isUserLogin);
    const filteredItems = !isLogin ? items.filter(item => !item.private) : items;
    const elements = filteredItems.map(({id, text, link}) => 
        <li key={id}>
        <NavLink className={styles.link} to={link}>
            {text}
        </NavLink>
    </li>);

    return (
        <div className={styles.navbar}>
            
            <ul className={styles.menu}>
                {elements}
            </ul>

            {!isLogin && <NavbarAuth />}
            {isLogin && <UserMenu />}
        </div>

    )
}

export default Navbar;

