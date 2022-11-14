import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box } from "../../common";
import { resetToken } from "../../redux/modules/join/joinSlice"

const MainNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoginClick, setIsLoginClick] = useState(false);
  const { statusCode,token } = useSelector((state) => state.join);

  useEffect(()=>{
    if( token ) {
      if(!localStorage.getItem("Authorization")){
        setIsLoginClick(true);
        dispatch(resetToken());
      }     
    }
  },[setIsLoginClick,token ,dispatch]);

  return (
    <Box>
      { token ? (
        <span
          onClick={() => {
            dispatch(resetToken());
            localStorage.removeItem("Authorization");
            localStorage.removeItem("Nickname");
          }}
        >
          로그아웃
        </span>
      ) : (
        <span
          onClick={() => {
            setIsLoginClick(!isLoginClick);
            navigate("/join");            
          }}
        >
          로그인
        </span>
      )}
    </Box>
  );
};

export default MainNav;
