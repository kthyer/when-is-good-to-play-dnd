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

const newYearsDay = "01/1";

const newYearsDayReasons = [
  " is not following through with new years resolutions"
];

const MLKDay = "01/21";

const MLKDayReasons = [" has a dream"];

const georgeWashingtonsBirhtday = "02/18";

const georgeWashingtonsBirhtdayReasons = [" is getting wooden teeth"];

const memorialDay = "05/27";

const memorialDayReasons = [" is commemorating things"];

const independenceDay = "07/04";

const independenceDayReasons = [" is shooting fireworks"];

const laborDay = "09/02";

const laborDayReasons = [" is going into labor"];

const columbusDay = "10/14";

const columbusDayReasons = [" is stealing land"];

const veteransDay = "11/11";

const veteransDayReasons = [" is honoring veterans"];

const thanksgiving = "11/28";

const thanksgivingReasons = [" is eating dinner with native americans"];

const christmas = "12/25";
const christmasReasons = [
  " is hanging out with Santa",
  " is watching Jingle All The Way"
];

const newYearsEve = "12/31";

const newYearsEveReasons = [" staying up late"];

export const specialReasons: { [date: string]: Array<string> } = {
  [newYearsDay]: newYearsDayReasons,
  [MLKDay]: MLKDayReasons,
  [georgeWashingtonsBirhtday]: georgeWashingtonsBirhtdayReasons,
  [memorialDay]: memorialDayReasons,
  [independenceDay]: independenceDayReasons,
  [laborDay]: laborDayReasons,
  [columbusDay]: columbusDayReasons,
  [veteransDay]: veteransDayReasons,
  [thanksgiving]: thanksgivingReasons,
  [christmas]: christmasReasons,
  [newYearsEve]: newYearsEveReasons
};

export default reasons;
