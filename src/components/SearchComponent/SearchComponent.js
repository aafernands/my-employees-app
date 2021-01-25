import React from "react";

function SearchComponent({ handleSearchChange }) {
	return (
		<form>
			<div class="form-group">
				<label for="exampleInputEmail1">Search for an employee name here</label>
				<input
					type="text"
					class="form-control"
					id="searchInput"
					placeholder="Search"
					onChange={handleSearchChange}
					className="form-control"
				/>
			</div>
		</form>
	);
}

export default SearchComponent;
