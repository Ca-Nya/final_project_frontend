import * as styles from "./Box.styles";
import { forwardRef } from "react";

const Box = forwardRef((props, ref) => {
	return (
		<styles.Box {...props} ref={ref}>
			{props.children}
		</styles.Box>
	);
});

export default Box;
