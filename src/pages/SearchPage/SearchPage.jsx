import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from '../../svgFile/symbol-defs.svg';
import Section from '../../modules/Section/Section';
import * as dataApi from '../../services/dataApi';
import s from './SearchPage.module.css'

const SearchPage = () => {
    const [selectedValue, setSelectedValue] = useState('products');
    const [searchTextInput, setSearchTextInput] = useState('');
    const [responseData, setResponseData] = useState([]);
    const [loader, setLoader] = useState(false);

    const handleRadioChange = (e) => {
        setSelectedValue(e.target.value);

        if(searchTextInput) {
            dataApi.getSearchInformation(e.target.value, searchTextInput).then(res => {
                setResponseData(res.data)

            })
        }
      };
console.log(selectedValue)
    const handleInput = (e) => {
        setSearchTextInput(e.target.value);
    };

    const formSubmit = e => {
        e.preventDefault();
        dataApi.getSearchInformation(selectedValue, searchTextInput).then(res => {
            setResponseData(res.data)
         }
        )
    }

    return (
        <Section>
            <div>
                <h2>Search Database</h2>
                <form onSubmit={formSubmit}>
				<div>
					<button type="submit" >
                    <svg width={25} height={25} >
                      <use xlinkHref={`${Search}#icon-search`} ></use>
                    </svg>

					</button>
					<input
						type="search"
						name="search"
						id="searchInput"
						placeholder="Enter keyword..."
						value={searchTextInput}
						onChange={handleInput}
					/>
				</div>
				
				<legend>Tables</legend>	
					<label htmlFor="products">
						<input
							type="radio"
							id="products"
							name="table"
							value="products"
							defaultChecked
							onChange={handleRadioChange}
						/>{" "}
						Products
					</label>
					<label htmlFor="customers" >
						<input
							type="radio"
							id="customers"
							name="table"
							value="customers"
							onChange={handleRadioChange}
						/>{" "}
						Customers
					</label>
			
				<h4>Search results</h4>
				{loader && <h4>Searching Data</h4>}


            <output name="result" htmlFor="searchInput">
					{responseData ? (
						<>
							{selectedValue === 'products'
								? responseData.map(({id, name, quantPerUnit, price, stock}, index) => (
                                    <div key={id}>                   
                                      <p>
                                       <Link to={`/product/${id}`}>{name}</Link>
                                      </p>
                                       <p>#{index+1}, Quantity Per Unit:{quantPerUnit}, Price: {price}, Stock: {stock} </p>
                                     </div>

								  ))
								: responseData.map(({ id, name, contact, title, phone }, index ) => (
                                    <div key={id}>                   
                                    <p>
                                      <Link to={`/customer/${id}`}>{name}</Link>
                                    </p>
                                    <p>#{index+1}, Contact:{contact}, Title: {title}, Phone: {phone} </p>
                                </div>
								  ))}
						</>
					) : (
						"No results"
					)}
				</output>
	
			
			</form>

            </div>
        </Section>
    )
}


export default SearchPage;