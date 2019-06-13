var commonWords = [
	["aina",			"always"],
	["anna",			"give!~(2s)"],
	["annamme",			"we give"],
	["asu",				"live!~(2s)"],
	["eteesi",			"in front of you"],
	["ihmisten",		"of people"],
	["ja",				"and"],
	["joka",			"who"],
	["kaikesta",		"from every"],
	["kaikkein",		"most"],
	["kaikki",			"everything"],
	["kaikkien",		"of all"],
	["maan",			"of earth"],
	["meidän",			"our"],
	["meidät",			"us"],
	["meille",			"to us"],
	["meissä",			"in us"],
	["meitä",			"us"],
	["mekin",			"we also"],
	["minua",			"me"],
	["minulle",			"to me"],
	["minun",			"my"],
	["minut",			"me"],
	["myös",			"also"],
	["niin",			"so"],
	["nimeen",			"into name"],
	["nimesi",			"your name"],
	["nyt",				"now"],
	["ole",				"be!~(2s)"],
	["olet",			"you are"],
	["oleva",			"that is"],
	["olkoon",			"may it be"],
	["päivänä",			"on day"],
	["päällä",			"on top"],
	["sillä",			"for/because"],
	["sinulle",			"to you"],
	["sinun",			"your"],
	["sinä",			"you"],
	["tule",			"come!~(2s)"],
	["tänä",			"on this"],
	["vaan",			"but"],
	["äläkä",			"do not!"]
];

var orthodoxWords = [
	["aina",			"always"],
	["anna",			"give!~(2s)"],
	["anna anteeksi",	"forgive!~(2s)"],
	["annamme",			"we give"],
	["antaja",			"giver"],
	["anteeksi",		"pardon"],
	["armahda",			"have mercy!~(2s)"],
	["armahda minua",	"have mercy on me!~(2s)"],
	["armollinen",		"merciful"],
	["asu",				"live!"],
	["elämän",			"of life"],
	["enkelein",		"angelic"],
	["esirukouksien",	"of intercessions"],
	["eteesi",			"in front of you"],
	["heikkoutemme",	"our weaknesses"],
	["heittäydymme",	"we throw ourselves"],
	["Hengelle",		"to Spirit"],
	["Hengen",			"of Spirit"],
	["Henki",			"Spirit"],
	["Herra",			"Lord"],
	["herätit",			"you woke"],
	["herättyämme",		"our awakening"],
	["hyvyyden",		"of good"],
	["Hyvä",			"Good"],
	["iankaikkiseen",	"to everlasting"],
	["iankaikkisesta",	"from everlasting"],
	["ihmisten",		"of people"],
	["Isä",				"Father"],
	["Isälle",			"to Father"],
	["Isän",			"of Father"],
	["ja",				"and"],
	["joka",			"who"],
	["jokapäiväinen",	"daily"],
	["Jumala",			"God"],
	["Jumalamme",		"our God"],
	["Jumalan",			"of God"],
	["Jumalansynnyttäjän",	"of the Theotokos"],
	["kaikesta",		"from every"],
	["kaikkein",		"most"],
	["kaikki",			"everything"],
	["kaikkien",		"of all"],
	["kiusaukseen",		"into temptation"],
	["Kolminaisuus",	"Trinity"],
	["kuin",			"as"],
	["Kuningas",		"King"],
	["kunnia",			"glory"],
	["Kuolematon",		"Immortal"],
	["leipämme",		"our bread"],
	["Lohduttaja",		"Comforter"],
	["Luojani",			"my Creator"],
	["lähde",			"source/spring"],
	["maan",			"of earth"],
	["meidän",			"our"],
	["meidät",			"us"],
	["meille",			"to us"],
	["meissä",			"in us"],
	["meitä",			"us"],
	["mekin",			"we also"],
	["minua",			"me"],
	["minulle",			"to me"],
	["minun",			"my"],
	["minut",			"me"],
	["myös",			"also"],
	["niin",			"so"],
	["nimeen",			"into name"],
	["nimesi",			"your name"],
	["nyt",				"now"],
	["oi",				"O/oh"],
	["ole",				"be!~(2s)"],
	["olet",			"you are"],
	["oleva",			"that is"],
	["olkoon",			"be!~(3s)"],
	["pahasta",			"from evil"],
	["pahuudesta",		"from evil"],
	["paikassa",		"in place"],
	["paranna",			"heal!~(2s)"],
	["pelasta",			"save!~(2s)"],
	["Poika",			"Son"],
	["Pojalle",			"to Son"],
	["Pojan",			"of Son"],
	["puhdista",		"cleanse!"],
	["puhtaimman",		"of most pure"],
	["Pyhä",			"Holy"],
	["Pyhälle",			"to Holy"],
	["Pyhän",			"of Holy"],
	["pyhien",			"of holies"],
	["pyhin",			"holiest"],
	["pyhitetty",		"hallowed"],
	["päivänä",			"on day"],
	["päällä",			"on top"],
	["päästä",			"deliver!~(2s)"],
	["rikoksemme",		"our offenses"],
	["saata",			"lead!~(2s)"],
	["sekä",			"as well as"],
	["sielumme",		"our souls"],
	["sillä",			"for/because"],
	["sinulle",			"to you"],
	["sinun",			"your"],
	["sinä",			"you"],
	["synneistämme",	"from our sins"],
	["synneistäni",		"from my sins"],
	["synnin",			"of sin"],
	["syntiselle",		"to sinner"],
	["tahtosi",			"your will"],
	["taivaallinen",	"heavenly"],
	["taivaassa",		"in heaven"],
	["taivaissa",		"in heavens"],
	["tapahtukoon",		"happen!~(3s)"],
	["totuuden",		"of truth"],
	["tule",			"come!~(2s)"],
	["tulkaa",			"come!~(2p)"],
	["tulkoon",			"come!~(3s)"],
	["tähden",			"for the sake of"],
	["täyttävä",		"filling"],
	["tänä",			"on this"],
	["unesta",			"from sleep"],
	["vaan",			"but"],
	["valista",			"from distance/from gap/from interval"],
	["valtakunta",		"kingdom"],
	["valtakuntasi",	"your kingdom"],
	["Valtias",			"Master"],
	["veisaamme",		"we sing"],
	["velallisillemme",	"to our debtors"],
	["velkamme",		"our debt"],
	["virttä",			"hymn"],
	["voima",			"power"],
	["vuoteelta",		"from bed"],
	["Väkevä",			"Mighty"],
	["Äitisi",			"Your mother"],
	["äläkä",			"do not!~(2s)"]
];

