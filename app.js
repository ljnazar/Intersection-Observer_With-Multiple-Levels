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

/////////////////////////////////////////////////////////
let optionsPerfect = {  
    root: null,
    rootMargin: marginPerfect,  
    threshold: 1
};

let observerPerfect = new IntersectionObserver(entries => {  
    entries.forEach(entry => {
        console.log(entry)
    
        myDivTarget.style.backgroundColor = green;
        if (!entry.isIntersecting) return;
        myDivTarget.style.backgroundColor = blue;

    });
}, optionsPerfect);

observerPerfect.observe(myDivTarget);
/////////////////////////////////////////////////////////
let optionsGreat = {  
    root: null,  
    rootMargin: marginGreat,  
    threshold: 1
};

let observerGreat = new IntersectionObserver(entries => {  
    entries.forEach(entry => {
        console.log(entry)
    
        myDivTarget.style.backgroundColor = yellow;
        if (!entry.isIntersecting) return;
        myDivTarget.style.backgroundColor = green;

    });
}, optionsGreat);

observerGreat.observe(myDivTarget);
/////////////////////////////////////////////////////////
let optionsGood = {  
    root: null,  
    rootMargin: marginGood,  
    threshold: 1
};

let observerGood = new IntersectionObserver(entries => {  
    entries.forEach(entry => {
        console.log(entry)
    
        myDivTarget.style.backgroundColor = violet;
        if (!entry.isIntersecting) return;
        myDivTarget.style.backgroundColor = yellow;

    });
}, optionsGood);

observerGood.observe(myDivTarget);
/////////////////////////////////////////////////////////
let optionsBad = {  
    root: null,  
    rootMargin: marginBad,  
    threshold: 1
};

let observerBad = new IntersectionObserver(entries => {  
    entries.forEach(entry => {
        console.log(entry)
    
        myDivTarget.style.backgroundColor = red;
        if (!entry.isIntersecting) return;
        myDivTarget.style.backgroundColor = violet;

    });
}, optionsBad);

observerBad.observe(myDivTarget);
/////////////////////////////////////////////////////////
let optionsMiss = {  
    root: null,
    rootMargin: marginMiss,  
    threshold: 1
};

let observerMiss = new IntersectionObserver(entries => {  
    entries.forEach(entry => {
        console.log(entry)
    
        myDivTarget.style.backgroundColor = red;
        if (!entry.isIntersecting) return;
        myDivTarget.style.backgroundColor = red;

    });
}, optionsMiss);

observerMiss.observe(myDivTarget);
