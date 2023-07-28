let writingContainer = document.getElementById('writing-container');
var countdown;

//Spellcheck switch
document.getElementById("toggleSpellCheck").addEventListener('change', function () {
    document.getElementById("writing-container").spellcheck = this.checked;
});


$(document).ready(function () {
    // Count the number of words every time the text in writing-container changes
    $('#writing-container').on('input', function () {
        let wordCount = document.getElementById('wordCount');
        let words = $(this).text().match(/\b[-?(\w+)?]+\b/gi);
        if (words) {
            if (words.length === 1) {
                wordCount.textContent = words.length + " word";
            } else {
                wordCount.textContent = words.length + " words";
            }
        } else {
            wordCount.textContent = "0 words";
        }
    });


});

function startTimer(event) {
    event.preventDefault(); // prevent form submission and page refresh

    var inputField = document.getElementById("timeInput");
    var inputValue = inputField.value; // get the input in minutes
    var timerOutput = document.getElementById("timerOutput");
    var timerButton = document.getElementById("timerButton");

    if (inputValue <= 0) {
        toastr.info('Please enter a positive number.');
        return;
    }

    inputValue = inputValue * 60; // convert minutes to seconds
    inputField.style.display = "none"; // hide the input field
    timerButton.innerHTML = "Stop the Timer";
    timerButton.onclick = stopTimer; // change the button's onclick function to stopTimer

    countdown = setInterval(function () {
        var minutes = Math.floor(inputValue / 60);
        var seconds = inputValue % 60;

        // Setting color to red if less than a minute is remaining
        if (inputValue < 60) {
            timerOutput.style.color = '#ed4242';
        }

        // Show "minute" if there is 1 minute remaining
        if (inputValue === 60) {
            timerOutput.innerHTML = "Time remaining: " + 1 + " minute";
        }
        // Show "minutes" if the remaining time is more than 1 minute
        else if (inputValue > 60) {
            timerOutput.innerHTML = "Time remaining: " + minutes + " minutes";
        }
        // Show "seconds" if the remaining time is less than 1 minute
        else if (inputValue < 60) {
            timerOutput.innerHTML = "Time remaining: " + seconds + " seconds";
        }

        inputValue -= 1;
        if (inputValue < 0) {
            clearInterval(countdown);
            timerOutput.innerHTML = "Time's up!";
            timerOutput.style.color = '#ed4242';
        }
    }, 1000);
    // change button color to dark
    var timerButton = document.getElementById("timerButton");
    timerButton.className = "btn btn-dark";
    timerButton.innerHTML = "Stop the Timer";
    timerButton.onclick = stopTimer; // change the button's onclick function to stopTimer
}

function stopTimer() {
    clearInterval(countdown);
    var timerOutput = document.getElementById("timerOutput");
    var timerButton = document.getElementById("timerButton");
    var inputField = document.getElementById("timeInput");

    timerOutput.innerHTML = "";
    timerOutput.style.color = '#7f7f7f';
    timerButton.innerHTML = "Start the Timer";
    timerButton.onclick = startTimer;
    inputField.style.display = "inline";

    var timerButton = document.getElementById("timerButton");
    timerButton.className = "btn btn-primary";
    timerButton.innerHTML = "Start the Timer";
    timerButton.onclick = startTimer;
}

// Copy the text
function copyWriting() {
    navigator.clipboard.writeText(writingContainer.innerText).then(function () {
        toastr.success('Writing text copied.');
    }, function (err) {
        console.error('Could not copy text: ', err);
    });
}

// Function to download the writing
function downloadWriting() {
    let a = document.createElement('a');
    a.href = "data:text/plain;charset=UTF-8," + encodeURIComponent(writingContainer.innerText);
    a.download = 'writing.txt';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
