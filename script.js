var speech = new SpeechSynthesisUtterance();
let voices = [];
var btn = document.querySelector("#btn");
let voiceSelect = document.querySelector("#select");
btn.addEventListener("click", ()=>{
    speech.text = document.querySelector("#textarea").value;
    window.speechSynthesis.speak(speech);
});

window.speechSynthesis.onvoiceschanged = () =>{
voices = window.speechSynthesis.getVoices();
speech.voices = voices[0];

voiceSelect.addEventListener("change", ()=>{
    speech.voice = voices[voiceSelect.value];
})

voices.forEach((voice, i) =>
(voiceSelect.options[i] = new Option(voice.name, i )));
};