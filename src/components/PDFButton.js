import { print } from "react-html2pdf"
import React, { useState } from "react";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';




function PDFButton() {


    const handleGenerateCv = () => {
        let cvTemplate = document.getElementById("cv-print")
        cvTemplate.setAttribute("style", "width:210mm !important")
        cvTemplate.classList.add("cv-print")
        setTimeout(() => {
            print("cv-Jarod-Martins", "cv-print")
            cvTemplate.setAttribute("style", "width:100% !important")
            cvTemplate.classList.remove("cv-print")
        }, 300)
    }



    return (
        <div className="pdf-button">
            <button  onClick={handleGenerateCv}>
                <PictureAsPdfIcon />
            </button>
        </div>
    )
}

export default PDFButton