const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");

function calculateAge(){
    const birthdayValue = birthdayEl.value;
    console.log(birthdayValue);

    if (birthdayValue===""){
        alert("Please enter your birthday")
    }

}


btnEl.addEventListener("click", calculateAge)