import React from 'react';
import {
  Text, View, Platform, TouchableOpacity, StyleSheet,
  Button, TextInput, ActivityIndicator
} from 'react-native';
import { Constants } from "expo";
import { StackNavigator } from 'react-navigation';
import swapiFacade from './facades/swapiFacade';

const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)

class RandomPerson extends React.Component {
  static navigationOptions = { title: "Random Person" }
  constructor() {
    super();
    this.state = {
      rngPerson: { name: "Waiting..." },
    };
  }

  componentWillMount() {
    this.setState({
      interval:
        this.getRandomAtInterval(3000)
    })
  }

  componentWillUnmount() {
    if (this.state.interval) clearInterval(this.state.interval);
  }

  getRandomAtInterval = (waitInms) => {
    return setInterval(async () => {
      let rngPerson = await swapiFacade.getRandomPerson();
      this.setState({ rngPerson });
    }, waitInms)
  }


  render() {
    return (
      <View style={{ margin: 10 }}>
        <Text>{"Random person:\n" + JSON.stringify(this.state.rngPerson.name)}</Text>
      </View>
    );
  }
}

class FetchPerson extends React.Component {
  static navigationOptions = { title: "Get Person by id" }
  constructor() {
    super();
    this.state = {
      person: {},
      id: ''
    }
  }

  getPersonId = async (id) => {
    const person = await swapiFacade.getPerson(id);
    this.setState({ person });
  }

  componentDidMount() { }
  render() {
    return (
      <View style={{ margin: 10 }}>
        <Text >Enter an ID you want to lookup</Text>
        <TextInput
          style={{ height: 40, borderColor: 'black', borderWidth: 1 }}
          placeholder="ID"
          keyboardType='numeric'
          onChangeText={(id) => this.setState({ id })}
          value={this.state.id}
        />
        <Button
          onPress={() => this.getPersonId(this.state.id)}
          title="Get ID"
          color="#841584"
          accessibilityLabel="Get info about the entered ID"
        />
        <Text >{JSON.stringify(this.state.person.name)}</Text>
      </View>
    )
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Using async/await in Apps' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ margin: 10 }}>
        <Text>Using the swapi.co API, fetch and async/await</Text>
        <Touchable onPress={() => navigate('randomperson')} title="Random Person" />
        <Touchable onPress={() => navigate('fetchperson')} title="Get person by id" />
      </View>
    )
  }
}

export default App = () => (
  <View style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight, flex: 1 }}>
    <RouteStack />
  </View>
)

const RouteStack = StackNavigator({
  Home: { screen: HomeScreen },
  randomperson: { screen: RandomPerson },
  fetchperson: { screen: FetchPerson },
});

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
})