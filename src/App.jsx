 
import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'

const bottlesPromise = fetch("./bottles.json")
.then(res=>res.json())

function App() {
   

  return (
    <>
       <h1 className="text-2xl font-bold">Buy Awesome Water Bottle</h1>
       <Suspense>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
       </Suspense>
    </>
  )
}

export default App
