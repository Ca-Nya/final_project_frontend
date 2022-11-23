import {
	Box,
	Button,
	Input,
	Text,
	Nav,
	Select,
	Option,
	Flex,
	FirstHeading,
} from "../../common";
import { MainSelectBox } from "../../components/main";
import { resetToken } from "../../redux/modules/join/joinSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const MainNav = ({ setResetMain, setSubmitValues }) => {
	// Base Url
	const BASE_URL = process.env.REACT_APP_SERVER;
	// select값 state
	const [selectValues, setSelectValue] = useState({
		category: "all",
		keyword: "",
	});
	// 검색 input value 변경 핸들러
	const handleChangeSearchInput = e => {
		setSelectValue(prev => {
			return {
				...prev,
				keyword: e.target.value,
			};
		});
	};
	// 검색 핸들러
	const handleSubmitSearchValue = () => {
		setResetMain(false);
		setSubmitValues(selectValues);
	};
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

	// 메인 페이지 리셋 핸들러
	const handleResetMain = () => {
		setResetMain(true);
		navigate("/");
	};

	return (
		<>
			<Nav variant="main">
				<Box variant="main-nav-wraper">
					<Flex jc="center" ai="center">
						<Box onClick={handleResetMain} variant="main-logo">
							<FirstHeading aria-label="canya logo" variant="main-logo" />
						</Box>
						<Box variant="nav-container">
							<Box variant="main-search">
								<Flex jc="center">
									<MainSelectBox setSelectValue={setSelectValue} />
									<Input
										variant="main-search"
										onChange={handleChangeSearchInput}
									/>
									<Button
										variant="main-search"
										area-label="리뷰 검색 버튼"
										onClick={handleSubmitSearchValue}
									/>
								</Flex>
							</Box>
						</Box>
						{jwtToken ? (
							<Box variant="main-user-info">
								<Flex>
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
								</Flex>
							</Box>
						) : (
							<Box variant="main-user-info">
								<Flex jc="center">
									<Button
										variant="main-login"
										onClick={() => {
											navigate("/join");
										}}
									>
										로그인
									</Button>
								</Flex>
							</Box>
						)}
					</Flex>
				</Box>
			</Nav>
			<Button onClick={handleGetPostId}>글쓰기</Button>
		</>
	);
};

export default MainNav;
