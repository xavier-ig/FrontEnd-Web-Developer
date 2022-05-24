import React from 'react';

class App extends React.Component{

  constructor(){
    super()
    this.state = { offline: !navigator.onLine }
  }

  setOfflineStatus = () => {
    this.setState( { offline: !navigator.onLine } )
  }

  componentDidMount(){
    window.addEventListener('online', this.setOfflineStatus)
    window.addEventListener('offline', this.setOfflineStatus)
  }

  componentWillUnmount(){
    window.removeEventListener('online', this.setOfflineStatus)
    window.removeEventListener('offline', this.setOfflineStatus)

  }

  render(){
    return (
      <div className="margen">
        Hola
        <p>
          {
            !this.state.offline ? 'Conectado' : 'Desconectado'
          }
        </p>
      </div>
    );
  }
}

export default App;
