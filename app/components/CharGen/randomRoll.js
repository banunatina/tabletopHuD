
import React,{
    Component,
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native'


export default class RandomRoll extends Component{
    constructor(props){
        super(props);
    }
    _diceRoller() {
      let rolls = []
      while (rolls.length < 4) {
        let roll = Math.ceil(Math.random()*6)
        while (roll === 1) {
          roll = Math.ceil(Math.random()*6)
        }
        rolls.push(roll)
      }
      return rolls.sort().slice(1).reduce(function(pv, cv) { return pv + cv; }, 0)
    }

    resetStat() {
      let {actions, attributes, racial } = this.props
      let defaultStat = attributes.map((atr) => {
            let value = this._diceRoller()
            racial.forEach((bonus) => {
              if(bonus.name === atr) {
                value = value + bonus.mod
          }
        })
            return {name: atr, value: value}
      })
      actions.setStats(defaultStat)
    }
    confirmStat() {
      let {actions, attributes, selectedStats, racial } = this.props
      let confirmedStats = selectedStats.map((stat) => {
        
        return {name: stat.name, value: stat.value}
      })
      actions.setStats(confirmedStats)

    }

    componentDidMount() {
      this.resetStat()
    }
    render(){
        let {attributes, selectedStats, racial} = this.props
        let view = selectedStats.map((atr) => {  
          let operator = null
          if(Math.floor((atr.value-10) / 2) > 0) {
            operator = '+'
          }       
          return (
            <View key={atr.name} style={styles.row}>
              <Text style={styles.atr}>{atr.name}: </Text>
              <Text style={styles.value}>{atr.value}</Text>
              <Text style={styles.mod}>Mod: {operator}{Math.floor((atr.value-10) / 2)} </Text>
            </View>
            )
        })
        return (
            <View style={styles.container}>
              {view}
              <View style={{flexDirection: 'row', marginTop: 15 }}>
                <TouchableOpacity style={styles.confirmBtn}>
                  <Text style={styles.confirmTxt}>CONFIRM</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.resetBtn} onPress={this.resetStat.bind(this)}>
                  <Text style={styles.resetText} >
                    REROLL
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
        )
    }
}
   
let styles = StyleSheet.create({
  container: {
      flex    : 1
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  atr: {
    flex: 1,
    textAlign: 'left',
    alignItems: 'flex-start',
    fontSize: 30,
    marginLeft: 5,
    color: '#b6b6b6'
  },
  confirmBtn: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: 10, 
    marginBottom: 20
  },
  alue: {
    flex: 1,
    fontSize: 20,
    alignItems: 'center',
    color: '#b6b6b6'

  },
  mod: {
    flex: 1,
    alignItems: 'flex-end',
    color: '#b6b6b6'
  }, 
  resetBtn: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 10,
  },
  value: {
    flex: 1,
    fontSize: 20,
    alignItems: 'center',
    color: '#b6b6b6'

  },
  resetText: {
    width: 80,
    height: 20,
    backgroundColor: 'red',
    textAlign: 'center',
    borderRadius: 10,
    color: '#b6b6b6',
    borderColor: '#5A575A'
  },
  confirmTxt: {
    width: 80,
    height: 20,
    backgroundColor: 'green',
    textAlign: 'center',
    borderRadius: 10,
    color: '#b6b6b6',
    borderColor: '#5A575A'
  }
})