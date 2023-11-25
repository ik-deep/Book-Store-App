import React, { useEffect, useState } from "react";
import HeroCards from "./components/HeroCards";
import Header from "./components/Header";
import "./App.css";
import axios from "axios";



function App() {
  const [searchText, setSearchText] = useState("Harry Potter");
  const [data,setdata] = useState();
  const InputEvent = (e) => {
    const data = e.target.value;
    setSearchText(data);
  }
  useEffect(() => {
    const getCardItem = async () => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=`+searchText+`&key=AIzaSyAD9ln22aK4PNSId-OzUA-9bRNR_ar8FqI`)
        .then(res=>{
           console.log(res.data.items)
           setdata(res.data.items);
          }  )
        .catch(err=> console.log(err))
    };
    if(searchText!==''){
      getCardItem();
    }
  },[searchText]);

  return (
    <div className="App">
      <Header searchText={searchText} InputEvent={InputEvent}/>
      <HeroCards data={data}/>
    </div>
  );
}

export default App;