var words = commonWords;
var wordIndex;
var finnWord = "";
var translation = "";



function init()
{
	alert("If you ever need some assistance, just input \"help\" in the text box.");

	if (document.getElementById("r1").checked)
		words = commonWords;
	else
		words = orthodoxWords;

	wordIndex = Math.floor(Math.random() * words.length);
	finnWord = words[wordIndex][0];
	translation = words[wordIndex][1].split("~");		// if there are notes to the translation
	translation[0] = translation[0].split("/");			// if there are multiple valid translations

	document.getElementById("p2").innerHTML = "Translate: " + finnWord;

	document.getElementById("b1").addEventListener("keyup", event => {
		if (event.key !== "Enter") return;
		document.getElementById("b1").click();
		event.preventDefault();
	});
}

function checkGuess()
{
	var correct = false;
	var userText = document.getElementById("t1").value;
	var printMessage;

	if (userText === "help") {
		document.getElementById("p1").innerHTML =
			"This program is designed to be as straightforward as possible, which means that there are some shortcuts you should be aware of:</br></br>1. If the mood of a verb is imperative, make sure to add an exclamation (!) at the end of the word.</br>2. Finnish third person singular is genderless; thus the correct translation of a third person singular verb is: \"it <verb>\", NOT \"he <verb>\" or \"she <verb>\"</br>3. When you see a capitalized Finnish word, there will be a corresponding capitalization in part of the English translation, for example \"Äitisi\" -> \"Your mother\" (but NOT \"Your Mother\").</br>4. Words are repeated for incorrect answers, to make you write the correct answer and help with the learning process.";
		return;
	}

	for (i=0; i<translation[0].length; i++) {
		if (userText === translation[0][i]) {
			correct = true;
			break;
		}
	}

	if (correct) {
		printMessage = "Correct!";

		// If there is a note on the translation
		if (translation.length == 2)
			printMessage = printMessage + " " + translation[1];
		document.getElementById("p1").innerHTML = printMessage;

		wordIndex = Math.floor(Math.random() * words.length);
	} else {
		printMessage = "No, the correct answer is: " + translation[0][0];

		// if there is a note on the translation
		if (translation.length == 2)
			printMessage = printMessage + " " + translation[1];

		document.getElementById("p1").innerHTML = printMessage;
	}

	if (document.getElementById("r1").checked)
		words = commonWords;
	else
		words = orthodoxWords;

	finnWord = words[wordIndex][0];
	translation = words[wordIndex][1].split("~");		// if there are notes to the translation
	translation[0] = translation[0].split("/");			// if there are multiple valid translations

	document.getElementById("p2").innerHTML = "Translate: " + finnWord;
}