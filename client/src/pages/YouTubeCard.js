import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardGroup, MDBRow, MDBCol, MDBContainer } from 'mdbreact';

function YouTubeCard() {
	return (
		// <MDBContainer>
		// 	<MDBRow>
		// 		<MDBCol>
		// 			<div className="youtubecard" style="text-center">
		// 				<h1>Resources for Living on the Road</h1>
		// 			</div>
		// 		</MDBCol>
		// 	</MDBRow>
		<MDBCardGroup>
			<MDBRow>
				<MDBCard style={{ width: "22rem" }}>
					<div className="embed-responsive embed-responsive-16by9">
						<iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/v8Z9kmqd5vU" allowfullscreen></iframe>
					</div>
					<MDBCardBody>
						<MDBCardTitle>Earn a Living?</MDBCardTitle>
						<MDBCardText>
							How can you still make money while living on the road, you ask?  Check out these road-friendly job ideas!
                    </MDBCardText>
					</MDBCardBody>
				</MDBCard>
				<MDBCard style={{ width: "22rem" }}>
					<div className="embed-responsive embed-responsive-16by9">
						<iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/r5WXCMGtPz8" allowfullscreen></iframe>
					</div>
					<MDBCardBody>
						<MDBCardTitle>What Does It Cost to Live on the Road?</MDBCardTitle>
						<MDBCardText>
							Find out others' budgets and how much it could save you!
                    </MDBCardText>
					</MDBCardBody>
				</MDBCard>

				<MDBCard style={{ width: "22rem" }}>
					<div className="embed-responsive embed-responsive-16by9">
						<iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/SnmtK5Gnvco" allowfullscreen></iframe>
					</div>
					<MDBCardBody>
						<MDBCardTitle>Is the Tiny Home Life for You?</MDBCardTitle>
						<MDBCardText>
							Get some tips for living in a Tiny Home on the Road!
          </MDBCardText>
					</MDBCardBody>
				</MDBCard>
			</MDBRow>
			<MDBRow>
				<MDBCard style={{ width: "22rem" }}>
					<div className="embed-responsive embed-responsive-16by9">
						<iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/a0etomDKSGE" allowfullscreen></iframe>
					</div>
					<MDBCardBody>
						<MDBCardTitle>Where Should You Go in your RV?</MDBCardTitle>
						<MDBCardText>
							Here's a Guide!  Check out some of the best RV Parks across America.
                    </MDBCardText>
					</MDBCardBody>
				</MDBCard>
				<MDBCard style={{ width: "22rem" }}>
					<div className="embed-responsive embed-responsive-16by9">
						<iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/v6eQHVQC_ig" allowfullscreen></iframe>
					</div>
					<MDBCardBody>
						<MDBCardTitle>Where and How Do I SHOWER on the Road?</MDBCardTitle>
						<MDBCardText>
							Great tips for where and how to clean up on your journey.
                    </MDBCardText>
					</MDBCardBody>
				</MDBCard>
				<MDBCard style={{ width: "22rem" }}>
					<div className="embed-responsive embed-responsive-16by9">
						<iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/4lhyo7mfmbI" allowfullscreen></iframe>
					</div>
					<MDBCardBody>
						<MDBCardTitle>Want To Build Your OWN?</MDBCardTitle>
						<MDBCardText>
							Find out how to convert your own vehicle to a livable & functioning RV, Van or Camper!
                    </MDBCardText>
					</MDBCardBody>
				</MDBCard>
			</MDBRow>
			<MDBRow>
				<MDBCard style={{ width: "22rem" }}>
					<div className="embed-responsive embed-responsive-16by9">
						<iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/w2s2Efd7ZBQ" allowfullscreen></iframe>
					</div>
					<MDBCardBody>
						<MDBCardTitle>Love to Camp?</MDBCardTitle>
						<MDBCardText>
							This is a guide to the most beautiful campgrounds all over the United States!
          </MDBCardText>
					</MDBCardBody>
				</MDBCard>
				<MDBCard style={{ width: "22rem" }}>
					<div className="embed-responsive embed-responsive-16by9">
						<iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/_cX1_xLpHKE" allowfullscreen></iframe>
					</div>
					<MDBCardBody>
						<MDBCardTitle>What is it REALLY Like?</MDBCardTitle>
						<MDBCardText>
							Find out the Pros & Cons of living life on the road.

						</MDBCardText>
					</MDBCardBody>
				</MDBCard>
				<MDBCard style={{ width: "22rem" }}>
					<div className="embed-responsive embed-responsive-16by9">
						<iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/qaQmnTlnnqw" allowfullscreen></iframe>
					</div>
					<MDBCardBody>
						<MDBCardTitle>Keep your job on the road?</MDBCardTitle>
						<MDBCardText>
							Get tips and ideas from others who have continued to work while on the road!
                    </MDBCardText>
					</MDBCardBody>
				</MDBCard>

			</MDBRow>
		</MDBCardGroup>
		// </MDBContainer>

	)
}

export default YouTubeCard;