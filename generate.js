function generate() {
    var Champion_name = ["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "Aurelion Sol", "Azir", "Bard", "Blitzcrank",
        "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Dr. Mundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", 
        "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", 
        "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "Kai'Sa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", 
        "Kled", "Kog'Maw", "LeBlanc", "Lee Sin", "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", 
        "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nocturne", "Nunu and Willump", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", 
        "Qiyana", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Renekton", "Rengar", "Riven", "Rumble", "Ryze",  "Sejuani", "Senna", "Sett", "Shaco", "Shen", "Shyvana", "Singed", 
        "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", 
        "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'Koz", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", 
        "Xerath", "Xin Zhao", "Yone", "Yasuo", "Yorick", "Yuumi", "Zac", "Zed", "Ziggs", "Zilean", "Zoe", "Zyra"];
    var rand_Champion_name = Math.floor(Math.random()*Champion_name.length);
    var rand_Champion_name2 = Math.floor(Math.random()*Champion_name.length);
    var rand_Champion_name3 = Math.floor(Math.random()*Champion_name.length);
    document.getElementById('results').innerHTML = "<h2>3 Champion Names :</h2><div class='alert alert-success'><h2>"+Champion_name[rand_Champion_name]+", 
    "+Champion_name[rand_Champion_name2]+", "+Champion_name[rand_Champion_name3]+"</h2></div>";
}
