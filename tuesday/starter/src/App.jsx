// import the stylesheet for this page
import "./App.css";
// bring in PageHeader from the components folder
import PageHeader from "./components/PageHeader.jsx";

// define the App component as a function
function App() {
  // return one parent div that holds everything
  return (
    <div>
      {/* the header at the top of the page */}
      <PageHeader title="Premier League 2025/26" subtitle="Week 13: fetching APIs" />
    </div>
  );
}

// make App available to main.jsx
export default App;
