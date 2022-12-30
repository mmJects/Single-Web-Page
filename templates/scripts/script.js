var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right="0";
}
function hideMenu(){
    navLinks.style.right="-200px";
}

var timee;
var timee = new Date();
var month = timee.getMonth() + 1
var year = timee.getFullYear()

let cele_month = {
    1 : [["Happy Mother's day","mother.jpg"],["Independence day","independence.jpg"],"January"],
    2 : [["Nationwide Uprising Revolutionary Day","22222.png"],["Union Day","union.jpg"],"February"],
    3 : [["Peasant's day","peasant.jpg"],"March"],
    4 : [["Thinggyan Festival","thingyan.jpg"],"April"],
    5 : [["Labour Day","labour.jpg"],"May"],
    6 : [["Festival of Exam for Monk","na_yone.jfif"],"June"],
    7 : [["Festival of sharing Buddha Dhamma","war_so.jpg"],"July"],
    8 : [["Festival of Supporting Monk","war_khaung.jfif"],"August"],
    9 : [["Boat race","boat race.jfif"],"September"],
   10 : [["Litting Festival","litting.jpg"],"October"],
   11 : [["Ka Htain festivel","ka_htain.jpg"],["National day","national.jpg"],"November"],
   12 : [["Festival of Myanmar Litercy","myanmar_culture.jfif"],["New Year's Eve","new_year.jpg"],"December"] 
}

// change the following variable to see the flexibility of the website
// month = 4

let div_one = document.getElementById("one-enjoy")
let div_two = document.getElementById("two-enjoy")
let text_one = document.getElementById("text-in-one-enjoy")
let header = document.getElementById("celebrate-header")
var check_festival = cele_month[month]
eng_month = check_festival[check_festival.length-1]


if (check_festival.length == 2){
    div_two.style.display = "none"
    var image_path = "templates/images/celebrations/" + check_festival[0][1]
    div_one.style.backgroundImage = `url(${image_path})`
    text_one.innerText = check_festival[0][0]
    header.innerText = "Festival of " + eng_month
} else {
    div_one.style.display = "none"
    var childrenn = div_two.childNodes
    childrenn = childrenn[1]
    for (let i = 0 ; i < 2 ; i++){
        image_path = "templates/images/celebrations/" + check_festival[i][1]
        childrenn.children[i].style.backgroundImage = `url(${image_path})`
    }
    header.innerText = ` ${check_festival[0][0]} and ${check_festival[1][0]} in ${eng_month}`
}


let footer_year = document.getElementById("year_y")
footer_year.innerText = year