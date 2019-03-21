/**Component to toggle readmore buttons ***/

//Setting variables
const educationBtnText = document.getElementById("educationBtn");
const textOfEducaiton = document.getElementById("educationText")
textOfEducaiton.style.display = "none";

const skillsBtnText = document.getElementById("skillsBtn");
const textOfSkills = document.getElementById("skillsText")
textOfSkills.style.display = "none";

//Toggle function 
const toggleEducation = () => {
    if (textOfEducaiton.style.display === "none"){
        //shows text
        textOfEducaiton.style.display = "block";
        //change btn text
        educationBtnText.innerHTML = "Close";
    } else {
        textOfEducaiton.style.display = "none";
        educationBtnText.innerHTML = "ReadMore"
    }
}

const toggleSkills = () => {
    if (textOfSkills.style.display === "none") {
        textOfSkills.style.display = "block";
        skillsBtnText.innerHTML = "Close";
    } else {
        textOfSkills.style.display = "none";
        skillsBtnText.innerHTML = "ReadMore"
    }
}
