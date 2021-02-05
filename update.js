import React, {useState} from 'react'

export default function NewComp() {
    const [Arr, setArr] = useState([
        {
            name : "Dhairya",
            surname: "Rupala"
        },
        {
            name: "jatin",
            surname:"patel"
        }
    ])

    const handleChange = (e,index) => {
        let items = [...Arr];

        var newArr = items[index]
        newArr.name = e.target.value
        items.splice(index, newArr);

        setArr(items)

    }
    return (
        <div>
            {
                Arr.map((ele,index) => <li>
                    <input value={ele.name} onChange={(e) => handleChange(e,index)}/>
                </li>)
            }
        </div>
    )
}
