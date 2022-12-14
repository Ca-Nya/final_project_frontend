import {
	Box,
	Button,
	Input,
	Nav,
	Flex,
	FirstHeading,
	Image,
	Margin,
} from "../../components";
import { MainSelectBox } from "../../container/main";
import { resetToken } from "../../redux/modules/join/joinSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
// logo
import canyaLogo from "../../assets/icons/canya.png";
import { useRecoilState } from "recoil";
import { isProfile } from "../../recoil/Atom";
import * as Sentry from "@sentry/react";

const MainNav = ({ setResetMain, setSubmitValues }) => {
	const [profile, setProfile] = useRecoilState(isProfile);
	// Base Url
	const BASE_URL = process.env.REACT_APP_SERVER;
	// select값 state
	const [selectValues, setSelectValue] = useState({
		category: "boardTitle",
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
	const { token, profileImage } = useSelector(state => state.join);

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

			return response.data;
		} catch (error) {
			Sentry.captureException(error);
			throw error;
		}
	};

	// 게시글 아이디 요청 Hook
	const getPostId = useMutation(fetchPostId, {
		onMutate: variables => {},
		onSuccess: data => {
			navigate(`/write/${data}`);
		},
		onError: (error, variables) => {
			Sentry.captureException(error);
			alert("게시글을 작성할 수 없습니다!");
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
					<Flex jc="center" ai="center" gap="12px">
						<Box variant="main-logo">
							<Flex ai="center" jc="center">
								<Button onClick={handleResetMain}>
									<FirstHeading aria-label="canya logo" variant="main-logo">
										<Image
											src={canyaLogo}
											alt="메인 카냐 로고"
											variant="main-logo"
										/>
									</FirstHeading>
								</Button>
							</Flex>
						</Box>
						<Box variant="nav-container">
							<Margin margin="0 3%">
								<Box variant="main-search">
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
								</Box>
							</Margin>
						</Box>
						{jwtToken ? (
							<Box variant="main-user-info">
								<Flex ai="center" gap="12px">
									<Button
										onClick={() => {
											navigate("/mypage/myall");
											setProfile(true);
										}}
										aria-label="사용자 정보 관리 버튼"
										variant="main-user-info"
									>
										<Image
											src={
												profileImage || localStorage.getItem("profileImageUrl")
											}
											alt="프로필 이미지"
											variant="medium-profile"
										/>
									</Button>
									<Button
										variant="main-logout"
										onClick={() => {
											dispatch(resetToken());
											localStorage.clear();
											navigate("/");
										}}
									>
										로그아웃
									</Button>
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
			<Button
				aria-label="글쓰기 버튼"
				onClick={handleGetPostId}
				variant="fixed-write"
			/>
		</>
	);
};

export default MainNav;
