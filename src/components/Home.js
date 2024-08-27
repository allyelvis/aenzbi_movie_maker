import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Welcome to Aenzbi Movie Maker</h1>
            <Link to="/editor">
                <button>Start New Project</button>
            </Link>
            <Link to="/project">
                <button>Open Existing Project</button>
            </Link>
        </div>
    );
}

export default Home;
