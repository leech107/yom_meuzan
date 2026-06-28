// תפריט ניווט
window.addEventListener("load", function () {
    const disabledLinks = document.getElementsByClassName("disabled-link");
    for (let i = 0; i < disabledLinks.length; i++) {
        disabledLinks[i].addEventListener("click", function (event) {
            event.preventDefault();
        });
    }
});


// קערת POKE

const baseNamesHeb = ["אורז לבן", "אורז אדום", "קינואה"];
const basePicNames = ["images/poke/white-rice.png", "images/poke/red-rice.png","images/poke/Quinoa.png"];
const baseCalories = [195, 165, 180];
const baseProtein = [4,4,6];
const baseCarbs = [42, 34, 32];
const baseFats = [0.4,1.2,3];
const baseFibers = [0.6,3,4];

const proteinNamesHeb = ["סלמון", "טונה", "חזה עוף", "טופו"];
const proteinCalories = [208,132,198,76];
const proteinProtein = [22,29,37,8];
const proteinFat = [13,1,4,5];
const proteinFiber = [0,0,0,1];
const proteinCarbs = [0,0,0,2];

const toppings =["cucumber", "avocado", "edamame", "carrot", "greenOnion", "cabbage", "corn","radish", "mango", "wakame", "soy", "teriyaki", "mayo"];
const toppingsImgID =["imgCucumber", "imgAvocado", "imgEdamame","imgCarrot", "imgGreenOnion", "imgCabbage", "imgCorn","imgRadish", "imgMango", "imgWakame", "imgSoy", "imgTeriyaki", "imgMayo"];
const toppingsID = ["topCucumber", "topAvocado", "topEdamame", "topCarrot", "topGreenOnion","topPurpleCabbage", "topCorn", "topRadish", "topMango", "topWakame","sauceSoy", "sauceTeriyaki", "sauceSpicyMayo"];
const toppingsCalories =[6,80,61,14,5,11,38,4,21,20,8,35,140];
const toppingsProtein =[0.3,1,6,0.3,0.3,0.5,1.3,0.2,0.3,1,1,0.5,0.3];
const toppingsCarbs =[1.5,4,5,3.5,1.1,2.5,8,0.8,5.3,3,1,8,1];
const toppingsFat =[0.1,7.5,2.5,0.1,0,0.1,0.5,0,0.1,0.2,0,0,15];
const toppingsFiber =[0.2,3.5,2.5,1,0.4,0.9,1,0.4,0.6,1.5,0,0,0];
const toppingsNamesHeb = ["מלפפון","אבוקדו","אדממה","גזר","בצל ירוק","כרוב סגול","תירס","צנונית","מנגו","אצות וואקמה","רוטב סויה","רוטב טריאקי","רוטב ספייסי מיונז"];


let chosenBase = -1;
let chosenProtein = -1;
let totalCalories = 0;
let totalProtein = 0;
let totalCarbs = 0;
let totalFats = 0;
let totalFiber = 0;



// משנה את התמונה לפי הבסיס שנבחר
function chooseBase(chosenBaseNum) {
    chosenBase = chosenBaseNum;

    document.getElementById("proteinSalmon").disabled = false;
    document.getElementById("proteinTuna").disabled = false;
    document.getElementById("proteinChicken").disabled = false;
    document.getElementById("proteinTofu").disabled = false;

    if (chosenProtein != -1) {
        chooseProtein(chosenProtein);
    } else {
        let imageSource = basePicNames[chosenBaseNum];
        document.getElementById("bowlImage").src = imageSource;
        checkConfirmButton();
    }
}


function chooseProtein (chosenProteinNum) {
    chosenProtein = chosenProteinNum;
    if (chosenBase === 0) {
        if (chosenProtein === 0) {
            let imageSource = "images/poke/white-rice-solomon.png";
            document.getElementById("bowlImage").src = imageSource;
        } else if (chosenProtein === 1) {
            let imageSource = "images/poke/white-rice-tuna.png";
            document.getElementById("bowlImage").src = imageSource;
        } else if (chosenProtein === 2) {
            let imageSource = "images/poke/white-rice-chicken.png";
            document.getElementById("bowlImage").src = imageSource;
        } else {
            let imageSource = "images/poke/white-rice-tofu.png";
            document.getElementById("bowlImage").src = imageSource;
        } }
        // red rice base
    else if (chosenBase === 1) {
        if (chosenProtein === 0) {
            let imageSource = "images/poke/red-rice-solomon.png";
            document.getElementById("bowlImage").src = imageSource;
        } else if (chosenProtein === 1) {
            let imageSource = "images/poke/red-rice-tuna.png";
            document.getElementById("bowlImage").src = imageSource;
        } else if (chosenProtein === 2) {
            let imageSource = "images/poke/red-rice-chicken.png";
            document.getElementById("bowlImage").src = imageSource;
        } else {
            let imageSource = "images/poke/red-rice-tofu.png";
            document.getElementById("bowlImage").src = imageSource;
        } }
    
    // quinoa base
    else {
        if (chosenProtein === 0) {
            let imageSource = "images/poke/Quinoa-solomon.png";
            document.getElementById("bowlImage").src = imageSource;
        } else if (chosenProtein === 1) {
            let imageSource = "images/poke/Quinoa-tuna.png";
            document.getElementById("bowlImage").src = imageSource;
        } else if (chosenProtein === 2) {
            let imageSource = "images/poke/Quinoa-chicken.png";
            document.getElementById("bowlImage").src = imageSource;
        } else {
            let imageSource = "images/poke/Quinoa-tofu.png";
            document.getElementById("bowlImage").src = imageSource;
        } }
    checkConfirmButton();  
    }


