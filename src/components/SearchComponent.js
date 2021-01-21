import React, { useState } from "react";

function SearchComponent({ handleSearchChange }) {
	return (
		<form>
			<div className="row g-3 align-items-center">
				<div className="col-auto">
					<input
						type="text"
						id="searchInput"
						placeholder="Search"
						onChange={handleSearchChange}
						className="form-control"
					/>
				</div>
				<button className="btn btn-primary">Search</button>
			</div>
		</form>
	);
}

export default SearchComponent;
