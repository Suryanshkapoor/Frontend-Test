import React, { useState, useEffect } from 'react'
import "./main.css"
import { Datalist } from './Datalist';


export const Main = ({ dataList, setDataList }) => {

	const [categories, setCategories] = useState('ALL');
	const [statusList, setStatusList] = useState('ALL');
	const [searchInput, setSearchInput] = useState('');

	var category = 'ALL';
	var status = 'ALL';
	var str = '';


	const handleClear = () => {
		setStatusList('ALL');
		setCategories('ALL');
		setSearchInput('');
	};

	const handleSearch = () => {
		category = categories;
		status = statusList;
		str = searchInput;
		setStatusList('ALL');
		setCategories('ALL');
		setSearchInput('');
	}

	return (<>
		<form className='filterBox'>
			<div className='name'>
				<label htmlFor="search-input">What are you looking for?</label>
				<div className="relative w-full">
					<input
						type="text"
						name='searchinput'
						id="search-input"
						value={searchInput}
						onChange={(e) => setSearchInput(e.target.value)}
						placeholder="&#x1F50E;Search for category, name,company, etc" />
				</div>
			</div>
			<div className='category'>
				<label htmlFor="categories">Category</label>
				<select id="categories" value={categories} onChange={(e) => setCategories(e.target.value)}>
					<option value='ALL'>--All--</option>
					<option value='US'>United States</option>
					<option value='CA'>Canada</option>
					<option value='AU'>Australia</option>

				</select>
			</div>
			<div className='status'>
				<label htmlFor="statuslist">Status</label>
				<div className='category'>
					<select id="statuslist" value={statusList} onChange={(e) => setStatusList(e.target.value)}>
						<option value='ALL'>--All--</option>
						<option value='pend'>Pending</option>
						<option value='done'>Shipped</option>
					</select>
				</div>
			</div>
			<div className='search'>
				<button onClick={handleClear} type="button" className="clearButton">&#9750;</button>
				<button onClick={handleSearch} type="button" className="searchButton">Search</button>
			</div>
		</form>



		<Datalist
			dataList={dataList} setDataList={setDataList}
			category={category}
			status={status}
			str={str}
		/>

	</>
	)
}
