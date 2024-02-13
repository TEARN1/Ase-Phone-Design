
const myInterval = setInterval(myTimer, 1000);

function myTimer() {
    const date = new Date();
    document.getElementById("Time").innerHTML = date.toLocaleTimeString();
}

const myInterval1 = setInterval(myTimer1, 1000);
function myTimer1() {
    const date = new Date();
    document.getElementById("Time1").innerHTML = date.toLocaleTimeString();
}

function LockscreenChance() {
    document.getElementById("Time").style.display = "none"
    document.getElementById("Lock").style.display = "none"
    document.getElementById("pin").style.display = "block"
}

function passwordEnter() {

    var passwordTimes = 0
    document.getElementById("LockscreenChance").style.display = "none"
    if (document.getElementById("password").value == "") {
        document.getElementById("passwordAlert").style.color = "red"
        document.getElementById("passwordAlert").innerHTML = "Enter Password Please"
        document.getElementById("password").style.borderColor = "red"
        document.getElementById("password").style.borderRadius = "10px"
        document.getElementById("LockscreenChance").style.display = "block"
    } 
}

function Contacts() {
    document.getElementById("lower").style.display = "none";
    document.getElementById("ContactsList").style.display = "block";
}
function Messages() {
    document.getElementById("lower").style.display = "none";
}
function Gallary() {
    document.getElementById("lower").style.display = "none";
}
function Chrome() {
    document.getElementById("lower").style.display = "none";
}
function Calls() {
    document.getElementById("lower").style.display = "none";
}


function mainBtn(){
    
}

function Contacts() { 
    alert("You ain't gat no conatcts Fool !! ")
 }


 function Messages() { 
    alert("Ain't No body Cares about your ass")
 }

 
function Phone() { 
    alert("You too broke to afford airtime bitch !!")
}


function GoogleStore() { 
    alert("You have registerd your email address")
}


function Alarm() { 
    alert("Dont waste my time, You aint going nowhere tomorrow")
}