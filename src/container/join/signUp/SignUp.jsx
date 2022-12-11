import {
	Input,
	Button,
	Form,
	Text,
	Margin,
	Flex,
	Box,
} from "../../../components";
import {
	__requestSignUp,
	resetIdCheck,
	resetIdExist,
	__isIdExist,
	resetNicknameCheck,
	resetNicknameExist,
	__isNicknameExist,
} from "../../../redux/modules/join/joinSlice";

const SignUp = ({
	onhandleSubmit,
	register,
	watch,
	errors,
	isCheckedId,
	isCheckedNickname,
	isExistNickname,
	isExistId,
	inputValue,
	setInputValue,
	password,
	dispatch,
	navigate,
}) => {
	return (
		<Form
			variant="signup"
			onSubmit={onhandleSubmit(value => {
				console.log("value=>", value);
				if (isCheckedId && isCheckedNickname) {
					const { memberName, memberNickname, password } = value;
					dispatch(__requestSignUp({ memberName, memberNickname, password }));
					alert("카냐에 오신걸 환영합니다.");
					navigate("/join"); // 네비게이트에 join
				} else if (!isCheckedId && !isCheckedNickname) {
					alert("아이디와 닉네임 중복체크를 해주세요.");
				} else if (!isCheckedId) {
					alert("아이디 중복체크를 해주세요.");
				} else if (!isCheckedNickname) {
					alert("닉네임 중복체크를 해주세요.");
				}
			})}
		>
			<Text variant="join">CA NYA</Text>
			<Margin margin="31px 0 0 0">
				<Margin margin="5px 0 8px 8px">
					<Text variant="join-id"> 닉네임 </Text>
				</Margin>
				<Box>
					<Flex gap="20px">
						<Input
							variant="signup"
							id="memberNickname"
							type="text"
							placeholder="별명(2~5자)을 입력해주세요."
							{...register("memberNickname", {
								required: true,
								maxLength: 5,
								minLength: 2,
							})}
							onChange={e => {
								dispatch(resetNicknameCheck());
								dispatch(resetNicknameExist());
								setInputValue(prev => {
									return {
										...prev,
										nickNameValue: e.target.value,
									};
								});
							}}
						/>
						<Button
							variant="join-duplicate"
							type="button"
							disabled={isCheckedNickname}
							onClick={() => {
								dispatch(__isNicknameExist(inputValue.nickNameValue));
							}}
						>
							중복확인
						</Button>
					</Flex>
				</Box>
				{errors.memberNickname && errors.memberNickname.type === "required" ? (
					<Margin margin="5px 0 0 10px ">
						<Flex>
							<Text variant="join-warning">닉네임을 입력해주세요.</Text>
						</Flex>
					</Margin>
				) : (
					""
				)}
				{errors.memberNickname && errors.memberNickname.type === "maxLength" ? (
					<Margin margin="5px 0 0 10px ">
						<Flex>
							<Text variant="join-warning">
								닉네임은 5자 이내로 작성바랍니다
							</Text>
						</Flex>
					</Margin>
				) : (
					""
				)}
				{errors.memberNickname && errors.memberNickname.type === "minLength" ? (
					<Margin margin="5px 0 0 10px ">
						<Flex>
							<Text variant="join-warning">
								닉네임은 2자 이상 ~ 5자 이하로 작성바랍니다
							</Text>
						</Flex>
					</Margin>
				) : (
					""
				)}
				{isCheckedNickname && !isExistNickname ? (
					<Margin margin="5px 0 0 10px ">
						<Flex>
							<Text variant="join-available">중복되지않은 닉네임입니다.</Text>
						</Flex>
					</Margin>
				) : (
					""
				)}
				{isExistNickname ? (
					<Margin margin="5px 0 0 10px ">
						<Flex>
							<Text variant="join-warning">이미 사용중인 닉네임입니다.</Text>
						</Flex>
					</Margin>
				) : (
					""
				)}

				<Margin margin="15px 0 8px 8px">
					<Text variant="join-id">아이디</Text>
				</Margin>
				<Box>
					<Flex gap="20px">
						<Input
							variant="signup"
							placeholder="아이디는 영어 대소문자, 숫자만 가능합니다"
							maxLength="10"
							{...register("memberName", {
								required: true,
								pattern: /^(?=.*[a-zA-Z])[-a-zA-Z0-9]{4,10}$/,
							})}
							onChange={e => {
								dispatch(resetIdCheck());
								dispatch(resetIdExist());
								setInputValue(prev => {
									return {
										...prev,
										idValue: e.target.value,
									};
								});
							}}
						/>
						<Button
							variant="join-duplicate"
							type="button"
							disabled={isCheckedId}
							onClick={() => {
								dispatch(__isIdExist(inputValue.idValue));
							}}
						>
							중복확인
						</Button>
					</Flex>
				</Box>
				{errors.memberName && errors.memberName.type === "required" ? (
					<Margin margin="5px 0 0 10px ">
						<Flex>
							<Text variant="join-warning">아이디를 입력해주세요.</Text>
						</Flex>
					</Margin>
				) : (
					""
				)}
				{errors.memberName && errors.memberName.type === "pattern" ? (
					<Margin margin="5px 0 0 10px ">
						<Flex>
							<Text variant="join-warning">
								아이디는 4~10자 이내, 영어 대소문자, 숫자만 가능합니다.
							</Text>
						</Flex>
					</Margin>
				) : (
					""
				)}
				{isCheckedId && !isExistId ? (
					<Margin margin="5px 0 0 10px ">
						<Flex>
							<Text variant="join-available">중복되지않은 아이디입니다.</Text>
						</Flex>
					</Margin>
				) : (
					""
				)}
				{isExistId ? (
					<Margin margin="5px 0 0 10px ">
						<Flex>
							<Text variant="join-warning">이미 사용중인 아이디입니다.</Text>
						</Flex>
					</Margin>
				) : (
					""
				)}

				<Margin margin="50px 0 8px 8px">
					<Text variant="join-id">비밀번호</Text>
				</Margin>
				<Input
					variant="signup-password"
					id="password"
					type="text"
					maxLength="20"
					minLength="6"
					placeholder="비밀번호를 입력해주세요."
					{...register("password", {
						required: true,
						pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/,
					})}
				/>
				{errors.password && errors.password.type === "required" ? (
					<Margin margin="5px 0 0 10px ">
						<Flex>
							<Text variant="join-warning">비밀번호를 입력해주세요.</Text>
						</Flex>
					</Margin>
				) : (
					""
				)}
				{errors.password && errors.password.type === "pattern" ? (
					<Margin margin="5px 0 0 10px ">
						<Flex>
							<Text variant="join-warning">
								비밀번호는 8~10자 이내, 최소 하나의 문자 및 하나의 숫자를 넣어
								작성해주세요.
							</Text>
						</Flex>
					</Margin>
				) : (
					""
				)}

				<Margin margin="15px 0 8px 8px">
					<Text variant="join-id">비밀번호 확인</Text>
				</Margin>
				<Input
					variant="signup-password"
					id="passwordCheck"
					name="passwordCheck"
					type="password"
					placeholder="비밀번호를 한번 더 입력해주세요."
					{...register("passwordCheck", {
						required: true,
						validate: value => value === password.current,
					})}
				/>

				{errors.passwordCheck && errors.passwordCheck.type === "required" && (
					<Margin margin="5px 0 0 10px ">
						<Flex>
							<Text variant="join-warning">비밀번호를 입력해주세요.</Text>
						</Flex>
					</Margin>
				)}
				{errors.passwordCheck && errors.passwordCheck.type === "validate" && (
					<Margin margin="5px 0 0 10px ">
						<Flex>
							<Text variant="join-warning">비밀번호가 일치하지 않습니다.</Text>
						</Flex>
					</Margin>
				)}
				<Margin margin="50px 0 0 0">
					<Button variant="join">회원가입 하기</Button>
				</Margin>
				<Margin margin="18px 0 0 90px">
					<Flex gap="30px">
						<Text>이미 아이디가 있으신가요?</Text>
						<Text
							variant="join-signup"
							onClick={() => {
								navigate("/join");
							}}
						>
							로그인 하기
						</Text>
					</Flex>
				</Margin>
			</Margin>
		</Form>
	);
};

export default SignUp;
