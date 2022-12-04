import { useNavigate } from "react-router-dom";
import { Box } from "../../components";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { resetError } from "../../redux/modules/join/joinSlice";
import { useEffect } from "react";
import SignIn from "./signIn/SignIn";

const SigninForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	//아이디와 비밀번호가 일치하지 않을 때 redux
	const errorData = useSelector(state => state.join.error);
	//아이디와 비밀번호 성공시 redux
	const { statusCode, token } = useSelector(state => state.join);
	//React Hook Form
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();
	
	//아이디와 비밀번호가 일치하지 않을 때
	useEffect(() => {
		if (errorData) {
			if (errorData?.errorMessage === "일치하는 계정이 없습니다.") {
				alert("아이디와 비밀번호가 일치하지않습니다.");
			}
		}
		dispatch(resetError());
	}, [errorData, errorData?.status, dispatch]);

	//로그인 성공시
	useEffect(() => {
		if (token && statusCode === 200) {
			navigate("/");
			alert("카냐에 오신걸 환영합니다.")
		}
	});

	return (
		<Box>
			<SignIn
			 dispatch={dispatch}
			 navigate={navigate}
			 onhandleSubmit={handleSubmit}
			 register={register}
			 errors={errors}
			 errorData={errorData}
			 statusCode={statusCode}
			 token={token}
			/>		
		</Box>
	);
};

export default SigninForm;
