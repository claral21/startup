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
  const [temporarysoundname, settemporarySoundName] = React.useState(""); // This is a placeholder for the usermade sound names for when we have a database
  const [currentsound, setcurrentSound] = React.useState("/bottle.m4a");
  const [soundName, setSoundName] = React.useState('Bottle');
  const [savedSounds, setSavedSounds] = React.useState(['Bottle']);
  const sounds = [ // Placeholder for getting the sounds from storage because audio files are big
      { name: 'Snap', url: '/Snap.m4a' },
      { name: 'Simon4', url: '/button-bottom-left.mp3' },
      { name: 'Simon1', url: '/button-bottom-right.mp3' },
      { name: 'Simon2', url: '/button-top-right.mp3' },
      { name: 'Simon3', url: '/button-top-left.mp3' },
      { name: 'Error', url: '/error.mp3' },
      { name: 'Bottle', url: '/bottle.m4a' },
      { name: 'Boom', url: '/boom.m4a' },
      { name: 'Scrape', url: '/scrape.m4a' },
      { name: 'Swish', url: '/swish.m4a' },
      { name: 'Thud', url: '/thud.m4a' },
      { name: 'Whack', url: '/whack.m4a' },
      { name: 'Ducky', url: '/ducky.m4a' },
      { name: 'Bam', url: '/bam.m4a' },
      { name: 'Rattle', url: '/rattle.m4a' },
    ];

  function saveSoundName() {
  if (!temporarysoundname) return;   // ignore an empty name
  localStorage.setItem(`sound_${temporarysoundname}`, currentsound);
  updatesoundtable(user, temporarysoundname)
  settemporarySoundName('');         // clear the box afterwards
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
              value={temporarysoundname}
              onChange={(e) => settemporarySoundName(e.target.value)}/>
            <button type="button" onClick={saveSoundName}>Save</button>
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