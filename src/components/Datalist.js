import React, { useEffect } from 'react'
import "./datalist.css"

export const Datalist = ({ dataList, setDataList, category }) => {



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
						{category==='ALL' && dataList.map((item) => (
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
