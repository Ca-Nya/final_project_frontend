const BoardList = ({ navigate, data, authorization, nickname }) => {
	console.log("BoardList==>", data);
	return (
		<>
			{data && data.length > 0 ? (
				<div>
					{data.map(item => {
						return (
							<div key={item.communityId}>
								<p
									onClick={() => {
										navigate(`/community/${item.communityId}`);
									}}
								>
									{item.communityTitle}
								</p>
							</div>
						);
					})}
				</div>
			) : (
				<p>작성된 없습니다.</p>
			)}
			{nickname ? (
				<button
					onClick={() => {
						navigate("/post");
					}}
				>
					글쓰기
				</button>
			) : (
				<button
					onClick={() => {
						alert("로그인 후 글쓰기 가능합니다.");
						navigate("/join");
					}}
				>
					글쓰기
				</button>
			)}
		</>
	);
};

export default BoardList;
