import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

function EmployeeTable({ employees, onSortChange }) {
	console.log("******************** employee **********************");
	console.log(employees);
	return (
		<table className="table">
			<thead>
				<tr>
					<th scope="col">Photo</th>
					<th scope="col">
						Name <FontAwesomeIcon onClick={onSortChange} icon={faSort} />
					</th>
					<th scope="col">Phone</th>
					<th scope="col">Email</th>
					<th scope="col">DOB</th>
				</tr>
			</thead>
			<tbody>
				{employees.map((employee) => (
					<tr>
						<td>
							<img src={employee.picture} alt="employee thumbnail" />
						</td>
						<td>{employee.name}</td>
						<td>{employee.phone}</td>
						<td>{employee.email}</td>
						<td>{employee.dob}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default EmployeeTable;
