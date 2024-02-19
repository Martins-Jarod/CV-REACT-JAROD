import React from "react"
import Skill from "./Skill"
import './Skills.css'

function Skillz() {
  return <>
    <div className="skills"> 
      <h2 className="h2">  Compétences</h2>
        <Skill title="HTML" rating="5" />
        <Skill title="CSS" rating="4" />
        <Skill title="JAVASCRIPT" rating="4" />
        <Skill title="REACT" rating="4" />
        <Skill title="REDUX" rating="3" />
        <Skill title="NODE" rating="3" />
        <Skill title="SQL" rating="3" />
        <Skill title="GitHub" rating="5" />
        <Skill title="Figma" rating="4" />
        <Skill title="CorelDraw" rating="3" />
        <Skill title="Gravostyle" rating="5" />
        <Skill title="Travail d'équipe" rating="4" />
        <Skill title="Créativité" rating="4" />
        <Skill title="Esprit critique" rating="4" />

    </div>
    <div className="skills"> 
      <h2 className="h2">Langues</h2>
      <Skill title="Français" rating="5" />
      <Skill title="Anglais" rating="4" />
      <Skill title="Espagnol" rating="3" />
      <Skill title="Portugais" rating="3" />
    </div>
  </>
}

export default Skillz