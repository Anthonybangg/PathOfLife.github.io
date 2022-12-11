let btn = document.getElementById('btn');
// btn.addEventListener('click', function(){

//     // document.getElementById('total-bill').value =  parseInt(Income) + parseInt(passive) - parseInt(expenses);
//     // let newtotal =  document.getElementById('total-bill').value;
//     console.log( score);
// });
const letter = document.getElementById("Print");
let score = 0;
let education = 0;
let dicerolled = 0;
let business = 0;
let businessTotal = 0;
let tracker = 0;
let businesslvl = 0;
let healthlvl = 5;
let lovelvl = 5;
let happinesslvl = 5;
const opportunity = ["opportunity","opportunity","opportunity","education","education","wealth","wealth","Tax! pay $200 and property owners"]
const opportunityselection = [
    "Pay 300 each paycheck for a Gym membership if you want. +1 health every paycheck. ",
    "Eat out with friends for $100 +1 Health and +1 Happiness or -1 health if you miss out.",
    "Drink Protein shake. +2 health or -1 health if you miss out. +2 health if your health and happiness is above 5.",
    "meditate +2 health or -1 if you miss out",

    "Travel to Hawaii for $3000 +3 happiness.",
    "Go out to bowl with friends for $100 +1 happiness or -1.",
    "Fly to Minnesota for a for Funeral. pay $400 & +0 or -2 happiness if you miss it.",
    "Go sky diving. die. jk +2 happiness. -1 if you miss out. ",

    "Your family loves you kinda. +1 Love. +1 love& +1 happiness if married.",
    "Find a Boyfriend/Girlfriend if single. +3 love or -1. +1 love if you have significant other or +2 love if married.",
    "If you have a significant other one, +2 Love or -1. (everyone) +3 love and +1 happiness if Married.",
    "Marry your significant other(optional). $5,000 for the wedding +2 love. -1 if someone else does and you dont.",
    
    "Mug someone for 50% rounded down to the nearest $500 or steal a property. ",
    "Ruin someones life. -1 health happiness love.",
    "GREAT DEPRESSION - -30% income down to nearest $500. If you're in debt, 2X it. "
];
const educationselection = [
    "Make huge Leaps +2 Education. +1 extra if all categories 10 or more.",
    "Learn something new +1 Education. +1 extra if all categories 10 or more.",
    "Learn something new +1 Education. +1 extra if all categories 10 or more.",
    "Learn something new +1 Education. +1 extra if all categories 10 or more.",
    "Business level +1.",
    "re-read your book or you'll forget things. +0 or -1 if you don't."
];
const wealthselection = [
    "Win Medium Lottery Ticket. +$1,000 and +2 happiness.",
    "Win Large Lottery Ticket. +$3,000 and +2 happiness. ",
    "Buy or Sell Bitcoin at $50",
    "Buy or Sell Bitcoin at $100",
    "Buy or Sell Bitcoin at $150",
    "Buy or Sell Bitcoin at $550",
    "Buy or Sell Tesla at $50. +10$ income for every 10 stocks you own.",
    "Buy or Sell Tesla at $75. +10$ income for every 10 stocks you own. ",
    "Buy or Sell Tesla at $100. +10$ income for every 10 stocks you own. ",
    "Buy or Sell Tesla at $150. +10$ income for every 10 stocks you own. ",
    "Robinhood gets shut down by ELON CRIP. Lose All your bitcoin.",
    "15k - House On Mango Street 1. $300 passive income. If owned then pay owner. ",
    "15k - House On Mango Street 2. $300 passive income. If owned then pay owner.",
    "20k - Woodbury Air bnb 1. $500 passive income. If owned then pay owner.",
    "20k - Brooklyn Center Air bnb 2. $500 passive income. If owned then pay owner.",
    "30k - Red Apartment 1. $1000 passive income. If owned then pay owner.",
    "20k - 30k - Blue Apartment 2. $1000 passive income. If owned then pay owner.",
    "50k - Dragon Hotel 1. $1500 passive income. If owned then pay owner.",
    "50k - Snake Hotel 2. $1500 passive income. If owned then pay owner."
];

