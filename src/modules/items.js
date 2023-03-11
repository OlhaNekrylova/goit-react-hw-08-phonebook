import { nanoid } from "nanoid";

const items = [
    {
        id: nanoid(),
        text: "Home page",
        link: "/",
        private: false,
    },
    {
        id: nanoid(),
        text: "Contacts page",
        link: "/contacts",
        private: true,
    },
];

export default items;