
import { Link, useNavigate } from 'react-router-dom';

import ChapBlack from '../assets/Img/Chapter_Black.jpg';
import TheRealFolkBlues from '../assets/Img/The_Real_Folk_Blues_Words.jpg';
import './scss/Shows.scss';

export default function Shows() {
    const ShowList = [
        {
            pic: ChapBlack,
            date: "10/10/2021",
            Time: "7:00 PM",
            Location: "25 Center St Windsor, CT",
            Name: "Chapter Black",
            Results: {
                Match: {
                    Type: "Four Way",
                    Wrestlers: {
                        P1: "Bobby Ocean",
                        P2: "TOS YoungBoy",
                        P3: "Damien Black",
                        P4: "Allin Bayno"
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
            pic: TheRealFolkBlues,
            date: "04/25/2024",
            Time: "7:00 PM",
            Location: "255 West St, Bristol CT",
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
                        <img className='Show_Header_Img' src={show.pic} alt="Temp" />
                        <h2 className='Show_Header_Name'>{show.Name}</h2>
                    </div>
                    <div className='Show_Info'>
                        <div className='Show_Info_Left'>
                            <h1 className='Show_Info_Left_Date'>Date:{show.date}</h1>
                            <h2 className='Show_Info_Left_Time'>Time: {show.Time}</h2>
                        </div>
                        <div className='Show_Info_Right'>
                            <h1 className='Show_Info_Right_Location'>Location: {show.Location}</h1>
                        </div>
                    </div>
                    <div className='Show_Results'>
                        <h1>Results:</h1>
                        <div>
                            {Object.keys(show.Results).map((matchKey) => {
                                const match = show.Results[matchKey];
                                if (match.Type === "Four Way") {
                                    return (
                                        <div className='Match' key={matchKey}>
                                            <h2 className='Show_Results_Match_Type'>{match.Type}</h2>
                                            <h3 className='Show_Results_Match_Wrestlers'>
                                                <span className='Show_Results_Match_Wrestlers_1'>{match.Wrestlers.P1} </span>
                                                <span className='Show_Results_Match_Wrestlers_2'>{match.Wrestlers.P2 ? `vs ${match.Wrestlers.P2}` : ''} </span>
                                                <span className='Show_Results_Match_Wrestlers_3'>{match.Wrestlers.P3 ? `vs ${match.Wrestlers.P3}` : ''} </span>
                                                <span className='Show_Results_Match_Wrestlers_4'>{match.Wrestlers.P4 ? `vs ${match.Wrestlers.P4}` : ''}</span>
                                            </h3>
                                            <h4>Winner: <span className='Show_Results_Match_Winner'>{match.Winner}</span></h4>
                                            <Link to={match.videoId} target='_blank'>
                                                <button>Go to Video</button>
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
                                                <span className='Show_Results_Match_Wrestlers_2'>{match.Wrestlers.P2 ? `vs ${match.Wrestlers.P2}` : ''}</span>
                                            </h3>
                                            <h4>Winner: <span className='Show_Results_Match_Winner'>{match.Winner}</span></h4>
                                            <Link to={match.videoId} target='_blank'>
                                                <button>Go to Video</button>
                                            </Link>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}