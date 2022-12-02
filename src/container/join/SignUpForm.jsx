import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef } from "react";
import SignUp from "./signUp/SignUp";

const SignUpForm = () => {
	const dispatch = useDispatch();
	// const [join,setJoin]=useRecoilState(joinAtom);
	const navigate = useNavigate();
	//React Hook Form
	const {
		handleSubmit,
		register,
		watch,
		formState: { errors },
	} = useForm();
	//닉네임, 아이디 중복검사 state
	const [inputValue, setInputValue] = useState({
		nickNameValue: "",
		idValue: "",
	});
	//닉네임, 아이디 중복검사 redux
	const { isCheckedId, isCheckedNickname, isExistNickname, isExistId } =
		useSelector(state => state.join); // join이 아닌 signup
	//비밀번호 확인
	const password = useRef();
	password.current = watch("password");

	return (
		<SignUp
			onhandleSubmit={handleSubmit}
			register={register}
			watch={watch}
			errors={errors}
			isCheckedId={isCheckedId}
			isCheckedNickname={isCheckedNickname}
			isExistNickname={isExistNickname}
			isExistId={isExistId}
			inputValue={inputValue}
			setInputValue={setInputValue}
			password={password}
			dispatch={dispatch}
			navigate={navigate}
		/>
	);
};

export default SignUpForm;
