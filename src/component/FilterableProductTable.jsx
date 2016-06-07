import React from 'react';

var FilterableProductTable = React.createClass({
	loadCommentsFromServer:function(){
		$.ajax({
			type: "get",
			url:this.props.getUrl,
			dataType:'json',
			cache:false,
			success:function(data){
				console.log("FilterableProductTable.data="+data);
				this.setState({data:data});
			}.bind(this),
			error:function(xhr,status,err){
				console.error(this.props.getUrl, status, err.toString());
			}.bind(this)
		});
	},
	getInitialState:function(){
		return {
			data:[]
		};
	},
	//异步请求数据渲染
	componentDidMount:function(){
		this.loadCommentsFromServer();
		//setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	},
	render:function(){
		return (
			<div>
				<SearchBar />
				<ProductTable products={this.state.data}/>
			</div>
		);
	}
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
	}
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
	}
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
			if(product.category !== lastCategory){
				rows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
			}
			rows.push(<ProductRow product={product} key={product.name}/>);
			lastCategory = product.category;
		});

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
	}
});

var SearchBar = React.createClass({
	render:function(){
		return (
			<form>
				<input type="text" placeholder="Search..."/>
				<p>
					<input type="checkbox"/>
					{' '}
					Only show products in stock
				</p>
			</form>
		);
	}
});


export default FilterableProductTable;