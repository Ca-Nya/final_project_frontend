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
import myPageBackground from "../../../assets/images/mypage-background.png";

const MblMypgHome = ({
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
		<Box size="container">
			<Box size="position-relative">
				<Box size="position-relative">
					<Image size="l-background" src={myPageBackground} />
				</Box>
				<Box size="position-absolute">
					<Margin margin="0 0 30px 0">
						<Flex fd="column" ai="center" jc="center" gap="10px">
							<Label htmlFor="imageChange" variant="profile">
								<Image
									src={memberProfileImage}
									alt={"프로필 이미지"}
									size="s-r"
									rank={localStorage.getItem("memberStatus")}
								/>								
							</Label>
							<Input
								id="imageChange"
								variant="profile-edit"
								type="file"
								accept="image/*"
								onChange={onChangeProfileImage}
							/>
							<Text size="xl">{nickname}</Text>
							<Flex gap="10px" ai="center" jc="center">
								<Text
									size="s-level"
									rank={localStorage.getItem("memberStatus")}
								>
									Lv
								</Text>
								<Text size="l">{localStorage.getItem("memberStatus")} ☕️</Text>
							</Flex>
						</Flex>
						<Margin margin="30px 0 0 0">
							<Box size="xl-line"></Box>
						</Margin>
					</Margin>
				</Box>
			</Box>
			<Outlet />
		</Box>
	);
};

export default MblMypgHome;
