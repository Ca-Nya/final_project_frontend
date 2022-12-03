import { Box, Input, Button, Form } from "../../components";
import { useEffect, useState } from "react";
import * as socket from "./socket";

const Chat = () => {
	const [inputValue, setInputValue] = useState("");
	const [message, setMessage] = useState();
	console.log("message ==>", message);
	const Authorization = localStorage.getItem("Authorization");
	const header = {
		Authorization,
	};

	socket.startSocketConnect("/topic/greeatings/352cf21", header, newMessage => {
		console.log("newMessage =>", newMessage);
		setMessage(newMessage.content);
	});

	return (
		<Box>
			<Form
				onSubmit={e => {
					e.preventDefault();
					socket.sendMessage({
						type: "MESSAGES",
						roomId: "352cf21",
						sender: "test",
						message: inputValue,
					});
					setInputValue("");
				}}
			>
				<Input
					onChange={e => setInputValue(e.target.value)}
					variant="cafe-review-title"
				/>
				<Button type="submit">챗팅전소옹</Button>
			</Form>
		</Box>
	);
};

export default Chat;
