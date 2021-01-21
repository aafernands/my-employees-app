import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import EmployeeTable from "./components/EmployeeTable";
import SearchComponent from "./components/SearchComponent";
import { useEffect, useState } from "react";

function App() {
	const [employeeList, setEmployeeList] = useState([]);
	useEffect(() => {
		fetch("https://randomuser.me/api?results=15")
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				setEmployeeList(response.results);
			});
	}, []);

	return (
		<div className="container">
			<div className="jumbotron">
				<h1 className="display-4">Employee Directory</h1>
				<p className="lead">
					This is a simple hero unit, a simple jumbotron-style component for
					calling extra attention to featured content or information.
				</p>
				<hr className="my-4" />
				<p>
					It uses utility classes for typography and spacing to space content
					out within the larger container.
				</p>
			</div>

			<SearchComponent></SearchComponent>
			<EmployeeTable employees={employeeList}></EmployeeTable>
		</div>
	);
}

export default App;
