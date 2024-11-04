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

    return(
        <div>
            <h1>Create a Show</h1>
            <form>
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
                <label htmlFor='showBanner'>Show Banner</label>
                <input type='text' id='showBanner' value={showBanner} onChange={(e) => setShowBanner(e.target.value)} />
                <label htmlFor='DoorsOpen'>Doors Open</label>
                <input type='text' id='DoorsOpen' value={DoorsOpen} onChange={(e) => setDoorsOpen(e.target.value)} />
                <label htmlFor='matchType'>Match Type</label>
                <input type='text' id='matchType' value={matchType} onChange={(e) => setMatchType(e.target.value)} />
                <label htmlFor='wrestlerName'>Wrestler Name</label>
                <input type='text' id='wrestlerName' value={wrestlerName} onChange={(e) => setWrestlerName(e.target.value)} />
                <label htmlFor='matchWinner'>Match Winner</label>
                <input type='text' id='matchWinner' value={matchWinner} onChange={(e) => setMatchWinner(e.target.value)} />
                <label htmlFor='videoId'>Video ID</label>
                <input type='text' id='videoId' value={videoId} onChange={(e) => setVideoId(e.target.value)} />
                <button type='submit'>Create Show</button>
            </form>
        </div>
    )
    }