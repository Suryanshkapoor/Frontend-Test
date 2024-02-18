import React, { useState } from 'react'
import "./datalist.css"

export const Datalist = ({ dataList, setDataList, categories, statusList, searchInput }) => {

	const[column, setColumn] = useState('ALL')
	
	// Filter dataList based on categories, statusList, and searchInput
	const filteredData = dataList.filter(item => {
		// Filter by category
		if (categories !== 'ALL') {
			if (item.country !== categories) {
				return false;
			}
		}
		// Filter by status
		if (statusList !== 'ALL') {
			if (item.status !== statusList) {
				return false;
			}
		}
		// Filter by searchInput
		if (searchInput !== '') {
			if(!(
				item.id.toString().includes(searchInput) ||
				item.SHIPIIFY.toString().includes(searchInput) ||
				item.date.includes(searchInput) ||
				item.status.includes(searchInput) ||
				item.customer.includes(searchInput) ||
				item.email.includes(searchInput) ||
				item.country.includes(searchInput) ||
				item.shipping.includes(searchInput) ||
				item.source.includes(searchInput) ||
				item.order_type.includes(searchInput)
			)){
				return false;
			}	
		}
		return true;
	});


	return (
		<div>
			<div className="data-list">
				<div className='dataShow'>
					<div>
						<h2>Product Summary</h2>
					</div>
					<div >
						<form>
							<label htmlFor="countries" className="colLable">Show</label>
							<select id="countries" className="colSelect">
								<option value="ALL" >ALL COLUMN</option>
								<option value="US">United States</option>
								<option value="CA">Canada</option>
							</select>
							<button type='button' className='removeItems'>Dispatch Selected</button>
						</form>
					</div>
				</div>
				<table>
					<thead className="tableHead">
						<tr>
							<th scope="col">
								<div className="checkBoxContainer">
									<input id="checkbox-all-search" type="checkbox" className="checkBox" />
								</div>
							</th>
							<th scope="col" className="headComponents">
								id
							</th>
							<th scope="col" className="headComponents">
								Shipiify#
							</th>
							<th scope="col" className="headComponents">
								date
							</th>
							<th scope="col" className="headComponents">
								status
							</th>
							<th scope="col" className="headComponents">
								Customer
							</th>
							<th scope="col" className="headComponents">
								email
							</th>
							<th scope="col" className="headComponents">
								country
							</th>
							<th scope="col" className="headComponents">
								shipping
							</th>
							<th scope="col" className="headComponents">
								source
							</th>
							<th scope="col" className="headComponents">
								order type
							</th>
							<th scope="col" className="headComponents">
							</th>
						</tr>
					</thead>
					<tbody>
						{filteredData.map((item) => (
							<tr key={item.id}>
								<td>
									<div className="checkBoxContainer">
										<input id={item.id} type="checkbox" className="checkBox" />
									</div>
								</td>
								<th scope="row" className="bodyheads">
									{item.id}
								</th>
								<td className="bodyComponents">
									{item.SHIPIIFY}
								</td>
								<td className="bodyComponents">
									{item.date}
								</td>
								<td className="bodyComponents">
									{item.status}
								</td>
								<td className="bodyComponents">
									{item.customer}
								</td>
								<td className="bodyComponents">
									{item.email}
								</td>
								<td className="bodyComponents">
									{item.country}
								</td>
								<td className="bodyComponents">
									{item.shipping}
								</td>
								<td className="bodyComponents">
									{item.source}
								</td>
								<td className="bodyComponents">
									{item.order_type}
								</td>
								<td>
									<span className="editSign">&#9998;</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
