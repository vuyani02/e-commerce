import ".././css/input.css"

const Input = ({title, name, handleSelectCategory, select, color}) => {
    return (
        <section>
            <div className="input-container">
                <input type="radio" value={select} onChange={handleSelectCategory} className="radio" name={name}/> <span style={{color: color}}>{title}</span>
            </div>
        </section>
    )
}

export default Input