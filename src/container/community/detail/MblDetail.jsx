import { Box, Image, Text, Margin, Flex, Button } from "../../../components";
import hit from "../../../assets/icons/hit.png";

const MblDetail = ({
	navigate,
	data,
	authorization,
	nickname,
	onhandleRemove,
	id,
}) => {
	return (
		<Box size="container">
			<Margin margin="0 0 0 0">
				
					<Box>
						<Flex style={{ position: "relative" }}>
							<Image
								size="xl"
								src={data.communityImage}
								alt={data.communityTitle}
							/>

							<Flex
								gap="2px"
								style={{
									position: "absolute",
									top: "6px",
									right: "10px",
								}}
								jc="flex-end"
							>
								<Image src={hit} alt={"조회수"} />
								<Text size="s" style={{ color: "white" }}>
									{data.communityHitCount}
								</Text>
							</Flex>
						</Flex>
					</Box>
					<Margin margin="6px auto">
						<Box
							size="container-s"
							style={{
								height: "35px",
								display: "flex",
								alignItem: "center",
							}}
						>
							<Image
								size="xs-r"
								src={data.memberProfileImage}
								alt={data.memberNickname}
								rank={localStorage.getItem("memberStatus")}
							></Image>
							<Flex
								jc="space-evenly"
								ai="center"
								style={{ padding: "6px", width: "100%" }}
							>
								<Flex fd="column">
									<Text size="m" style={{ fontWeight: "700" }}>
										{data.communityTitle}
									</Text>
									<Text size="s">
										<span>by </span>
										{data.memberNickname}
									</Text>
								</Flex>
							</Flex>
							<></>
							<Margin margin="5px 0 0 0">
								<Button size="xs" onClick={()=>{
									alert("comming soon!")
								}}>1:1채팅</Button>
							</Margin>
						</Box>
					</Margin>
					<Margin margin="15px 0 30px 6px">
						<Text size="m"><span>{data.communityContent}</span></Text>
					</Margin>
					<Margin margin="6px auto">
						<Box
							size="container-s"
							style={{ borderBottom: "1px solid #d9d9d9", height: "30px" }}
						>
							<Flex jc="space-between" ai="center">
								<Text size="s">{data.createdAt}</Text>
								{data.memberNickname === nickname ? (
									<Box>
										<Flex gap="6px">
											<Button
												size="xs-trans"
												onClick={() => {
													navigate(`/edit/${id}`);
												}}
											>
												수정
											</Button>
											<Button size="xs-trans" onClick={onhandleRemove}>
												삭제
											</Button>
										</Flex>
									</Box>
								) : (
									null
								)}
							</Flex>
						</Box>
					</Margin>			
			</Margin>
		</Box>
	);
};

export default MblDetail;
