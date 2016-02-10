'use strict'

import React, { Component, View, Text, StyleSheet, ListView, TouchableOpacity } from 'react-native'

export default class ClassList extends Component {

  _selectRow(cls) {
    this.selected = cls
  }

  _renderRow(row) {
    let selected = 'Ranger'
    if (row.name ===  selected) {
      row = (<View style={styles.selectedRow}>
              <Text style={styles.rows}>{row.name}</Text>
              <Text style={styles.selectedText}>{row.description}</Text>
              <Text>Roles: {row.role}</Text>
              <Text>Primary Stat: {row.keyatr}</Text>
            </View>
            )
    } else {
      row = (
        <TouchableOpacity onPress={(e) => {
          selected= row.props.children.key

        }
        }>
        <Text key={row.name} style={styles.rows}>{row.name}</Text>
        </TouchableOpacity>
        )
    }
    return (
      <View>
       {row}
      </View>
    ) 
  }
  render() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let classes = [{name: 'Fighter', description: "I FIGHT SHIT", keyatr: "Str"}, 
          {name: 'Ranger', description: "A ranger often accepts the role of protector, aiding those who live in or travel through the woods. In addition, a ranger carries grudges against certain types of creatures and looks for opportunities to find and destroy them. He may adventure for all the reasons that a fighter does.", role:"Ranged or Melee Combat", keyatr: "Dex"},
          {name: 'Cleric', description: "I shoot shit", keyatr: "Wis"},
          {name: 'Rogue', description: "I shoot shit", keyatr: "Dex"},
          {name: 'Wizard', description: "I shoot shit", keyatr: "Int"},
          {name: 'Sorcerer', description: "I shoot shit", keyatr: "Int"},
          {name: 'Monk', description: "I shoot shit", keyatr: "Dex"},
          {name: 'Druid', description: "I shoot shit", keyatr: "Wis"},
          {name: 'Bard', description: "I shoot shit", keyatr: "Cha"},
          {name: 'Paladin', description: "I shoot shit", keyatr: "Str"}]
    let state = {
      dataSource: ds.cloneWithRows(classes),
      selected: 'Ranger'
    }
    return (
     <ListView
      dataSource={state.dataSource}
      renderRow={this._renderRow}
      renderSeparator={(section, row) => <View key={`${row}`} style={styles.separator} />}
    />
      )
  }
}
let styles = StyleSheet.create({
  
  title: {
    paddingTop: 24,
    padding: 10,
    fontSize: 20,
  },
  selectedRow: {
    backgroundColor: '#b6b6b6'
  },
  selectedText: {
    color: '#747274'
  },
  rows: {
    fontSize: 25,
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#747274',
    justifyContent: 'center',
    color: "#b6b6b6",
    alignItems: 'center',
    padding: 6
  },
  separator: {
    height: 1,
    backgroundColor: "#5A575A"
  },
})
