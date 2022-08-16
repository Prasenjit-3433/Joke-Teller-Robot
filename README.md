# Joke-Teller-Robot [[link]](https://prasenjit-joke-teller.netlify.app/)
An artificial robot that tells funny jokes....

Tech Stack: HTML, CSS, Vanilla Js, [Text-to-Speech Api](https://www.voicerss.org/api/), [Joke Teller API](https://sv443.net/jokeapi/v2/)


HOW IT WORKS:
   * When an user click on `Tell Me A Joke` button, it sends a `POST` request to [Joke Teller API](https://  sv443.net/jokeapi/v2/) to get a joke. 
   * We also make the `Tell Me A Joke` button `disable` so that user can't make another Ajax call before the
     previous joke is ended playing. We used `ended` event on audio element to detect whether the joke is being still played or not. [learn more](https://www.w3schools.com/tags/ref_av_dom.asp)
   * Next the joke string passed into VoiceRSS `Text-to-Speech Api` api to translate into audio form 
   * Then the audio is attached to the `src` attribute to audio element.
   * At last, when the joke is ended playing, we `enable` the `Tell Me A Joke` button again.


![](Joke%2BTeller%2BFlowchart.jpg)