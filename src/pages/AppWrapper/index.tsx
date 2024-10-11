import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { useAppDispatch } from "hooks/storeUsage";
import { setDeposit, setInfo } from "reduxStore/reducers/user";
import User from "services/User";

import Header from "shared/Header";
import Loader from "shared/Loader";

import "./styles.scss";

const AppWrapper = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getData = async () => {
    try {
      const [userData, userDeposit] = await Promise.all([
        User.getUserInfo(),
        User.getUserDeposit()
      ])
      dispatch(setInfo(userData));
      dispatch(setDeposit(userDeposit));
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    // getting general user data
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app-wrapper">
      {!isLoading && <Header />}
      <div className="app-content">
        {isLoading ? (
          <Loader />
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  )
}

export default AppWrapper;
