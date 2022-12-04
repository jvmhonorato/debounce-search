
import './App.css';
import { useState } from 'react';
import THANK_U_NEXT from './THANK_U_NEXT';

const getFilteredItems =(query, items) => {
  if(!query){
    return items;
  }
  return items.filter((song)=> song.name.includes(query))
}



function App() {
  const [query, setQuery] = useState('')
  const { tracks } = THANK_U_NEXT
  const { items } = tracks
  

  // is what is typed in search input, items is data come from API
  const filteredItems = getFilteredItems(query, items)
  


  return (
    <div className="App">
      <h1>Debounce Search</h1>
      <label>Search</label>
      <input type="text" onChange={e => setQuery(e.target.value)}/>
      <ul>
        {filteredItems.map((value) => ( 
        <h1 key={value.name}>{value.name}</h1> 
        ))}
      </ul>
    </div>
  );
}

export default App;
