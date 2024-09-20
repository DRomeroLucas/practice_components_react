import { useState } from 'react';
import './App.css'
// import { MyFirstComponent } from './components/MyFirstComponent'
// import { MySecondComponent } from './components/MySecondComponent'
import { MyThirdComponent } from './components/MyThirdComponent'
import { Child } from './components/Child'

function App() {

  // Es el hook
  const [name, setName] = useState("David Romero Lucas")

  return (
    <div className='App'>
        <header className='App-header'>
          <h1>Fundamentos de React</h1>
          <hr className='white-hr'/>
          {/* < MyFirstComponent /> */}
          <hr className='white-hr'/>
          {/* < MySecondComponent /> */}
          <hr className='white-hr'/>
          < MyThirdComponent 
            name='David'
            last_name='Romero'
            age='27'/>
          <hr className='white-hr'/>
          < Child 
            name={name}
            setName={setName}/>
          <hr className='white-hr'/>
        </header>
    </div>
  )
}

export default App
