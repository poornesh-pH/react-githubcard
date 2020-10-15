import React,{Component} from 'react';

class AddCard extends Component{
render(){
  return(
    <div>
    <form actions="">
    <input type="text" name="name" placeholder="GitHub Username"/>
    <button type="submit">Add Card</button>
    </form>
    </div>
  )
}
}
export default AddCard;