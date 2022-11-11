import { useNavigate } from "react-router-dom";
import { Input, Box, Button, Form } from "../../common";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import {joinAtom} from "../../recoil/AtomJoin"

const SignUpForm = () => {
  const [join,setJoin]=useRecoilState(joinAtom);
  const navigate = useNavigate();
  const {
		handleSubmit,
		register,
		watch,
		formState: { errors },
	} = useForm();
  console.log(watch("memberName"));
  return (
    <>
      <Form>
        <p>회원가입</p>
        <label htmlFor="memberName">id</label>
        <Input
          placeholder="아이디를 입력해주세요."
          {...register("memberName",{ required: true, pattern:/^(?=.*[a-zA-Z])[-a-zA-Z0-9]{4,10}$/, })}
          // onChange={handleUsername}
        />
        <Button> id중복확인</Button>
        {errors.memberName && errors.memberName.type ==="required" && <p>아이디를 입력해주세요.</p>}
        {errors.memberName && errors.memberName.type ==="pattern" && <p>아이디는 영어 대소문자, 숫자만 가능합니다.</p>}        
        <br />
        <label htmlFor="memberNickName">닉네임</label>
        <Input
          id="memberNickName"
          name="memberNickName"
          type="text"
          placeholder="닉네임을 입력해주세요."
          // ref={register({ required: true, maxLength:15 })}
          // onChange={handleUsername}
        />
        {/* {errors.memberNickName && errors.memberNickName.type ==="required" && <p>닉네임을 입력해주세요.</p>}
        {errors.memberNickName && errors.memberNickName.type ==="maxLength" && <p>닉네임은 15자 이내로 작성바랍니다.</p>} */}
        <Button> 닉네임중복확인</Button>
        <br />
        <label htmlFor="password">
          비밀번호
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            // ref={register({ required: true, minLength:6 })}
          />
       
        <br />
        <label htmlFor="passwordCheck">
          비밀번호 확인
          <Input
            id="passwordCheck"
            name="passwordCheck"
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요."
          />
        </label>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          등록하기
        </Button>
      </Form>
    </>
  );
};

export default SignUpForm;
