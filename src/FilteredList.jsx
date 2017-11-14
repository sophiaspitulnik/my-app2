import React, { Component } from 'react';
import Buttons from './Buttons';

class FilteredList extends Component {
   constructor(props) {
       super(props);
       this.state = {
           search: "",
           type: "All",
           type2: "All",
           sortAZ: false
       };
   }
   onSearch = (event) => {
       this.setState({search: event.target.value.trim().toLowerCase()});
   }

   onType = (event) => {
      this.setState({type:event});
   }

   onType2 = (event) => {
      this.setState({type2:event});
   }

   onSortAZ = (event) => {
      this.setState({sortAZ:true});
   }

 
   filterItem = (item) => {
        if(this.state.type === "All" && this.state.type2 === "All") {
            return item.name.toLowerCase().search(this.state.search) !== -1;
        }

        if (this.state.type === "All") {
          return item.name.toLowerCase().search(this.state.search) !== -1
          && item.type2 === this.state.type2;
        }

        if (this.state.type2 === "All") {
          return item.name.toLowerCase().search(this.state.search) !== -1 &&
          item.type === this.state.type; 
        }
        
        return item.name.toLowerCase().search(this.state.search) !== -1
        && item.type === this.state.type
        && item.type2 === this.state.type2;
       
   }

    processList = () => {
            if (this.state.sortAZ === true) {
              this.props.items.sort(function(a, b) {
                return a.name.localeCompare(b.name);

              });
            }
            
              return this.props.items.filter(this.filterItem)
            }
    

    render() {
       return (
            <div className="filter-list">
               <h1>Tallest Mountains</h1>
               <Buttons onType={this.onType} onType2={this.onType2} onSortAZ={this.onSortAZ} onSearch={this.onSearch} items={this.props.items} processList={this.processList} />

           </div>
       );
   }
}
export default FilteredList;