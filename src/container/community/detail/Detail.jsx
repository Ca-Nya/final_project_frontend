const Detail = ({
	navigate,
	data,
	authorization,
	nickname,
	onhandleRemove,
	id
}) => {
	return (
		<>
			{data.memberNickname === nickname ? (
				<>
					<button onClick={()=>{
						navigate(`/edit/${id}`)
					}}>수정</button>
					<button onClick={onhandleRemove}>삭제</button>
					<p>{data.communityTitle}</p>
					<p>{data.communityContent}</p>
					<p>{data.communityHitCount}</p>
					<img src={data.communityImage} alt={data.communityTitle} />
				</>
			) : (
				<>
					<p>{data.communityTitle}</p>
					<p>{data.communityContent}</p>
					<p>{data.communityHitCount}</p>
					<img src={data.communityImage} alt={data.communityTitle} />
				</>
			)}
		</>
	);
};

export default Detail;
