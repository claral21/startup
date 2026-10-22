import React from 'react';
import '../app.css';

export function Soundmaker({user}) {
  const [msg, setMsg] = React.useState('...listening');
  const [currentsound, setcurrentSound] = React.useState("/Snap.m4a");
  const [soundName, setSoundName] = React.useState('Snap');
  const [savedSounds, setSavedSounds] = React.useState(['Snap']);
  const sounds = [ // Placeholder for getting the sounds from storage because audio files are big
      { name: 'Snap', url: '/Snap.m4a' },
      { name: 'Chicken', url: '/Snap.m4a' },
      { name: 'Random1', url: '/Snap.m4a' },
    ];

  function generateSound() {
    const pick = sounds[Math.floor(Math.random() * sounds.length)];
    setcurrentSound(pick.url);
    setSoundName(pick.name);
    if (!savedSounds.includes(pick.name)){
    setSavedSounds([...savedSounds, pick.name]);  // add the name to the list if it's not there
    }
  }

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
            <button type="button" onClick={generateSound}>Generate Random Sound</button>
            <div>
                <label htmlFor="number">Tempo: </label>
                <input type="number" name="vNumber" id="number" min="10" max="150" step="5" />  
            </div>
            <div>
            <label htmlFor="text">Name/Rename current sound: </label>
            <input type="text" id="text" name="vText" placeholder="Sound Name"/>
            <button type="submit">Save</button>
            </div>
            <label htmlFor="select">Saved Sounds: </label>
            <select id="select" name="vSelect" value={soundName} onChange={(e) => setSoundName(e.target.value)}>
              {savedSounds.map((name, index) => (
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