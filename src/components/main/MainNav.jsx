import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { Box, Button } from "../../common";
import axios from "axios";

const MainNav = () => {
	const BASE_URL = process.env.REACT_APP_SERVER;

	const navigate = useNavigate();

	const fetchPostId = async () => {
		try {
			const jwtToken = localStorage.getItem("jwtToken");
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
			<span
				onClick={() => {
					navigate("/join");
				}}
			>
				로그인
			</span>
			<Button onClick={handleGetPostId}>글쓰기</Button>
		</Box>
	);
};

export default MainNav;
