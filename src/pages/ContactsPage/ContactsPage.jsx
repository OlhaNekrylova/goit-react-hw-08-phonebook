import MyContacts from "../../modules/MyContacts/MyContacts";
import styles from "./ContactsPage.module.css"

const ContactsPage = ()=> {
    return (
        <>
            <h1 className={styles.visuallyHidden}>Contacts page</h1>
            <MyContacts />
        </>
    ) 
}

export default ContactsPage;