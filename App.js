import * as React from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  Modal,
  Button,
  Alert,
} from 'react-native';

function showAlert(okCallback) {
  Alert.alert(
    'Delete',
    'Confirm delete.',
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Confirm', 
        onPress: okCallback,
        style: 'destructive',
      },
    ],
    {cancelable: false},
  );  
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      modalClicked: 0, 
      alertClicked: 0,
    };
  }
  render() {
    return (
      <React.Fragment>
        <Modal 
          visible={this.state.modalClicked > 0}
          transparent={true}
        >
          <View>
            <Button 
              title='hide'
              onPress={() => {
                this.setState({modalClicked: 0});
              }}
            />
          </View>
        </Modal>
        <View style={styles.container}>
          <Button 
            title='Modal'
            onPress={() => {
              this.setState(state => ({modalClicked: state.modalClicked + 1}));
            }}
          />
          <Text>times modalClicked: {this.state.modalClicked}</Text>
          <Button 
            title='Alert'
            onPress={() => {
              showAlert(() => this.setState({alertClicked: 0}));
              this.setState(state => ({alertClicked: state.alertClicked + 1}));
            }}
          />
          <Text>times alertClicked: {this.state.alertClicked}</Text>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
