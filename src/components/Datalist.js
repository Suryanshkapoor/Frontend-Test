import React from 'react'
import "./datalist.css"

export const Datalist = () => {


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
								<option value="FR">France</option>
								<option value="DE">Germany</option>
							</select>
							<button className='removeItems'>Dispatch Selected</button>
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
						<tr>
							<td>
								<div className="checkBoxContainer">
									<input id="checkbox-table-search-1" type="checkbox" className="checkBox" />
								</div>
							</td>
							<th scope="row" className="bodyheads">
								000001
							</th>
							<th scope="row" className="bodyheads">
								Apple MacBook Pro 17"
							</th>
							<td className="bodyComponents">
								Silver
							</td>
							<td className="bodyComponents">
								Laptop
							</td>
							<td className="bodyComponents">
								Yes
							</td>
							<td className="bodyComponents">
								Yes
							</td>
							<td className="bodyComponents">
								$2999
							</td>
							<td className="bodyComponents">
								3.0 lb.
							</td>
							<td>
								<span className="editSign">&#9998;</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}
