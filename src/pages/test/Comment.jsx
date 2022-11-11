import { useQuery } from "react-query";
import axios from "axios";

const Comment = () => {
  const BASE_URL = process.env.REACT_APP_SERVER;
  const getComments = async () => {
    try {
      const nickname = "jelly123";
      const data = await axios.get(`${BASE_URL}/member/name/check/${nickname}`);
      return data;
    } catch (error) {
      return error;
    }
  };
  const { status, data, isFetching, isLoading, error } = useQuery(
    "nickname",
    getComments
  );

  console.log(
    "status =>",
    status,
    "data =>",
    data,
    "isFetching =>",
    isFetching,
    "isLoading =>",
    isLoading,
    "error =>",
    error
  );

  if (error) return <div>에러</div>;

  if (isLoading) return <div>로딩중</div>;

  return <div>성공?</div>;
};

export default Comment;
