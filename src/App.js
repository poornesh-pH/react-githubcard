import React,{Component} from "react";
import CardList from './CardList';
import AddCard from './AddCard';
import tempData from './tempData';
import request from 'superagent'
import "./style.css";

 class App extends Component {
   state = {
     profiles : tempData
   };
   render(){
     const addProfile=(name)=>{
       request.get(`https://api.github.com/users/${name}`)
       .then((res)=>{this.setState({
         profiles: {...profiles}
       })})
       .catch((err)=>alert('User '+ err.message))
     }
      return (
    <div>
    <h2>GitHub Card</h2>
    <AddCard addCard={addProfile}/>
    <CardList profiles={this.state.profiles}/>
    </div>
  );
   }
 
}
export default App;