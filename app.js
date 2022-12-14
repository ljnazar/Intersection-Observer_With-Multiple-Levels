let myDivTarget = document.getElementById("cubo");

/* Color palette */
const blue = "#3b82f6";
const green = "#22c55e";
const yellow = "#eab308";
const violet = "#8b5cf6";
const red = "#ef4444";

/* Adapt screen height */ 
let heightScreen = window.innerHeight;
let marginPerfect = `-35px 0px ${125 - heightScreen}px 0px`;
let marginGreat = `-25px 0px ${135 - heightScreen}px 0px`;
let marginGood = `-15px 0px ${145 - heightScreen}px 0px`;
let marginBad = `-5px 0px ${155 - heightScreen}px 0px`;
let marginMiss = `0px 0px 0px 0px`;

const spyItem = (entries, observer) => {
    entries.forEach(entry => {

        console.log(entry);

        if(observer.rootMargin === marginPerfect){
            myDivTarget.style.backgroundColor = green;
            if (!entry.isIntersecting) return;
            myDivTarget.style.backgroundColor = blue;
        }
        else if(observer.rootMargin === marginGreat){
            myDivTarget.style.backgroundColor = yellow;
            if (!entry.isIntersecting) return;
            myDivTarget.style.backgroundColor = green;
        }
        else if(observer.rootMargin === marginGood){
            myDivTarget.style.backgroundColor = violet;
            if (!entry.isIntersecting) return;
            myDivTarget.style.backgroundColor = yellow;
        }
        else if(observer.rootMargin === marginBad){
            myDivTarget.style.backgroundColor = red;
            if (!entry.isIntersecting) return;
            myDivTarget.style.backgroundColor = violet;
        }
        // observer.rootMargin === marginMiss
        else{
            myDivTarget.style.backgroundColor = red;
            if (!entry.isIntersecting) return;
            myDivTarget.style.backgroundColor = red;
        }
    });
}

let optionsPerfect = {  
    root: null,
    rootMargin: marginPerfect,  
    threshold: 1
};

let optionsGreat = {  
    root: null,  
    rootMargin: marginGreat,  
    threshold: 1
};

let optionsGood = {  
    root: null,  
    rootMargin: marginGood,  
    threshold: 1
};

let optionsBad = {  
    root: null,  
    rootMargin: marginBad,  
    threshold: 1
};

let optionsMiss = {  
    root: null,
    rootMargin: marginMiss,  
    threshold: 1
};

let observerPerfect = new IntersectionObserver(spyItem, optionsPerfect);
observerPerfect.observe(myDivTarget);

let observerGreat = new IntersectionObserver(spyItem, optionsGreat);
observerGreat.observe(myDivTarget);


let observerGood = new IntersectionObserver(spyItem, optionsGood);
observerGood.observe(myDivTarget);


let observerBad = new IntersectionObserver(spyItem, optionsBad);
observerBad.observe(myDivTarget);


let observerMiss = new IntersectionObserver(spyItem, optionsMiss);
observerMiss.observe(myDivTarget);
