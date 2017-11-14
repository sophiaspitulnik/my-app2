import React, { Component } from 'react';
/*
 The list component will take the list of items passed in as a property
 and create an HTML list with those item. In this example, we are passing in the 
 filtered produce list, but this component can be used for other types of items
  as long as it has a name.
*/
class List extends Component {
   renderList() {
       /*
          Javascript map will let you iterate and modify each item in a list.
          In this example, we are changing each item
          (ex. {name: "Apple", type: "Fruit"}) into a HTML list element.
       */
       const items = this.props.items.map(item => {
           return <div key={item.name} className="item">
                      <div className="image"><img src={item.image}></img></div>
                      <div className="text">
                        <div className="bold">{item.name}</div>
                        <div className="regular">{item.type}</div>
                        <div className="regular">{item.type2}</div>
                      </div>
                      
                    </div>
                  
       });

       return items;
   }

   render() {
       return (
          <div className="Mountains">
               {this.renderList()}
          </div>
       );
   }
}

export default List;