import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "../../../node_modules/react-alice-carousel/lib/

import rv from "../../Images/rv.png"
import rv2 from "../../Images/AdobeStock_13707734.jpeg";
import rv3 from "../../Images/AdobeStock_145186489.jpeg";
import rv4 from "../../Images/AdobeStock_164017005.jpeg";
import rv5 from "../../Images/AdobeStock_42823965.jpeg";
import rv6 from "../../Images/AdobeStock_95737511.jpeg";
import rv7 from "../../Images/coffee.png";
import rv8 from "../../Images/rv8.jpg";
import rv10 from "../../Images/treesAndRV.jpg"

const Card3 = () => {
    const handleOnDragStart = e => e.preventDefault()
    return (
        <AliceCarousel mouseDragEnabled >
            <img src={rv} alt="image17" onDragStart={handleOnDragStart} className="card3" />
            <img src={rv5} alt="image17" onDragStart={handleOnDragStart} className="card3" />
            <img src={rv3} alt="image17" onDragStart={handleOnDragStart} className="card3" />
            <img src={rv2} alt="image17" onDragStart={handleOnDragStart} className="card3" />
            <img src={rv6} alt="image17" onDragStart={handleOnDragStart} className="card3" />
            <img src={rv8} alt="image17" onDragStart={handleOnDragStart} className="card3" />
            <img src={rv10} alt="image17" onDragStart={handleOnDragStart} className="card3" />
            <img src={rv7} alt="image17" onDragStart={handleOnDragStart} className="card3" />
            <img src={rv4} alt="image17" onDragStart={handleOnDragStart} className="card3" />

        </AliceCarousel>
    )
}
export default Card3;