import {
	Form,
	Input,
	Button,
	Text,
	Box,
	Margin,
	Flex,
} from "../../../components";
import {
	__requestSignIn,
	resetError,
} from "../../../redux/modules/join/joinSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const SignIn = ({ dispatch, navigate, onhandleSubmit, register, errors }) => {
	return (
		<Box variant="join">
			<Form
				variant="join"
				onSubmit={onhandleSubmit(value => {
					const { memberName, password } = value;
					dispatch(__requestSignIn({ memberName, password }));
				})}
			>
				<Margin margin="15% 0 0 0">
					<Text variant="join">CA NYA</Text>
				</Margin>
				<Box variant="join-text">
					<Margin margin="5% 0 2% 8%">
						<Text variant="join-id">아이디(ID)</Text>
						<Margin margin="2% 0 0 0">
							<Input
								variant="join"
								purpose="sign-in"
								placeholder="아이디를 입력해주세요."
								{...register("memberName", { required: true })}
							/>
						</Margin>
						{errors.memberName && errors.memberName.type === "required" ? (
							<Margin margin="2% 0 0 3% ">
								<Flex>
									<Text variant="join-warning">아이디를 입력해주세요.</Text>
								</Flex>
							</Margin>
						) : (
							""
						)}
					</Margin>
				</Box>

				<Box variant="join-text">
					<Margin margin="2% 0 2% 8%">
						<Text variant="join-id">비밀번호</Text>
						<Margin margin="2% 0 0 0">
							<Input
								type="password"
								variant="join"
								placeholder="비밀번호를 입력해주세요."
								{...register("password", {
									required: true,
								})}
							/>
						</Margin>
						{errors.password && errors.password.type === "required" ? (
							<Margin margin="2% 0 0 3%">
								<Flex>
									<Text variant="join-warning">비밀번호를 입력해주세요.</Text>
								</Flex>
							</Margin>
						) : (
							""
						)}
					</Margin>
				</Box>
				<Margin margin="5.75rem 0 0 0">
					<Button variant="join">로그인</Button>
					<Margin margin="3% 2% 0 2%">
						<Flex jc="space-between">
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
				</Margin>
			</Form>
		</Box>
	);
};

export default SignIn;
