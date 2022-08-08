import React ,{useState} from 'react';
function country(props){
    const[countryName,setcountryName] = useState('INDIA');

    const Changecountry = () => {
        SetcountryName('CANADA')
    }
}
 return (
    <div>
        <p>{countryName}</p>
        <button onClick={() => Changecountry()}>Change  </button> 
        <city country_name = {countryName}/>      
    </div>
)

export default country


r