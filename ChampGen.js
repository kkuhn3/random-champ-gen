LOCHAMPS = [];

function ChampGen(){
	this.init = function(){
		$.ajax({
			url: "./lochamps.txt",
			success: function (data){
				LOCHAMPS = data.split("\n");
				champGen.randomChamp();
			}
		});
	}
	
	this.randomChamp = function(){
		const randomInd = Math.floor(Math.random() * LOCHAMPS.length);
		const randChamp = LOCHAMPS[randomInd];
		const randChampImg = "./img/" + randChamp + ".jpg"
		document.getElementById("champImg").src = randChampImg;
		return randChamp;
	}
}
