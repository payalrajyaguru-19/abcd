import React ,{useState} from 'react';
function City(props){
    const[CityName,setCityName] = Usestate('surat');

    const ChangeCity = () => {
        SetCityName('Baroda')
    }
}
return(
    <div>
        {
            props.countryname === 'india' ? <p>Taj mahel</p> : <p>Eye London</p>
        }
        <p>{CityName}</p>
        <button onClick={() => ChangeCity()}>Change City</button>       
    </div>
)

export default City


