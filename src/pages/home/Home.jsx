import {
    Title,
    HomeUserGroup,
    Wrap,
    UnderTitle,
    HomeLink,
    Section,
    HomePhoneIcon,
    HomeContactList,
} from './home.styled';
import { useSelector } from 'react-redux';

export default function Home() {
    const { isLoaggedIn } = useSelector(state => state.auth);

    return (
    <Section>
        <Title>Wellcome to you PhoneBook</Title>

        <Wrap>
        <HomePhoneIcon />
        <HomeUserGroup />
        <HomeContactList />
        </Wrap>

        {!isLoaggedIn ? (
        <UnderTitle>
            Please
            <HomeLink to="/register">Register</HomeLink>
            or
            <HomeLink to="/login">Log in</HomeLink>
            to be able to use your PhoneBook
        </UnderTitle>
        ) : (
        <UnderTitle>Copyright © Bohdan Potopnyk 2023</UnderTitle>
            )}
    </Section>
    );
}