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
  "'s dad will be visiting",
  " will have a UTI",
  " will poop their pants",
  " will have terrible diarrhea",
  " will be engrossing themselves in the rich tapestry of lore that is The Fast & The Furious series",
  " will be travelling back in time to get the infinity stones"
];

const newYearsDayReasons = [
  " is not following through with new years resolutions"
];

const MLKDayReasons = [" has a dream"];

const georgeWashingtonsBirhtdayReasons = [" is getting wooden teeth"];

const independenceDayReasons = [" is shooting fireworks"];

const laborDayReasons = [" is going into labor"];

const columbusDayReasons = [" is stealing land"];

const halloweenReasons = [" is trick or treating"];

const veteransDayReasons = [" is honoring veterans"];

const thanksgivingReasons = [" is eating dinner with native americans"];

const christmasReasons = [
  " is hanging out with Santa",
  " is watching Jingle All The Way"
];

const newYearsEveReasons = [" staying up late"];

export const specialReasons: { [date: string]: Array<string> } = {
  newYearsDay: newYearsDayReasons,
  MLKDay: MLKDayReasons,
  georgeWashingtonsBirhtday: georgeWashingtonsBirhtdayReasons,
  independenceDay: independenceDayReasons,
  laborDay: laborDayReasons,
  columbusDay: columbusDayReasons,
  halloween: halloweenReasons,
  veteransDay: veteransDayReasons,
  thanksgiving: thanksgivingReasons,
  christmas: christmasReasons,
  newYearsEve: newYearsEveReasons
};

export default reasons;
