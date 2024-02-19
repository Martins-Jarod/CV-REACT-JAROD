import PDFButton from "./PDFButton";
import ColorPicker from "./ColorPicker";
import "./ActionButton.css";




function ActionButton() {

    return (
        <div className="action-button">
            <PDFButton  />
            <ColorPicker/>
        </div>
    )
}

export default ActionButton