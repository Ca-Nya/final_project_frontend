import {
	Box,
	Button,
	Input,
	Text,
	Nav,
	Select,
	Option,
	Flex,
} from "../../common";
import { resetToken } from "../../redux/modules/join/joinSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const MainNav = ({
	handleChangeSelect,
	handleChangeSearchInput,
	selectValues,
	handleSubmitSearchValue,
	setResetMain,
}) => {
	const BASE_URL = process.env.REACT_APP_SERVER;
	// React Dispatcher
	const dispatch = useDispatch();
	// React Router
	const navigate = useNavigate();
	// 로컬스토리지 토큰
	const jwtToken = localStorage.getItem("Authorization");
	//토큰 리셋 useEffect
	useEffect(() => {
		if (!jwtToken) {
			dispatch(resetToken());
		}
	}, [dispatch, jwtToken]);
	// 토큰 전역 state
	const { token } = useSelector(state => state.join);

	useEffect(() => {
		if (token) {
			if (!localStorage.getItem("Authorization")) {
				dispatch(resetToken());
			}
		}
	}, [token, dispatch]);

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
			console.log("onSuccess =>", "data =>", data, "variables =>");
			navigate(`/write/${data}`);
		},
		onError: (error, variables, context) => {
			console.log("onError =>", error, "variables =>", variables);
		},
	});
	// postId get요청
	const handleGetPostId = () => {
		getPostId.mutate();
	};
	// select option 생성 배열
	const selectList = [
		["all", "통합검색"],
		["memberNickname", "글쓴이"],
		["boardTitle", "글제목"],
		["boardContent", "글내용"],
	];
	// 메인 페이지 리셋 핸들러
	const handleResetMain = () => {
		setResetMain(true);
		navigate("/");
	};

	return (
		<>
			<Nav variant="main">
				<Flex jc="center" ai="center">
					<Box variant="main-logo" onClick={handleResetMain}>
						Logo
					</Box>
					<Box variant="nav-container">
						<Box variant="main-search">
							<Select
								variant="main-search"
								name="cafeSearch"
								id="cafeSearch"
								onChange={handleChangeSelect}
								value={selectValues.category}
							>
								{selectList.map(option => {
									return (
										<Option value={option[0]} key={option[0]}>
											{option[1]}
										</Option>
									);
								})}
							</Select>
							<Input variant="main-search" onChange={handleChangeSearchInput} />
							<Button onClick={handleSubmitSearchValue}>검색</Button>
						</Box>
					</Box>
					{jwtToken ? (
						<Box variant="main-user-info">
							<Text
								onClick={() => {
									dispatch(resetToken());
									localStorage.clear();
									navigate("/");
								}}
							>
								로그아웃
							</Text>
							<Text
								onClick={() => {
									navigate("/mypage");
								}}
							>
								마이페이지
							</Text>
						</Box>
					) : (
						<Box variant="main-user-info">
							<Text
								onClick={() => {
									navigate("/join");
								}}
							>
								로그인
							</Text>
						</Box>
					)}
				</Flex>
			</Nav>
			<Button onClick={handleGetPostId}>글쓰기</Button>
		</>
	);
};

export default MainNav;
