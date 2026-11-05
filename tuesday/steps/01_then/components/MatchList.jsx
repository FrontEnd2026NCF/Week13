// bring in useState and useEffect from React
import { useState, useEffect } from "react";

// the website that hosts the data
const SITE = "https://raw.githubusercontent.com";
// the folder for the 2025/26 season
const FOLDER = "/openfootball/football.json/master/2025-26";
// the file for England's first division: the Premier League
const FILE = "/en.1.json";
// glue the three parts into one address
const SEASON_URL = SITE + FOLDER + FILE;

// turn a response into JavaScript data
function readJson(response) {
  // reading the body is a promise too
  const jsonPromise = response.json();
  // hand it to the next .then
  return jsonPromise;
}

// every Premier League match of the 2025/26 season
function MatchList() {
  // state: the matches; empty until the data arrives
  const [matches, setMatches] = useState([]);

  // store the matches from the season data
  function saveSeason(season) {
    // the season object holds a list called matches
    const seasonMatches = season.matches;
    // store it; React draws MatchList again
    setMatches(seasonMatches);
  }

  // the side effect: ask the internet for the season
  function loadMatches() {
    // start the request; get a promise back
    const responsePromise = fetch(SEASON_URL);
    // when the response arrives, read it as JSON
    const dataPromise = responsePromise.then(readJson);
    // when the data is ready, store it
    dataPromise.then(saveSeason);
  }
  // []: load the data once, on mount
  useEffect(loadMatches, []);

  // count the matches (0 until the data arrives)
  const matchCount = matches.length;
  // return the box
  return (
    <section className="box">
      {/* the heading */}
      <h2>Season matches</h2>
      {/* how many matches have loaded */}
      <p>Loaded {matchCount} matches</p>
    </section>
  );
}

// make MatchList available to other files
export default MatchList;
