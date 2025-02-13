import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import DotNetPage from "./pages/dotnetComponent/dotnet";
import HomePage from "./pages/home";
import SrpingBootPage from "./pages/springboot";
import GoPage from "./pages/go";
import ExpressJsPage from "./pages/go";
import FlaskPage from "./pages/flask";
import RubyPage from "./pages/ruby";
import DjangoPage from "./pages/django";
import Plain from "./pages/plainTodo/plain";

function App() {
    return (
        <div className="App">
            <main className="content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/plain" element={<Plain />} />
                    <Route path="/dotnet" element={<DotNetPage />} />
                    <Route path="/go" element={<GoPage />} />
                    <Route path="/springboot" element={<SrpingBootPage />} />
                    <Route path="/expressjs" element={<ExpressJsPage />} />
                    <Route path="/flask" element={<FlaskPage />} />
                    <Route path="/ruby" element={<RubyPage />} />
                    <Route path="/django" element={<DjangoPage />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
