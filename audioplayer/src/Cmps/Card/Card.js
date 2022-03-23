import './Card.css';
import './CardMQ.css';
import tileimage from './images/hey.jpg';
import tilemp3 from './images/hey.mp3';
import moreicon from './images/more.png';
import pauseicon from './images/pause.png';
import playicon from './images/play.png';
import voldnicon from './images/volumedn.png';
import volupicon from './images/volumup.png';
import { player } from '../script.js'
import { volume } from '../script.js'

function Card() {
    return (
        <div className="AudioTile" id="AudioTile">
            <div className="AudioTitle">
                <h3>Into Your Arms</h3>
            </div>
            <div className="AudioImage">
                <img className="AudioImage" src={tileimage}/>
                    <div className="AudioPlayer">
                        <audio id="player" src={tilemp3} preload="metadata" type="audio/mpeg">
                        </audio>
                        <div className="AudioPlace">
                            <div className="buttons">
                                <button onClick={player}><img id="btnPlay" src={playicon} /></button>
                                <div className="timer">
                                    <span id="showtime">0:00 </span>/<span id="duration"></span>
                                </div>
                                <progress id="seek" value="0"></progress>
                                <span id="BtnVol">
                                    <button onClick={volume}><img id="btnVol" src={voldnicon} /></button>
                                    <input type="range" id="volseek" value="0" />
                                </span>
                                <button id="movbtnSol"><img id="btnSol" src={moreicon} /></button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}
export default Card