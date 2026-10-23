import React from 'react';
import '../app.css';

export function Soundmaker({user}) {
  const [msg, setMsg] = React.useState('...listening');
  const [playing, setPlaying] = React.useState(false);
  const [tempo, setTempo] = React.useState(60);   // beats per minute, default 60
  const [currentsound, setcurrentSound] = React.useState("/bottle.m4a");
  const [soundName, setSoundName] = React.useState('Bottle');
  const [savedSounds, setSavedSounds] = React.useState(['Bottle']);
  const sounds = [ // Placeholder for getting the sounds from storage because audio files are big
      { name: 'Snap', url: '/Snap.m4a' },
      { name: 'Random4', url: '/button-bottom-left.mp3' },
      { name: 'Random1', url: '/button-bottom-right.mp3' },
      { name: 'Random2', url: '/button-top-right.mp3' },
      { name: 'Random3', url: '/button-top-left.mp3' },
      { name: 'Error', url: '/error.mp3' },
      { name: 'Bottle', url: '/bottle.m4a' },
      { name: 'Boom', url: '/boom.m4a' },
    ];

  function generateSound() {
    const pick = sounds[Math.floor(Math.random() * sounds.length)];
    setcurrentSound(pick.url);
    setSoundName(pick.name);
    if (!savedSounds.includes(pick.name)){
    setSavedSounds([...savedSounds, pick.name]);  // add the name to the list if it's not there
    }
  }

  function chooseSound(e) {
  const chosenName = e.target.value;
  const match = sounds.find((s) => s.name === chosenName);

  setSoundName(chosenName);
  if (match) {
    setcurrentSound(match.url);
  }
}

React.useEffect(() => {
  if (!playing || !tempo) return;

  const bpm = Math.min(150, Math.max(10, tempo));   // keep between 10 and 150 so no more scary errors lol
  const id = setInterval(() => {
    new Audio(currentsound).play();
  }, 60000 / bpm);  // milliseconds between beats (1000 is one second, or 60bpm)

  return () => clearInterval(id);   // cleanup: stop the timer
}, [playing, tempo, currentsound]);

//   function soundList(name) { // THIS WILL RETURN INDIVIDUAL USER DATA EVENTUALLY
//     console.log(`${currentsound}`);
//     const soundlist = document.getElementById('select');
//     const newsound = document.createElement('option');
//     newsound.textContent = name;
//     soundlist.appendChild(newsound);
// }

  return (
    <main className="soundmaker_body">
      <h3 className="custom_font">
        Hello {user}! Begin by recording your own sound or selecting a random one!
      </h3>
        <aside className="custom_font">
             <table>
                <thead>
        <tr>
            <th>Latest </th>
            <th> MEtronome Makers</th>
        </tr>
        </thead>
        <tbody id="liveupdatetable">
        <tr>
            <td>Sam</td>
            <td>Made a New Sound</td>
        </tr>
        <tr>
            <td>Jamie</td>
            <td>Made a New Sound</td>
        </tr>
        <tr>
            <td>Elaina</td>
            <td>Made a New Sound</td>
        </tr>
        </tbody>
      </table>
        </aside>
      <div id="button_metronome_align">
      <form id="soundmaker_buttons">
            <div>
                <audio controls src={currentsound}>Filler Audio</audio>
            </div>
            <button type="button" onClick={() => setPlaying(!playing)}>
              {playing ? 'Stop' : 'Start'}
            </button>
            <button type="button" onClick={generateSound}>Generate Random Sound</button>
            <div>
                <label htmlFor="number">Tempo: </label>
                <input type="number" name="vNumber" id="number" min="10" max="150" step="5" value={tempo} onChange = {(e) => setTempo(Number(e.target.value))}/>  
            </div>
            <div>
            <label htmlFor="text">Name/Rename current sound: </label>
            <input type="text" id="text" name="vText" placeholder="Sound Name"/>
            <button type="button">Save</button>
            </div>
            <label htmlFor="select">Saved Sounds: </label>
            <select id="select" name="vSelect" value={soundName} onChange={chooseSound}>
              {savedSounds.map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
            </select>
            
        </form>
        <div id="metronome_container2">
        <img src="/metronome_icon2.png" alt="MetronomeIMG" width="300"/>
        </div>
        </div>
        
    </main>
  );
}