import { Vortex } from "react-loader-spinner";
import { theme } from "src/Globals/global";

const Loader = () => {
	return (
		<Vortex
			visible={true}
			height="80"
			width="80"
			ariaLabel="vortex-loading"
			wrapperStyle={{}}
			wrapperClass="vortex-wrapper"
			colors={[
				theme.colors.BluePrimary,
				theme.colors.GreenPrimary,
				theme.colors.PurplePrimary,
				theme.colors.BluePrimary,
				theme.colors.GreenPrimary,
				theme.colors.PurplePrimary,
			]}
		/>
	);
};

export default Loader;
