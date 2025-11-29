import Dashboard from "@pages/Dashboard";
import "./App.css";
import { loggedOutDashboardData } from "@database/mockData";

function App() {
  return <Dashboard data={loggedOutDashboardData} />;
}

export default App;
