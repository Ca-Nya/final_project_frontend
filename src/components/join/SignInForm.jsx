import { useNavigate } from "react-router-dom"
import {Form,Input,Button} from "../../common"

const SigninForm = () => {
    const navigate = useNavigate();
  return (
    <>  
    <Form>
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
    >회원가입</span>
    </>
  )
}

export default SigninForm
