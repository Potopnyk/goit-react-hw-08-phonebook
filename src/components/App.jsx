import { BasicStyle } from './BasicStyle';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { refreshUser } from 'Redux/authorization/functions';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { ToastContainer } from 'react-toastify';
import { Spiner } from 'pages/contactList/contactList.styled';

const Register = lazy(() => import('../pages/register/Register'));
const Home = lazy(() => import('../pages/home/Home'));
const Login = lazy(() => import('../pages/login/Login'));
const Contactlist = lazy(() => import('../pages/contactList/ContactList'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const { isRefreshing } = useSelector(state => state.auth);


  return !isRefreshing ? (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<Contactlist />} redirectTo="/login" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>

      <ToastContainer />

      <BasicStyle />
    </>
  ) : (
    <Spiner />
  );
};