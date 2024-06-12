import React, {useEffect} from 'react';
import UsersComponent from "../components/UsersComponent";
import {useAppDispatch} from "../redux/slices/store";
import {userActions} from "../redux/slices/userSlice";

const UsersPage = () => {

    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers());

    }, []);
    return (
        <div>
            <UsersComponent/>
        </div>
    );
};

export default UsersPage;
