// a month menu; App owns the month and the handler
function MonthPicker(props) {
  // the chosen month, from App's state
  const currentMonth = props.value;
  // the function to call on every change, from App
  const handleChange = props.onMonthChange;
  // return the box
  return (
    <section className="box">
      {/* the label for the month menu */}
      <label>Month</label>
      {/* a controlled select; the handler lives in App */}
      <select value={currentMonth} onChange={handleChange}>
        {/* the empty value means every month */}
        <option value="">All months</option>
        <option value="2025-08">August 2025</option>
        <option value="2025-09">September 2025</option>
        <option value="2025-10">October 2025</option>
        <option value="2025-11">November 2025</option>
        <option value="2025-12">December 2025</option>
        <option value="2026-01">January 2026</option>
        <option value="2026-02">February 2026</option>
        <option value="2026-03">March 2026</option>
        <option value="2026-04">April 2026</option>
        <option value="2026-05">May 2026</option>
      </select>
    </section>
  );
}

// make MonthPicker available to other files
export default MonthPicker;
