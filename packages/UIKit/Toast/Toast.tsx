import styled from "@emotion/styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastProps } from "react-toastify/dist/types";

const CustomToastContainer = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 12px 16px;
	gap: 40px;
	background: #ddf5ed;
	border: 1px solid #07a56a;
	border-radius: 4px;
`;

function Message({
	toastProps,
	closeToast,
}: {
	closeToast?: (() => void) | undefined;
	toastProps: ToastProps;
	data?: unknown;
}) {
	return (
		<CustomToastContainer>
			<p>Welcome {toastProps.position}</p>
			<button onClick={closeToast}></button>
		</CustomToastContainer>
	);
}
const Toast = () => {
	const msg = () => toast((props) => <Message {...props} />);
	return (
		<div>
			<button onClick={msg}>Notify!</button>
			<ToastContainer
				position="bottom-center"
				autoClose={50000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				limit={3}
			/>
		</div>
	);
};

export default Toast;
