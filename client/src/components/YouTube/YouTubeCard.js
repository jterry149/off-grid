import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const YouTubeCard = ({ videoUrl }) => {
    return (
        <MDBCol>
            <MDBCard style={{ width: "22rem" }}>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="Embeds Page" className="embed-responsive-item" src={videoUrl}
                        allowfullscreen></iframe>
                </div>        <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
          </MDBCardText>

                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}

export default YouTubeCard;