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
  " is taking a nap",
  " is getting engaged",
  "'s dad is calling",
  "'s mom is calling",
  " has a flight to catch",
  " is eating the world's largest banana",
  " is joining a pie eating contest",
  " is too busy bettering themselves",
  " is committing treason",
  " is getting unlimited breadsticks at Olive Garden",
  " is eating a burger at IHOB",
  " is spending their life savings on guac",
  " is trying to buy a house",
  " is venturing into the upside down",
  " is reading the Player's Handbook",
  " is reading the DM Guide",
  " is playing with another group that day",
  " is working a soul-crushing lifeless job",
  " will attempt to grow a beard",
  " will forget you are trying to play D&D",
  " is adopting a kitten",
  " is fighting the mafia",
  " is fighting a beholder",
  " is petting a monkey",
  " is beating their child",
  " is on the road",
  " is trying to stop the Death Curse",
  " is franchising a Chick-Fil-A",
  "'s brother is putting foot fungus in their pillow",
  " is playing Link's Awakening",
  " will have food poisoning",
  " is stealing someone's identity",
  " will die",
  "'s dog will eat their character sheet",
  "'s cat will eat their character sheet",
  " will forget to set their alarm",
  "'s kids will take their character sheet into school instead of their kids homework",
  " will hate you",
  " will want to beat you up",
  " is watching twitch",
  " is playing Fortnite",
  " is developing a D&D parody site",
  " is playing WoW Classic",
  " is playing Train Simulator",
  " will try and convince the DM to play a horrible homebrew class",
  " will develop mesothelioma",
  " will study the mitochondria",
  " will have a bad case of IBS",
  " is swiping left on Tinder",
  " is swiping right on Tinder",
  " is volunteering for Trump's Presidential campaign",
  " is volunteering for Biden's Presidential campaign",
  " is volunteering for Bernie's Presidential campaign",
  " is volunteering for Ace Watkins' Presidential campaign",
  " is experimenting with cloning sheep",
  " is getting LASIK",
  " is practicing singing to birds",
  " is sleeping with the fishes",
  " is drinking an unknown potion",
  " is trying to use a magical item without attuning to it",
  " is taking an improv class",
  " is making memes",
  " is consuming memes",
  " is doing drugs",
  " is buying Bitcoin",
  " is selling Bitcoin",
  " is buying Ethereum",
  " is selling Ethereum",
  " is trying to not be like other girls",
  " is going to a rap battle",
  " is trimming their hedges",
  " is playing hockey",
  " is cosplaying as Black Widow",
  " is taking their cousin bowling",
  " is buying loot boxes",
  " will forget their dice",
  " will be going outside",
  " will eat spicy food that was too hot",
  " will handcraft a mini to prepare to play another day",
  " is spending all their money on microtransactions",
  " will be completing the first steps in bringing down capitalism",
  " will be completing the first steps in bringing down capitalism",
  " will be trying to figure out what Strahd's curse is",
  " is trying to figure out how a tomb can annhilate you",
  " is trying to figure out if the Lost Mine's of Phandelver can still be called that after they found it",
  " is trying to figure out if there are Kings & Queens of the apocalypse",
  " is eating at the Yawning Portal",
  " is burning down the local barkeeps tavern",
  " is undergoing an alignment change",
  " is updating the list of reasons why they cannot play DnD on a website",
  " is 'stuck at work'",
  " will be raiding on World of Warcraft",
  " will be in prison due to copyright claims from WotC",
  " will be going to the store to purchase a new microphone after breaking their old one because they cannot contain their rage",
  " has anger management class",
  " is writing their own campaign that is way cooler",
  " will be practicing their voice acting",
  " is watching the Star Wars Prequels for dank memes instead of playing",
  "'s familiar will have escaped",
  " will be founding an anarcho-syndicalist commune"
];

const newYearsDayReasons = [
  " is not following through with new years resolutions",
  " is getting over a hangover",
  " is at the gym wondering why they made this stupid new years resolution",
  " will be forgetting what year to write for the next 4 months"
];

const MLKDayReasons = [" has a dream", " is marching", " is celebrating MLK"];

const valentinesDayReasons = [
  " is seducing a dragon",
  " is being pursued by a secret admirer",
  " will have eaten too many heart shaped candies and feel sick",
  " will feel lonely for having no Valentine's day date"
];

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
  valentinesDay: valentinesDayReasons,
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
