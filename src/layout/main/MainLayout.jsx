import {
	Box,
	Margin,
	FirstHeading,
	Image,
	Flex,
	DataList,
	DataTerm,
	DataDesc,
	Hidden,
	ThirdHeading,
	Text,
	Strong,
	Button,
} from "../../components";
import { MainNav, MainFooter } from "../../container/main";
import { useFetchSearchList } from "../../querys/list";
import { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { Outlet } from "react-router-dom";
// 로딩 스피너
import spinner from "../../assets/icons/spinner.gif";

const MainLayout = () => {
	// React Router
	const navigate = useNavigate();
	// 검색 값 state
	const [submitValues, setSubmitValues] = useState({
		category: "",
		keyword: "",
	});
	// 메인 페이지 초기화 state (검색 전 메인 화면)
	const [resetMain, setResetMain] = useState(true);
	// 검색 리스트 요청 무한스크롤 Hook
	const { data, status, fetchNextPage, isFetchingNextPage, error, refetch } =
		useFetchSearchList(submitValues);
	console.log(
		"useFetchSearchList data ==>",
		data,
		"status =>",
		status,
		"isFetchingNextPage =>",
		isFetchingNextPage,
		"error =>",
		error,
	);

	useEffect(() => {
		if (submitValues.category) {
			refetch();
		}
	}, [submitValues, refetch]);

	// observe
	const { ref, inView } = useInView();
	console.log("inView =>", inView);
	// observe시 다음 게시글 요청 Effect
	useEffect(() => {
		if (inView) fetchNextPage();
	}, [inView, fetchNextPage]);

	if (status === "error")
		return (
			<>
				<MainNav
					setResetMain={setResetMain}
					setSubmitValues={setSubmitValues}
				/>
				<Box variant="spinner-wrap">
					<Flex fd="column" jc="center" ai="center" gap="100px">
						<Strong variant="warning">
							에러입니다.😭 빠른 시일 내에 해결하겠습니다.
						</Strong>
						<Button onClick={() => navigate(-1)} variant="cafe-review-post">
							돌아가기
						</Button>
					</Flex>
				</Box>
				<MainFooter />
			</>
		);

	return (
		<>
			<MainNav setResetMain={setResetMain} setSubmitValues={setSubmitValues} />
			<Margin margin="78px 0 0 0">
				{status === "loading" && !resetMain && (
					<Box variant="spinner-wrap">
						<Flex jc="center" ai="center">
							<Image src={spinner} alt="로딩중" variant="spinner" />
						</Flex>
					</Box>
				)}
				{data && !resetMain ? (
					<>
						<Margin margin="170px 0 200px 0 ">
							<Box variant="container">
								<Box variant="overalls-nav">
									<Margin margin="0 57px 0 0">
										<FirstHeading variant="title">검색결과🔍</FirstHeading>
									</Margin>
								</Box>
								{data.pages[0].list ? (
									<>
										{
											<Margin margin="45px 0 0 0">
												<Flex jc="center" fw="wrap" gap="24px">
													{data?.pages.map((page, idx) => {
														return (
															<Fragment key={idx}>
																{page.list?.map((item, index) => {
																	return (
																		<Box
																			variant="list-item"
																			key={item.boardId}
																			onClick={() => {
																				setResetMain(true);
																				navigate(
																					`/detail/post/${item.boardId}`,
																				);
																			}}
																		>
																			<Image
																				src={item.imageUrl}
																				alt="카페 이미지"
																				variant="list-item"
																			/>
																			<Box variant="main-cany-pick-content-wrap">
																				<Box variant="list-user-info-wrap">
																					<Flex ai="center">
																						<Flex ai="center" gap="7px">
																							<Image
																								src={item.memberProfileImage}
																								alt="프로필 이미지"
																								variant="small-profile"
																								rank={localStorage.getItem(
																									"memberStatus",
																								)}
																							/>
																							<DataList>
																								<Hidden>
																									<DataTerm>닉네임</DataTerm>
																								</Hidden>
																								<DataDesc variant="main-canya-pick-content-nickname">
																									{item.memberNickname}
																								</DataDesc>
																							</DataList>
																						</Flex>
																						<DataList>
																							<Hidden>
																								<DataTerm>평균 평점</DataTerm>
																							</Hidden>
																							<DataDesc variant="list-content-rate">
																								{item.totalRating}
																							</DataDesc>
																						</DataList>
																					</Flex>
																				</Box>
																				<Margin margin="12px 0">
																					<ThirdHeading
																						variant="list-title"
																						className="ellipsis-sm"
																					>
																						{item.boardTitle}
																					</ThirdHeading>
																				</Margin>
																				<Box variant="list-content-desc">
																					<Text
																						variant="main-canya-pick-content"
																						className="ellipsis"
																					>
																						{item.boardContent}
																					</Text>
																				</Box>
																				<Margin margin="15px 0 0 0">
																					<Text variant="list-item-date">
																						{item.date}
																					</Text>
																				</Margin>
																			</Box>
																		</Box>
																	);
																})}
															</Fragment>
														);
													})}
												</Flex>
											</Margin>
										}
									</>
								) : (
									<Box variant="spinner-wrap">
										<Flex jc="center" ai="center">
											<Strong variant="warning">
												검색 결과가 존재하지 않습니다.👀
											</Strong>
										</Flex>
									</Box>
								)}
							</Box>
						</Margin>
					</>
				) : (
					<Outlet></Outlet>
				)}
				<MainFooter />
			</Margin>
		</>
	);
};

export default MainLayout;
