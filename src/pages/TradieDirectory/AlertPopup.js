import React from "react";


import { useHistory } from "react-router-dom";
import { ReactComponent as Close } from "../../assets/icons/icon-cancelpopup.svg";
const AlertPopup = ({ setalertPopup }) => {

	const history = useHistory();


	const handleMoveLink = () => {
		history.push("/login");
		setalertPopup(false)
	}

	return (
		<div>
			<section className="user-info-modal popup">
				<form className="popup__form" >
					<h2>
						Please login as a user to continue
						<span
							onClick={(e) => {
								setalertPopup(false)
								e.target.parentElement.parentElement.parentElement.style.display =
									"none";
								history.push("/tradie-directory");
							}}
							className="Closesvg"
							style={{ marginRight: "-21px", marginTop: "-56px" }}
						>
							<Close width="30px" height="30px" />
						</span>
					</h2>

					<button type="submit" className="btn-primary" onClick={() => { handleMoveLink() }}>
						Login User
					</button>
				</form>
			</section>
		</div>
	);
};
export default AlertPopup;
