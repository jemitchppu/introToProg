var show = {
    name: "The Last of Us",
    genre: "Action Adventure",
    year: "2023",
    actor: "Pedro Pascal",
    actress: "Bella Ramsey",
    director: "Craig Mazin",
    stream: "HBO Max",
    creator: "Neil Druckman",
    rating: "9.1/10",
    game: "2013"
};
document.write("<b><font size = 8>");
document.write(show.name);
document.write("</b></font size>");
document.write("<br>");
document.write(" The show's genre is " + show.genre + ".");
document.write(" The last of Us is based on a popular video game released for Playstation in " + show.game + ".");
document.write(" It was released in the year " + show.year + ".");
document.write(" The show was created by " + show.creator + ".");
document.write(" The show is directed by " + show.director + ".");
document.write(" The main character, Joel, is played by " + show.actor + ".");
document.write(" The secondary character, Ellie, is played by" + show.actress + ".");
document.write(" The show's current IMDB rating is " + show.rating + ".");
document.write(" The Last of Us is available for streaming on " + show.stream + ".");