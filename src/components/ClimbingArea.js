import React from 'react';
import { Link } from 'react-router-dom';
import './ClimbingArea.css';

function ClimbingArea(props) {
  const {areaName, numWalls} = props
  return (
    <section className="ClimbingArea" aria-label={`Climbing area: ${areaName}`}>
      <img src={`${process.env.PUBLIC_URL}/images/area${areaName.length%4}.jpg`} alt={`${areaName} climbing area`} />
      <section className="AreaCardContent">
        <Link 
          className="ClimbingArea-title"
          to={`/area/muir-valley`}
          role="link"
          aria-label={`Link to details for ${areaName} climbing area`}
        >
          <h1>{areaName}</h1>
        </Link>
        <p>
          <span>Number of walls: </span>
          <span aria-live="polite">{numWalls}</span>
        </p>
      </section>
    </section>
  )
}

export default ClimbingArea;