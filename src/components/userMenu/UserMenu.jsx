import { useDispatch, useSelector } from "react-redux"
import { Wrap } from "./UserMenu.styled";
import { Avatar, Button } from 'antd';
import { logOut } from 'Redux/authorization/functions';
import { LogoutOutlined } from "@ant-design/icons";



export const UserMenu = () => {
    const { email } = useSelector(state => state.auth.user);
    const dispatch = useDispatch();

    return (
        <Wrap>
            <Avatar>{email.slice(0, 1).toUpperCase()}</Avatar>
            <p>{email}</p>
            <Button type="default" onClick={() => dispatch(logOut())}>
        <LogoutOutlined /> Log out
        </Button>{' '}
    </Wrap>
    );
};