import React, { Component } from 'react'
import LoginPage from './component/LoginPage.js'
import MyComponent from './reactStudy/MyComponent.js'
import MyComponentClass from "./reactStudy/MyComponentClass";
import Counter from "./reactStudy/Counter";
import Say from "./reactStudy/useState"

import './App.css'

class App extends Component{
  render(){
    return(
        <div>
            {/*<Counter fixedNumber={2}/>*/}
            {/*<MyComponent name={'청이'} favoriteNumber={1}>리액트</MyComponent>*/}
            {/*<MyComponentClass name={'청이'} favoriteNumber={1}>리액트</MyComponentClass>*/}
            {/*<LoginPage/>*/}
            <Say/>

        </div>
    );
  }
}

export default App;