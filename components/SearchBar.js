import {useState} from 'react';


export default function SearchBar() {



const [city, setCityName] = useState(''); //
console.log(city)
console.log(setCityName)

  return (
    <input
      value={city} // ...force the input's value to match the state variable...
      onChange={e => setCityName(e.target.value)} // ... and update the state variable on any edits!
    />
  );
}