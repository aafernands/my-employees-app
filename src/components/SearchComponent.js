import React from "react";

function SearchComponent() {
	return (
		<form>
			<div className="row g-3 align-items-center">
				<div className="col-auto">
					<input type="text" id="searchInput" className="form-control" />
				</div>
				<button className="btn btn-primary">Search</button>
			</div>
		</form>
	);
}

export default SearchComponent;
