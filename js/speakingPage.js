// Initialize the Web Speech API
const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;

let transcribedText = '';
let recognitionStoppedByUser = false;

let timer;
let seconds = 0;
let stopButton = document.getElementById('stop-button');


// Set up event listeners for the recognition process
recognition.onstart = function () {
  console.log('Recognition started');
  stopButton.style.display = 'block'; // Show the Stop button instantly
  setTimeout(() => { stopButton.style.opacity = '1'; }, 50); // Then fade in over 0.5 seconds
  document.getElementById('transcription-results').innerHTML = "<span class='status-text'>Transcribing in process...</span>";
  recognitionStoppedByUser = false;

  timer = setInterval(function () {
    seconds++;
    let startButton = document.getElementById('start-transcribing');
    startButton.innerHTML = "Transcribing " + Math.floor(seconds / 60) + ':' + ('0' + (seconds % 60)).slice(-2);
  }, 1000);
};

recognition.onend = function () {
  console.log('Recognition ended');
  stopButton.style.opacity = '0'; // Fade out over 0.5 seconds
  setTimeout(() => { stopButton.style.display = 'none'; }, 500); // Then hide the Stop button instantly

  // If the recognition stopped automatically (i.e., the user didn't press the Stop button)
  if (!recognitionStoppedByUser) {
    // Show a toast notification
    toastr.info('No voice detected, transcribing ended automatically.');
  }

  document.getElementById('transcription-results').innerHTML = transcribedText;

  // Stop the timer and reset the Start button text
  clearInterval(timer);
  let startButton = document.getElementById('start-transcribing');
  startButton.textContent = "Start Transcribing";
  
  // Enable the button
  startButton.disabled = false;
};


//showToast function
function showToast(id) {
  var toastEl = document.getElementById(id);
  var toast = new bootstrap.Toast(toastEl);
  toast.show();
}
// handle the results returned by the Speech Recognition API
recognition.onresult = function (event) {
  let interim_transcript = '';
  for (let i = event.resultIndex; i < event.results.length; i++) {
    let transcription = event.results[i][0].transcript;
    if (event.results[i].isFinal) {
      transcribedText += transcription + " ";
    } else {
      interim_transcript += transcription;
    }
  }
  document.getElementById('transcription-results').innerText = transcribedText + interim_transcript;
};

recognition.onerror = function (event) {
  console.log('Recognition error: ' + event.error);
};


// Start the recognition process when the "Start Transcribing" button is clicked
function startRecognition() {
  let startButton = document.getElementById('start-transcribing');
  // startButton.textContent = "Restart Transcribing";
  startButton.disabled = true; // Disable the button
  transcribedText = '';
  seconds = 0;
  recognition.start();
}


// Stop the recognition process when the "Stop Transcribing" button is clicked
function stopRecognition() {
  let startButton = document.getElementById('start-transcribing');
  recognition.stop();
  recognitionStoppedByUser = true;
  clearInterval(timer); // Stop the timer
  startButton.disabled = false; // Enable the button again
  startButton.textContent = "Start Transcribing"; // Reset the button text
}


function showSuccessAlert(message) {
  let alertContainer = document.getElementById('alert-container');
  let alertDiv = document.createElement('div');
  alertDiv.className = 'alert alert-success';
  alertDiv.textContent = message;

  // Remove the alert after 3 seconds
  setTimeout(function () {
    alertContainer.removeChild(alertDiv);
  }, 3000);

  alertContainer.appendChild(alertDiv);
}

// Copy the transcribed text
function copyTranscription() {
  navigator.clipboard.writeText(transcribedText).then(function () {
    console.log('Copying to clipboard was successful!');
    toastr.success('Transcription copied.');
  }, function (err) {
    console.error('Could not copy text: ', err);
  });
}


// Download the transcribed text
function downloadTranscription() {
  let a = document.createElement('a');
  a.href = "data:text/plain;charset=UTF-8," + encodeURIComponent(transcribedText);
  a.download = 'transcription.txt';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}


document.getElementById('start-transcribing').addEventListener('click', function () {
  document.getElementById('transcription-results').style.display = 'block'; // show the container
});

