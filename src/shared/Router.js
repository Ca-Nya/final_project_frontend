import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/main/MainLayout";
import SignInPage  from "../pages/join/";
import SignUpPage  from "../components/join/SignUpForm";

const Router = () => {
  return (
    <>
      	<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainLayout />} />
					<Route path="/join" element={<SignInPage  />} />
					<Route path="/register" element={<SignUpPage  />} />
				</Routes>
			</BrowserRouter>
    </>
  )
}

export default Router
