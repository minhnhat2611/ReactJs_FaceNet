import React from 'react'
import Button from '../Button'
import './Popup.css'

class Popup extends Component
{
	constructor() {
		super();
		this.state = {
			errors    : [],
			id   : '',
			titlte  : '',
			price : '',
			brand 	  : '',
			stock 	  : ''
		}
		this.baseState = this.state
		this.hasErrorFor = this.hasErrorFor.bind(this);
		this.renderErrorFor = this.renderErrorFor.bind(this);
		this.handleUpdateUser = this.handleUpdateUser.bind(this);
		this.handleInputFieldChange = this.handleInputFieldChange.bind(this);
	}
	UNSAFE_componentWillReceiveProps(user_data) {
		this.setState({
			id   : products_data.products.id,
			title  : products_data.products.title,
			price : products_data.products.price,
			brand     : products_data.products.brand,
			stock     : products_data.products.stock,

		})
	}
	handleInputFieldChange(e) {
		this.setState({
			[e.target.title] : e.target.value
		})
	}
	handleUpdateUser(e) {
		e.preventDefault()
		const data = {
			id        : this.state.id,
			title  : this.state.title,
			price : this.state.price,
			brand     : this.state.brand,
			stock     : this.state.stock
		}
		if( !this.checkValidation(data) ) {
			this.reset();
			this.props.updateState(data, 1);
			document.getElementById("closeEditModal").click();
			toastr.warn('User data updated successfully!', {position : 'top-right', heading: 'Done'});
		}
	}
	reset() {
        this.setState(this.baseState);
    }
	hasErrorFor(fieldName) {
		return !!this.state.errors[fieldName];
	}
	renderErrorFor(fieldName) {
    	if (this.hasErrorFor(fieldName)) {
	        return (
	        	<em className="error invalid-feedback"> {this.state.errors[fieldName][0]} </em>
	        )
      	}
    }

    render() {
      return(
			<div className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			  	<div className="modal-dialog" role="document">
			    	<div className="modal-content">
			      		<div className="modal-header">
			        		<h5 className="modal-title">Update user information</h5>
			        		<button type="button" className="close" data-dismiss="modal" aria-label="Close">
			          			<span aria-hidden="true">&times;</span>
			        		</button>
			      		</div>
			        <form onSubmit={this.handleUpdateUser}>
			      		<div className="modal-body">
			          		<div className="form-group">
			            		<label htmlFor="titlte" className="col-form-label">title</label>
			            		<input type="text" className={`form-control form-control-sm ${this.hasErrorFor('titlte') ? 'is-invalid' : ''}`}
			            		 id="titlte" name="titlte" placeholder="tite" onChange={this.handleInputFieldChange} value={this.state.titlte}/>
			            		{this.renderErrorFor('titlte')}
			         	 	</div>
			          		<div className="form-group">
			            		<label htmlFor="price" className="col-form-label">Price</label>
			            		<input type="text" className={`form-control form-control-sm ${this.hasErrorFor('price') ? 'is-invalid' : ''}`}
			            		 id="price" name="price" placeholder="price" onChange={this.handleInputFieldChange} value={this.state.price}/>
			            		{this.renderErrorFor('price')}
			          		</div>
			          		<div className="form-group">
			            		<label htmlFor="brand" className="col-form-label">Brand</label>
			            		<input type="brand" className={`form-control form-control-sm ${this.hasErrorFor('brand') ? 'is-invalid' : ''}`}
			            		 id="brand" name="brand" placeholder="brand" onChange={this.handleInputFieldChange} value={this.state.brand}/>
			            		{this.renderErrorFor('brand')}
			          		</div>
							  <div className="form-group">
			            		<label htmlFor="stock" className="col-form-label">Stock</label>
			            		<input type="stock" className={`form-control form-control-sm ${this.hasErrorFor('stock') ? 'is-invalid' : ''}`}
			            		 id="stock" name="stock" placeholder="stock" onChange={this.handleInputFieldChange} value={this.state.stock}/>
			            		{this.renderErrorFor('stock')}
			          		</div>
			      		</div>
			      		<div className="modal-footer">
			        		<button type="button" id="closeEditModal" className="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
			        		<button type="submit" className="btn btn-primary btn-sm">Save Changes</button>
			      		</div>
			   		</form>
			    	</div>
			  	</div>
			</div>
        )
    }
}
export default Popup

