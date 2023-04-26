import styled from "@emotion/styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactComponent as Error } from "./svg/error.svg";
import { ReactComponent as Succuss } from "./svg/success.svg";
import { ReactComponent as ErrorClose } from "./svg/errorClose.svg";
import { ReactComponent as SuccussClose } from "./svg/successClose.svg";

const CustomToastContainer = styled.div<{ type: string }>`
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 12px 16px;
	gap: 40px;
	background: ${({ type }) =>
		(type === "error" && "#FCEDEE") || (type === "success" && "#ddf5ed")};
	border: 1px solid
		${({ type }) =>
		(type === "error" && "#DF2935") || (type === "success" && "#07a56a")};
	border-radius: 4px;
	gap: 10px;
	svg:last-of-type {
		margin-left: auto;
	}
`;

function Message({ type, message }: { type: string; message: string }) {
	return (
		<CustomToastContainer type={type}>
			{type === "error" && <Error />}
			{type === "success" && <Succuss />}
			<p>{message}</p>
			{type === "error" && <ErrorClose />}
			{type === "success" && <SuccussClose />}
		</CustomToastContainer>
	);
}
const toastMessage = (type: string, message: string) =>
	toast((props) => <Message type={type} message={message} {...props} />);

// <button onClick={() => toastMessage("error", "testMessage")}>
// 			Notify!
// 		</button>
const ToastComponent = ({ type }: { type: string }) => {
	if (type) {
		toastMessage(type, `place holder ${type}`);
	}
	return (
		<ToastContainer
			position="bottom-center"
			toastStyle={{
				padding: 0,
				boxShadow: "none",
				minHeight: "unset",
				maxHeight: "unset",
			}}
			bodyStyle={{ padding: 0, margin: 0 }}
			autoClose={50000}
			hideProgressBar={true}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			icon={false}
			closeButton={false}
			pauseOnHover
			limit={3}
		/>
	);
};

export { ToastComponent, toastMessage };
