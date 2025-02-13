let champions = {};

async function loadContent() {
	const versionRes = await fetch('https://ddragon.leagueoflegends.com/realms/na.json', {
		method: 'GET'
	});
	const versions = await versionRes.json();

	const championRes = await fetch('https://ddragon.leagueoflegends.com/cdn/' + versions['n']['champion'] + '/data/en_US/champion.json', {
		method: 'GET'
	});
	champions = await championRes.json();
}

function randomChamp() {
	const keys = Object.keys(champions['data']);
	const key = keys[ keys.length * Math.random() << 0]
    const champion = champions['data'][key];
    document.getElementById("champImg").src = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + key + '_0.jpg';
    document.title = champion['name'];
}
