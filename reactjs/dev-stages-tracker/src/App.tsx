import './App.css'
import AssemblyStages from './components/AssemblyStages'

function App() {

  return (
    <div>
      <AssemblyStages stages={['dev', 'stage', 'prod']}/>
    </div>
  )
}

export default App
