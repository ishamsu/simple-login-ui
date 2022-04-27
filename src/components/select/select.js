

// need to refractor

import React, { useEffect, useState } from 'react';
import Input from '../input/input';
import Option from '../options/options';
import "./select.css"
const CustomSelect = ({ listItems, isSearchable, isMultiSelect, setClickedItem, clickedItem}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState([]);
    // const [clickedItem, setClickedItem] = useState([]);
    const [isShow, setIsShow] = useState(true);

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }
    useEffect(() => {
        if (!isSearchable) {
            setData(listItems)
        }
    }, [isSearchable])

    useEffect(() => {
        if (isSearchable == true) {
            let s = listItems.filter((val) => {
                if (searchTerm === "") {
                    return false;
                } else if (
                    val.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                    return val;
                }
            })
            setData(s)
        }
    }, [searchTerm])
    useEffect(() => {
        let temp = document.getElementById("list-items")

        if (isShow) {
            if (temp) {
                if(isSearchable==false){
                    temp.classList.add("hide-content")

                }
            }
        }
        else {
            if (temp) {
                if(isSearchable==false){
                    temp.classList.remove("hide-content")

                }
            }
        }
    }, [isShow])

    useEffect(() => {
        console.log("clicked item", clickedItem)
        if (clickedItem.length >= 0 && isMultiSelect == false) {

            setIsShow(!isShow)

        }
    }, [clickedItem])

    return (
        <>
            <div className='dropdown'>
                <div className="dropdown-content">
                    {isSearchable == true ?
                        <Input
                            type="text"
                            className={"a"}
                            placeholder="Search name"
                            value={searchTerm}
                            name="search"
                            handleChange={handleChange}
                        />
                        :
                        // isShow==false &&
                        <div className='a a__heading' onClick={() => {

                            console.log("clickedItem clickedItem", clickedItem)
                            // setData([])
                                setIsShow(!isShow)

                            
                        }}>
                            {clickedItem.length > 0 ? "selected" : "nothing selected"}
                        </div>

                    }
                    <div className='list-items' id="list-items">
                        {data.map((post, key) => {
                            return (
                                <Option defaultValue={clickedItem} isMultiSelect={isMultiSelect} data={post} onHandleClick={(data, isActive) => {
                                    let tempArr = [...clickedItem];
                                    console.log("click Option", data, isActive)
                                    if (isActive) {
                                        if (isMultiSelect == false) {
                                            tempArr.length = 0
                                        }
                                        tempArr.push(data)
                                        setClickedItem(tempArr)
                                    }
                                    else {
                                        if (isMultiSelect == true) {
                                            var filtered = tempArr.filter(function (value, index, arr) {
                                                return value.id !== data.id;
                                            });
                                            setClickedItem(filtered)
                                        }
                                        else {
                                            if (isMultiSelect == false) {
                                                tempArr.length = 0
                                            }
                                            tempArr.push(data)
                                            setClickedItem(tempArr)
                                        }

                                    }


                                }} />

                            );
                        })
                        }
                    </div>

                </div>
            </div>
        </>
    )
}
export default CustomSelect