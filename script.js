const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// Disable / Enable Button:
function toggleButton() {
    button.disabled = !button.disabled;
}

// Passing Joke to VoiceRSS API
function tellMe(joke) {
    VoiceRSS.speech({
        key: "f02fae0ff0824539937c736289288e34",
        src: joke,
        hl: "en-us",
        v: "Linda",
        r: 0,
        c: "mp3",
        f: "44khz_16bit_stereo",
        ssml: false,
      });
}


// Get jokes from Joke API
async function getJokes() {
    let joke;
    const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.setup) {
            joke = `${data.setup}.... ${data.delivery}`
        } else {
            joke = data.joke;
        }
        
        // Text-to-Speech
        tellMe(joke);

        // Disable Button
        toggleButton();
    } catch (error) {
        // Catch error here
        console.log('whoops', error);
    }
}

// Event Listener:
button.addEventListener('click', getJokes);

// `ended' event is fired when the current playlist is ended:
audioElement.addEventListener('ended', toggleButton);