import React, { useState } from 'react';
import CustomSelect from '../../components/select/select';
import Select from '../../components/select/select';
import "./home.css"
const Home=({isError})=>{
    const [clickedItem, setClickedItem] = useState([]);

    return(
    <>
    <CustomSelect
    listItems={[{ "title": "React", "id": "react" }, { "title":
    "Angular", "id": "angular" }, { "title": "Vue", "id": "vue" }, { "title":
    "Ember", "id": "ember" } ]}
    colors={["red","yellow","green", "blue"]}
    isSearchable={true}
    isMultiSelect={false}
    clickedItem={clickedItem}
    setClickedItem={setClickedItem}
    />

    { clickedItem.length>0 && clickedItem.map((item)=>{
        return <div className='mt-1'>{item.title}</div>
    })}
    </>
    )
}
export default Home