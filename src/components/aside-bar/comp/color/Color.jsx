import ".././css/category.css"
import ".././css/input.css"
import Input from "./Input"

const Color = ({handleSelectColor}) => {
    return (
        <section className="sect">
            <p className="c-header">Color</p>
            <Input handleSelectColor={handleSelectColor} color={''} select={''} title={'All'} name={'color'}/>

            <Input handleSelectColor={handleSelectColor} color={'blue'} select={'blue'} title={'Blue'} name={'color'}/>

            <Input handleSelectColor={handleSelectColor} color={'black'} select={'black'} title={'Black'} name={'color'}/>

            <Input handleSelectColor={handleSelectColor} color={'red'} select={'red'} title={'Red'} name={'color'}/>

            <Input handleSelectColor={handleSelectColor} color={'green'} select={'green'} title={'Green'} name={'color'}/>
            
            <div className="input-container">
                <input type="radio" value={'white'} onChange={handleSelectColor} className="radio" name={'color'}/> <span style={{background: 'black', color:'white'}}>{'White'}</span>
            </div>
        </section>
    )
}

export default Color