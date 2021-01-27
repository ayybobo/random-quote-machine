
function randomize() {
  document.getElementById('quote').style.color = randomColors();
};
function randomColors() {
   return '#'+Math.floor(Math.random() * 16777215).toString(16);
};
let colors = randomColors();



function getQuote() {

const quotes = {

    "Mother Teresa" : "Spread love everywhere you go. Let no one ever come to you without leaving happier.", 
    "Franklin D. Roosevelt" : "When you reach the end of your rope, tie a knot in it and hang on.", 
    "Margaret Mead" : "Always remember that you are absolutely unique. Just like everyone else.", 
    "Robert Louis Stevenson" : "Don't judge each day by the harvest you reap but by the seeds that you plant.", 
    "Cixin Liu" : "Weakness and Ignorance are not barriers to survival, but arrogance is",
    "Eleanor Roosevelt" : "The future belongs to those who believe in the beauty of their dreams.", 
    "Benjamin Franklin" : "Tell me and I forget. Teach me and I remember. Involve me and I learn.", 
    "Helen Keller" : "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    "Aristotle" : "It is during our darkest moments that we must focus to see the light.",
    "Anne Frank" : "Whoever is happy will make others happy too.",
    "Ralph Waldo Emerson" : "Do not go where the path may lead, go instead where there is no path and leave a trail."
    
};

var keys = Object.keys(quotes);
var author = keys[Math.floor(Math.random() * keys.length)];
var quote = quotes[author];

document.getElementById("quote").innerHTML = quote;
document.getElementById("author").innerHTML = author;

};