import { createContext } from 'react';

export class MyGlobalState {
  constructor() {
    this.state = {
      userName: '',
      joke: '',
    };
  }
  setUsername = (name) => {
    console.log('setUsername');
    this.state.userName = name;
  };
  getUserName = () => {
    return this.state.userName;
  };
  async getJoke() {
    const url = 'https://official-joke-api.appspot.com/random_joke';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log(this);
    this.state.joke = data.setup;
  }
}

export const GlobalState = createContext(null);
