var figurImg = [];
figurImg.push(new Image());
figurImg[0].src="./img/prins.png";

figurer = [];
figurer.push({
	id: "Prinsen",
	url: "./js/player/prins.js",
	status: "alive"
});
figurer.push({
	id: "Narren",
	url: "./js/player/narr.js",
	status: "alive"
});

getFile(figurer[0].url);