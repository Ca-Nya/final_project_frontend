
const Detail = ({ navigate, data, authorization }) => {
	return (
        <>
        <p>{data.communityTitle}</p>
        <p>{data.communityContent}</p>
        <img src={data.communityImage} alt={data.communityTitle} />
        </>
    )
};

export default Detail;
