import { Box, Button, Image, Text, Margin, Flex } from "../../../components";
import Edit from "../../../assets/icons/edit.png";
import Delete from "../../../assets/icons/delete.png";

const ComuBoard = ({ data, navigate, onDeleteComuPost, onEditComuPost }) => {
	return (
		<div>
			<Box>
				<Margin margin="2.6vw 0.3vw 0.9vw 0.3vw">
					<Box variant="mypage-nav">
						<Text variant="title">커뮤니티 🌈</Text>
					</Box>
				</Margin>
				{data && data?.length > 0 ? (
					<Box>
						{data?.map(item => {
							return (
								<Box variant="board-box" key={item.communityId}>
									<Margin margin="2.6vw 0.3vw 0.9vw 0.3vw">
										<Flex jc="space-between">
											<Image
												variant="myboard-post"
												src={item.communityImage}
												alt={item.communityTitle}
											/>
											<Box>
												<Flex fd="column">
													<Box variant="board-smaillbox">
														<Margin margin="0.9vw 0 0 2.2vw">
															<Text
																variant="board-title"
																onClick={() => {
																	navigate(`/community/${item.communityId}`);
																}}
															>
																{item.communityTitle}
															</Text>
															<Margin margin="1.1vw 0 0 0.4vw">
																<Text variant="board-content">
																	{item.communityContent}
																</Text>
															</Margin>
														</Margin>
													</Box>
													<Margin margin="0.9vw 0 0.4vw 2.2vw">
														<Box variant="board-inbox">
															<Flex jc="space-between">
																<Text variant="comment-date">
																	{item.communityCreatedAt}
																</Text>

																<Box variant="board-minibutton">
																	<Flex gap="0.9vw">
																		<Button
																			variant="mypage"
																			onClick={onEditComuPost(item)}
																		>
																			수정
																			<Image
																				variant="profile-edit"
																				src={Edit}
																			/>
																		</Button>
																		<Button
																			variant="mypage"
																			onClick={onDeleteComuPost(item)}
																		>
																			삭제
																			<Image
																				variant="profile-edit"
																				src={Delete}
																			/>
																		</Button>
																	</Flex>
																</Box>
															</Flex>
														</Box>
													</Margin>
												</Flex>
											</Box>
										</Flex>
									</Margin>
								</Box>
							);
						})}
					</Box>
				) : (
					<Box>
						<Text variant="comment"> 작성한 게시물이 없습니다.</Text>
					</Box>
				)}
			</Box>
		</div>
	);
};

export default ComuBoard;
