import React from "react";

function EmployeeTable() {
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
				<tr>
					<td>Mark</td>
					<td>Mark</td>
					<td>Otto</td>
					<td>@mdo</td>
					<td>@mdo</td>
				</tr>
				<tr>
					<td>Jacob</td>
					<td>Jacob</td>
					<td>Thornton</td>
					<td>@fat</td>
					<td>@fat</td>
				</tr>
			</tbody>
		</table>
	);
}

export default EmployeeTable;
