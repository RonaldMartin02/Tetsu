import React, { useState } from 'react';

export default function CreateShow() {
    
    const [showName, setShowName] = useState('')
    const [showDate, setShowDate] = useState('')
    const [showTime, setShowTime] = useState('')
    const [showLocation, setShowLocation] = useState('')
    const [showPrice, setShowPrice] = useState('')
    const [showBanner, setShowBanner] = useState('')
    const [DoorsOpen, setDoorsOpen] = useState('')
    const [matchType, setMatchType] = useState('')
    const [wrestlerName, setWrestlerName] = useState('')
    const [matchWinner, setMatchWinner] = useState('')
    const [videoId, setVideoId] = useState('')
    const [results, setResults] = useState([])
    const [wrestlers, setWrestlers] = useState([])
    const [addShow, {error}] = useMutation(ADD_SHOW, {
        refetchQueries: [
            GET_ALL_SHOWS,
            'getShows'
        ]
    })
    

    const handleSubmit = async (e) => {
    try {
        const {data} = await addShow({
            variables: {
                showName: showName,
                showDate: showDate,
                showTime: showTime,
                showLocation: showLocation,
                showPrice: showPrice,
                showBanner: showBanner,
                DoorsOpen: DoorsOpen,
                Results: results,
                videoId: videoId
            }
        })
    }
    catch (err) {
        console.error(err)
    }
    }

    const handleAddMatch = async (Match) => {    

    }
    const handleMatchTypeChange = (event) => {
        setMatchType(event.target.value);
    };
    const RenderWrestlerAmount = (MatchType) => {
    if (MatchType === 'Singles' || MatchType === 'Championship' || MatchType === 'Tag Team Championship' || MatchType === 'Tag Team') {
        return (
        <div>
            <label htmlFor="Wrestler_1">Wrestler 1</label>
            <select name="Wrestler_1" id="W1">
                {wrestlers.map(wrestler => (
                    <option value={wrestler}>{wrestler}</option>
                ))}
            </select>
            <label htmlFor="Wrestler_2">Wrestler 2</label>
            <select name="Wrestler_2" id="W2">
                {wrestlers.map(wrestler => (
                    <option value={wrestler}>{wrestler}</option>
                ))}
            </select>
        </div>
        )
    } else if (MatchType === 'Four Way') {
        return (
        <div>
            <label htmlFor="Wrestler_1">Wrestler 1</label>
            <select name="Wrestler_1" id="W1">
                {wrestlers.map(wrestler => (
                    <option value={wrestler}>{wrestler}</option>
                ))}
            </select>
            <label htmlFor="Wrestler_2">Wrestler 2</label>
            <select name="Wrestler_2" id="W2">
                {wrestlers.map(wrestler => (
                    <option value={wrestler}>{wrestler}</option>
                ))}
            </select>
            <label htmlFor="Wrestler_3">Wrestler 3</label>
            <select name="Wrestler_3" id="W3">
                {wrestlers.map(wrestler => (
                    <option value={wrestler}>{wrestler}</option>
                ))}
            </select>
            <label htmlFor="Wrestler_4">Wrestler 4</label>
            <select name="Wrestler_4" id="W4">
                {wrestlers.map(wrestler => (
                    <option value={wrestler}>{wrestler}</option>
                ))}
            </select>
        </div>
        )
    }
}

    return(
        <div>
            <h1>Create a Show</h1>
            <form>
                <div>
                <label htmlFor='showName'>Show Name</label>
                <input type='text' id='showName' value={showName} onChange={(e) => setShowName(e.target.value)} /> 
                <label htmlFor='showDate'>Show Date</label>
                <input type='text' id='showDate' value={showDate} onChange={(e) => setShowDate(e.target.value)} />
                <label htmlFor='showTime'>Show Time</label>
                <input type='text' id='showTime' value={showTime} onChange={(e) => setShowTime(e.target.value)} />
                <label htmlFor='showLocation'>Show Location</label>
                <input type='text' id='showLocation' value={showLocation} onChange={(e) => setShowLocation(e.target.value)} />
                <label htmlFor='showPrice'>Show Price</label>
                <input type='text' id='showPrice' value={showPrice} onChange={(e) => setShowPrice(e.target.value)} />
                <label htmlFor='DoorsOpen'>Doors Open</label>
                <input type='text' id='DoorsOpen' value={DoorsOpen} onChange={(e) => setDoorsOpen(e.target.value)} />
                </div>
                <div>
                <h2>Matches</h2>
                <label htmlFor='matchType'>Match Type</label>
                <select id='MatchType' value={matchType} onChange={handleMatchTypeChange}>
                    <option value="Singles">Singles</option>
                    <option value="Tag Team">Tag Team</option>
                    <option value="Four Way">Four Way</option>
                    <option value="Tag Team Championship">Tag Team Championship</option>
                    <option value="Championship">Championship</option>
                </select>
                {RenderWrestlerAmount(matchType)}
                <label htmlFor='wrestlerName'>Wrestler Name</label>
                <input type='text' id='wrestlerName' value={wrestlerName} onChange={(e) => setWrestlerName(e.target.value)} />
                <label htmlFor='matchWinner'>Match Winner</label>
                <input type='text' id='matchWinner' value={matchWinner} onChange={(e) => setMatchWinner(e.target.value)} />
                <label htmlFor='videoId'>Video ID</label>
                <input type='text' id='videoId' value={videoId} onChange={(e) => setVideoId(e.target.value)} />
                </div>
                <button type='submit'>Create Show</button>
            </form>
        </div>
    )
    }
