import React from 'react';
import '../app.css';

export function Soundmaker({user}) {
  const [msg, setMsg] = React.useState('...listening'); // I will use this later for websocket
  const [userqueue, setUserqueue] = React.useState([
  { id: 1, name: 'Sam', sound: 'Snap' },
  { id: 2, name: 'Jamie', sound: 'Boom' },
  { id: 3, name: 'Elaina', sound: 'Swish' },]);
  const [playing, setPlaying] = React.useState(false);
  const [tempo, setTempo] = React.useState(60);   // beats per minute, default 60
  const [soundnameInput, setsoundnameInput] = React.useState(""); // This is a placeholder for the usermade sound names for when we have a database
  const [currentsound, setcurrentSound] = React.useState("/bottle.m4a");
  const [soundName, setSoundName] = React.useState('Bottle');
  const [savedSounds, setSavedSounds] = React.useState(['Bottle']);
  const sounds = [ // Placeholder for getting the sounds from storage because audio files are big
      { soundname: 'Snap', soundpath: '/Snap.m4a' },
      { soundname: 'Simon4', soundpath: '/button-bottom-left.mp3' },
      { soundname: 'Simon1', soundpath: '/button-bottom-right.mp3' },
      { soundname: 'Simon2', soundpath: '/button-top-right.mp3' },
      { soundname: 'Simon3', soundpath: '/button-top-left.mp3' },
      { soundname: 'Error', soundpath: '/error.mp3' },
      { soundname: 'Bottle', soundpath: '/bottle.m4a' },
      { soundname: 'Boom', soundpath: '/boom.m4a' },
      { soundname: 'Scrape', soundpath: '/scrape.m4a' },
      { soundname: 'Swish', soundpath: '/swish.m4a' },
      { soundname: 'Thud', soundpath: '/thud.m4a' },
      { soundname: 'Whack', soundpath: '/whack.m4a' },
      { soundname: 'Ducky', soundpath: '/ducky.m4a' },
      { soundname: 'Bam', soundpath: '/bam.m4a' },
      { soundname: 'Rattle', soundpath: '/rattle.m4a' },
    ];

  React.useEffect(() => { // this should make the saved sounds list start where it left off
    fetch('/api/sounds')
      .then((response) => response.json())
      .then((list) => setSavedSounds(list));
  }, []);

  async function saveSound() {
    if (!soundnameInput) return; // ignore an empty name
    await fetch('/api/sounds', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ soundname: soundnameInput, soundpath: currentsound }),
    });
    if (response.ok) {
    setSavedSounds(await response.json());   // server returns the updated list
    updatesoundtable(user, nameInput);
    setNameInput('');
  }

  }

const fakeUsers = ['Eich', 'Pat', 'Robin', 'Taylor'];
const fakeSounds = ['Chickens', 'Thud', 'Whack', 'Scrape'];

const pickRandom = (list) => list[Math.floor(Math.random() * list.length)];

  React.useEffect(() => {
    const notifications = setInterval(() => {
      updatesoundtable(pickRandom(fakeUsers), pickRandom(fakeSounds));
    }, 5000);

    return () => clearInterval(notifications);
  }, []);


  function updatesoundtable(name, sound) {
  setUserqueue((old) =>
    [...old, { id: Date.now() + Math.random(), name, sound }].slice(-3)
  );
  }

  function generateSound() { // this doesn't save the sound anymore
    const pick = sounds[Math.floor(Math.random() * sounds.length)];
    setcurrentSound(pick.soundpath);
    setSoundName(pick.soundname);
    // if (!savedSounds.includes(pick.soundname)){
    // setSavedSounds([...savedSounds, pick.soundname]);  // add the name to the list if it's not there
    // }
  }

  function chooseSound(e) {
  const match = savedSounds.find((s) => s.soundname === e.target.value);
  if (match) {
    setSoundName(match.soundname);
    setcurrentSound(match.soundpath);
  }
}

  async function getNameSuggestion() {
    try {
      const response = await fetch('https://binaryjazz.us/wp-json/genrenator/v1/genre/');
      const genre = await response.json();
      setsoundnameInput(genre);   // fills the name box with the suggestion
    } catch (error) {
      setsoundnameInput({user});
      console.error('Could not load a name suggestion:', error);
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
        <tbody id="liveupdatetable">{userqueue.map((row) => (
        <tr key={row.id}>
          <td>{row.name}</td>
          <td>Made {row.sound}</td>
        </tr>
        ))}
        </tbody>
      </table>
        </aside>
      <div id="button_metronome_align">
      <form id="soundmaker_buttons">
            <div>
                <audio controls src={currentsound}>Filler Audio</audio>
            </div>
            <div>
                <label htmlFor="number">Tempo: </label>
                </div>
                <div id="tempobuttons">
                <input type="number" name="vNumber" id="number" min="10" max="150" step="5" value={tempo} onChange = {(e) => setTempo(Number(e.target.value))}/>  
            <button type="button" onClick={() => setPlaying(!playing)}>
              {playing ? 'Stop' : 'Start'}
            </button>
            </div>
            <button type="button" onClick={generateSound}>Generate Random Sound</button>
            
            <div>
            <label htmlFor="text">Name/Rename current sound: </label>
            <input  type="text"
              id="text"
              name="vText"
              placeholder="Sound Name"
              value={soundnameInput}
              onChange={(e) => setsoundnameInput(e.target.value)}/>
              <div id="namebuttons">
            <button type="button" id="genreBtn" onClick={getNameSuggestion}>Name Suggestion</button>
            <p id="genreText"></p>
            <button type="button" onClick={saveSound}>Save</button>
            </div>
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