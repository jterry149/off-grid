import React from "react";
import { MDBContainer, Button } from "mdbreact";

const YouTube = () => {
	return (
		<div
			className="modal fade"
			id="modalYT"
			tabindex="-1"
			role="dialog"
			aria-labelledby="myModalLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog modal-lg" role="document">
				<div className="modal-content">
					<div className="modal-body mb-0 p-0">
						<div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
							<iframe
								className="embed-responsive-item"
								src="https://www.youtube.com/embed/A3PDXmYoF5U"
								allowfullscreen
							/>
						</div>
					</div>

					<div className="modal-footer justify-content-center flex-column flex-md-row">
						<span className="mr-4">Spread the word!</span>
						<div>
							<a type="button" className="btn-floating btn-sm btn-fb">
								<i className="fab fa-facebook-f" />
							</a>
							<a type="button" className="btn-floating btn-sm btn-tw">
								<i className="fab fa-twitter" />
							</a>
							<a type="button" className="btn-floating btn-sm btn-gplus">
								<i className="fab fa-google-plus-g" />
							</a>
							<a type="button" className="btn-floating btn-sm btn-ins">
								<i className="fab fa-linkedin-in" />
							</a>
						</div>
						<button
							type="button"
							className="btn btn-outline-primary btn-rounded btn-md ml-4"
							data-dismiss="modal"
						>
							Close
            </button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default YouTube;
