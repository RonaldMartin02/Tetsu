import Ichiban from '../assets/Img/Roster/IchibanGreyHex.png';
import Jermaine from '../assets/Img/Roster/JermaineGreyHex.png';
import Jorge from '../assets/Img/Roster/JorgeGreyHex.png';
import Sammy from '../assets/Img/Roster/SammyGreyHex.png';
import Skylar from '../assets/Img/Roster/SkylarGreyHex.png';
import Troy from '../assets/Img/Roster/TroyGreyHex.png';
import Xander from '../assets/Img/Roster/XanderLittGreyHex.png';
import Patrick from '../assets/Img/Roster/DonDadaGoldHex.png';
import YoungBoy from '../assets/Img/Roster/YoungBoyGreyHex.png';

export default function Wrestlers(props) {
    console.log(props.name)
    
    if (props.name === 'Ichiban') {
        return (
    <div className='Wrestler'>
        <div className={props.name}>
            <img src={Ichiban}  alt="" />
        </div>  
    </div>)} 
    else if (props.name === 'Jermaine Marbury') {
        return (
    <div className='Wrestler'>
        <div className={props.name}>
            <img src={Jermaine}  alt="" />
        </div>
    </div>)}
    else if (props.name === 'Jorge Santi') {
        return (
    <div className='Wrestler'>
        <div className={props.name}>
            <img src={Jorge}  alt="" />
        </div>
    </div>)}
    else if (props.name === 'Sammy Diaz') {
        return (
    <div className='Wrestler'>
        <div className={props.name}>
            <img src={Sammy}  alt="" />
        </div>
    </div>)}
    else if (props.name === 'Skylar') {
        return (
    <div className='Wrestler'>
        <div className={props.name}>
            <img src={Skylar}  alt="" />
        </div>
    </div>)}
    else if (props.name === 'Troy Stevens') {
        return (
    <div className='Wrestler'>
        <div className={props.name}>
            <img src={Troy}  alt="" />
        </div>
    </div>)}
    else if (props.name === 'Xander Litt') {
        return (
    <div className='Wrestler'>
        <div className={props.name}>
            <img src={Xander}  alt="" />
        </div>
    </div>)}
    else if (props.name === 'Patrick Saint') {
        return (
    <div className='Wrestler'>
        <div className={props.name}>
            <img src={Patrick}  alt="" />
        </div>
    </div>)}
    else if (props.name === 'The YoungBoy') {
        return (
    <div className='Wrestler'>
        <div className={props.name}>
            <img src={YoungBoy}  alt="" />
        </div>
    </div>)}
    else if (props.name === 'Patrick Saint') {
        return (
    <div className='Wrestler'>
        <div className={props.name}>
            <img src={Patrick}  alt="" />
        </div>
    </div>)}
    else{
        return (
            <div className=''>
                <h1>Need Photo</h1>
            </div>
        )
    }
}