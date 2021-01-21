import React from "react";

function EmployeeTable({ employees }) {
	console.log("******************** employee **********************");
	console.log(employees);
	return (
		<table className="table">
			<thead>
				<tr>
					<th scope="col">Photo</th>
					<th scope="col">Name</th>
					<th scope="col">Phone</th>
					<th scope="col">Email</th>
					<th scope="col">DOB</th>
				</tr>
			</thead>
			<tbody>
				{employees.map((employee) => (
					<tr>
						<td>
							<img src={employee.picture.thumbnail} alt="employee thumbnail" />
						</td>
						<td>{employee.name.first}</td>
						<td>{employee.phone}</td>
						<td>{employee.email}</td>
						<td>{employee.dob.date}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default EmployeeTable;
