
import { Link, useNavigate } from 'react-router-dom';
import  ThoseWhoFightThree from '../assets/Img/Those_Who_Fight_3_Banner.png';
import ChapBlack from '../assets/Img/Chapter_Black.jpg';
import TheRealFolkBlues from '../assets/Img/The_Real_Folk_Blues_Words.jpg';
import FightingGold from '../assets/Img/Fighting_Gold.png';
import './scss/Shows.scss';

export default function Shows() {
    const ShowList = [
        {
            showBanner: ThoseWhoFightThree,
            showDate: "10/26/2024",
            DoorsOpen: "6:30 PM",
            showTime: "7:00 PM",
            showLocation: "61 Center St Bristol, CT",
            Name: "Those Who Fight 3",
            Results: {
                Match: {
                    Type: "Four Way",
                    Wrestlers: {
                        P1: "Stan Micheal",
                        P2: "Damien Black",
                        P3: "Corey Duke",
                        P4: "Alan Compass"
                    },
                    Winner: "Damien Black",
                    videoId: ""
                },
                Match2: {
                    Type: "Singles",
                    Wrestlers: {
                        P1: "Skylar",
                        P2: "Nahir Rubles"
                    },
                    Winner: "Skylar",
                    videoId: ""
                },
                Match3: {
                    Type: "Singles",
                    Wrestlers: {
                        P1: "Pretty Papi",
                        P2: "Allan Bayno"
                    },
                    Winner: "Pretty Papi",
                    videoId: ""
                },
                Match4: {
                    Type: "Singles",
                    Wrestlers: {
                        P1: "Xander Litt",
                        P2: "Dicky Moon"
                    },
                    Winner: "Xander Litt",
                    videoId: ""
                },
                Match5: {
                    Type: "Tag Match Championship Match",
                    Wrestlers: {
                        P1: "CounterStrike",
                        P2: "Hustle & Muscle"
                    },
                    Winner: "Hustle & Muscle",
                    videoId: ""
                },
                Match6: {
                    Type: "Singles",
                    Wrestlers: {
                        P1: "Troy Stevens",
                        P2: "Wrecking Ball"
                    },
                    Winner: "Wrecking Ball",
                    videoId: ""
                },
                Match7: {
                    Type: "Singles",
                    Wrestlers: {
                        P1: "Ryan Fraust",
                        P2: "Sammy Diaz"
                    },
                    Winner: "Sammy Diaz",
                    videoId: ""
                },
                Match8: {
                    Type: "Championship",
                    Wrestlers: {
                        P1: "Patrick Saint",
                        P2: "Ichiban"
                    },
                    Winner: "Patrick Saint",
                    videoId: ""
            }
        }
        },
        {
            showBanner: FightingGold,
            showDate: "8/17/2024",
            DoorsOpen: "6:30 PM",
            showTime: "7:00 PM",
            showLocation: "25 Center St Windsor, CT",
            Name: "Fighting Gold",
            Results: {
                Match: {
                    Type: "Four Way",
                    Wrestlers: {
                        P1: "Xander Litt",
                        P2: "Damien Black",
                        P3: "Smiley",
                        P4: "TOS YoungBoy"
                    },
                    Winner: "Xander Litt",
                    videoId: "https://youtu.be/HIjqLKBDZZY?si=YFcLhqh_xFNaJ1X4"
                },
                Match2: {
                    Type: "Singles",
                    Wrestlers: {
                        P1: "Skylar",
                        P2: "Spike"
                    },
                    Winner: "Skylar",
                    videoId: "https://youtu.be/oOiu6Yexy4Q?si=YfMWemj40EZVaooy"
                },
                Match3: {
                    Type: "Tag Match",
                    Wrestlers: {
                        P1: "The Mission",
                        P2: "CounterStrike"
                    },
                    Winner: "CounterStrike",
                    videoId: "https://youtu.be/slSptZDbYWQ?si=ulTKTad98ngKEi6H"
                },
                Match4: {
                    Type: "Tag Match",
                    Wrestlers: {
                        P1: "Hustle & Muscle",
                        P2: "Benny Blanco & Montilla"
                    },
                    Winner: "Hustle & Muscle",
                    videoId: "https://youtu.be/Oej75TuDaE4?si=OA3A0LCH2ZwJrDdb"
                },
                Match5: {
                    Type: "Singles",
                    Wrestlers: {
                        P1: "Sammy Diaz",
                        P2: "Jorge Santi"
                    },
                    Winner: "Sammy Diaz",
                    videoId: "https://youtu.be/e3iVlnHy8_M?si=FSuT6XJoBHWFeMn_"
                },
                Match6: {
                    Type: "Singles",
                    Wrestlers: {
                        P1: "Troy Stevens",
                        P2: "Ryan Fraust"
                    },
                    Winner: "Ryan Fraust",
                    videoId: "https://youtu.be/LPeyIv7CJS0?si=cpaXO6lYhz6THG6I"
                },
                Match7: {
                    Type: "Championship",
                    Wrestlers: {
                        P1: "Patrick Saint",
                        P2: "Azrieal"
                    },
                    Winner: "Patrick Saint",
                    videoId: "https://youtu.be/OWaAkp1PYdQ?si=tlEiqXnOIYTgLmWD"
                },
            }
        },
        {
            showBanner: ChapBlack,
            showDate: "6/22/2024",
            DoorsOpen: "6:30 PM",
            showTime: "7:00 PM",
            showLocation: "25 Center St Windsor, CT",
            Name: "Chapter Black",
            Results: {
                Match: {
                    Type: "Four Way",
                    Wrestlers: {
                        P1: "Bobby Ocean",
                        P2: "TOS YoungBoy",
                        P3: "Damien Black",
                        P4: "Allan Bayno"
                    },
                    Winner: "Bobby Ocean",
                    videoId: "https://www.youtube.com/watch?v=NSqv-zHy-vY"
                },
                Match2: {
                    Type: "Singles",
                    Wrestlers: {
                        P1: "Sammy Diaz",
                        P2: "Pretty Papi"
                    },
                    Winner: "Sammy Diaz",
                    videoId: "https://www.youtube.com/watch?v=GhGbzImE5HA"
                },
                Match3: {
                    Type: "Tag Match",
                    Wrestlers: {
                        P1: "The Mission",
                        P2: "The Unleashed"
                    },
                    Winner: "The Mission",
                    videoId: "https://www.youtube.com/watch?v=ofzbx_fs6Ao"
                },
                Match4: {
                    Type: "Singles",
                    Wrestlers: {
                        P1: "Lucas Chase",
                        P2: "Ryan Fraust"
                    },
                    Winner: "Lucas Chase",
                    videoId: "https://www.youtube.com/watch?v=OsVG6eoHGO4"
                },
                Match5: {
                    Type: "Singles",
                    Wrestlers: {
                        P1: "Xander Litt",
                        P2: "Jay Bryxx"
                    },
                    Winner: "Xander Litt",
                    videoId: "https://www.youtube.com/watch?v=jBUeXP8fzrM"
                },
                Match6: {
                    Type: "Singles",
                    Wrestlers: {
                        P1: "Tiffani Avatar",
                        P2: "Skylar"
                    },
                    Winner: "Skylar",
                    videoId: "https://www.youtube.com/watch?v=1hAWSFoFs04"
                },
                Match7: {
                    Type: "Championship",
                    Wrestlers: {
                        P1: "Troy Stevens",
                        P2: "Patrick Saint"
                    },
                    Winner: "Patrick Saint",
                    videoId: "https://www.youtube.com/watch?v=nGokTN5JQsA"
                },

            }
        },
        {
            showBanner: TheRealFolkBlues,
            showDate: "04/25/2024",
            DoorsOpen: "6:30 PM",
            showTime: "7:00 PM",
            showLocation: "255 West St, Bristol CT",
            Name: "The Real Folk Blues",
            Results: {
                Match: {
                    Type: "Four Way",
                    Wrestlers: {
                        P1: "Mooch",
                        P2: "Damien Black",
                        P3: "Jorge Santi",
                        P4: "Dash"
                    },
                    Winner: "Jorge Santi",
                    videoId:"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                                },
                Match2: {
                    Type: "Singles",
                    Wrestlers: {
                        P1: "Sgt. Fury",
                        P2: "Pretty Papi"
                    },
                    Winner: "Pretty Papi",
                    videoId:"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                },
                Match3: {
                    Type: "Singles",
                    Wrestlers: {
                        P1: "Stan Micheal",
                        P2: "Danny Atom"
                    },
                    Winner: "Stan Micheal",
                    videoId:"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                },
                Match4: {
                    Type: "Tag Match",
                    Wrestlers: {
                        P1: "The Haven",
                        P2: "God's Greatest Creation"
                    },
                    Winner: "God's Greatest Creation",
                    videoId:"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                },
                Match5: {
                    Type: "Singles",
                    Wrestlers: {
                        P1: "Perry Von Vicious",
                        P2: "Patrick Saint",
                    },
                    Winner: "Patrick Saint",
                    videoId:"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                },
                Match6: {
                    Type: "Singles",
                    Wrestlers: {
                        P1: "Ichiban",
                        P2: "Sammy Diaz",
                    },
                    Winner: "Sammy Diaz",
                    videoId:"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                },
                Match7: {
                    Type: "Tag Team",
                    Wrestlers: {
                        P1: "Hustle & Muscle",
                        P2: "Cold Cash",
                    },
                    Winner: "Lucas Chase",
                    videoId:"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                },
                Match8: {
                    Type: "Singles",
                    Wrestlers: {
                        P1: "Troy Stevens",
                        P2: "",
                    },
                    Winner: "Troy Stevens",
                    videoId:"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                },
            }
        }
    ];
    return (

        <div className='Shows'>
            {ShowList.map((show) => (
                <div className='Show'>
                    <div className='Show_Header'>
                        <img className='Show_Header_Img' src={show.showBanner} alt="Temp" />
                        <h2 className='Show_Header_Name'>{show.Name}</h2>
                    </div>
                    <div className='Show_Info'>
                        <div className='Show_Info_Left'>
                            
                            <h1 className='Show_Info_Left_Doors'> Doors Open : {show.DoorsOpen}</h1>
                            <h2 className='Show_Info_Left_Time'>Bell: {show.showTime}</h2>
                        </div>
                        <div className='Show_Info_Right'>
                            <h1 className='Show_Info_Right_Date'>Date:{show.showDate}</h1>
                            <h1 className='Show_Info_Right_Location'>Location: {show.showLocation}</h1>
                        </div>
                    </div>
                    <div className='Show_Results'>
                        <h1>Results:</h1>
                        <div>
                            {Object.keys(show.Results).map((matchKey) => {
                                const match = show.Results[matchKey];
                                if (match.Type === "Four Way") {
                                    if (match.videoId){

                                        return (
                                            <div className='Show_Results_Match' key={matchKey}>
                                            <h2 className='Show_Results_Match_Type'>{match.Type}</h2>
                                            <h3 className='Show_Results_Match_Wrestlers'>
                                                <span className='Show_Results_Match_Wrestlers_1'>{match.Wrestlers.P1} </span>
                                                <span className='Show_Results_Match_Wrestlers_2'>{match.Wrestlers.P2 ? `vs ${match.Wrestlers.P2}` : ''} </span>
                                                <span className='Show_Results_Match_Wrestlers_3'>{match.Wrestlers.P3 ? `vs ${match.Wrestlers.P3}` : ''} </span>
                                                <span className='Show_Results_Match_Wrestlers_4'>{match.Wrestlers.P4 ? `vs ${match.Wrestlers.P4}` : ''}</span>
                                            </h3>
                                            <h4>Winner: <span className='Show_Results_Match_Winner'>{match.Winner}</span></h4>
                                            <Link to={match.videoId} target='_blank'>
                                                <button className='Show_Results_Match_Video'>Go to Video</button>
                                            </Link>
                                        </div>
                                    );
                                }
                                else {
                                    return (
                                        <div className='Show_Results_Match' key={matchKey}>
                                        <h2 className='Show_Results_Match_Type'>{match.Type}</h2>
                                        <h3 className='Show_Results_Match_Wrestlers'>
                                            <span className='Show_Results_Match_Wrestlers_1'>{match.Wrestlers.P1} </span>
                                            <span className='Show_Results_Match_Wrestlers_2'>{match.Wrestlers.P2 ? `vs ${match.Wrestlers.P2}` : ''} </span>
                                            <span className='Show_Results_Match_Wrestlers_3'>{match.Wrestlers.P3 ? `vs ${match.Wrestlers.P3}` : ''} </span>
                                            <span className='Show_Results_Match_Wrestlers_4'>{match.Wrestlers.P4 ? `vs ${match.Wrestlers.P4}` : ''}</span>
                                        </h3>
                                        <h4>Winner: <span className='Show_Results_Match_Winner'>{match.Winner}</span></h4>
                                    </div>
                                );
                                }
                                }
                                else {
                                    if (match.videoId){

                                        return (
                                            <div className='Show_Results_Match' key={matchKey}>
                                            <h2 className='Show_Results_Match_Type'>{match.Type}</h2>
                                            <h3 className='Show_Results_Match_Wrestlers'>
                                                <span className='Show_Results_Match_Wrestlers_1'>{match.Wrestlers.P1} </span>
                                                <span className='Show_Results_Match_Wrestlers_2'>{match.Wrestlers.P2 ? `vs ${match.Wrestlers.P2}` : ''} </span>
                                                <span className='Show_Results_Match_Wrestlers_3'>{match.Wrestlers.P3 ? `vs ${match.Wrestlers.P3}` : ''} </span>
                                                <span className='Show_Results_Match_Wrestlers_4'>{match.Wrestlers.P4 ? `vs ${match.Wrestlers.P4}` : ''}</span>
                                            </h3>
                                            <h4>Winner: <span className='Show_Results_Match_Winner'>{match.Winner}</span></h4>
                                            <Link to={match.videoId} target='_blank'>
                                            <button className='Show_Results_Match_Video'>Go to Video</button>
                                            </Link>
                                        </div>
                                    );
                                }
                                else {
                                    return (
                                        <div className='Show_Results_Match' key={matchKey}>
                                        <h2 className='Show_Results_Match_Type'>{match.Type}</h2>
                                        <h3 className='Show_Results_Match_Wrestlers'>
                                            <span className='Show_Results_Match_Wrestlers_1'>{match.Wrestlers.P1} </span>
                                            <span className='Show_Results_Match_Wrestlers_2'>{match.Wrestlers.P2 ? `vs ${match.Wrestlers.P2}` : ''} </span>
                                            <span className='Show_Results_Match_Wrestlers_3'>{match.Wrestlers.P3 ? `vs ${match.Wrestlers.P3}` : ''} </span>
                                            <span className='Show_Results_Match_Wrestlers_4'>{match.Wrestlers.P4 ? `vs ${match.Wrestlers.P4}` : ''}</span>
                                        </h3>
                                        <h4>Winner: <span className='Show_Results_Match_Winner'>{match.Winner}</span></h4>
                                    </div>
                                );
                                }
                                }
                            })}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}