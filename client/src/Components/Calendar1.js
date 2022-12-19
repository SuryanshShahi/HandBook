import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});



const myEventsList = [
  {
    title: "fasfd",
    allDay: true,
    start: new Date(2022, 6, 0),
    end: new Date(2022, 6, 0),
  },
  {
    title: "fassdsafd",
    start: new Date(2022, 6, 7),
    end: new Date(2022, 6, 10),
  },
  {
    title: "fasasdasdfd",
    start: new Date(2022, 6, 20),
    end: new Date(2022, 6, 23),
  },
];
function Calendar1() {
  const [addEvent, setAddEvent] = useState({
    title: "",
    start: "",
    end: "",
  });
  const [allEvents, setAllEvents] = useState([]);

  const handleEvent = () => {
    setAllEvents([...allEvents, addEvent]);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Add Title"
          value={addEvent.title}
          onChange={(e) => setAddEvent({ ...addEvent, title: e.target.value })}
        />
        <DatePicker
          placeholderText="Start Date"
          selected={addEvent.start}
          onChange={(start) => setAddEvent({ ...addEvent, start })}
        />
        <DatePicker
          placeholderText="End Date"
          selected={addEvent.end}
          onChange={(end) => setAddEvent({ ...addEvent, end })}
        />
        <button className="btn btn-success" onClick={handleEvent}>
          Add Event
        </button>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}
export default Calendar1;
