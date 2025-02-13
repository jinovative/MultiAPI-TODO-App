import React from "react";
import { Link } from "react-router-dom";

export default function home() {
    return (
        <div className="App-header">
            <div>
                <h1>Hello APIs</h1>
            </div>
            <div>
                <Link to="/plain" className="nav-link">
                    Plain App
                </Link>
            </div>

            <div>
                <Link to="/dotnet" className="nav-link">
                    .NET
                </Link>
            </div>

            <div>
                <Link to="/go" className="nav-link">
                    Go
                </Link>
            </div>
            <div>
                <Link to="/springboot" className="nav-link">
                    Spring Boot
                </Link>
            </div>
            <div>
                <Link to="/ruby" className="nav-link">
                    Ruby
                </Link>
            </div>
            <div>
                <Link to="/expressjs" className="nav-link">
                    Express.js
                </Link>
            </div>
            <div>
                <Link to="/flask" className="nav-link">
                    Flask
                </Link>
            </div>
            <div>
                <Link to="/django" className="nav-link">
                    Django
                </Link>
            </div>
        </div>
    );
}
