let myDivTarget = document.getElementById("cubo");

/* Color palette */
const blue = "#3b82f6";
const green = "#22c55e";
const yellow = "#eab308";
const violet = "#8b5cf6";
const red = "#ef4444";

/////////////////////////////////////////////////////////
let optionsPerfect = {  
    root: null,  
    // Altura 480 y elemento de 100px
    // El tercer parámetro que sería bottom se debe calcular en base a la altura
    rootMargin: '-95px 0px -275px 0px',  
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
    // Altura 480 y elemento de 100px
    // El tercer parámetro que sería bottom se debe calcular en base a la altura
    rootMargin: '-85px 0px -265px 0px',  
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
    // Altura 480 y elemento de 100px
    // El tercer parámetro que sería bottom se debe calcular en base a la altura
    rootMargin: '-75px 0px -255px 0px',  
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
    // Altura 480 y elemento de 100px
    // El tercer parámetro que sería bottom se debe calcular en base a la altura
    rootMargin: '-65px 0px -245px 0px',  
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
    // Altura 480 y elemento de 100px
    // El tercer parámetro que sería bottom se debe calcular en base a la altura
    rootMargin: '0px 0px 0px 0px',  
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
