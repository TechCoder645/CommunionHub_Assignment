export const filterEvents = (events, filter) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time for accurate comparison

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay()); // Start of this week (Sunday)
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6); // End of this week (Saturday)

  const startOfNextWeek = new Date(endOfWeek);
  startOfNextWeek.setDate(endOfWeek.getDate() + 1); // Next week starts on Sunday
  const endOfNextWeek = new Date(startOfNextWeek);
  endOfNextWeek.setDate(startOfNextWeek.getDate() + 6);

  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  return events.filter((event) => {
    let eventDateStr = event.date.split(" - ")[0]; // Get only the first date if it's a range
    let eventDate = new Date(eventDateStr.replace(/,/g, "")); // Convert to Date format

    if (isNaN(eventDate)) return false; // Skip invalid dates

    switch (filter) {
      case "Today":
        return eventDate.toDateString() === today.toDateString();
      case "Tomorrow":
        return eventDate.toDateString() === tomorrow.toDateString();
      case "This Week":
        return eventDate >= startOfWeek && eventDate <= endOfWeek;
      case "Next Week":
        return eventDate >= startOfNextWeek && eventDate <= endOfNextWeek;
      case "This Month":
        return eventDate >= startOfMonth && eventDate <= endOfMonth;
      default:
        return true;
    }
  });
};