import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Employeetable/Employeetable.css";
import "./components/SearchComponent/SearchComponent.css";

import EmployeeTable from "./components/Employeetable/EmployeeTable";
import SearchComponent from "./components/SearchComponent/SearchComponent";
import { useEffect, useState } from "react";
import { format } from "date-fns";

function App() {
	const [originalList, setOriginalList] = useState([]);
	const [employeeList, setEmployeeList] = useState([]);
	const [sortOrder, setSortOrder] = useState("asc");

	const handleSearchChange = (event) => {
		const filterText = event.target.value;
		const filterUser = originalList.filter((user) => {
			return user.name.toLowerCase().indexOf(filterText) > -1;
		});

		setEmployeeList(filterUser);
	};

	const handleSortOrderChange = () => {
		employeeList.sort((a, b) => {
			if (sortOrder === "asc") {
				setSortOrder("desc");
				return a.name.localeCompare(b.name);
			}
			setSortOrder("asc");
			return b.name.localeCompare(a.name);
		});

		setEmployeeList(employeeList);
	};

	useEffect(() => {
		fetch("https://randomuser.me/api?results=100")
			.then((response) => response.json())
			.then((response) => {
				console.log(response);

				const userMap = response.results.map((user) => {
					return {
						name: `${user.name.first} ${user.name.last}`,
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
				<p>
					(Click on arrow icon next to name to sort the list by name order.)
				</p>
			</div>

			<SearchComponent
				handleSearchChange={handleSearchChange}
			></SearchComponent>
			<EmployeeTable
				employees={employeeList}
				onSortChange={handleSortOrderChange}
			></EmployeeTable>
		</div>
	);
}

export default App;
