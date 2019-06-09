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
		var randChampImg = LOCHAMPSIMG[randomInd];
		document.getElementById("champImg").src = randChampImg;
		document.getElementById("champText").innerHTML = randChamp;
		return randChamp;
	}
}
