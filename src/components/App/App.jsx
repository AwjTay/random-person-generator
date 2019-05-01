import React from 'react';
import GeneratorScreen from "../GeneratorScreen"
import ResultScreen from "../ResultScreen"
import '../../gulp/dist/main.css'

const App = () => {
  
  return (
    <React.Fragment>
        <div className="components_wrapper">
	      <GeneratorScreen />
	      <ResultScreen />
        </div>
    </React.Fragment>
  )
}

export default App
