import * as styles from "./Text.styles";
import { forwardRef } from "react";

const Text = forwardRef((props, ref) => {
	return (
		<styles.Text {...props} ref={ref}>
			{props.children}
		</styles.Text>
	);
});

export default Text;