function chooseTopping(chosenToppingNum) {
    if (document.getElementById(toppingsID[chosenToppingNum]).checked == true) {
        document.getElementById(toppingsImgID[chosenToppingNum]).style.opacity = "1";
    }
    else {
        document.getElementById(toppingsImgID[chosenToppingNum]).style.opacity = "0.5";
    }
}

function checkConfirmButton() {
    const userName = document.getElementById("bowlName").value;
    if (userName != "" && chosenBase != -1 && chosenProtein != -1) {
        document.getElementById("confirmBowlBtn").disabled = false;
        document.getElementById("confirmBowlBtn").style.opacity = "1";
    } else {
        document.getElementById("confirmBowlBtn").disabled = true;
        document.getElementById("confirmBowlBtn").style.opacity = "0.5";
    }
}

function showResults() {
    const userName = document.getElementById("bowlName").value;

    if (userName == "") {
        alert("יש להזין שם לפני אישור הקערה");
    }
    else {
        updateNutrition();

        let chosenToppingsText = "";

        for (let i = 0; i < toppingsID.length; i++) {
            if (document.getElementById(toppingsID[i]).checked == true) {
                if (chosenToppingsText != "") {
                    chosenToppingsText = chosenToppingsText + ", ";
                }

                chosenToppingsText = chosenToppingsText + toppingsNamesHeb[i];
            }
        }

        if (chosenToppingsText == "") {
            chosenToppingsText = "ללא תוספות או רטבים";
        }

        document.getElementById("bowlResult").innerHTML =
            "<h2 class='bowl-result-title'>בתיאבון! הקערה של " + userName + " מוכנה</h2>" +
            "<p class='bowl-result-text'>הקערה כוללת: בסיס " + baseNamesHeb[chosenBase] +
            ", חלבון " + proteinNamesHeb[chosenProtein] +
            ", ותוספות/רטבים: " + chosenToppingsText + ".</p>";

        document.getElementById("nutrition-summary-title").innerHTML =
            "הערכים התזונתיים המשוערים שלה:";

        document.getElementById("nutrition-summary").style.display = "block";
    }
}

function updateNutrition() {
    totalCalories = 0;
    totalProtein = 0;
    totalCarbs = 0;
    totalFats = 0;
    totalFiber = 0;

    totalCalories = totalCalories + baseCalories[chosenBase];
    totalProtein = totalProtein + baseProtein[chosenBase];
    totalCarbs = totalCarbs + baseCarbs[chosenBase];
    totalFats = totalFats + baseFats[chosenBase];
    totalFiber = totalFiber + baseFibers[chosenBase];

    totalCalories = totalCalories + proteinCalories[chosenProtein];
    totalProtein = totalProtein + proteinProtein[chosenProtein];
    totalCarbs = totalCarbs + proteinCarbs[chosenProtein];
    totalFats = totalFats + proteinFat[chosenProtein];
    totalFiber = totalFiber + proteinFiber[chosenProtein];

    for (let i = 0; i < toppingsID.length; i++) {
        if (document.getElementById(toppingsID[i]).checked == true) {
            totalCalories = totalCalories + toppingsCalories[i];
            totalProtein = totalProtein + toppingsProtein[i];
            totalCarbs = totalCarbs + toppingsCarbs[i];
            totalFats = totalFats + toppingsFat[i];
            totalFiber = totalFiber + toppingsFiber[i];
        }
    }
    document.getElementById("caloriesValue").innerHTML = Math.round(totalCalories).toString();
    document.getElementById("proteinValue").innerHTML = Math.round(totalProtein).toString();
    document.getElementById("carbsValue").innerHTML = Math.round(totalCarbs).toString();
    document.getElementById("fatValue").innerHTML = Math.round(totalFats).toString();
    document.getElementById("fiberValue").innerHTML = Math.round(totalFiber).toString();
    
}