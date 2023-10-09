import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import Profile from "./Profile";
import Content from "./Content";

const LogoutButton = () => {
	const { logout, isAuthenticated } = useAuth0();

	if (isAuthenticated) {
		return (
			<>
				<button className="btn btn-primary 
					mx-5 my-5 px-4 logoutBtn"
					onClick={() => logout({ returnTo: window.location.origin })}>
					Log Out
				</button>
				<br />
                <Content />
				{/* <Profile /> */}
			</>
		);
	}
};

export default LogoutButton;
