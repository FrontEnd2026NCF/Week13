// a search box; App owns the text and the handler
function SearchBox(props) {
  // the text to show in the box, from App's state
  const currentText = props.value;
  // the function to call on every change, from App
  const handleChange = props.onSearchChange;
  // return the box
  return (
    <section className="box">
      {/* the label for the search box */}
      <label>Search by team</label>
      {/* a controlled input; the handler lives in App */}
      <input value={currentText} onChange={handleChange} />
    </section>
  );
}

// make SearchBox available to other files
export default SearchBox;
