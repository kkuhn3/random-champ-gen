LOCHAMPS = [];

function ChampGen(){
	this.init = function(){
		fetch('./lochamps.txt')
			.then(response => response.text())
			.then(data => {
				LOCHAMPS = data.split("\n");
				champGen.randomChamp();
			});
	}
	
	this.randomChamp = function(){
		const randomInd = Math.floor(Math.random() * LOCHAMPS.length);
		const randChamp = LOCHAMPS[randomInd];
		const randChampImg = "./img/" + randChamp + ".jpg"
		document.getElementById("champImg").src = randChampImg;
		document.title = randChamp;
		return randChamp;
	}
}
