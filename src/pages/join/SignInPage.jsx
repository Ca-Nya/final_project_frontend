import { Section } from "../../components";
import { SignInForm } from "../../container/join";

const SignInPage = () => {
	return (
		<Section variant="sign-in">
			{/*  페이지 기능 보여조기 -> 페이지는 페이지의 역할 / 앱은 앱의 역할 */}
			<SignInForm />
		</Section>
	);
};

export default SignInPage;
