import { useNavigate } from "react-router-dom"
import {Box} from "../../common"

const MainNav = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <span
      onClick={()=>{ 
        navigate('/join');
      }}
      >로그인</span>
    </Box>
  )
}

export default MainNav
