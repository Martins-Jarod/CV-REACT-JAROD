import React from "react"
import './Interests.css'
import LaptopIcon from '@mui/icons-material/Laptop';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';


function Interests() {
  return (
    <div className="interests">
      <h2 className="h2">Centres d'intérêts</h2>
      <ul>
        <li><LaptopIcon style={{ fontSize: 40 }} />Informatique</li>
        <li><LibraryMusicIcon style={{ fontSize: 40 }} /> Musique</li>
        <li><DirectionsCarIcon style={{ fontSize: 40 }} />Sport-auto</li>
        <li><SportsMartialArtsIcon style={{ fontSize: 40 }} /> Sport de combat</li>
        <li><SportsEsportsIcon style={{ fontSize: 40 }} /> Jeux-vidéo (Esport) </li>
      </ul>
    </div>
  )
}
export default Interests