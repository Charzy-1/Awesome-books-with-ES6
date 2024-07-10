import { DateTime } from 'luxon';

const displayDateTime = () => {
  const now = DateTime.now();
  const formattedDateTime = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  const dateElement = document.getElementById('current-date');
  if (dateElement) {
    dateElement.textContent = formattedDateTime;
  }
};

// Update the date and time every second
setInterval(displayDateTime, 1000);

export default displayDateTime;
