
import { useState } from 'react';
import './App.css';


function App() {
  const [selectedCountry,setCountry]=useState(null)
  const [selectedCity,setCity]=useState(null)
  const [selectedState,setState]=useState(null)
  const [selectedVillage,setVillage]=useState(null)


  const countryHandler=(event)=>{
    event.preventDefault();
    const selectedCountry=event.target.value
    setCountry(selectedCountry)
  }
  const cityHandler=(event)=>{
    event.preventDefault();
    const selectedCity=event.target.value
    setCity(selectedCity)
    setState(null)
  }
  const stateHandler=(event)=>{
    event.preventDefault();
    const selectedState=event.target.value
    setState(selectedState)
  }
  const villageHandler=(event)=>{
    event.preventDefault();
    const selectedVillage=event.target.value
    setVillage(selectedVillage)
  }
  const buttonHandler=()=>{
    const info={selectedCountry,selectedCity,selectedState}
    const data=JSON.stringify(info)
    localStorage.setItem('info',data)
  }


  const information = [
    {
      country: "Bangladesh",
      cities: [
        {
          name: "Dhaka",
          states: [
            {
              name: "Gazipur",
              village: "Mawna"
            },
            {
              name: "mawna",
              village: "Chakpara"
            }
          ]
        },
        {
          name: "Mymensingh",
          states: [
            {
              name: "Mymensingh",
              village: "Ganginapar"
            }
          ]
        }
      ]
    },
    {
      country: "India",
      cities: [
        {
          name: "Delhi",
          states: [
            {
              name: "Delhi State",
              village: "Delhi Village"
              
            }
          ]
        }
      ]
    }
  ];
  return (
    <div>
    <div className='text-center'>
    <h1 className='text-4xl text-center'>Here are the info of country</h1>
    <select className='mt-40' onChange={countryHandler} value={selectedCountry}>
    <option >select a country</option>
    {
      information.map(country => <option>{country.country}</option>)
      
    }
    </select>
   {
    selectedCountry &&(
      <select onChange={cityHandler} value={selectedCity}>
      <option value="">select a city</option>
      {
        information.find(country=>country.country===selectedCountry)
        .cities.map((city)=><option>{city.name}</option>)
        
      }
      </select>
    )
   }
   {
    selectedCity &&(
      <select onChange={stateHandler} value={selectedState}>
      <option>select a state</option>
      {
        information.find(country=>country.country===selectedCountry)
        .cities.find((city)=>city.name===selectedCity)
        ?.states?.map(state=><option>{state.name}</option>)
      }
      </select>
    )
   }
   
   
    </div>
    <button onClick={buttonHandler} className='btn btn-success flex justify-center mx-auto mt-24 items-center '>save </button>

    </div>
  );
}

export default App;
