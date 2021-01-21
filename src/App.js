import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import EmployeeTable from "./components/EmployeeTable";
import SearchComponent from "./components/SearchComponent";
import { useEffect, useState } from "react";
import { format } from "date-fns";

function App() {
	const [originalList, setOriginalList] = useState([]);
	const [employeeList, setEmployeeList] = useState([]);

	const handleSearchChange = (event) => {
    const filterText = event.target.value;
    const filterUser = originalList.filter(user => {
      return user.name.toLowerCase().indexOf(filterText) > -1;
    })

    setEmployeeList(filterUser);
	};

	useEffect(() => {
		fetch("https://randomuser.me/api?results=15")
			.then((response) => response.json())
			.then((response) => {
				console.log(response);

				const userMap = response.results.map((user) => {
					return {
						name: user.name.first,
						dob: format(new Date(user.dob.date), "MM-dd-yyyy"),
						email: user.email,
						picture: user.picture.thumbnail,
						phone: user.phone,
					};
				});

				setEmployeeList(userMap);
				setOriginalList(userMap);
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

			<SearchComponent
				handleSearchChange={handleSearchChange}
			></SearchComponent>
			<EmployeeTable employees={employeeList}></EmployeeTable>
		</div>
	);
}

export default App;
