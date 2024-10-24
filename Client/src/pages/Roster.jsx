
import Wrestler from '../components/Wrestler';
import './scss/Roster.scss';

export default function Roster() {
    const roster = [
        {
            name: 'Ichiban',
        },
        {
            name: 'Jermaine Marbury',
        },
        {
            name: 'Jorge Santi',
        },
        {
            name: 'Sammy Diaz',
        },
        {
            name: 'Skylar',
        },
        {
            name: 'Troy Stevens',
        },
        {
            name: 'Xander Litt',
        },
        {
            name: 'The YoungBoy',
        },
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
                    <Wrestler name="Patrick Saint" />
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
                                    <Wrestler name={wrestler.name} />
                                    {/* <img src={wrestler.img} alt={wrestler.name} className='Roster_Wrestlers_Left_img'/> */}
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
