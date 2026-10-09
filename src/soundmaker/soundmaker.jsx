import React from 'react';
import '../app.css';

export function Soundmaker() {
  return (
    <main className="soundmaker_body">
      <h3 className="custom_font">
        Hello [User Name]! Begin by recording your own sound or selecting a random one!
      </h3>
        <aside className="custom_font">
             <table>
                <thead>
        <tr>
            <th>Latest </th>
            <th> MEtronome Makers</th>
        </tr>
        </thead>
        <tbody>
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
                <audio controls src="https://raw.githubusercontent.com/webprogramming260/webprogramming/main/instruction/html/media/testAudio.mp3">Filler Audio</audio>
            </div>
            <button type="button">Generate Random Sound</button>
            <div>
                <label htmlfor="number">Tempo: </label>
                <input type="number" name="vNumber" id="number" min="10" max="150" step="5" />  
            </div>
            <div>
            <label htmlfor="text">Name/Rename current sound: </label>
            <input type="text" id="text" name="vText" placeholder="Sound Name"/>
            <button type="submit">Save</button>
            </div>
            <label htmlfor="select">Saved Sounds: </label>
            <select id="select" name="vSelect">
                <option>Chicken_sound</option>
                <option selected>Bells</option>
                <option>Random1</option>
            </select>
            
        </form>
        <div id="metronome_container2">
        <img src="./Public/metronome_icon2.png" alt="MetronomeIMG" width="300"/>
        </div>
        </div>
        
    </main>
  );
}