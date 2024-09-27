import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks';
import { refreshUser } from 'redux/auth/operations';

import SharedLayout from '../SharedLayout';

//using Lazy Loading treduce loading time
const MainHome = lazy(() => import('../MainHome'));
const Teachers = lazy(() => import('../Teachers'));
const Favorites = lazy(() => import('../Favorites'));
const Login = lazy(() => import('../Login'));
const Registration = lazy(() => import('../Registration'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainHome />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          {/* <Route path="*" element={<div>Page Not Found</div>} /> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
