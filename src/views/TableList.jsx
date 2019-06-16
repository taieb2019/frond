import React from "react";
import axios from 'axios';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";
import TableUser from "../components/Table/TableUser";

class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {users: [],chefs: []};
  }
  getUser(user){
    axios.get('http://localhost:4200/users?roleName='+user)
    .then(response => {
       if(user=='PELERIN')
       this.setState({ users: response.data });
      else
      this.setState({ chefs: response.data });
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  componentDidMount(){
    this.getUser('PELERIN');
    this.getUser('CHEF');
  }
  tabRow(roleName){
    if(roleName=='PELERIN'){
    return this.state.users.map(function(object, i){
        return <TableUser obj={object} key={i} />;
        
    });
    }
    else
    {
    return this.state.chefs.map(function(object, i){
      return <TableUser obj={object} key={i} />;
     
  });
  }
  }
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Table Pélerin</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>CIN</th>
                        <th>E-mail</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>age</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                    { this.tabRow('PELERIN') }
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">Table Chef de groupe</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                      <th>CIN</th>
                        <th>E-mail</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>age</th>

                      </tr>
                    </thead>
                    <tbody>
                    { this.tabRow('CHEF') }
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
