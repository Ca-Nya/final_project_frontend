import { useState, useEffect } from "react";
import { Box, Image, Margin, Text } from "../../components";
import topArrow from "../../assets/icons/top_arrow.svg"

const TopButton = () => {
	const [showButton, setShowButton] = useState(false);
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	useEffect(() => {
		const handleShowButton = () => {
			if (window.scrollY > 500) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		};
		window.addEventListener("scroll", handleShowButton);
		return () => {
			window.removeEventListener("scroll", handleShowButton);
		};
	}, []);
	return (
		<Box size="top-button">
			{showButton ? (
				<button onClick={scrollToTop} style={{ opacity: 1 }}>
					<Image src={topArrow} />
				</button>
			) : (
				<button onClick={scrollToTop} style={{ opacity: 1 }}>
					<Image src={topArrow} />
				</button>
			)}
		</Box>
	);
};

export default TopButton;
