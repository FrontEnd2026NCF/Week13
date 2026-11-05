// import the stylesheet for this page
import "./App.css";
// bring in the useState hook from React
import { useState } from "react";
// bring in PageHeader from the components folder
import PageHeader from "./components/PageHeader.jsx";
// bring in SearchBox from the components folder
import SearchBox from "./components/SearchBox.jsx";
// bring in MatchList from the components folder
import MatchList from "./components/MatchList.jsx";

// define the App component as a function
function App() {
  // the search text lives in App, the parent of both
  const [searchText, setSearchText] = useState("");

  // runs every time the search box changes
  function handleSearchChange(event) {
    // read the text that is now in the box
    const typedText = event.target.value;
    // store it; React draws App and its children again
    setSearchText(typedText);
  }

  // return one parent div that holds everything
  return (
    <div>
      {/* the header at the top of the page */}
      <PageHeader
        title="Premier League 2025/26"
        subtitle="Week 13: search and filters"
      />
      {/* down: the text; up: the handler SearchBox calls */}
      <SearchBox
        value={searchText}
        onSearchChange={handleSearchChange}
      />
      {/* down: the same text, so the list can filter */}
      <MatchList searchText={searchText} />
    </div>
  );
}

// make App available to main.jsx
export default App;
