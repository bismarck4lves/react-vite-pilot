import siteMap from "./siteMap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "pages/Login";
import UnProtectedMiddleware from "middlewares/UnProtectedRoutes";
import ProtectedMiddleware from "middlewares/ProtectedRoutes";
import ConfirmCode from "pages/ConfirmCode";
import RequestNewPassword from "pages/RequestNewPassword";
import ResetPassword from "pages/ResetPassword";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UnProtectedMiddleware />}>
          <Route index element={<Login />} />
          <Route path={siteMap.auth.login} element={<Login />} />
          <Route path={siteMap.auth.confirmCode} element={<ConfirmCode />} />
          <Route
            path={siteMap.auth.requestNewPassword}
            element={<RequestNewPassword />}
          />
          <Route path={siteMap.auth.newPassword} element={<ResetPassword />} />
        </Route>
        <Route element={<ProtectedMiddleware />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
