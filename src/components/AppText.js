import React from "react";
import { Text } from "react-native";
import { COMMON_STYLES } from "../styles/global";
import PropTypes from "prop-types"; // ES6

const AppText = ({ children, style, ...rest }) => (
  <Text style={[COMMON_STYLES.text, style]} {...rest}>
    {children}
  </Text>
);

AppText.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node
};

export default AppText;
