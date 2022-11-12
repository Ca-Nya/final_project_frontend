import { useNavigate } from "react-router-dom"
import {Form,Input,Button} from "../../common"
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { __requestSignIn } from '../../redux/modules/join/joinSlice'

const SigninForm = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
      handleSubmit,
      register,
      formState: { errors },
    } = useForm();
  return (
    <>
    <Form onSubmit={handleSubmit(value => {
      console.log('value =>', value)
      const { id, password } = value;
      dispatch(__requestSignIn({memberName: id, password}))
    })}>
     <Input {...register("id")}/>
     <Input {...register("password")}/>
     <Button>로그인</Button>
    </Form>  
    {/* <Form>
      <p>ID</p>
      <Input />
      <p>비밀번호</p>
      <Input />
      <Button>로그인</Button>      
    </Form>
    <span
    onClick={()=>{
        navigate('/register')
    }}
    >회원가입</span> */}
    </>
  )
}

export default SigninForm
