// import the stylesheet for this page
import "./App.css";
// bring in the useState hook from React
import { useState } from "react";
// bring in PageHeader from the components folder
import PageHeader from "./components/PageHeader.jsx";
// bring in SearchBox from the components folder
import SearchBox from "./components/SearchBox.jsx";
// bring in MonthPicker from the components folder
import MonthPicker from "./components/MonthPicker.jsx";
// bring in MatchList from the components folder
import MatchList from "./components/MatchList.jsx";

// define the App component as a function
function App() {
  // the search text lives in App, the parent of both
  const [searchText, setSearchText] = useState("");
  // state: the chosen month; "" means every month
  const [month, setMonth] = useState("");

  // runs every time the search box changes
  function handleSearchChange(event) {
    // read the text that is now in the box
    const typedText = event.target.value;
    // store it; React draws App and its children again
    setSearchText(typedText);
  }

  // runs every time the month menu changes
  function handleMonthChange(event) {
    // read the value of the chosen option, like "2025-12"
    const chosenMonth = event.target.value;
    // store it; React draws App and its children again
    setMonth(chosenMonth);
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
      {/* down: the month; up: the handler MonthPicker calls */}
      <MonthPicker
        value={month}
        onMonthChange={handleMonthChange}
      />
      {/* down: both values, so the list can filter */}
      <MatchList
        searchText={searchText}
        month={month}
      />
    </div>
  );
}

// make App available to main.jsx
export default App;
