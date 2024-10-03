import './App.css';
import { useEffect, useState } from 'react';

// https://api.edamam.com/api/nutrition-details?app_id=2fb8b4b2&app_key=%20938a6cccc60b8e33685c2176d8d0d908%09

function App() {

const[mySearch, setMySearch] = useState("");
const[myNutrition, setMyNutrition] = useState();
const[wordSubmitted, setWordSubmitted] = useState();

  
const fetchData = async(ingr) => {
  const response = await fetch(`https://api.edamam.com/api/nutrition-details?app_id=2fb8b4b2&app_key=%20938a6cccc60b8e33685c2176d8d0d908%09`, {
    method: 'POST',
    headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
     },    
  body: JSON.stringify({ingr: ingr})  
  });
  console.log()  
}

useEffect(() => {
  fetchData()
}, [wordSubmitted])

console.log()

const myRecipeSearch = e => {
  setMySearch(e.target.value);
}

const finalSearch = (e) => {
  e.preventDefault();
  setWordSubmitted(mySearch);  
}
  

  return (
    <div className="App">      

      <div className='container'>
         <h1>Welcome to Nutrition Analysis!</h1>  
        </div>  

        <div className='container'>
          <form onSubmit={finalSearch}>
            <input type="text" placeholder="Search" onChange={myRecipeSearch}/>
          </form>
        </div>  

        <div className='container'>
        <button onClick={finalSearch}>Click here</button></div>     
        </div>
  );
}
export default App;
