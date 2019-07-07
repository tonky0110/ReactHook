import React from 'react';

class App extends React.Component {
  state = {
    count: 0
  }
  modify = (n) => {
    this.setState({
      count: n
    });
  };
  
  render() {
    const { count } = this.state;
    return (
      <>
        <div>
          {count}
        </div>
        <button onClick={() => this.modify(count+1)}>Increment</button>
        <button onClick={() => this.modify(count-1)}>Decrement</button>
      </>
    );
  }
}

export default App;
