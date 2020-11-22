LOCHAMPS = [];
LOCHAMPSIMG = [];

function ChampGen(){
	this.init = function(){
		$.ajax({
		  url: "./lochamps.txt",
		  success: function (data){
				LOCHAMPS = data.split("\n");
				$.ajax({
				  url: "./lochampImg.txt",
				  success: function (data){
						LOCHAMPSIMG = data.split("\n");
						champGen.randomChamp();
				  }
				});
		  }
		});
	}
	
	this.randomChamp = function(){
		var randomInd = Math.floor(Math.random() * LOCHAMPS.length);
		var randChamp = LOCHAMPS[randomInd];
		var randChampImg = LOCHAMPSIMG[this.indexOfImage(randChamp)];
		document.getElementById("champImg").src = randChampImg;
		return randChamp;
	}
	
	this.indexOfImage = function(championName){
		console.log(championName);
		for(var i = 0; i < LOCHAMPSIMG.length; i++){
			var imageName = LOCHAMPSIMG[i].toString().toLowerCase();
			var champName = championName.toLowerCase().split(" ")[0].split("'")[0].trim();
			if(champName === "dr."){
				champName = "mundo";
			}
			if(imageName.includes(champName)){
				console.log("found: " + LOCHAMPSIMG[i]);
				return i;
			}
		}
	}
}
