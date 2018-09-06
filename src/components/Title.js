import React from "react";
import PropTypes from "prop-types"; // ES6
import { StyleSheet, Text } from "react-native";
import AppText from "./AppText";
import { BG_COLOR } from "../styles/global";
i;

const Title = ({ style, ...rest }) => (
  <AppText style={[styles.title, style]}>{childeren}</AppText>
);

Title.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "HelveticaNeue-CondensedBold",
    fontSize: 18,
    color: globalStyles.HEADER_TEXT_COLOR,
    backgroundColor: `${BG_COLOR}99`
  }
});

export default Title;
