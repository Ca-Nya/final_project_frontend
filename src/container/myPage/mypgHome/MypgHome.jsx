import {
	Box,
	Input,
	Image,
	Text,
	Label,
	Margin,
	Flex,
} from "../../../components";
import { Outlet } from "react-router-dom";
import Edit from "../../../assets/icons/edit-profile.png";
import Comment from "../../../assets/icons/comment.png";
import Heart from "../../../assets/icons/heart.png";
import Write from "../../../assets/icons/write.png";

const MypgHome = ({
	onEditPost,
	onDeletePost,
	onChangeProfileImage,
	recentlyMyBoardList,
	recentlyMyCommentList,
	recentlyMyHeartBoardList,
	memberBoardCount,
	memberCommentCount,
	memberHeartCount,
	memberProfileImage,
	navigate,
	myLikeMatch,
	myBoardMatch,
	myCommentMatch,
	myAllMatch,
	myComuCommentMatch,
	myComuBoardMatch,
	nickname,
	recentlyMyCommunityList,
	recentlyMyCommunityCommentList,
	memberCommunityCount,
	memberCommunityCommentCount,
}) => {
	return (
		<Box variant="container-2">
			<Flex>
				<Box variant="profile">
					<Flex gap="0.1vw" fd="column" ai="center">
						<Margin margin="10% 0 0 70%">
							<Box>
								<Label htmlFor="imageChange" variant="profile">
									<Image variant="profile-edit" src={Edit} />
									<span>프로필이미지 편집</span>
								</Label>
								<Input
									id="imageChange"
									variant="profile-edit"
									type="file"
									accept="image/*"
									onChange={onChangeProfileImage}
								/>
							</Box>
						</Margin>
						<Image
							src={memberProfileImage}
							alt={"프로필 이미지"}
							variant="mypage-profile"
						/>
						<Box variant="pofile-namebox">
							<Flex jc="center" gap="5%">
								<Margin margin="8%">
									<Flex jc="center">
										<Text variant="user-name">{nickname}</Text>
									</Flex>
									<Margin margin="10%">
										<Box>
											<Flex gap="5%" ai="center" jc="center">
												<Text variant="level">Lv</Text>
												<Text variant="level-name">톨 💛</Text>
											</Flex>
										</Box>
									</Margin>
								</Margin>
							</Flex>
						</Box>

						<Margin margin="10% 3% 0 10%">
							<Box variant="category-box">
								<Flex
									gap="5%"
									jc="center"
									ai="center"
									style={{ width: "180px" }}
								>
									<Flex fd="column" jc="center" ai="center" gap="5px">
										<Image variant="mypage-icon" src={Write} />
										<Text
											variant="profile-base"
											onClick={() => {
												navigate("myboard");
											}}
										>
											내가쓴글
										</Text>
										<Margin margin="6px 0 0 0">
											<Text variant="user-name">{memberBoardCount}</Text>
										</Margin>
									</Flex>

									<Flex fd="column" jc="center" ai="center" gap="5px">
										<Image variant="mypage-icon" src={Heart} />
										<Text
											variant="profile-base"
											onClick={() => {
												navigate("mylike");
											}}
										>
											좋아요
										</Text>
										<Margin margin="6px 0 0 0">
											<Text variant="user-name">{memberHeartCount}</Text>
										</Margin>
									</Flex>

									<Flex fd="column" jc="center" ai="center" gap="5px">
										<Image variant="mypage-icon" src={Comment} />
										<Text
											variant="profile-base"
											onClick={() => {
												navigate("mycomment");
											}}
										>
											작성댓글
										</Text>
										<Margin margin="6px 0 0 0">
											<Text variant="user-name">{memberCommentCount}</Text>
										</Margin>
									</Flex>
								</Flex>
							</Box>
						</Margin>
					</Flex>
				</Box>
				<Margin margin="2% 0 0 39px">
					<Box variant="mypage-nav">
						<Flex gap="4%">
							<Text
								variant="button"
								onClick={() => {
									navigate("myall");
								}}
								isActive={myAllMatch !== null}
							>
								모두보기
							</Text>
							<Box>
								<Flex jc="center" gap="0.2vw">
									<Text
										variant="button"
										onClick={() => {
											navigate("myboard");
										}}
										isActive={myBoardMatch !== null}
									>
										내가쓴글
									</Text>
									<Box variant="guide-point" isActive={myBoardMatch !== null}>
										<Margin margin="0.1vw 0 0 0">
											<Text
												variant="button-count"
												isActive={myBoardMatch !== null}
											>
												{memberBoardCount}
											</Text>
										</Margin>
									</Box>
								</Flex>
							</Box>
							<Box>
								<Flex jc="center" gap="0.2vw">
									<Text
										variant="button"
										onClick={() => {
											navigate("mylike");
										}}
										isActive={myLikeMatch !== null}
									>
										좋아요한글
									</Text>
									<Box variant="guide-point" isActive={myLikeMatch !== null}>
										<Margin margin="0.1vw 0 0 0">
											<Text
												variant="button-count"
												isActive={myLikeMatch !== null}
											>
												{memberHeartCount}
											</Text>
										</Margin>
									</Box>
								</Flex>
							</Box>
							<Box>
								<Flex jc="center" gap="0.2vw">
									<Text
										variant="button"
										onClick={() => {
											navigate("mycomment");
										}}
										isActive={myCommentMatch !== null}
									>
										작성댓글
									</Text>
									<Box variant="guide-point" isActive={myCommentMatch !== null}>
										<Margin margin="0.1vw0 0 0">
											<Text
												variant="button-count"
												isActive={myCommentMatch !== null}
											>
												{memberCommentCount}
											</Text>
										</Margin>
									</Box>
								</Flex>
							</Box>
							<Box>
								<Flex jc="center" gap="0.2vw">
									<Text
										variant="button"
										onClick={() => {
											navigate("mycommunityboard");
										}}
										isActive={myComuBoardMatch !== null}
									>
										커뮤니티
									</Text>
									<Box
										variant="guide-point"
										isActive={myComuBoardMatch !== null}
									>
										<Margin margin="0.1vw0 0 0">
											<Text
												variant="button-count"
												isActive={myComuBoardMatch !== null}
											>
												{memberCommunityCount}
											</Text>
										</Margin>
									</Box>
								</Flex>
							</Box>
							<Box>
								<Flex jc="center" gap="0.2vw">
									<Text
										variant="button"
										onClick={() => {
											navigate("mycommunitycomment");
										}}
										isActive={myComuCommentMatch !== null}
									>
										커뮤댓글
									</Text>
									<Box
										variant="guide-point"
										isActive={myComuCommentMatch !== null}
									>
										<Margin margin="0.1vw0 0 0">
											<Text
												variant="button-count"
												isActive={myComuCommentMatch !== null}
											>
												{memberCommunityCommentCount}
											</Text>
										</Margin>
									</Box>
								</Flex>
							</Box>
						</Flex>
					</Box>
					<Outlet />
				</Margin>
			</Flex>
		</Box>
	);
};

export default MypgHome;
