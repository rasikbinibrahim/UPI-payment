// import React from 'react';
// import {Button, Text, View, Linking} from 'react-native';

// export default function App(){
//   const upiURL = 'upi://pay?pa=suyashvashishtha@axl&pn=Suyash%20Vashishtha&mc=0000&mode=02&purpose=00';

//   const upiOpener=()=>{
//     Linking.openURL(upiURL)
//   }
//   return(
//     <View>
//       <Text>This Button open UPI App for our url</Text>
//       <Button title="Open Upi App" onPress={upiOpener}></Button>
//     </View>
//   );
// }

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import RNUpiPayment from 'react-native-upi-payment';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Status: '',
      txnId: '',
    };
  }

  render() {
    that = this;
    function floo() {
      RNUpiPayment.initializePayment(
        {
          vpa: 'someone@somewhere', // or can be john@ybl or mobileNo@upi
          payeeName: 'Payee Name',
          amount: '1',
          transactionRef: 'some-random-id',
        },
        successCallback,
        failureCallback,
      );
    }
    function failureCallback(data) {
      if (data['Status'] == 'SUCCESS') {
        that.setState({Status: 'SUCCESS'});
        that.setState({txnId: data['txnId']});
      } else {
        that.setState({Status: 'FAILURE'});
      }
    }
    function successCallback(data) {
      //nothing happened here using Google Pay
    }
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text
          onPress={() => {
            floo();
          }}>
          OPEN
        </Text>
        <Text>{this.state.Status + ' ' + this.state.txnId}</Text>
      </View>
    );
  }
}
