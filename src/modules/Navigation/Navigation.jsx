import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { isUserLogin } from "../../redux/auth/auth-selectors";

import NavbarAuth from "./NavbarAuth/NavbarAuth";
import NavbarUser from "./NavbarUser/NavbarUser";

import items from "../items";
import styles from "./Navbar.module.css";

const Navigation = ()=> {
    const isLogin = useSelector(isUserLogin);
    const filteredItems = !isLogin ? items.filter(item => !item.private) : items;
    const elements = filteredItems.map(({id, text, link}) => 
        <li key={id}>
        <NavLink className={styles.link} to={link}>
            {text}
        </NavLink>
    </li>);

    return (
        <div className={styles.container}>
            <ul className={styles.menu}>
                {elements}
            </ul>
        </div>
    )
}

export default Navigation;

