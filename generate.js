var picLink = [];
var x = 0;

function generate() {
    var Champion_name = ["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "AurelionSol", "Azir", "Bard", "Blitzcrank",
        "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Chogath", "Corki", "Darius", "Diana", "DrMundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", 
        "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", 
        "JarvanIV", "Jax", "Jayce", "Jhin", "Jinx", "Kaisa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Khazix", "Kindred", 
        "Kled", "KogMaw", "Leblanc", "LeeSin", "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "MasterYi", "MissFortune", 
        "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nocturne", "Nunu", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", 
        "Qiyana", "Quinn", "Rakan", "Rammus", "RekSai", "Renekton", "Rengar", "Riven", "Rumble", "Ryze",  "Sejuani", "Senna", "Sett", "Shaco", "Shen", "Shyvana", "Singed", 
        "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "TahmKench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", 
        "Tryndamere", "TwistedFate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "VelKoz", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", 
        "Xerath", "XinZhao", "Yone", "Yasuo", "Yorick", "Yuumi", "Zac", "Zed", "Ziggs", "Zilean", "Zoe", "Zyra"];
        
    var rand_Champion_name = [Math.floor(Math.random()*Champion_name.length), Math.floor(Math.random()*Champion_name.length), Math.floor(Math.random()*Champion_name.length)];

    while(rand_Champion_name[0] == rand_Champion_name[1] || rand_Champion_name[1] == rand_Champion_name[2] || rand_Champion_name[0] == rand_Champion_name[2]){
        rand_Champion_name[1] = [Math.floor(Math.random()*Champion_name.length)];
        rand_Champion_name[2] = [Math.floor(Math.random()*Champion_name.length)];
    }

    for(var i=0; i<3; i++){
        var results = "results" + i.toString();
        document.getElementById(results).innerHTML = Champion_name[rand_Champion_name[i]];
        picLink[i] = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + Champion_name[rand_Champion_name[i]] + "_0.jpg";
    }
}

function newPic(x){
    document.getElementById('skin').src = picLink[x];
}