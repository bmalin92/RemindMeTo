import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { selectType, deselectType } from "../actions";

class TypeSelection extends React.Component {
  _selectType = () => {
    this.props.selectType(this.props.title);
  };

  _deselectType = () => {
    this.props.deselectType();
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          style={
            this.props.reminderType === this.props.title
              ? styles.typeSelected
              : styles.typeOption
          }
          onPress={
            this.props.reminderType === this.props.title
              ? this._deselectType.bind(this)
              : this._selectType.bind(this)
          }
        >
          <Text>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  typeOption: {
    backgroundColor: "#1966D210",
    padding: 10,
    borderRadius: 10
  },
  typeSelected: {
    backgroundColor: "#1966D275",
    padding: 10,
    borderRadius: 10
  }
});

function mapStateToProps(state) {
  return {
    reminderType: state.reminderType
  };
}

export default connect(mapStateToProps, { selectType, deselectType })(
  TypeSelection
);
