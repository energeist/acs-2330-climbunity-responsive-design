import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ClimbingRoute.css';

function ClimbingRoute(props) {
  const [ query, setQuery ] = useState('');
  const allWalls = props.props
  const location = useLocation()
  const wallKey = location.pathname.replace('/wall/','')
  const wallRoutes = allWalls[`${wallKey}`].climbs
  const routeNames = []
  wallRoutes.forEach((climb) => routeNames.push(climb.name)) // fixes filter indexes
  const routes = wallRoutes.filter((obj) => {
    const inName = obj.name.toLowerCase().includes(query.toLowerCase())
    const inYDSGrade = obj.grades.yds.toLowerCase().includes(query.toLowerCase())
    const inFrenchGrade = obj.grades.french.toLowerCase().includes(query.toLowerCase())
    const inType = query.toLowerCase() in obj.type
    return inName || inYDSGrade || inFrenchGrade || inType }).map((route, index) => {
    return (
      <section className="RouteCard" key={route.name}>
        <img src={`${process.env.PUBLIC_URL}/images/wall${route.name.length%7}.jpg`} alt="placeholder" />
        <section className="RouteCardContent">
          <Link 
            className="ClimbingRoute-title"
            to={`/route/${wallKey}-${routeNames.indexOf(route.name)}-${(route.name).toLowerCase().split(' ').join('_')}`}
            aria-label={`Route details for ${route.name}`}
          >
            <h2>{route.name}</h2>
          </Link>
          <p aria-label={`Route grade for ${route.name}`}>Grade: 
            {route.grades.yds ? <span>YDS - {route.grades.yds}</span> : ''}
            {route.grades.french ? <span>French - {route.grades.french}</span> : ''}
          </p>
          <p aria-label={`Route styles for ${route.name}`}>Style(s): 
          {Object.keys(route.type)
          .map((type)=>{
            return(
             <span key={type}>{type}&nbsp;&nbsp;</span> 
            )})}</p>
        </section>
      </section>
    )
  })

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <section className="RouteSearch" ref={ref}>
      <form className="RouteSearchForm">
        <label htmlFor="routeSearch">
          Search for a route by name, style, or grade:
        </label>
        <input
          id="routeSearch"
          type="text"
          value={query}
          placeholder="Filter routes by name, style or grade:"
          onChange={(evt) => setQuery(evt.target.value)}
          aria-label="Filter routes by name, style or grade"
        />
      </form>
      <section 
        className="RouteList"
        aria-live="assertive"
        aria-relevant="additions"
      >
        { 
          routes.length < wallRoutes.length && routes.length > 0 
          ? <p aria-live="polite">Displaying {routes.length} of {wallRoutes.length} routes: </p> 
          : null
        }
        {routes.length > 0 ? routes : "No results match your terms - You can filter by route name, style (e.g. 'sport', 'trad' or 'tr') or by grade (e.g. 5.11 or 7b+)"}
      </section>
    </section>
  )
}
export default ClimbingRoute;