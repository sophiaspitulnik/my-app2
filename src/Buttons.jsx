import React, { Component } from 'react';
import { DropdownButton, MenuItem} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';

class Buttons extends Component {
	
	render() {
		return(
			<div className="Buttons">
				<ButtonGroup>
	               <DropdownButton id="typeDropdown" title={"Country"} onSelect={this.props.onType}>
	                 <MenuItem eventKey="All">All</MenuItem>
	                 <MenuItem eventKey="Nepal">Nepal</MenuItem>
	                 <MenuItem eventKey="China">China</MenuItem>
	               </DropdownButton>

	               <DropdownButton id="typeDropdown" title={"Disputed"} onSelect={this.props.onType2}>
	                 <MenuItem eventKey="All">All</MenuItem>
	                 <MenuItem eventKey="disputed territory">disputed territory</MenuItem>
	                 <MenuItem eventKey="not disputed territory">not disputed territory</MenuItem>
	               </DropdownButton>
	                
	               <Button title={"Sort A to Z"} onClick={this.props.onSortAZ}>Sort A to Z</Button>
	             </ButtonGroup>
	              
	             <input type="text" placeholder="Search" onChange={this.props.onSearch} />
	         </div>
	    )
	}

}

export default Buttons;