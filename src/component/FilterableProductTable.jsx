import React  from 'react';

var FilterableProductTable = React.createClass({
	getInitialState() {
		return {
			data: [],
			filterText: '',
			inStockOnly: false,
		};
	},
	// 异步请求数据渲染
	componentDidMount() {
		this.loadCommentsFromServer();
		// setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	},
	loadCommentsFromServer() {
		$.ajax({
			type: 'get',
			url: this.props.getUrl,
			dataType: 'json',
			cache: false,
			success: (data) => {
				console.log(`FilterableProductTable.data=${data}`);
				this.setState({
					data,
				});
			},
			error: (xhr, status, err) => {
				console.error(this.props.getUrl, status, err.toString());
			},
		});
	},
	handleUserInput(filterText, inStockOnly){
		this.setState({
			filterText,
			inStockOnly,
		});
	},
	render() {
		return (
			<div>
				<SearchBar
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}
					onUserInput={this.handleUserInput}
				 />
				<ProductTable 
					products={this.state.data}
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}
				 />
			</div>
		);
	},
});


var ProductCategoryRow = React.createClass({
	// getInitialState:function(){
	// 	return {
	// 		category:this.props.category
	// 	};
	// },
	// componentWillReceiveProps:function(nextProps){
	// 	console.log("ProductCategoryRow.nextProps="+nextProps);
	// 	if(nextProps.category){
	// 		this.setState({
	// 			category:nextProps.category
	// 		});
	// 	}
	// },
	render:function(){
		return(
			<tr>
				<th colSpan="2">{this.props.category}</th>
			</tr>
		);
	},
});


var ProductRow = React.createClass({
	// getInitialState:function(){
	// 	const _props = this.props;
	// 	return {
	// 		product: _props.product
	// 	};
	// },
	// componentWillReceiveProps:function(nextProps){
	// 	console.log("ProductRow.nextProps="+nextProps);
	// 	if (nextProps.product){
	// 		this.setState({
	// 			product: nextProps.product
	// 		});
	// 	}
	// },
	render:function(){
		var name = this.props.product.stocked?
					this.props.product.name:
					<span style={{color:'red'}}>
						{this.props.product.name}
					</span>;
		return (
			<tr>
				<td>{name}</td>
				<td>{this.props.product.price}</td>
			</tr>
		);
	},
});

var ProductTable = React.createClass({
	// getInitialState:function(){
	// 	return {
	// 		products:this.props.products
	// 	};
	// },
	// componentWillReceiveProps:function(nextProps){
	// 	console.log("ProductTable.nextProps="+nextProps);
	// 	if(nextProps.products){
	// 		this.setState({
	// 			products:nextProps.products
	// 		});
	// 	}
	// },
	render:function(){
		var rows = [];
		var lastCategory = null;
		this.props.products.forEach(function(product){
			if(product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)){
				return;
			}
			if(product.category !== lastCategory){
				rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
			}
			rows.push(<ProductRow product={product} key={product.name} />);
			lastCategory = product.category;
		}.bind(this));

		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		);
	},
});

var SearchBar = React.createClass({
	handleChange:function(){
		this.props.onUserInput(
			this.refs.filterTextInput.value,
			this.refs.inStockOnlyInput.checked,
		);
	},
	render:function(){
		return (
			<form>
				<input 
					type="text" 
					placeholder="Search..." 
					value={this.props.filterText}
					ref="filterTextInput"
					onChange={this.handleChange}
				/>
				<p>
					<input 
						type="checkbox" 
						checked={this.props.inStockOnly}
						ref="inStockOnlyInput"
						onChange={this.handleChange}
					/>
					{' '}
					Only show products in stock
				</p>
			</form>
		);
	},
});


export default FilterableProductTable;