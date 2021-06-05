import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header"
import Button from "./components/Button"
import Button2 from "./components/Button2"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar";

function App() {

  return <div className="container bg-blue-50">
    {/* <h2>Expense Tracker</h2> */}
    <Navbar />
    <Sidebar />
    {/* <div  className="flex flex-wrap justify-center p-6 space-x-2">
      <Button title='Settle up'/>
      <Button title='Balances'/>
      <Button title='Totals'/>
      <Button title='Account'/>
    </div> */}
    <div className="flex justify-end m-4">
      <Button2 />
    </div>
  </div>;
}

export default App;
