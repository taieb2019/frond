// TableRow.js

import React from 'react';


class TableaddGroupe extends React.Component {

  constructor(props) {
        super(props);
      //this.delete = this.delete.bind(this);
    }
   // delete() {
      //  axios.get('http://localhost:4200/users/'+this.props.obj._id)
         //   .then(console.log('Deleted'))
           // .catch(err => console.log(err))
  //  }
  render() {
    return (
        <tr>
        <td>
        <input type="checkbox" name="btSelectItem" />
        </td>
        <td>
            {this.props.obj.cin}
        </td>
        <td>
            {this.props.obj.email}
        </td>
        <td>
            {this.props.obj.lastName}
        </td>
        <td>
            {this.props.obj.firstName}
        </td>
        </tr>
    );
  }
}

export default TableaddGroupe;