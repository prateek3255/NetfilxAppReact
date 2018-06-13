import React, { Component } from "react";
import { Container,Content,Button, Right,Icon } from "native-base";
import {Image,View,TouchableWithoutFeedback,Text} from "react-native";
import styles from "./styles";
import WhiteHeader from "../Headers/WhiteHeader";
import Benifit from "./Benifit";

class Step1Content extends Component {
  static navigationOptions={
    header:null
  }

  constructor(props){
    super(props);
    this.state={
        selected:3
    }
  }

  choosePackage(n){
      this.setState({
          selected:n
      })
  }
  render() {
    return (
        <Container>

        <WhiteHeader login={()=>this.props.navigation.navigate("Login")} help={()=>this.props.navigation.navigate("Help")}/>


        <Content contentContainerStyle={styles.contContent}>
           <View style={styles.contentView}>
           <Text>Step 1 of 3</Text>
           <Text style={styles.mainBold}>Choose a plan that's right for you</Text>
           <Text>Downgrade or upgrade at any time</Text>
           <View style={styles.contentEmpty}/>
           <View style={styles.packageView}>
            <TouchableWithoutFeedback onPress={()=>this.choosePackage(1)}>
                <View style={[styles.package,this.state.selected===1?styles.selected:styles.notSelected]}>
                    <Text style={styles.packageText}>Basic</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>this.choosePackage(2)}>
                <View style={[styles.package,this.state.selected===2?styles.selected:styles.notSelected]}>
                    <Text style={styles.packageText}>Standard</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>this.choosePackage(3)}>
                <View style={[styles.package,this.state.selected===3?styles.selected:styles.notSelected]}>
                    <Text style={styles.packageText}>Premium</Text>
                </View>
            </TouchableWithoutFeedback>
           </View>
           
                <Text style={styles.centerText}>Monthly price after free month ends on 07/07/2018</Text>
                <View style={styles.contentEmpty}/>
                <Benifit icon={false} first="Rs. 500" second="Rs. 650" third="Rs. 800" selected={this.state.selected}/>
                <View style={styles.contentEmpty}/>
                <Text style={styles.centerText}>HD available</Text>
                <View style={styles.contentEmpty}/>
                <Benifit icon={true} first="cross" second="check" third="check" selected={this.state.selected}/>
                <View style={styles.contentEmpty}/>
                <Text style={styles.centerText}> Ultra HD available</Text>
                <View style={styles.contentEmpty}/>
                <Benifit icon={true} first="cross" second="cross" third="check" selected={this.state.selected}/>
                <View style={styles.contentEmpty}/>
                <Text style={styles.centerText}> Screens you can watch at the same time</Text>
                <View style={styles.contentEmpty}/>
                <Benifit icon={false} first="1" second="3" third="5" selected={this.state.selected}/>
                <View style={styles.contentEmpty}/>
                <Text style={styles.centerText}>Cancel at any time and first month free</Text>
                <View style={styles.contentEmpty}/>
                <Benifit icon={true} first="check" second="check" third="check" selected={this.state.selected}/>
                <View style={styles.contentEmpty}/>
                <Button style={styles.contentButton} onPress={()=>this.props.navigation.navigate("Step2Main",{plan:this.state.selected})}>
                <Text style={styles.mainButtonText}>Continue</Text>
            </Button>
           </View>
           
         
        </Content>
      </Container>
    );
  }
}
export default Step1Content;
