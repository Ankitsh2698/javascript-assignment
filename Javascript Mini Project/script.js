var quotes = [`"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." <br />  - Albert Einstein`, `"the people who are crazy enough to think they can change the world are the ones who do." <br /> - Steve Jobs`, `"A man who dares to waste one hour of time has not discovered the value of life." <br /> - Charles Darwin`, `"You cannot teach a man anything; you can only help him discover it in himself." <br /> - Galileo`, `"If I have seen further it is by standing on the shoulders of Giants." <br /> - Isaac Newton`, `"One, remember to look up at the stars and not down at your feet. Two, never give up work. Work gives you meaning and purpose and life is empty without it. Three, if you are lucky enough to find love, remember it is there and don't throw it away." <br /> - Stephen Hawking`, `"Imagination is more important than knowledge." <br /> - Albert Einstein`, `"The saddest aspect of life right now is that gathers knowledge faster than society gathers wisdom." <br /> - Isaac Asimov`];

function newQuote(){
    var randomNum = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote').innerHTML = quotes[randomNum];
}

