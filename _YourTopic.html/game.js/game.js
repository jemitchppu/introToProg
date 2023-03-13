function game(title,genre,systems,developer,publisher,year,players,sales,esrb,review){
    this.titleName = title;
    this.genre = genre;
    this.systems = systems;
    this.developer = developer;
    this.publisher = publisher;
    this.year = year;
    this.playerCount = players;
    this.sales = sales;
    this.esrbRating = esrb;
    this.reviewScore = review;
}

var gameID = new game("The Legend of Zelda: Breath of the Wild", "Action-Adventure", "Nintendo Switch and Nintendo Wii U", "Nintendo EPD", "Nintendo", "2017", "single", "30.7 Million", "Everyone", "97/100");

document.write("<b><font size = 8>");
document.write(gameID.titleName);
document.write("</b></font size>");
document.write("<br>")
document.write(gameID.titleName + " is an " + gameID.genre + " game developed by " + gameID.developer + " and published by " + gameID.publisher + ".");
document.write(" It was released in " + gameID.year + " on the " + gameID.systems + ".");
document.write(" It is a " + gameID.playerCount + " player game set in the fictional land of Hyrule.");
document.write(" The game is rated E for " + gameID.esrbRating + " and has sold " + gameID.sales + " copies over its lifetime across both consoles.");
document.write(" It is one of the highest reviewed games of all time, scoring " + gameID.reviewScore + ".");