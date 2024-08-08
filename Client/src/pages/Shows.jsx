
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
                    Winner: "Bobby Ocean"
                },
                Match2: {
                    Type: "Singles",
                    Wrestlers: {
                        P1: "Sammy Diaz",
                        P2: "Pretty Papi"
                    },
                    Winner: "Sammy Diaz"
                },
                Match3: {
                    Type: "Tag Match",
                    Wrestlers: {
                        P1: "The Mission",
                        P2: "The Unleashed"
                    },
                    Winner: "The Mission"
                },
                Match4: {
                    Type: "Singles",
                    Wrestlers: {
                        P1: "Lucas Chase",
                        P2: "Ryan Fraust"
                    },
                    Winner: "Lucas Chase"
                },
                Match5: {
                    Type: "Singles",
                    Wrestlers: {
                        P1: "Xander Litt",
                        P2: "Jay Bryxx"
                    },
                    Winner: "Xander Litt"
                },
                Match6: {
                    Type: "Singles",
                    Wrestlers: {
                        P1: "Tiffani Avatar",
                        P2: "Skylar"
                    },
                    Winner: "Skylar"
                },
                Match7: {
                    Type: "Championship",
                    Wrestlers: {
                        P1: "Troy Stevens",
                        P2: "Patrick Saint"
                    },
                    Winner: "Patrick Saint"
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
                    Winner: "Jorge Santi"
                },
                Match2: {
                    Type: "Singles",
                    Wrestlers: {
                        P1: "Sgt. Fury",
                        P2: "Pretty Papi"
                    },
                    Winner: "Pretty Papi"
                },
                Match3: {
                    Type: "Singles",
                    Wrestlers: {
                        P1: "Stan Micheal",
                        P2: "Danny Atom"
                    },
                    Winner: "Stan Micheal"
                },
                Match4: {
                    Type: "Tag Match",
                    Wrestlers: {
                        P1: "The Haven",
                        P2: "God's Greatest Creation"
                    },
                    Winner: "God's Greatest Creation"
                },
                Match5: {
                    Type: "Singles",
                    Wrestlers: {
                        P1: "Perry Von Vicious",
                        P2: "Patrick Saint",
                    },
                    Winner: "Patrick Saint"
                },
                Match6: {
                    Type: "Singles",
                    Wrestlers: {
                        P1: "Ichiban",
                        P2: "Sammy Diaz",
                    },
                    Winner: "Sammy Diaz"
                },
                Match7: {
                    Type: "Tag Team",
                    Wrestlers: {
                        P1: "Hustle & Muscle",
                        P2: "Cold Cash",
                    },
                    Winner: "Lucas Chase"
                },
                Match8: {
                    Type: "Singles",
                    Wrestlers: {
                        P1: "Troy Stevens",
                        P2: "",
                    },
                    Winner: "Troy Stevens"
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
                                        <div key={matchKey}>
                                            <h2>{match.Type}</h2>
                                            <h3>{match.Wrestlers.P1} {match.Wrestlers.P2 ? `vs ${match.Wrestlers.P2}` : ''} {match.Wrestlers.P3 ? `vs ${match.Wrestlers.P3}` : ''} {match.Wrestlers.P4 ? `vs ${match.Wrestlers.P4}` : ''}</h3>
                                            <h4>Winner: {match.Winner}</h4>
                                        </div>
                                    );
                                }
                                else {
                                    return (
                                        <div key={matchKey}>
                                            <h2>{match.Type}</h2>
                                            <h3>{match.Wrestlers.P1} {match.Wrestlers.P2 ? `vs ${match.Wrestlers.P2}` : ''}</h3>
                                            <h4>Winner: {match.Winner}</h4>
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