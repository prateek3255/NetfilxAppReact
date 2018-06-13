import React, { Component } from "react";
import { Container,Content,Button, Right,Icon, Input,Form,Item,Label } from "native-base";
import {Image,View,TouchableWithoutFeedback,Text} from "react-native";
import styles from "./styles";
import WhiteHeader from "../Headers/WhiteHeader";
import firebase from 'react-native-firebase';

class Step2Content extends Component {
  static navigationOptions={
    header:null
  }

  constructor(props){
    super(props);
    this.state = {
        email:"",
        password:"",
        error:"Enter email and password"
      };
    
  }

  validatePassword=(password)=>{
      if (this.state.password.length < 8){
          this.state.error="Password shouuld be minimum 8 characters long"; 
      }
      else{
          this.state.error="";
      }
      this.setState({password:password});
  }
  validateEmail=(email)=>{
      if (!this.state.email.includes('@')){
          this.state.error="Email should contain @"
      }
      else{
          this.state.error=""
      }
      this.setState({email:email}); 
      
  }
  createAccount=()=>{
      if(this.state.error=="" && this.state.password.length > 0 && this.state.email.length > 0){
    firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        this.props.navigation.navigate("Step3Main",{uid:u.user._user.uid,plan:this.props.navigation.state.params.plan})
      })
      .catch(err =>{
          this.setState({
                 error : err.message
          })
      })
    }
  }

  componentDidMount() {
  }
  render() {
    return (
        <Container>

        <WhiteHeader login={()=>this.props.navigation.navigate("Login")} help={()=>this.props.navigation.navigate("Help")}/>


        <Content contentContainerStyle={styles.cont2Content}>
           <View style={styles.content2View}>
           <Text>Step 2 of 3</Text>
           <View style={styles.contentEmpty}/>
           <Text style={styles.mainBold}>Sign up to start your free month.</Text>
           <View style={styles.contentEmpty}/>
           <Text>Just two more steps and you are finished!</Text>
           <Text>We hate paperwork, too.</Text>
           <View style={styles.contentEmpty}/>
           <Text style={styles.bold}>Create your account</Text>
           <View style={styles.contentEmpty}/>
           <Form>
            <Item regular>
            <Input placeholder="Email" keyboardType="email-address" onChangeText={(email)=>{ this.validateEmail(email)}}/>
            </Item>
            <Item regular>
            <Input placeholder="Password" secureTextEntry onChangeText={(password)=>{this.validatePassword(password)}}/>
            </Item>
            </Form>
            <Text style={styles.errorText}>{this.state.error}</Text>
            <View style={styles.contentEmpty}/>
            <Button style={styles.contentButton} onPress={this.createAccount}>
                <Text style={styles.mainButtonText}>Continue</Text>
            </Button>
           </View>
           
         
        </Content>
      </Container>
    );
  }
}
export default Step2Content;
