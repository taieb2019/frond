import React from "react";
import axios from 'axios';
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
  Col
} from "reactstrap";

class AdminProfile extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeNom = this.handleChangeNom.bind(this);
    this.handleChangePrenom = this.handleChangePrenom.bind(this);
    this.handleChangeRole = this.handleChangeRole.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email : '',
      lastName : '',
      firstName : '',
      role : '',
      pwd : ''
    }
  }
  
  handleChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  handleChangeNom(e) {
    this.setState({
      lastName: e.target.value
    });
  }
  handleChangePrenom(e) {
    this.setState({
      firstName: e.target.value
    });
  }
 handleChangeRole(e) {
    this.setState({
     role: e.target.value
    });
  }
  handleChangePassword(e) {
    this.setState({
      pwd: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const obj = {
      email: this.state.email,
      lastName: this.state.lastName,
      firstName: this.state.firstName,
      role: 'admin',
      pwd: this.state.pwd
    };
    console.log(obj);
    
    axios.post('http://localhost:4200/admins/postAdmin', obj)
    .then(res => console.log(res.data));

this.setState({

  email : '',
  lastName : '',
  firstName : '',
  role : '',
  pwd : ''
})
}
  render() {
    return (
      <>
        <div className="content" >
          <Row>
            <Col md="7">
              <Card>
                <CardHeader>
                  <h5 className="title">Edit Profile</h5>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={this.handleSubmit}>
                    <Row>
                    <Col className="px-md-1" md="5">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Votre Email :
                          </label>
                          <Input 
                          placeholder="votre Email"
                          type="email"
                          value={this.state.email}
                          onChange={this.handleChangeEmail} />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="5">
                        <FormGroup>
                          <label>Votre Nom :</label>
                          <Input
                            defaultValue=""
                            placeholder="nom"
                            type="text"
                            value={this.state.nom}
                           onChange={this.handleChangeNom}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                      <Row>
                      
                      <Col className="px-md-1" md="5">
                        <FormGroup>
                          <label>Votre Prénom :</label>
                          <Input
                            defaultValue=""
                            placeholder="prénom"
                            type="text"
                            value={this.state.prenom}
                            onChange={this.handleChangePrenom}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="5">
                        <FormGroup>
                          <label>Votre mot de passe :</label>
                          <Input
                            defaultValue=""
                            placeholder= "mot de passe"
                            type="password"
                            value={this.state.pwd}
                            onChange={this.handleChangePassword}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
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
                  </div>
                  <div className="card-description">
                     Bienvenue chez nous
                  </div>
                </CardBody>
                <CardFooter>
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

export default AdminProfile;
