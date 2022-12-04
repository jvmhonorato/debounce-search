
import './App.css';
import { useState } from 'react';
import THANK_U_NEXT from './THANK_U_NEXT';
import debounce  from 'lodash.debounce'


//Main function
const getFilteredItems =(query, items) => {
  //if not be nothing typed show all items,
  if(!query){
    return items;
  }
  // if you have something typed, filter by letter
  return items.filter((song)=> song.name.includes(query))
}



function App() {
  const [query, setQuery] = useState('')
  const { tracks } = THANK_U_NEXT
  const { items } = tracks
  

  // query: is what is typed in search input, items: is data come from API
  const filteredItems = getFilteredItems(query, items)

  //instantiate the setQuery taking the typed values
  const updateQuery = e =>setQuery(e?.target?.value)

  
 //join setQuery to fetch time of (denbounce)
  const debounceOnChange = debounce(updateQuery,200)
  


  return (
    <div className="App">
      <h1>Debounce Search</h1>
      <label>Search</label>
      <input type="text" onChange={debounceOnChange}/>
      <ul>
        {filteredItems.map((value) => ( 
        <h1 key={value.name}>{value.name}</h1> 
        ))}
      </ul>
    </div>
  );
}

export default App;
