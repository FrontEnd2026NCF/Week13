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

// build one list item from one match object
function makeItem(match) {
  // the date plus the home team is unique for each match
  const itemKey = match.date + match.team1;
  // return the list item
  return (
    <li key={itemKey}>
      {/* the date, the home team, and the away team */}
      {match.date}: {match.team1} vs {match.team2}
    </li>
  );
}

// every Premier League match of the 2025/26 season
function MatchList() {
  // state: the matches; empty until the data arrives
  const [matches, setMatches] = useState([]);
  // state: are we still waiting? starts at true
  const [isLoading, setIsLoading] = useState(true);
  // state: what went wrong; empty means nothing did
  const [errorMessage, setErrorMessage] = useState("");
  // state: the text in the search box; starts empty
  const [searchText, setSearchText] = useState("");

  // async: this function is allowed to wait
  async function loadMatches() {
    // try: run these lines; if one fails, jump to catch
    try {
      // start the request; wait here until the response arrives
      const response = await fetch(SEASON_URL);
      // fetch does not fail on a 404, so check the status ourselves
      if (!response.ok) {
        // stop here and jump to catch with a message
        throw new Error("The server answered " + response.status);
      }
      // read the body as JSON; wait again
      const season = await response.json();
      // the season object holds a list called matches
      const seasonMatches = season.matches;
      // store it; React draws MatchList again
      setMatches(seasonMatches);
    } catch (error) {
      // read the message out of the error
      const message = error.message;
      // store it so we can show it
      setErrorMessage(message);
    }
    // worked or failed, the wait is over
    setIsLoading(false);
  }

  // runs every time the search box changes
  function handleSearchChange(event) {
    // read the text that is now in the box
    const typedText = event.target.value;
    // store it; React draws MatchList again
    setSearchText(typedText);
  }

  // does one match involve the team being searched for?
  function matchesSearch(match) {
    // lowercase the search so "arsenal" finds "Arsenal FC"
    const lowerSearch = searchText.toLowerCase();
    // lowercase the home team
    const lowerHome = match.team1.toLowerCase();
    // lowercase the away team
    const lowerAway = match.team2.toLowerCase();
    // is the search text inside the home team?
    const inHome = lowerHome.includes(lowerSearch);
    // is the search text inside the away team?
    const inAway = lowerAway.includes(lowerSearch);
    // keep the match if either team fits
    return inHome || inAway;
  }

  // the effect itself cannot be async, so it calls loadMatches
  function startLoading() {
    // start the work; we do not wait for it here
    loadMatches();
  }
  // []: load the data once, on mount
  useEffect(startLoading, []);

  // while we wait, show a message instead of the list
  if (isLoading) {
    // return the waiting box
    return (
      <section className="box">
        {/* the heading */}
        <h2>Season matches</h2>
        {/* tell the user we are working on it */}
        <p>Loading matches...</p>
      </section>
    );
  }

  // if something went wrong, say so instead of showing the list
  if (errorMessage !== "") {
    // return the error box
    return (
      <section className="box">
        {/* the heading */}
        <h2>Season matches</h2>
        {/* a plain message for the user */}
        <p className="error">Could not load the matches. Please try again later.</p>
        {/* the detail, for us */}
        <p className="error">({errorMessage})</p>
      </section>
    );
  }

  // count every match in the season
  const matchCount = matches.length;
  // keep only the matches that fit the search
  const foundMatches = matches.filter(matchesSearch);
  // count the matches that fit
  const foundCount = foundMatches.length;
  // keep only the first 10 to show
  const firstTen = foundMatches.slice(0, 10);
  // turn each match into a list item
  const items = firstTen.map(makeItem);
  // return the box
  return (
    <section className="box">
      {/* the heading */}
      <h2>Season matches</h2>
      {/* the label for the search box */}
      <label>Search by team</label>
      {/* a controlled input, like Week 12's search */}
      <input value={searchText} onChange={handleSearchChange} />
      {/* how many matches fit */}
      <p>{foundCount} of {matchCount} matches. Showing up to 10:</p>
      {/* only when nothing fits */}
      {foundCount === 0 && <p>No matches found.</p>}
      {/* the matches that fit */}
      <ul>{items}</ul>
    </section>
  );
}

// make MatchList available to other files
export default MatchList;
