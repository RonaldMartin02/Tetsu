import Ichi from '../assets/Img/Ichi_Hex.png';
import Jermaine from '../assets/Img/Jermaine_Hex.png';
import Jorge from '../assets/Img/Jorge_Hex.png';
import Sammy from '../assets/Img/Sammy_Hex.png';
import Skylar from '../assets/Img/Skylar_Hex.png';
import Troy from '../assets/Img/Troy_Hex.png';
import Xander from '../assets/Img/Xander_Hex.png';

import './scss/Roster.scss';
export default function Roster() {
    
    const roster = [
        {
            img : Ichi,
            name: 'Ichi',
        },
        {
            img : Jermaine,
            name: 'Jermaine',
        },
        {
            img : Jorge,
            name: 'Jorge',
        },
        {
            img : Sammy,
            name: 'Sammy',
        },
        {
            img : Skylar,
            name: 'Skylar',
        },
        {
            img : Troy,
            name: 'Troy',
        },
        {
            img : Xander,
            name: 'Xander',
        },
    ]
    return (
        <div>
            <h1>Roster</h1>
            <div>
                <img src={Troy}/>
                <h2>Tetsu Pro Champion</h2>
                <h3>Troy Stevens</h3>
            </div>
            {console.log(roster)}
            {roster.map(wrestler =>{
                return(
                <div key={wrestler.name}>
                    <img src={wrestler.img} alt={wrestler.name}/>
                    <h2>{wrestler.name}</h2>
                    <h3>This works</h3>
                </div>)
            })}
        </div>
    )
}