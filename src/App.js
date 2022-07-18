import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Table from "./Components/Table/Table";

function App() {
   return (
      <div className="flex" style={{ backgroundColor: "#F9FCFE" }}>
         <Sidebar></Sidebar>
         <Table></Table>
      </div>
   );
}

export default App;
