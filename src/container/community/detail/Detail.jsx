const Detail = ({
	navigate,
	data,
	authorization,
	nickname,
	onhandleRemove,
}) => {
	return (
		<>
			{data.memberNickname === nickname ? (
				<>
					<p>{data.communityTitle}</p>
					<p>{data.communityContent}</p>
					<img src={data.communityImage} alt={data.communityTitle} />
					<button>수정</button>
					<button onClick={onhandleRemove}>삭제</button>
				</>
			) : (
				<>
					<p>{data.communityTitle}</p>
					<p>{data.communityContent}</p>
					<img src={data.communityImage} alt={data.communityTitle} />
				</>
			)}
		</>
	);
};

export default Detail;
