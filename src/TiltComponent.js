import React from 'react'
import Tilt from "react-parallax-tilt";
const TiltComponent = () => {
	return (
		<Tilt glareEnable={true} tiltMaxAngleX={5}
		tiltMaxAngleY={5} perspective={1000}
		glareColor={"rgb(255,0,0)"}>
			<div className='tiltComponent'>
				{/* Your Code Here */}
			</div>
		</Tilt>
	)
}

export default TiltComponent;
