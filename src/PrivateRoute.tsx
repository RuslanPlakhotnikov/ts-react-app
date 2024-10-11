import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { SIGN_IN } from "pathNames";
import { getToken } from "helpers/tokenHelper";

interface IProps {
  element: React.ReactNode
}

const PrivateRoute: React.FC<IProps> = ({ element }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken()) {
      navigate(SIGN_IN);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return getToken() ? (element as React.ReactElement) : <Navigate to={SIGN_IN} />;
};

export default PrivateRoute;