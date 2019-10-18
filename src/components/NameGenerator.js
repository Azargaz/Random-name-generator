import React, { useState } from 'react';
import 'styles/NameGenerator.css';
import Request from 'request';

function NameGenerator() {
	const [name, setName] = useState("Random");
	const [surname, setSurname] = useState("Name");
	const [loading, setLoading] = useState(false);

	function createRandomName() {
		const requestRandomName = (id, set) => {
			setLoading(true);
			Request(`https://kitsu.io/api/edge/anime-characters/${id}/character`, function (error, response, body) {
				console.log('Status:', response.statusCode);

				if (error) {
					console.log(error);
				} else {
					try {
						const data = JSON.parse(body)["data"];
						const fullName = data["attributes"]["canonicalName"].split(" ");
						const randomName = fullName[Math.floor(Math.random() * fullName.length)];

						console.log("Full name: " + fullName + " Random part: " + randomName);
						set(randomName);
						setLoading(false);
					} catch (errors) {
						console.log(errors);
					}
				}
			});
		}

		const nameId = Math.round(Math.random() * 100000);
		const surnameId = Math.round(Math.random() * 100000);

		requestRandomName(nameId, setName);
		requestRandomName(surnameId, setSurname);
	}

	return (
		<>
			<h3>{name + " " + surname}</h3>
			<button className="Button" onClick={createRandomName} disabled={loading}>Randomize</button>
			<div className={loading ? "loader" : "notloading"} />
		</>
	);
}

export default NameGenerator;