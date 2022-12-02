import { Box, SecondHeading, Flex, Margin } from "../../components";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const MainBestList = ({ bestDto }) => {
	// React Router
	const navigate = useNavigate();

	return (
		<Box>
			{/* flex를 위해 인덱스별로 나눠서 반복 처리 */}
			<Margin margin="0 0 24px 0">
				<Flex gap="24px">
					{bestDto.map((best, idx) => {
						return (
							<Fragment key={best.boardId}>
								{idx === 0 || idx === 1 ? (
									<Box
										onClick={() => navigate(`/detail/post/${best.boardId}`)}
										variant="main-best-item-wraper"
									>
										<Flex>
											<Box
												bg={best.imageUrl}
												key={best.boardId}
												variant="main-best-item"
											>
												<Flex jc="center" ai="center">
													<SecondHeading variant="main-best-item">
														{best.boardTitle}
													</SecondHeading>
												</Flex>
											</Box>
										</Flex>
									</Box>
								) : (
									""
								)}
							</Fragment>
						);
					})}
				</Flex>
			</Margin>
			<Flex gap="24px">
				{bestDto.map((best, idx) => {
					return (
						<Fragment key={best.boardId}>
							{idx === 2 || idx === 3 ? (
								<Box
									onClick={() => navigate(`/detail/post/${best.boardId}`)}
									variant="main-best-item-wraper"
								>
									<Flex>
										<Box bg={best.imageUrl} variant="main-best-item">
											<Flex jc="center" ai="center">
												<SecondHeading variant="main-best-item">
													{best.boardTitle}
												</SecondHeading>
											</Flex>
										</Box>
									</Flex>
								</Box>
							) : (
								""
							)}
						</Fragment>
					);
				})}
			</Flex>
		</Box>
	);
};

export default MainBestList;
