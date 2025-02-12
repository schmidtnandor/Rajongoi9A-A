document.addEventListener("DOMContentLoaded", function () {
    let currentPage = 1;
    const pages = document.querySelectorAll(".quiz-page");
    const prevButton = document.getElementById("prevPage");
    const nextButton = document.getElementById("nextPage");
    const checkButton = document.getElementById("checkAnswers");
    
    function showPage(page) {
        pages.forEach((div, index) => {
            div.style.display = index + 1 === page ? "block" : "none";
        });
        prevButton.style.display = page === 1 ? "none" : "inline-block";
        nextButton.style.display = page === pages.length ? "none" : "inline-block";
        checkButton.style.display = page === pages.length ? "inline-block" : "none";
    }
    
    prevButton.addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });
    
    nextButton.addEventListener("click", function () {
        if (currentPage < pages.length) {
            currentPage++;
            showPage(currentPage);
        }
    });
    
    checkButton.addEventListener("click", function () {
        let correctAnswers = {
            "kerdoiv-nev": "Andrew Tate",
            "kerdoiv-holel": "Goshen",
            "kerdoiv-vallalkozas": "HU",
            "kerdoiv-auto": "Bugatti Chiron",
            "kerdoiv-hustler": "Online pénzkeresés",
            "kerdoiv-kickbox" : "2005",
            "kerdoiv-datum" : "1986. december 1.",
            "kerdoiv-nott-fel" : "Amerika",
            "kerdoiv-iska" : "Kettőt" ,
            "kerdoiv-ban" : "Irányelvek megsértése miatt"
        };
    
        let score = 0;
        let totalQuestions = Object.keys(correctAnswers).length;
    
        for (let key in correctAnswers) {
            let selectedOption = document.getElementById(key)?.value;
            if (selectedOption === correctAnswers[key]) {
                score++;
            }
        }
    
        alert(`Eredményed: ${score} / ${totalQuestions}`);
    });
    
    showPage(currentPage);
});
