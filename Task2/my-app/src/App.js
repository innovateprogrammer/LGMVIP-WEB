
import './App.css';
import React,{ useState } from 'react';


function App() {
  var url="";
function m()
{
  
  url=document.getElementById('url').value;
  console.log(url);
  loadUsers();

}



const loadUsers=async()=>{
  const response=await fetch(url);
  const jsonresponse=await
  response.json();
  setUsers(jsonresponse);
  window.alert("Your data is Sucessfully imported !!!! Here are the names of people");

}
  const [users,setUsers]= useState([]);
  return (
    <div className="App">
      <div class="head">
        Welcome to the Github Profile Data Fetcher by Aditya Gadre
      </div>
      <input id="url" type="text" placeholder="Enter the url from which you want to fetch data"></input>
      <button class="btn" onClick={m}>Get Data</button>
      <ul>
        <div class="header">Data Collected</div>
      {users.map(({id,login,url})=>
         (
        <li key={id}>Name: {login}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Url: {url}

        </li>))};
      </ul>
    
    </div>
  );
}

export default App;
