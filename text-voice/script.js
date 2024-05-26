let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector('select');

// Populate the voices array when the voices are changed
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};

// Update the speech voice when the select element changes
voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect.value];
});

// When the button is clicked, set the text and speak
document.querySelector("button").addEventListener('click', () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
