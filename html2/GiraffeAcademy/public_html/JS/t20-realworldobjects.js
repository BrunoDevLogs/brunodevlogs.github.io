var myMovie = {
    title: "The Social Network",
    releaseYear: "2010",
    duration: 2.0,
    actors: [
        {
            name: "Jessie Eisenberg",
            birthday: new Date("October 5, 1983"), 
            hometow: "New York, New York"        
        },
        {
            name: "Roonie Mara",
            birthday: new Date("April 17, 1985"), 
            hometow: "Badford New York"        
        }
    ]
};

document.write(myMovie.actors[1].name);