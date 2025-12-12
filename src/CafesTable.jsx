import FilterCafes from "./FilterCafes.jsx";
import {useEffect, useState} from "react";


export default function CafesTable() {
    const [cafes, setCafes] = useState([]);
    const [subways, setSubways] = useState('All');

    useEffect(() => {
        fetch('/cafes')
            .then((response) => response.json())
            .then(data => setCafes(data.cafes || []))
            .catch(err => console.log(err));
    }, []);
    console.log(cafes);

    const filterCafes = subways === 'All' ?
        cafes
        :
        cafes.filter(cafe => cafe.subwayCode.includes(subways));

    return (
        <div className="cafesTable">
            <FilterCafes value={subways} onChange={setSubways}></FilterCafes>
            <ul className='cardsList'>
                {filterCafes.map((cafe) => (
                    <li className='card' key={cafe.id}>
                        <img src={cafe.img || 'https://via.placeholder.com/150'} alt=""/>
                        <h2>{cafe.name}</h2>
                        <p>{cafe.desc}</p>
                        <p>{cafe.address}</p>
                        <p>{cafe.subwayCode}</p>
                        <p>{cafe.workTime}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}