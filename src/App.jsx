import Router from "./shared/Router";
import GlobalStyles from "./GlobalStyles";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {resetToken} from "../src/redux/modules/join/joinSlice"

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    if(!localStorage.getItem("Authorization")){
      dispatch(resetToken());
    }
  },[dispatch]);
  return (
  <>
  <GlobalStyles/>
  <Router />
  </>
  );
}

export default App;
