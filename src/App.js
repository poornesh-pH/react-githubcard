import React,{Component} from "react";
import CardList from './CardList';
import AddCard from './AddCard';
import tempData from './tempData';
import "./style.css";

 class App extends Component {
   state = {
     profiles : tempData
   };
   render(){
      return (
    <div>
    <h2>GitHub Card</h2>
    <AddCard />
    <CardList profiles={this.state.profiles}/>
    </div>
  );
   }
 
}
export default App;