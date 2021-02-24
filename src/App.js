import React, { Component } from 'react'
import LoginPage from './component/LoginPage.js'
import MyComponent from './reactStudy/MyComponent.js'
import MyComponentClass from "./reactStudy/MyComponentClass";
import Counter from "./reactStudy/Counter";
import Say from "./reactStudy/useState"
import EventPractice from "./reactStudy/EventPractice";
import EventPracticeF from "./reactStudy/EventPracticeF"
// import DomComponent from "./reactStudy/DomComponent";
import ScrollBox from "./reactStudy/ScrollBox";

import './App.css'

class App extends Component{
  render(){
    return(
        <div>
            {/*<Counter fixedNumber={2}/>*/}
            {/*<MyComponent name={'청이'} favoriteNumber={1}>리액트</MyComponent>*/}
            {/*<MyComponentClass name={'청이'} favoriteNumber={1}>리액트</MyComponentClass>*/}
            {/*<LoginPage/>*/}
            {/*<Say/>*/}
            {/*<EventPractice/>*/}
            {/*<EventPracticeF/>*/}
            {/*<DomComponent/>*/}
            {/*<ScrollBox ref={(ref)=>this.scrollBox=ref}/>*/}
            {/*<button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>*/}
        </div>
    );
  }
}

export default App;