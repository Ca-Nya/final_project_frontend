import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Text, Box, Margin } from "../../common";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
	__requestSignIn,
	resetError,
} from "../../redux/modules/join/joinSlice";
import { useEffect } from "react";

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
			if (errorData?.status === 401) {
				alert("아이디와 비밀번호가 일치하지않습니다.");
			}
		}
		dispatch(resetError());
	}, [errorData, errorData?.status, dispatch]);
	//로그인 성공시
	useEffect(() => {
		if (token && statusCode === 200) {
			navigate("/");
		}
	});

	return (
		<Box variant="join">
			<Form
				variant="join"
				onSubmit={handleSubmit(value => {
					console.log("value =>", value);
					const { memberName, password } = value;
					dispatch(__requestSignIn({ memberName, password }));
				})}
			>
				<Text variant="join">CA NYA</Text>
				<Text variant="join-id">아이디(ID)</Text>
				<Input
					variant="join"
					purpose="sign-in"
					placeholder="아이디를 입력해주세요."
					{...register("memberName", { required: true })}
				/>
				{errors.memberName && errors.memberName.type === "required" ? (
					<Text>아이디를 입력해주세요.</Text>
				) : (
					""
				)}
				<Text variant="join-pw">비밀번호</Text>
				<Input
					variant="join"
					placeholder="비밀번호를 입력해주세요."
					{...register("password", {
						required: true,
					})}
				/>
				{errors.password && errors.password.type === "required" ? (
					<Text>비밀번호를 입력해주세요.</Text>
				) : (
					""
				)}
				<Button variant="join">로그인</Button>
				<Box variant="join-info">
					<Text variant="join-info">아직 카냐 회원이 아니세요?</Text>
					<Text
						variant="join-signup"
						onClick={() => {
							navigate("/register");
						}}
					>
						회원가입 하기
					</Text>
				</Box>
			</Form>
		</Box>
	);
};

export default SigninForm;
