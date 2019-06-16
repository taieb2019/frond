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

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeCarteIdentite = this.handleChangeCarteIdentite.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeNom = this.handleChangeNom.bind(this);
    this.handleChangePrenom = this.handleChangePrenom.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeRole = this.handleChangeRole.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      cin : '',
      email : '',
      lastName : '',
      firstName : '',
      age : '',
      role : '',
      pwd : ''
    }
  }
  handleChangeCarteIdentite(e) {
    this.setState({
      cin: e.target.value
    });
    
    
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
  handleChangeAge(e) {
    this.setState({
      age: e.target.value
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
      cin: this.state.cin,
      email: this.state.email,
      lastName: this.state.lastName,
      firstName: this.state.firstName,
      age: this.state.age,
      role: this.state.role,
      pwd: this.state.pwd
    };
    console.log(obj);
    
    axios.post('http://localhost:4200/users/postUser', obj)
    .then(res => console.log(res.data));

this.setState({
  cin : '',
  email : '',
  lastName : '',
  firstName : '',
  age : '',
  role : '',
  pwd : ''
})
}
  render() {
    return (
      <>

        <div className="content">
          <Row>
            <Col md="7">
              <Card>
                <CardHeader>
                  <h5 className="title" align="center">Ajouter un utilisateur</h5>
                </CardHeader>
                <CardBody >
                  <Form onSubmit={this.handleSubmit}>
                    <Row>
                    <Col className="px-md-1" md="5">
                        <FormGroup>
                          <label>Carte d'identité :*</label>
                          <Input 
                           align="right"
                            defaultValue=""
                            placeholder="carte identité"
                            type="number"
                            value={this.state.cin}
                            onChange={this.handleChangeCarteIdentite}
                            required
                          />
                        </FormGroup>
                      </Col>
                    <Col className="px-md-1" md="5">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Votre Email :*
                          </label>
                          <Input 
                          placeholder="votre Email"
                          type="email"
                          value={this.state.email}
                          onChange={this.handleChangeEmail} 
                          required
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                      <Row>
                      <Col className="px-md-1" md="5">
                        <FormGroup>
                          <label>Votre Nom :*</label>
                          <Input
                            defaultValue=""
                            placeholder="nom"
                            type="text"
                            value={this.state.nom}
                           onChange={this.handleChangeNom}
                           required
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="5">
                        <FormGroup>
                          <label>Votre Prénom :*</label>
                          <Input
                            defaultValue=""
                            placeholder="prénom"
                            type="text"
                            value={this.state.prenom}
                            onChange={this.handleChangePrenom}
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="px-md-1" md="5">
                        <FormGroup>
                          <label>Age :*</label>
                          <Input
                            defaultValue=""
                            placeholder="Age"
                            type="number"
                            value={this.state.age}
                            onChange={this.handleChangeAge}
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="5">
                        <FormGroup>
                          <label>Rôle :*</label>
                          <Input
                            defaultValue=""
                            placeholder="Rôle"
                            type="text"
                            value={this.state.role}
                            onChange={this.handleChangeRole}
                            required
                          />
                        </FormGroup>
                      </Col>
                      </Row>
                      <Row>
                      <Col className="px-md-1" md="5">
                        <FormGroup>
                          <label>Votre mot de passe :*</label>
                          <Input
                            defaultValue=""
                            placeholder= "mot de passe"
                            type="password"
                            value={this.state.pwd}
                            onChange={this.handleChangePassword}
                            required  
                          />
                        </FormGroup>
                      </Col>
                    </Row>
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

export default UserProfile;
