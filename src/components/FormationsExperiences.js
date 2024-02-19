import React from "react"
import DataFormations from "../datas/Formations"
import Formations from "./Formations"
import dataExperiences from "../datas/Experiences";
import Experiences from "./Experiences";
import './FormationsExperiences.css'

function FormationsExperiences() {
    console.log(dataExperiences);
    return (
        <>
            <Experiences datas={dataExperiences} />
            <Formations datas={DataFormations} />
        </>
    )
}

export default FormationsExperiences