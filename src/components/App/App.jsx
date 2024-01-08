import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';

import SharedLayout from '../SharedLayout';

//using Lazy Loading treduce loading time
const MainHome = lazy(() => import('../MainHome'));

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="learn-lingo/" element={<SharedLayout />}>
            <Route index element={<MainHome />} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
