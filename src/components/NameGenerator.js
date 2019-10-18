import React, { useState } from 'react';
import 'styles/NameGenerator.css';
import Request from 'request';

function NameGenerator() {
	const [randomName, setRandomName] = useState("Random Name");
	const [loading, setLoading] = useState(false);

	function requestRandomName() {
		setLoading(true);
		const id = Math.round(Math.random() * 100000);
		Request(`https://kitsu.io/api/edge/anime-characters/${id}/character`, function (error, response, body) {
			console.log('Status:', response.statusCode);

			if (error) {
				console.log(error);
			} else {
				try {
					const newRandomName = JSON.parse(body)["data"]["attributes"]["canonicalName"];
					setRandomName(newRandomName);
				} catch (errors) {
					console.log(errors);
				}
			}

			setLoading(false);
		});
	}

	return (
		<>
			<h3>{randomName}</h3>
			<button className="Button" onClick={requestRandomName} disabled={loading}>Randomize</button>
			<h3 hidden={!loading}>Loading...</h3>
		</>
	);
}

export default NameGenerator;