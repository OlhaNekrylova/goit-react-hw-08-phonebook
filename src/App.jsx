import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import AuthLayout from './modules/AuthLayout/AuthLayout';
import Navbar from './modules/Navigation/Navbar/Navbar';
import UserRoutes from './UserRoutes';

import { store, persistor } from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AuthLayout>
                    <BrowserRouter basename="/goit-react-hw-08-phonebook">
                        <Navbar />
                        <UserRoutes />
                        <ToastContainer theme="colored" position="top-right" autoClose={3000}/>
                    </BrowserRouter>
                </AuthLayout>
            </PersistGate>
        </Provider>
    );
};

export default App;