function calculate() {
    let Income = document.getElementById('Income').value || 0;
    let passive = document.getElementById('passive').value || 0;
    let expenses = document.getElementById('expenses').value || 0;
    let business = parseInt(document.getElementById('business').value) || 0;
    score += parseInt(Income) + parseInt(passive) + parseInt(business) - parseInt(expenses);
    document.getElementById('business-income').value = businessTotal += business;
    tracker += 1;
    let incrament = (parseFloat(businesslvl)*10 + 20);
    if (document.getElementById('business').value > 0) {
        business += incrament;
        document.getElementById('business').value = business;
        
    }
    education ++;

    document.getElementById('education-input').value = education;
    document.getElementById('incramentlvl').value = "+ " + incrament;
    document.getElementById('tracker').value = tracker;
    document.getElementById('Print').value = score;
    console.log('You have $' + score +" and it's payday number "+tracker + ". +1 education.");
    // console.log(incrament);
    // console.log(businesslvl);

    // BUTTON LVL UPS ==================================================================
}
function add() {
    let add = document.getElementById('add-input').value || 0;

    score += parseInt(add);
    document.getElementById('Print').value = score;
    console.log(add);
}
function subtract() {
    let subtract = document.getElementById('add-input').value || 0;

    score -= parseInt(subtract);
    document.getElementById('Print').value = score;
    console.log(subtract);
}
function businessAdd() {
    businesslvl += 1;
    document.getElementById('businesslvl').value = businesslvl;
     
}
function businessSubtract() {
    businesslvl -= 1;
    if (businesslvl < 0){
        businesslvl = 0;
    }
    document.getElementById('businesslvl').value = businesslvl;
}
function happinessAdd(){
    happinesslvl += 1;
    document.getElementById('happinesslvl').value = happinesslvl;
}
function happinessSubtract(){
    happinesslvl -= 1;
    if (happinesslvl < 0){
        happinesslvl = 0;
    }
    document.getElementById('happinesslvl').value = happinesslvl;
}
function loveAdd(){
    lovelvl += 1;
    document.getElementById('lovelvl').value = lovelvl;
}
function loveSubtract(){
    lovelvl -= 1;
    if (lovelvl < 0){
        lovelvl = 0;
    }
    document.getElementById('lovelvl').value = lovelvl;
}
function healthAdd(){
    healthlvl += 1;
    document.getElementById('healthlvl').value = healthlvl;
}
function healthSubtract(){
    healthlvl -= 1;
    if (healthlvl < 0){
        healthlvl = 0;
    }
    document.getElementById('healthlvl').value = healthlvl;
}
//  EDUCATION STUFF =======================================================================

function epoint() {
    education ++;

    document.getElementById('education-input').value = education;
    console.log( education);
}
function eclear() {
    document.getElementById('education-input').value = 0;
    education = 0;
    console.log(education);
}
function dice() {
    dicerolled = Math.floor(Math.random() * 6) + 1;
    opportunityrolled = Math.floor(Math.random()*opportunity.length);
    if (opportunity[opportunityrolled]== "opportunity"){
        opportunityselected = Math.floor(Math.random()*opportunityselection.length);
        document.getElementById('activity').value= opportunityselection[opportunityselected];
    }
    if (opportunity[opportunityrolled]== "wealth"){
        wealthselected = Math.floor(Math.random()*wealthselection.length);
        document.getElementById('activity').value= wealthselection[wealthselected];
    }
    if (opportunity[opportunityrolled]== "education"){
        educationselected = Math.floor(Math.random()*educationselection.length);
        document.getElementById('activity').value= educationselection[educationselected];
    }
    if (opportunity[opportunityrolled]== "Tax! pay $200 and property owners"){
        document.getElementById('activity').value="Pay $200 and Pay property owners"; 
    }

    document.getElementById('dice-result').value = dicerolled;
    document.getElementById('opportunity-result').value = opportunity[opportunityrolled];
}
 



let clear = document.getElementById('clear');

clear.addEventListener('click', function(){
    document.getElementById('Income').value = 0;
    document.getElementById('passive').value = 0;
    document.getElementById('expenses').value = 0;
    document.getElementById('business').value = 0;
    document.getElementById('Print').value = 0;
    document.getElementById('business-income').value = 0;
    document.getElementById('tracker').value= 0;
    document.getElementById('businesslvl').value = 0;
    document.getElementById('healthlvl').value = 5;
    document.getElementById('happinesslvl').value = 5;
    document.getElementById('lovelvl').value = 5;
    document.getElementById('education-input').value = 0;
    document.getElementById('opportunity-result').value = "";
    document.getElementById('activity').value = "";
    document.getElementById('dice-result').value = 0;
    education = 0;
    businesslvl = 0;
    tracker = 0;
    businessTotal = 0;
    score = 0;
    healthlvl = 5;
    happinesslvl = 5;
    lovelvl = 5;
    
});
 
 