import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Text, Box, Margin, Flex } from "../../common";
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
				<Margin margin="99px 0 24px 0">
					<Text variant="join">CA NYA</Text>
				</Margin>
				<Margin margin="0 0 8px 110px">
					<Text variant="join-id">아이디(ID)</Text>
				</Margin>
				<Input
					variant="join"
					purpose="sign-in"
					placeholder="아이디를 입력해주세요."
					{...register("memberName", { required: true })}
				/>
				{errors.memberName && errors.memberName.type === "required" ? (
					<Margin margin ="5px 290px 0 0 ">
						<Flex >
					<Text variant="join-warning">아이디를 입력해주세요.</Text>
					</Flex>
					</Margin>
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
					<Margin margin ="5px 280px 0 0 ">
					<Flex >
				<Text variant="join-warning">비밀번호를 입력해주세요.</Text>
				</Flex>
				</Margin>
				) : (
					""
				)}
				<Margin margin="92px 0 0 0">
				<Button variant="join">로그인</Button>
				</Margin>
				<Box variant="join-info">
					<Margin margin="25px 0 8px 60px">
						<Flex gap="140px">
					<Text variant="join-info">아직 카냐 회원이 아니세요?</Text>					
					<Text
						variant="join-signup"
						onClick={() => {
							navigate("/register");
						}}
					>
						회원가입 하기
					</Text>
					</Flex>
					</Margin>
				</Box>
			</Form>
		</Box>
	);
};

export default SigninForm;
