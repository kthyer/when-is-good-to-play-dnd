import React, { useState } from "react";
import "./App.css";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Typography, Container } from "@material-ui/core";
import dndLogo from "./assets/dnd logo.png";

const reasons = [
  " has family unexpectedly coming to town",
  " has laundry that needs to be done",
  " will have a flat tire",
  " won't have working hot water",
  " will have a burrito and won't be able to move",
  " kid will be sick",
  " will have a migraine",
  " will have really bad cramps",
  "'s mom will be visiting",
  "' dad will be visiting",
  " will have a UTI",
  " will poop their pants",
  " will have terrible diarrhea",
  " will be engrossing themselves in the rich tapestry of lore that is The Fast & The Furious series",
  " will be travelling back in time to get the infinity stones"
];

const classes = [
  "Barbarian",
  "Bard",
  "Cleric",
  "Druid",
  "Fighter",
  "Monk",
  "Paladin",
  "Ranger",
  "Rogue",
  "Sorcerer",
  "Warlock",
  "Wizard"
];

const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

const App = () => {
  const [date, changeDate] = useState(new Date());
  const [reasonCantPlay, setReasonCantPlay] = useState("");

  const onAccept = () => {
    const randomClass = classes[getRandomInt(classes.length)];
    const randomReason = reasons[getRandomInt(reasons.length)];
    setReasonCantPlay(`Your party's ${randomClass}${randomReason} that day.`);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="App">
        <header className="App-header">
          <img
            src={dndLogo}
            alt="DnD Logo"
            style={{ maxWidth: "20%", marginBottom: 100 }}
          />
          <Typography variant="h4" gutterBottom style={{ marginBottom: 24 }}>
            Pick a date to see if it is a good day to meet up and play DnD
          </Typography>
          <DatePicker
            autoOk
            orientation="landscape"
            variant="static"
            openTo="date"
            value={date}
            onChange={changeDate}
            onAccept={onAccept}
          />
          <Container maxWidth="md">
            <Typography variant="h4" style={{ marginTop: 24 }}>
              {`${reasonCantPlay &&
                "That day doesn't work because: "} ${reasonCantPlay}`}
            </Typography>
          </Container>
        </header>
      </div>
    </MuiPickersUtilsProvider>
  );
};

export default App;
