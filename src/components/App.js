import React from 'react';
import 'styles/App.css';
import NameGenerator from './NameGenerator';

function App() {
	return (
		<div className="App">
			<article className="App-body">
				<h1>Random Anime Name Generator</h1>
				<NameGenerator />
			</article>
		</div>
	);
}

export default App;