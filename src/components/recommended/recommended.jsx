import Buttons from "./buttons"
import "./css/recommended.css"

const Recommended = ({handleSelectBtn}) => {
    return (
        <section className="recommended">
            <h2>Recommended</h2>
            <Buttons handleSelectBtn={handleSelectBtn} select={''} title={'All Products'}/>
            <Buttons handleSelectBtn={handleSelectBtn} select={'Nike'} title={'Nike'}/>
            <Buttons handleSelectBtn={handleSelectBtn} select={'Puma'} title={'Puma'}/>
            <Buttons handleSelectBtn={handleSelectBtn} select={'Vans'} title={'Vans'}/>
            <Buttons handleSelectBtn={handleSelectBtn} select={'Pep'} title={'Pep'}/>
        </section>
    )
}

export default Recommended