import {
	Form,
	Input,
	Button,
	Text,
	Box,
	Margin,
	Flex,
	Image,
} from "../../../components";
import {
	__requestSignIn,
	resetError,
} from "../../../redux/modules/join/joinSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import logo from "../../../assets/icons/canya_black.png";

const MblSignIn = ({
	dispatch,
	navigate,
	onhandleSubmit,
	register,
	errors,
}) => {
	return (
		<Box size="container">
			<Form
				onSubmit={onhandleSubmit(value => {
					console.log("value =>", value);
					const { memberName, password } = value;
					dispatch(__requestSignIn({ memberName, password }));
				})}
			>
				<Margin margin="30px 0 30px 0">
					<Image size="m-logo" src={logo}></Image>
				</Margin>
				<Margin margin="0 0 15px 0">
					<Text size="l">아이디(ID)</Text>
					<Margin margin="6px auto">
						<Input
							size="l"
							purpose="sign-in"
							placeholder="아이디를 입력해주세요."
							{...register("memberName", { required: true })}
						/>
					</Margin>

					{errors.memberName && errors.memberName.type === "required" ? (
						<Margin margin="3px 0 0 2px">
							<Flex>
								<Text size="s-red">아이디를 입력해주세요.</Text>
							</Flex>
						</Margin>
					) : (
						""
					)}
				</Margin>
				<Margin margin="0 0 10px 0">
					<Text size="l">비밀번호</Text>
					<Margin margin="6px auto">
						<Input
							size="l"
							placeholder="비밀번호를 입력해주세요."
							{...register("password", {
								required: true,
							})}
						/>
					</Margin>
					{errors.password && errors.password.type === "required" ? (
						<Margin margin="6px 0 0 2px">
							<Flex>
								<Text variant="join-warning">비밀번호를 입력해주세요.</Text>
							</Flex>
						</Margin>
					) : (
						""
					)}
				</Margin>

				<Margin margin="52px 0 0 0">
					<Button size="l">로그인</Button>
					<Margin margin="8px 2px 200px 2px">
						<Flex jc="space-between">
							<Text size="m">아직 카냐 회원이 아니세요?</Text>
							<Text
								size="l-line"
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

export default MblSignIn;
