import React from 'react'
import "./filter.css"

export const Filter = () => {
	return (
		<form className='filterBox'>
			<div className='name'>
				<label htmlFor="search-input">What are you looking for?</label>
				<div className="relative w-full">
					<input type="text" id="search-input" placeholder="&#x1F50E;Search for category, name,company, etc" />
				</div>
			</div>
			<div className='category'>
				<label htmlFor="categories">Category</label>
				<select id="categories">

					<option>United States</option>
					<option>Canada</option>
					<option>France</option>
					<option>Germany</option>
				</select>
			</div>
			<div className='status'>
				<label htmlFor="statuslist">Status</label>
				<div className='category'>
				<select id="statuslist">

					<option>United States</option>
					<option>Canada</option>
					<option>France</option>
					<option>Germany</option>
				</select>
			</div>
			</div>
			<div className='search'>
				<button type="button" className="clearButton">&#10225;</button>
				<button type="button" className="searchButton">Search</button>
			</div>
		</form>
	)
}
