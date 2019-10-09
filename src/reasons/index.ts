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
  " will be travelling back in time to get the infinity stones",
  " will be taking a nap",
  " is getting engaged",
  "'s dad is calling",
  "'s mom is calling",
  " has a flight to catch",
  " will be eating the world's largest banana",
  " will be joining a pie eating contest",
  " will be too busy bettering themselves",
  " will be committing treason",
  " will be getting unlimited breadsticks at Olive Garden",
  " will be eating a burger at IHOB",
  " will be spending their life savings on guac",
  " will be trying to buy a house",
  " will be venturing into the upside down",
  " will be reading the Player's Handbook",
  " will be reading the DM Guide",
  " will be playing with another group that day",
  " will be working a soul-crushing lifeless job",
  " will attempt to grow a beard",
  " will forget you are trying to play D&D",
  " will be adopting a kitten",
  " will be fighting the mafia",
  " will be fighting a beholder",
  " will be petting a monkey",
  " will be beating their child",
  " will be on the road",
  " will be trying to stop the Death Curse",
  " will be franchising a Chick-Fil-A",
  "'s brother is putting foot fungus in their pillow",
  " will be playing Link's Awakening",
  " will have food poisoning",
  " will be stealing someone's identity",
  " will die",
  "'s dog will eat their character sheet",
  "'s cat will eat their character sheet",
  " will forget to set their alarm",
  "'s kids will take their character sheet into school instead of their kids homework",
  " will hate you",
  " will want to beat you up",
  " will be watching twitch",
  " will be playing Fortnite",
  " will be developing a D&D parody site",
  " will be playing WoW Classic",
  " will be playing Train Simulator",
  " will try and convince the DM to play a horrible homebrew class",
  " will develop mesothelioma",
  " will study the mitochondria",
  " will have a bad case of IBS",
  " will be swiping left on Tinder",
  " will be swiping right on Tinder",
  " will be volunteering for Trump's Presidential campaign",
  " will be volunteering for Biden's Presidential campaign",
  " will be volunteering for Bernie's Presidential campaign",
  " will be volunteering for Ace Watkins' Presidential campaign",
  " will be experimenting with cloning sheep",
  " will be getting LASIK",
  " will be practicing singing to birds",
  " will be sleeping with the fishes",
  " will be drinking an unknown potion",
  " will be trying to use a magical item without attuning to it",
  " will be taking an improv class",
  " will be making memes",
  " will be consuming memes",
  " will be doing drugs",
  " will be buying Bitcoin",
  " will be selling Bitcoin",
  " will be buying Ethereum",
  " will be selling Ethereum",
  " will be trying to not be like other girls",
  " will be going to a rap battle",
  " will be trimming their hedges",
  " will be playing hockey",
  " will be cosplaying as Black Widow",
  " will be taking their cousin bowling",
  " will be buying loot boxes",
  " will forget their dice",
  " will be going outside",
  " will eat spicy food that was too hot",
  " will handcraft a mini to prepare to play another day",
  " will be spending all their money on microtransactions",
  " will be completing the first steps in bringing down capitalism",
  " will be completing the first steps in bringing down capitalism",
  " will be trying to figure out what Strahd's curse is",
  " will be trying to figure out how a tomb can annhilate you",
  " will be trying to figure out if the Lost Mine's of Phandelver can still be called that after they found it",
  " will be trying to figure out if there are Kings & Queens of the apocalypse",
  " will be eating at the Yawning Portal",
  " will be burning down the local barkeeps tavern",
  " will be undergoing an alignment change",
  "'s in-laws are visiting and they're going to want to talk about work",
  " will move to a different continent"
];

const newYearsDayReasons = [
  " is not following through with new years resolutions",
  " is getting over a hangover",
  " is at the gym wondering why they made this stupid new years resolution",
  " will be forgetting what year to write for the next 4 months"
];

const MLKDayReasons = [" has a dream", " is marching", " is celebrating MLK"];

const georgeWashingtonsBirthdayReasons = [
  " is getting wooden teeth",
  " is running for president",
  " is crossing the delaware"
];

const independenceDayReasons = [
  " is shooting fireworks",
  " is fighting aliens",
  " is signing the Declaration of Indepndence",
  " is stealing the Declaration of Indepndence",
  " throwing tea off a boat"
];

const laborDayReasons = [
  " is going into labor",
  " is delivering a baby",
  " is laboring"
];

const columbusDayReasons = [
  " is stealing land",
  " will believe they are in India when they are actually in North America",
  " is sailing the ocean blue"
];

const halloweenReasons = [
  " is trick or treating",
  " is giving candy to children",
  " is being spooky"
];

const veteransDayReasons = [" is honoring veterans", " "];

const thanksgivingReasons = [
  " is eating dinner with native americans",
  " is eating dinner with pilgrims",
  " is giving thanks",
  " is eating dinner with their racist uncle"
];

const christmasReasons = [
  " is hanging out with Santa",
  " is watching Jingle All The Way",
  " is going to the north pole",
  " is reenacting all of the movie Elf"
];

const newYearsEveReasons = [" staying up late"];

export const specialReasons: { [date: string]: Array<string> } = {
  newYearsDay: newYearsDayReasons,
  MLKDay: MLKDayReasons,
  georgeWashingtonsBirthday: georgeWashingtonsBirthdayReasons,
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
