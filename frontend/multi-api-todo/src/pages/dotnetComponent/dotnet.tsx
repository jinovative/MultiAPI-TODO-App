import React from "react";
import "./dotnet.css";

export default function dotnet() {
    return (
        <div className="container">
            <div className="inner-container">
                <div className="search">search</div>
                <div className="contentBox">
                    <div className="item">items</div>
                    <div className="add-date">add date</div>
                    <div className="deadline">deadline</div>
                    <div className="complete">complete</div>
                    <div>add</div>
                </div>
                <div className="contentBox">
                    <div>
                        <input type="item" />
                    </div>
                    <div>
                        <input type="note" />
                    </div>
                    <div>deadline</div>
                    <div>
                        <button>add</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
