import React from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import { useAppDispatch } from "hooks/storeUsage";
import { setClientWidth } from "reduxStore/reducers/ui";
import { DEPOSIT } from "pathNames";
import PrivateRoute from "PrivateRoute";

import AppWrapper from "pages/AppWrapper";
import Deposit from "pages/AppWrapper/Deposit";

function App() {
  const dispatch = useAppDispatch();

  window.onresize = () => dispatch(setClientWidth(document.documentElement.clientWidth));

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute element={<AppWrapper />} />}>
            <Route path={DEPOSIT} element={<Deposit />} />
            <Route path="/" element={<Navigate to={DEPOSIT} />} />
          </Route>

          <Route path="*" element={<Navigate to={DEPOSIT} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
