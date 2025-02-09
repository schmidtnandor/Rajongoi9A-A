function checkAnswers() {
    // Correct answers
    const correctAnswers = {
        "kerdoiv-nev": "Andrew Tate", // Correct name
        "kerdoiv-holel": "Románia",  // Correct place of birth
        "kerdoiv-barat": "Goga Chad", // Correct friend
        "kerdoiv-lecsukas": "Adócsalás" // Correct reason for imprisonment
    };

    // Get user-selected answers
    const userAnswers = {
        "kerdoiv-nev": document.getElementById("kerdoiv-nev").value,
        "kerdoiv-holel": document.getElementById("kerdoiv-holel").value,
        "kerdoiv-barat": document.getElementById("kerdoiv-barat").value,
        "kerdoiv-lecsukas": document.getElementById("kerdoiv-lecsukas").value
    };

    // Check if all answers are correct
    let allCorrect = true;
    for (let key in correctAnswers) {
        if (userAnswers[key] !== correctAnswers[key]) {
            allCorrect = false;
            break;
        }
    }

    // Display the result
    const resultElement = document.getElementById("result");
    if (allCorrect) {
        resultElement.textContent = "Gratulálok! Minden válasz helyes!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Valami nem stimmel. Próbáld újra!";
        resultElement.style.color = "red";
    }
}