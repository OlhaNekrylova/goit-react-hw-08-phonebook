import { useState, useCallback } from "react";
// import { useNavigate } from 'react-router-dom';

const useForm = ({initialState, onSubmit})=> {
    const [state, setState] = useState({...initialState})
    // const navigate = useNavigate();

    const handleChange = useCallback(({target}) => {
        const {name, value} = target;
        setState(prevState => {
            return {...prevState, [name]: value}
        })
    }, [setState]);

    const handleSubmit = e => {
        e.preventDefault();
        if (state.user.trim() === '') {
            return toast.info('Please, specify your search query.');
        }
        onSubmit({...state});
        // setState({...initialState});
        // navigate('/contacts');
    };

    return {state, setState, handleChange, handleSubmit}
}

export default useForm;