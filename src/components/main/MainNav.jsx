import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button } from "../../common";
import { resetToken } from "../../redux/modules/join/joinSlice";
import { useMutation } from "react-query";
import axios from "axios";

const MainNav = () => {
	const BASE_URL = process.env.REACT_APP_SERVER;
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const jwtToken = localStorage.getItem("Authorization")

	const { token } = useSelector(state => state.join);
	console.log("token=>", token);

	useEffect(() => {
		if (!jwtToken) {
			dispatch(resetToken());
		}
	}, [dispatch,jwtToken]);

	const fetchPostId = async () => {
		try {
			const jwtToken = localStorage.getItem("Authorization");
			const response = await axios.post(
				`${BASE_URL}/auth/board/save`,
				"fetchPostId",
				{
					headers: {
						Authorization: jwtToken,
						"Content-Type": "application/json",
					},
				},
			);
			console.log("response =>", response);
			return response.data;
		} catch (error) {
			console.log("error =>", error);
		}
	};

	const getPostId = useMutation(fetchPostId, {
		onMutate: variables => {
			console.log("onMutate =>", variables);
		},
		onSuccess: (data, variables, context) => {
			console.log(
				"onSuccess =>",
				"data =>",
				data,
				"variables =>",
				variables,
				"context =>",
				context,
			);
			navigate(`/write/${data}`);
		},
		onError: (error, variables, context) => {
			console.log(
				"onError =>",
				error,
				"variables =>",
				variables,
				"context =>",
				context,
			);
		},
		onSettled: (data, error, variables, context) => {
			console.log(
				"onSettled =>",
				"data =>",
				data,
				"error =>",
				error,
				"variables =>",
				variables,
				"context =>",
				context,
			);
		},
	});

	const handleGetPostId = () => {
		getPostId.mutate();
	};

	return (
		<Box>
			{token ? (
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
				onClick={()=>{
					navigate("/join")
				}}
				>로그인</span>
			)}
			<Button onClick={handleGetPostId}>글쓰기</Button>
		</Box>
	);
};

export default MainNav;
