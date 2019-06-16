import React from "react";
import axios from 'axios';
import TableaddGroupe from "../components/Table/TableaddGroupe";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
 Table,
 Dropdown,
 DropdownToggle,
 DropdownMenu,
 DropdownItem,

} from "reactstrap";


class Groupe extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      dropDownValue: '',
      chefs : [],
      pelerins:[],
      pelerinSelected : true
    };
  }
   
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  getUser(user){
    axios.get('http://localhost:4200/users?roleName='+user)
    .then(response => {
       if(user=='PELERIN')
       this.setState({ pelerins: response.data });
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

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  tabRow(roleName){
    if(roleName=='PELERIN'){
    return this.state.pelerins.map(function(object, i){
        return (
        <div>
          <tr>
            <td>
              <input 
                name="pelerinSelected"
                type="checkbox"
               
              />
            </td>
            <td>
                {object.cin}
            </td>
            <td>
                {object.email}
            </td>
            <td>
                {object.lastName}
            </td>
            <td>
                {object.firstName}
            </td>
          </tr>
        </div>
        )
        
    });
    }
    else
    {
      return this.state.chefs.map(function(object, i){
        return <TableaddGroupe obj={object} key={i} />;    
      });
    }
  }
  handleSubmit(e) {
    e.preventDefault();

   // for(var pelerin in this.state.pelerins){
    const obj = {
      
    };
      /*console.log(btSelectItem);*/
   // }
    /*const obj = {
      this.state.groupName,
      email: this.state.email,
      lastName: this.state.lastName,
      firstName: this.state.firstName,
      age: this.state.age,
      role: this.state.role,
      pwd: this.state.pwd
    };
    console.log(obj);
    
    axios.post('http://localhost:4200/users/postGroupe', obj)
    .then(res => console.log(res.data));
    */

/*this.setState({
  cin : '',
  email : '',
  lastName : '',
  firstName : '',
  age : '',
  role : '',
  pwd : ''
})*/

}
  changeValue(e) {
    console.log("jhgggggggggggggg")
    console.log(e.firstName)
    
    this.setState({dropDownValue: e.firstName})
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="7">
              <Card>
                <CardHeader>
                  <h5 className="title" align="center">Ajouter un groupe</h5>
                </CardHeader>
                <CardBody >
                  <Form onSubmit={this.handleSubmit}>
                    <Row>
                    <Col className="px-md-1" md="5">
                        
                          <label>Nom du Groupe :*</label>
                          <Input 
                           align="right"
                            defaultValue=""
                            placeholder="Nom de groupe"
                            type="text"
                            required
                          />
                   
                      </Col>
                      <Col className="px-md-1" md="8">
                        
                          <label>Nom de chef:*</label>
                          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                          <DropdownToggle caret>
                            {this.state.dropDownValue}
                          </DropdownToggle>
                          <DropdownMenu>
                            {this.state.chefs.map((chef)=>(
                              <DropdownItem key={chef._id} onClick={() =>this.changeValue(chef)}>{chef.firstName}</DropdownItem>
                            ))}
                            </DropdownMenu>
                          </Dropdown>
                          
                          </Col>
                    </Row>
                    <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Select Pelerin</th>
                      <th>CIN</th>
                        <th>E-mail</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                      </tr>
                    </thead>
                    <tbody>
                    { this.tabRow('PELERIN') }
            
                    
                    </tbody>
                  </Table>
                    <p>Tous les champs sont obligatoires(*)</p>
                    <CardFooter align="center">
                  <Button type="submit" className="btn-fill" color="primary" >
                    Enregistrer
                  </Button>
                </CardFooter>
                  </Form>
                </CardBody>
                
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={require("assets/img/makkah-logo.png")}
                      />
                      <h5 className="title">Mike Andrew</h5>
                    </a>
                    <p className="description">Ceo/Co-Founder</p>
                  </div>
                  <div className="card-description" align="center">
                    Bienvenue chez nous
                  </div>
                </CardBody>
                <CardFooter align="center">
                  <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebook">
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button className="btn-icon btn-round" color="google">
                      <i className="fab fa-google-plus" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Groupe;
