import React from 'react';
import { useLocation } from 'react-router-dom';
import './ClimbingRouteDetails.css';

function ClimbingRouteDetails(props) {
  const location = useLocation()
  const wallKey = location.pathname.replace('/route/','').split('-')[0]
  const routeKey = location.pathname.replace('/route/','').split('-')[1]
  const currentRoute = props.props[`${wallKey}`].climbs[routeKey]
  return (
    <article className="ClimbingRouteDetails">
      <figure className="ClimbingRouteDetails-image" role="figure" aria-label="climbing route image">
        <img src={`${process.env.PUBLIC_URL}/images/wall${routeKey%7}.jpg`} alt="placeholder"/>
      </figure>
      <section className="ClimbingRouteDetails-info" aria-label="Climbing route information">
        <h2 className="ClimbingRouteDetails-name" aria-level="2">{currentRoute.name}</h2>
        <p className="ClimbingRouteDetails-grade"><strong>Grade: </strong>
          {currentRoute.grades.yds ? <span><strong>YDS</strong>  - {currentRoute.grades.yds} | </span> : ''}  
          {currentRoute.grades.french ? <span><strong>French</strong>  - {currentRoute.grades.french}</span> : ''} 
        </p>
        <p className="ClimbingRouteDetails-grade"><strong>Route type(s):</strong> {Object.keys(currentRoute.type)
          .map((type)=>{
            return(
             <span key={type}>{type}&nbsp;&nbsp;</span> 
            )
          })}</p>
        <p className="ClimbingRouteDetails-desc"><strong>Description: </strong>  
          {currentRoute.content.description ? currentRoute.content.description : "Nothing listed"}
        </p>
        <p className="ClimbingRouteDetails-desc"><strong>Location: </strong> 
          {currentRoute.content.location ? currentRoute.content.location : "Nothing listed"}
        </p>
        <p className="ClimbingRouteDetails-desc"><strong>Protection: </strong>
          {currentRoute.content.protection ? currentRoute.content.protection : "Nothing listed"}
        </p>
        <p className="ClimbingRouteDetails-geo" aria-label="Coordinates"><em><strong>lat:</strong>  </em>{currentRoute.metadata.lnglat.coordinates[1]} <em>lon: </em>{currentRoute.metadata.lnglat.coordinates[0]}</p>
        <p className="ClimbingRouteDetails-fa"><strong>First Ascent By: </strong> 
          {currentRoute.fa ? currentRoute.fa : "Nothing listed"}</p>
      </section>
    </article>
  )
}

export default ClimbingRouteDetails;