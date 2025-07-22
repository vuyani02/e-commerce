import ".././css/category.css"
import Input from "./Input"

const Category = ({handleSelectCategory}) => {
    return (
        <section className="sect">
            <p className="c-header">Category</p>
            <Input color={'black'} title={"All"} name={"category"} handleSelectCategory={handleSelectCategory} select={''}/>

            <Input color={'black'} title={"Sneakers"} name={"category"} handleSelectCategory={handleSelectCategory} select={'sneakers'}/>
            
            <Input color={'black'} title={"Flats"} name={"category"} handleSelectCategory={handleSelectCategory} select={'flats'}/>
            
            <Input color={'black'} title={"Sandals"} name={"category"} handleSelectCategory={handleSelectCategory} select={'sandals'}/>

            <Input color={'black'} title={"Heels"} name={"category"} handleSelectCategory={handleSelectCategory} select={'heels'}/>
        </section>
    )
}

export default Category