import "./css/buttons.css"

const Buttons = ({title, select, handleSelectBtn}) => {
    return (
            <button value={select} onClick={handleSelectBtn} className="reco-btn">{title}</button>
    )
}

export default Buttons