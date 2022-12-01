import { useEffect, useState } from "react";
import {
	Box,
	Input,
	Button,
	Image,
	Text,
	Label,
	Margin,
	Flex,
} from "../../components";
import {
	QueryClient,
	useMutation,
	useQueryClient,
	useQuery,
} from "@tanstack/react-query";
import axios from "axios";
import Edit from "../../assets/icons/edit.png";
import Delete from "../../assets/icons/delete.png";
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_SERVER;

const MyCommentEdit = ({ comment }) => {
	const navigate = useNavigate();
	//로컬스토리지 토큰가져오기
	const authorization = localStorage.getItem("Authorization");

	//로컬스토리지 닉네임가져오기
	const nickname = localStorage.getItem("Nickname");

	//수정여부 스테이트
	const [edit, setEdit] = useState(false);

	//수정코멘트 스테이트
	const [editComment, setEditComment] = useState("");

	//queryClient 선언하기
	const queryClient = useQueryClient();
	// 댓글 수정하기 put요청
	const {
		mutate: editMutation,
		status,
		data,
	} = useMutation(
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
					commentId: comment.commentId,
					commentContent: editComment,
				},
				{
					onError: (error, variables, context) => {
						console.log("error => ", error);
					},
					onSuccess: (data, variables, context) => {
						queryClient.invalidateQueries("getComments");
						alert(data.data);
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
			delMutation.mutate({ commentId: comment.commentId });
		} else {
			alert("취소합니다.");
		}
	};
	console.log("mycommenitem=>", comment);

	return (
		<Box>
			{edit ? (
				<Box>
					<Margin margin="0 0 10px 0">
						<Box variant="comment-box">
							<Margin margin="26px 22px 0 22px">
								<Box variant="guide">
									<Flex jc="space-between">
										<Input
											variant="comment-edit"
											type="text"
											name="commentContent"
											defaultValue={comment?.commentContent}
											required={comment?.commentContent}
											onChange={handleEdit}
										/>
										<Text variant="comment-date">
											{comment.commentCreatedAt}
										</Text>
									</Flex>
								</Box>
							</Margin>
							<Margin margin="10px 20px 0 22px">
								<Box variant="board-minibutton">
									<Flex gap="10px" jc="space-between">
										<Text
											variant="comment-title"
											onClick={() => {
												navigate(`/detail/post/${comment.boardId}`);
											}}
										>
											{comment.boardTitle}
										</Text>
										<Box>
											<Button variant="mypage" onClick={handleEditComplete}>
												완료
												<Image variant="profile-edit" src={Edit} />
											</Button>
										</Box>
									</Flex>
								</Box>
							</Margin>
						</Box>
					</Margin>
				</Box>
			) : (
				<Box>
					<Margin margin="0 0 10px 0">
						<Box variant="comment-box">
							<Margin margin="26px 22px 0 22px">
								<Box variant="guide">
									<Flex jc="space-between">
										<Text variant="comment">{comment.commentContent}</Text>
										<Text variant="comment-date">
											{comment.commentCreatedAt}
										</Text>
									</Flex>
								</Box>
							</Margin>
							<Margin margin="10px 20px 0 22px">
								<Box variant="board-minibutton">
									<Flex gap="10px" jc="space-between">
										<Text
											variant="comment-title"
											onClick={() => {
												navigate(`/detail/post/${comment.boardId}`);
											}}
										>
											{comment.boardTitle}
										</Text>
										<Box>
											<Button
												variant="mypage"
												onClick={() => {
													setEdit(!edit);
												}}
											>
												수정
												<Image variant="profile-edit" src={Edit} />
											</Button>
											<Button variant="mypage" onClick={handleRemove}>
												삭제
												<Image variant="profile-edit" src={Delete} />
											</Button>
										</Box>
									</Flex>
								</Box>
							</Margin>
						</Box>
					</Margin>
				</Box>
			)}
		</Box>
	);
};

export default MyCommentEdit;
