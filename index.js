// PART-1
let score = 100;
let temperature =36.6;
let greeting="Hello, JavaScript";
let isLearningFun=true;

console.log("Score: ",score,"\nTemperature: ",temperature,"\nGreeting: ",greeting,'Is Learning Fun? ',isLearningFun);


//PART-2
student={
    name : "KK",
    age: 19,
    subjects: ["CMPSC-461","MATH-230","CMPSC-464","CMPSC-263","CMPSC-150N"]
};
student.isgraduated=false;
console.log("Studnet info",student);

primeNumbers=[2,3,5,7,11];
primeNumbers[1]=4;
console.log(primeNumbers,"Mistake Detected");
primeNumbers[1]=3;
console.log(primeNumbers,"Corrected");

//PART-3
let a = 2;
let b = 3;
console.log("a+b",a+b);
console.log("a*b",a*b);
console.log("a%b",a%b);

let x = 45;
let y = 200;

console.log("x>y",x>y);
console.log("x<y",x<y);
console.log("x==y",x==y);
console.log("x!=y",x!=y);
console.log("x<=y",x<=y);

let boolLogic1= x>y;
let boolLogic2= (a+b)==5;

console.log(boolLogic1||boolLogic2);
console.log(boolLogic1&&boolLogic2);
console.log(!boolLogic1&&boolLogic2);
console.log(!boolLogic1);

// PART-4

if (score>50){
    console.log("Great Job!")
}
else{
    console.log("Try Again")
}

for(let i=0;i<primeNumbers.length;i++){
    console.log(primeNumbers[i]);
}

while(score>0){score--};
console.log("New Score: ",score);

//PART-5
function eventCountdown(eventDate) {
    const now = new Date();
    const event = new Date(eventDate);
    const timeDiff = event - now;

    let seconds = Math.floor(timeDiff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    return `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds remaining until the event.`;

}

const countdownMessage = eventCountdown('December 31, 2026 23:59:59');
console.log(countdownMessage); // Outputs the time remaining until New Year's Eve 2024 (i changed it to be 2026, didn't want negatice dates)

/* 
The function creates 2 date objects then takes the difference between the two dates. 
Using this Time difference between the date and event, we create a countdown using math functions. 
we get seconds by dividing the time diff since 1000ms = 1sec.
we progressively divide seconds by 60 to get minutes, and minutes by 60 to get hours, and hours by 24 for days.
the modulo allows the time to stay within 24hrs, 60 minutes and 60 seconds.
*/

function swap(a,b,c){
    [a,b,c]=[c,a,b]
    return{a,b,c};
}

console.log(swap(1,2,3));
console.log(swap(24,3600,60));
console.log(swap(-100,3,-2));

function findLongestWord(sentence) {
    const words = sentence.split(' '); // words is an array of all the words in the sentence
    let longest =words[0]
    // write your code here
    for (let i=0;i<words.length;i++){
        
        word=words[i]
1
        if (longest.length<word.length){
            longest=words[i]
        };
    }
    return longest

}
// Example usage:
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// your function should output the correct longest word.
