import React, { useState, useEffect } from 'react';
import 'styles/NameGenerator.css';

const names = [
	"Test1",
	"Test2",
];

const surNames = [
	"TestS1",
	"TestS2",
];

function NameGenerator() {
	const [randomName, setRandomName] = useState("Random Name");

	function RandomizeName() {
		Array.prototype.random = function() {
			return this[Math.floor((Math.random() * this.length))];
		};
		
		const newRandomName = names.random() + " " + surNames.random();
		setRandomName(newRandomName);
	}

	return (
		<>
			<h3>{randomName}</h3>
			<button className="Button" onClick={RandomizeName}>Randomize</button>
		</>
	);
}

export default NameGenerator;