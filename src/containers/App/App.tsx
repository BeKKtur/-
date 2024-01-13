import './App.css'
import Snacks from "../../components/Snacks";
import Drinks from "../../components/Drinks";

function App() {
  return (
    <div className='block'>
        <div className='order'>

        </div>
        <div className="menu">
            <div>
                <Snacks/>
            </div>
            <div>
                <Drinks/>
            </div>
        </div>
    </div>
  )
}

export default App;
