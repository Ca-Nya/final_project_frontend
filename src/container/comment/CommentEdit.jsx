import {
	Box,
	Input,
	Button,
	Image,
	DataList,
	DataTerm,
	DataDesc,
	Text,
	Hidden,
	SecondHeading,
	Flex,
	Margin,
	TextArea,
} from "../../components";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

const CommentEdit = ({ item }) => {
	//로컬스토리지 닉네임가져오기
	const nickname = localStorage.getItem("Nickname");
	//로컬스토리지 토큰가져오기
	const authorization = localStorage.getItem("Authorization");
	//수정여부 스테이트
	const [edit, setEdit] = useState(false);
	//수정코멘트 스테이트
	const [editComment, setEditComment] = useState("");

	//queryClient 선언하기
	const queryClient = useQueryClient();

	// 댓글 수정하기 put요청
	const { mutate: editMutation } = useMutation(
		async commentEdit => {
			const response = await axios.put(
				`${BASE_URL}/auth/comment/${commentEdit.commentId}/update`,
				commentEdit,
				{
					headers: {
						authorization,
					},
				},
			);
			return response;
		},
		{
			onSuccess: ({ status, data }) => {
				if (status === "200") {
					console.log("data =>", data);
					console.log("status =>", status);
					// queryClient.invalidateQueries("getComments");
					// alert(data);
				}
			},
			onError: error => {
				alert("수정되지않았어요🥹");
			},
		},
	);

	//댓글 삭제하기 delete요청
	const delMutation = useMutation(commentId =>
		axios.delete(`${BASE_URL}/auth/comment/${commentId.commentId}/delete`, {
			headers: {
				authorization,
			},
		}),
	);

	//댓글 수정하기 이벤트핸들러(온체인지)
	const handleEdit = e => {
		const editComment = e.target.value;
		setEditComment(editComment);
	};

	//댓글 수정하기 쿼리 요청(온클릭)
	const handleEditComplete = e => {
		console.log("editComment=>", editComment);
		if (editComment === "") {
			alert("댓글을 수정해주세요!");
		} else {
			editMutation(
				{
					commentId: item.commentId,
					commentContent: editComment,
				},
				{
					onError: (error, variables, context) => {
						console.log("error => ", error);
					},
					onSuccess: (data, variables, context) => {
						queryClient.invalidateQueries("getComments");
					},
				},
			);
		}
		setEdit(false);
	};

	//댓글 삭제하기 쿼리요청
	const handleRemove = e => {
		e.preventDefault();
		const delRes = window.confirm("정말 삭제하시겠습니까?");
		if (delRes) {
			alert("삭제되었습니다.");
			delMutation.mutate({ commentId: item.commentId });
		} else {
			alert("취소합니다.");
		}
	};

	return (
		<Box variant="comment-item-wrap">
			{item.memberNickname === nickname ? (
				<Box>
					{edit ? (
						<Box>
							<Margin margin="10px 0">
								<Flex jc="space-between" ai="center" gap="17px">
									<Box>
										<Flex jc="center" ai="center" gap="10px">
											<Box>
												<Flex ai="center" jc="center">
													<Image
														src={item.memberProfileImage}
														alt="유저 프로필"
														variant="comment-profile"
													/>
												</Flex>
											</Box>
											<Box variant="comment-user-info">
												<Flex fd="column" jc="center">
													<TextArea
														name="commentContent"
														defaultValue={item?.commentContent}
														required={item?.commentContent}
														onChange={handleEdit}
														variant="comment-edit-input"
													/>
												</Flex>
											</Box>
										</Flex>
									</Box>
									<Box variant="comment-info">
										<Flex fd="column" jc="center" ai="flex-end">
											<Button
												onClick={handleEditComplete}
												variant="comment-edit"
											>
												완료
											</Button>
										</Flex>
									</Box>
								</Flex>
							</Margin>
						</Box>
					) : (
						<>
							<Margin margin="10px 0">
								<Flex jc="space-between" ai="center" gap="17px">
									<Box>
										<Flex jc="center" ai="center" gap="10px">
											<Box>
												<Flex ai="center" jc="center">
													<Image
														src={item.memberProfileImage}
														alt="유저 프로필"
														variant="comment-profile"
													/>
												</Flex>
											</Box>
											<Box variant="comment-user-info">
												<Flex fd="column" jc="center" gap="7px">
													<SecondHeading variant="comment-user-nickname">
														{item.memberNickname}
													</SecondHeading>
													<Text variant="comment-user-content">
														{item.commentContent}
													</Text>
												</Flex>
											</Box>
										</Flex>
									</Box>
									<Box variant="comment-info">
										<Flex fd="column" jc="center" ai="flex-end" gap="10px">
											<DataList variant="comment-date">
												<Hidden>
													<DataTerm>작성일</DataTerm>
												</Hidden>
												<DataDesc>{item.date}</DataDesc>
											</DataList>
											<Box>
												<Flex jc="flex-end" gap="30px">
													<Button
														onClick={() => {
															setEdit(!edit);
														}}
														variant="comment-edit"
													>
														수정
													</Button>
													<Button
														onClick={handleRemove}
														variant="comment-delete"
													>
														삭제
													</Button>
												</Flex>
											</Box>
										</Flex>
									</Box>
								</Flex>
							</Margin>
						</>
					)}
				</Box>
			) : (
				<Margin margin="10px 0">
					<Flex jc="space-between" ai="center" gap="17px">
						<Box>
							<Flex jc="center" ai="center" gap="10px">
								<Box>
									<Flex ai="center" jc="center">
										<Image
											src={item.memberProfileImage}
											alt="유저 프로필"
											variant="comment-profile"
										/>
									</Flex>
								</Box>
								<Box variant="comment-user-info">
									<Flex fd="column" jc="center" gap="7px">
										<SecondHeading variant="comment-user-nickname">
											{item.memberNickname}
										</SecondHeading>
										<Text variant="comment-user-content">
											{item.commentContent}
										</Text>
									</Flex>
								</Box>
							</Flex>
						</Box>
						<Box variant="comment-info">
							<Flex fd="column" jc="center" ai="flex-end" gap="10px">
								<DataList variant="comment-date">
									<Hidden>
										<DataTerm>작성일</DataTerm>
									</Hidden>
									<DataDesc>{item.date}</DataDesc>
								</DataList>
							</Flex>
						</Box>
					</Flex>
				</Margin>
			)}
		</Box>
	);
};

export default CommentEdit;
