import { useSelector, useDispatch } from "react-redux";

import { logout } from "../../../redux/auth/auth-operations";

import { getUser } from "../../../redux/auth/auth-selectors";

// import styles from "./UserMenu.module.css";

const UserMenu = () => {
    const {email} = useSelector(getUser);
    const dispatch = useDispatch();

    const onLogout = ()=> {
        dispatch(logout());
    }

    return (
        <div>
            {email}, <button onClick={onLogout}>Logout</button>
        </div>
    )
}

export default UserMenu;