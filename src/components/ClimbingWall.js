import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ClimbingWall.css';

function ClimbingWall(props) {
  const [ query, setQuery ] = useState('');
  const allWalls = props.props
  const data = Object.values(allWalls)
  const walls = data.filter((obj) => {
    const inName = obj.area_name.toLowerCase().includes(query.toLowerCase())
    return inName }).map((wall) => {
    return (
      <section 
        className="WallCard" key={wall.area_name.replaceAll(',','').replaceAll("'",'').split(' ').join('_').toLowerCase()} 
        role="article"
      >
        <img src={`${process.env.PUBLIC_URL}/images/wall${wall.area_name.length%7}.jpg`} alt="outdoor climbing wall" />
        <section className="WallCardContent">
          <Link 
            className="ClimbingWall-title"
            to={`/wall/${wall.area_name.replaceAll(',','').replaceAll("'",'').split(' ').join('_').toLowerCase()}`}
            role="link"
            >
            <h1>{allWalls[wall.area_name.replaceAll(',','').replaceAll("'",'').split(' ').join('_').toLowerCase()].area_name}</h1>
          </Link>
          <p>Number of routes: {allWalls[wall.area_name.replaceAll(',','').replaceAll("'",'').split(' ').join('_').toLowerCase()].totalClimbs}</p>
        </section>
      </section>
    )
  })

  return (
    <section className="RouteSearch" aria-label="Wall search">
      <form className="WallSearchForm" role="search">
        <label htmlFor="wall-search">Filter walls by name:</label>
        <input
          value={query}
          placeholder="Filter walls by name:"
          onChange={(evt) => setQuery(evt.target.value)}
          type="search"
        />
      </form>
      <section className="WallList" role="list">
        { walls.length < data.length && walls.length > 0 ? <p>Displaying {walls.length} of {data.length} walls: </p> : null }
        {walls.length > 0 ? walls : "No results match your terms - try filtering by wall name (e.g. 'Bruise Brothers Wall')"}
      </section>
    </section>
  )
}

export default ClimbingWall;