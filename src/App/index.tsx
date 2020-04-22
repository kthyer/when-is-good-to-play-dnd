import { Container, Grid, Typography } from "@material-ui/core";
import { DnDClasses, DnDRaces } from "../constants/dnd";
import React, { useState } from "react";
import { StaticDatePicker, StaticTimePicker } from "@material-ui/pickers";
import reasons, { specialReasons } from "reasons";

import Header from "components/Header";
import dndLogo from "assets/dnd logo.png";
import { getHoliday } from "utils/date";
import { getRandomInt } from "utils";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();

  const [date, changeDate] = useState<any>(new Date());
  const [reasonCantPlay, setReasonCantPlay] = useState(
    "Pick a date to see if it is a good day to meet up and play DnD"
  );
  const [success, setSuccess] = useState(false);

  const onAccept = (date: any) => {
    if (getRandomInt(10000) === 1) {
      setSuccess(true);
      return setReasonCantPlay(
        "That day works for everyone!!! Now you'll have to find a time range that works for everyone."
      );
    }
    const randomClass = DnDClasses[getRandomInt(DnDClasses.length)];
    const randomRace =
      randomClass === "DM" ? "" : DnDRaces[getRandomInt(DnDRaces.length)];

    const specialDate = specialReasons[getHoliday(date)];

    const randomReason = specialDate
      ? specialDate[getRandomInt(specialDate.length)]
      : reasons[getRandomInt(reasons.length)];

    // Temporarily disabled due to corona
    /*setReasonCantPlay(
      `That day doesn't work because your party's ${randomRace} ${randomClass}${randomReason}.`
    );*/

    setReasonCantPlay(
      "That day works because everyone is stuck at home! Get on Roll20!"
    );

    setSuccess(false);
  };

  return (
    <div>
      <Header />
      <main>
        <Container maxWidth="xs" className={classes.topMargin}>
          <Grid container justify="center" alignItems="center">
            <Grid item>
              <img src={dndLogo} alt="DnD Logo" className={classes.logo} />
            </Grid>
          </Grid>
        </Container>
        <Container
          maxWidth="lg"
          className={`${classes.topMargin} ${classes.bottomMargin}`}
        >
          <Typography align="center" variant="h4" gutterBottom>
            {reasonCantPlay}
          </Typography>
        </Container>
        <Grid container justify="center" alignItems="center">
          <Grid item>
            {success ? (
              <StaticTimePicker
                autoOk
                orientation="landscape"
                value={date}
                onChange={changeDate}
                onAccept={onAccept}
              />
            ) : (
              <StaticDatePicker
                autoOk
                openTo="date"
                value={date}
                onChange={changeDate}
                onAccept={onAccept}
                disablePast
              />
            )}
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default App;
