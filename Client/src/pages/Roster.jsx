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
            img: Ichi,
            name: 'Ichi',
        },
        {
            img: Jermaine,
            name: 'Jermaine',
        },
        {
            img: Jorge,
            name: 'Jorge',
        },
        {
            img: Sammy,
            name: 'Sammy',
        },
        {
            img: Skylar,
            name: 'Skylar',
        },
        {
            img: Troy,
            name: 'Troy',
        },
        {
            img: Xander,
            name: 'XanderLitt',
        },
        {
            img: Ichi,
            name: 'Ichi',
        }
    ];

    const groupedWrestlers = roster.reduce((acc, wrestler, index) => {
        if (index % 2 === 0) {
            acc.push([wrestler]);
        } else {
            acc[acc.length - 1].push(wrestler);
        }
        return acc;
    }, []);

    return (
        <div className='Roster'>
            <h1>Roster</h1>
            <div className='Roster_Champ'>
                <div className='Roster_Champ_Left'>
                    <img src={Troy} className='Roster_Champ_Left_img' alt='Troy'/>
                </div>
                <div className='Roster_Champ_Right'>
                    <h2 className='Roster_Champ_Right_Type'>Tetsu Pro Champion</h2>
                    <h3 className='Roster_Champ_Right_Name'>Patrick Saint</h3>
                </div>
            </div>
            <div>
                {groupedWrestlers.map((group, groupIndex) => (
                    <div className='Roster_Group' key={groupIndex}>
                        {group.map((wrestler) => (
                            <div className='Roster_Wrestlers' key={wrestler.name}>
                                <div className='Roster_Wrestlers_Left'>
                                    <img src={wrestler.img} alt={wrestler.name} className='Roster_Wrestlers_Left_img'/>
                                </div>
                                <div className='Roster_Wrestlers_Right'>
                                    <h2 className='Roster_Wrestlers_Right_Name'>{wrestler.name}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
