import { useNavigate } from "react-router-dom";
import { Input, Button, Form } from "../../common";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
	__requestSignUp,
	resetIdCheck,
	resetIdExist,
	__isIdExist,
	resetNicknameCheck,
	resetNicknameExist,
	__isNicknameExist,
} from "../../redux/modules/join/joinSlice";
import { useState, useRef } from "react";

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
		useSelector(state => state.join);

	//비밀번호 확인
	const password = useRef();
	password.current = watch("password");

	return (
		<>
			<Form
				onSubmit={handleSubmit(value => {
					console.log("value=>", value);
					if (isCheckedId && isCheckedNickname) {
						const { memberName, memberNickname, password } = value;
						dispatch(__requestSignUp({ memberName, memberNickname, password }));
						alert("카냐에 오신걸 환영합니다.");
						navigate("/join");
					} else if (!isCheckedId && !isCheckedNickname) {
						alert("아이디와 닉네임 중복체크를 해주세요.");
					} else if (!isCheckedId) {
						alert("아이디 중복체크를 해주세요.");
					} else if (!isCheckedNickname) {
						alert("닉네임 중복체크를 해주세요.");
					}
				})}
			>
				<p>회원가입</p>
				<label htmlFor="memberName">id</label>
				<Input
					placeholder="아이디를 입력해주세요."
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
					type="button"
					disabled={isCheckedId}
					onClick={() => {
						dispatch(__isIdExist(inputValue.idValue));
					}}
				>
					id중복확인
				</Button>
				{errors.memberName && errors.memberName.type === "required" ? (
					<p>아이디를 입력해주세요.</p>
				) : (
					""
				)}
				{errors.memberName && errors.memberName.type === "pattern" ? (
					<p>아이디는 4~10자 이내, 영어 대소문자, 숫자만 가능합니다.</p>
				) : (
					""
				)}
				{isCheckedId && !isExistId ? <p> 사용가능한 아이디입니다.</p> : ""}
				{isExistId ? <p> 이미 사용중인 아이디 입니다.</p> : ""}
				<br />
				<label htmlFor="memberNickname">닉네임</label>
				<Input
					id="memberNickname"
					type="text"
					placeholder="닉네임을 입력해주세요."
					{...register("memberNickname", { required: true, maxLength: 10 })}
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
				{errors.memberNickname && errors.memberNickname.type === "required" ? (
					<p>닉네임을 입력해주세요.</p>
				) : (
					""
				)}
				{errors.memberNickname && errors.memberNickname.type === "maxLength" ? (
					<p>닉네임은 10자 이내로 작성바랍니다.</p>
				) : (
					""
				)}
				{isCheckedNickname && !isExistNickname ? (
					<p> 사용가능한 닉네임입니다.</p>
				) : (
					""
				)}
				{isExistNickname ? <p> 이미 사용중인 닉네임 입니다.</p> : ""}
				<Button
					type="button"
					disabled={isCheckedNickname}
					onClick={() => {
						dispatch(__isNicknameExist(inputValue.nickNameValue));
					}}
				>
					닉네임중복확인
				</Button>
				<br />
				<label htmlFor="password">비밀번호</label>
				<Input
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
					<p>비밀번호를 입력해주세요.</p>
				) : (
					""
				)}
				{errors.password && errors.password.type === "pattern" ? (
					<p>
						비밀번호는 8~10자 이내, 최소 하나의 문자 및 하나의 숫자를 넣어
						작성해주세요.
					</p>
				) : (
					""
				)}
				<br />
				<label htmlFor="passwordCheck">
					비밀번호 확인
					<Input
						id="passwordCheck"
						name="passwordCheck"
						type="text"
						placeholder="비밀번호를 한번 더 입력해주세요."
						{...register("passwordCheck", {
							required: true,
							validate: value => value === password.current,
						})}
					/>
				</label>
				{errors.passwordCheck && errors.passwordCheck.type === "required" && (
					<p>비밀번호를 입력해주세요.</p>
				)}
				{errors.passwordCheck && errors.passwordCheck.type === "validate" && (
					<p>비밀번호가 일치하지 않습니다.</p>
				)}
				<Button>등록하기</Button>
			</Form>
		</>
	);
};

export default SignUpForm;
