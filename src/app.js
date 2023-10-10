const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = '';

    // Instead of forloop use Map method
    // Code here
    detailedPlayers = players.map(function(ele, index){
        if(index%2==0){
            var type_1 = "hero";
        }else{
            type_1 = "villian"
        }

        let player = {
            name: ele,
            strength: getRandomStrength(),
            image: `./images/super-${index + 1}.png`,
            type: type_1
        }
        return player;
    })
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    var hero = players.filter(function(item){
        return item.type == "hero";
    })

    var villian = players.filter(function(item){
        return item.type == "villian";
    })

    if(type=="hero"){
        fragment = hero.map(function(item){
            return `
            <div class="player">
                <img src="${item.image}" alt="">
                <div class="name">${item.name}</div>
                <div class="strength">${item.strength}</div>
            </div>
            `;
        }).join("")
    }else{
        fragment = villian.map(function(item){
            return `
                <div class="player">
                    <img src="${item.image}" alt="">
                    <div class="name">${item.name}</div>
                    <div class="strength">${item.strength}</div>
                </div>
                `;
        }).join("")
    }
    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}