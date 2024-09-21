import { useState } from 'react';
import './App.css'
// import { MyFirstComponent } from './components/MyFirstComponent'
// import { MySecondComponent } from './components/MySecondComponent'
// import { MyThirdComponent } from './components/MyThirdComponent'
import { Child } from './components/Child'
import { MyFourthComponent } from './components/MyFourthComponent';

function App() {

  // Es el hook
  const [name, setName] = useState("David Romero Lucas")

  return (
    <div className='App'>
        <header className='App-header'>
          <hr className='white-hr'/>
          < MyFourthComponent />
          <hr className='white-hr'/>
          < Child 
            name={name}
            setName={setName}
          />
          <hr className='white-hr'/>
        </header>
    </div>
  )
}

export default App
