/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval.  Complete the exercises in this CodePen

Prefer to work on a codepen? https://codepen.io/makanti/pen/abOreLg
================
/*/////////////////////////////////////////////////////////////////////////

//  i have done Task 2 already it is in a attached on Google classroom. 

////////////////////////////////////////////////////////////////////////*/
//Task 1
/* MY FAILED ATTEMPTS 
function color() {
    color("red");
    setTimeout(color, 5000);
    .............................................
    setTimeout(function background() {
    document.body.style.backgroundColor = "#3f84d9";
,5000);,
    document.body.style.backgroundColor = "#8826eb";
,5000);,
    document.body.style.backgroundColor = "#cf34a3";
           ,5000)};
           
}*/
setTimeout(() => {
    document.body.style.backgroundColor = "#3f84d9";
}, 5000);

