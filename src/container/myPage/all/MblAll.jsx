import { Box, Image, Text, Margin, Flex } from "../../../components";
import rightArrow from "../../../assets/icons/right_arrow.svg";

const MblAll = ({
	recentlyMyBoardList,
	recentlyMyCommentList,
	recentlyMyHeartBoardList,
	recentlyMyCommunityList,
	recentlyMyCommunityCommentList,
	navigate,
	handleGetPostId,
	dispatch,
	resetToken,
}) => {
	return (
		<Box variant="mypage-category">
			<Box>
				<Margin margin="16px auto">
					<Flex jc="space-between">
						<Text
							size="lg"
							onClick={() => {
								navigate(`/mypage/myboard`);
							}}
						>
							내가 쓴 글 ✍🏻
						</Text>
						<Image
							src={rightArrow}
							onClick={() => {
								navigate(`/mypage/myboard`);
							}}
						/>
					</Flex>
				</Margin>
				<Flex gap="6px">
					{recentlyMyBoardList?.map(item => {
						return (
							<Box key={item.boardId}>
								<Image
									size="s"
									src={item.imageList[0].imageUrl}
									alt={item.boardTitle}
									onClick={() => {
										navigate(`/detail/post/${item.boardId}`);
									}}
								></Image>
							</Box>
						);
					})}
				</Flex>
			</Box>
			<Box>
				<Margin margin="16px auto">
					<Flex jc="space-between">
						<Text
							size="lg"
							onClick={() => {
								navigate(`/mypage/mylike`);
							}}
						>
							좋아요 한 글 ❣️{" "}
						</Text>
						<Image
							src={rightArrow}
							onClick={() => {
								navigate(`/mypage/mylike`);
							}}
						/>
					</Flex>
				</Margin>
				<Flex gap="6px">
					{recentlyMyHeartBoardList?.map(item => {
						return (
							<Box key={item.boardId}>
								<Box key={item.boardId}>
									<Image
										size="s"
										src={item.imageList[0].imageUrl}
										alt={item.boardTitle}
										onClick={() => {
											navigate(`/detail/post/${item.boardId}`);
										}}
									></Image>
								</Box>
							</Box>
						);
					})}
				</Flex>
			</Box>
			<Box>
				<Margin margin="16px auto">
					<Flex jc="space-between">
						<Text
							size="lg"
							onClick={() => {
								navigate(`/mypage/mycommunityboard`);
							}}
						>
							커뮤니티 글 👥{" "}
						</Text>
						<Image
							src={rightArrow}
							onClick={() => {
								navigate(`/mypage/mycommunityboard`);
							}}
						/>
					</Flex>
				</Margin>
				<Flex gap="6px">
					{recentlyMyCommunityList?.map(item => {
						return (
							<Box key={item.communityId}>
								<Box key={item.communityId}>
									<Image
										size="s"
										src={item.communityImage}
										alt={item.communityTitle}
										onClick={() => {
											navigate(`/community/${item.communityId}`);
										}}
									></Image>
								</Box>
							</Box>
						);
					})}
				</Flex>
			</Box>
			<Box>
				<Margin margin="16px auto">
					<Flex jc="space-between">
						<Text
							size="lg"
							onClick={() => {
								navigate(`/mypage/mycomment`);
							}}
						>
							작성댓글 📋
						</Text>
						<Image
							src={rightArrow}
							onClick={() => {
								navigate(`/mypage/mycomment`);
							}}
						/>
					</Flex>
				</Margin>
			</Box>
			<Box>
				<Margin margin="20px auto">
					<Flex jc="space-between">
						<Text
							size="lg"
							onClick={() => {
								navigate(`/mypage/mycommunitycomment`);
							}}
						>
							커뮤댓글 💬
						</Text>
						<Image
							src={rightArrow}
							onClick={() => {
								navigate(`/mypage/mycommunitycomment`);
							}}
						/>
					</Flex>
				</Margin>
			</Box>
			<Box>
				<Margin margin="20px auto">
					<Flex jc="space-between">
						<Text size="lg" onClick={handleGetPostId}>
							리뷰쓰기 ✏️
						</Text>
						<Image src={rightArrow} onClick={handleGetPostId} />
					</Flex>
				</Margin>
			</Box>
			<Box>
				<Margin margin="20px auto">
					<Flex jc="space-between">
						<Text
							size="lg"
							onClick={() => {
								alert("comming soon");
							}}
						>
							나의 채팅
						</Text>
						<Image
							src={rightArrow}
							onClick={() => {
								alert("comming soon");
							}}
						/>
					</Flex>
				</Margin>
			</Box>
			<Box>
				<Margin margin="20px 0 50px 0">
					<Flex jc="space-between">
						<Text
							size="lg"
							onClick={() => {
								dispatch(resetToken());
								localStorage.clear();
								navigate("/");
							}}
						>
							로그아웃
						</Text>
						<Image
							src={rightArrow}
							onClick={() => {
								dispatch(resetToken());
								localStorage.clear();
								navigate("/");
							}}
						/>
					</Flex>
				</Margin>
			</Box>
		</Box>
	);
};

export default MblAll;
