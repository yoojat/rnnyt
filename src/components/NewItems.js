import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Byline from "./Byline";
import AppText from "./AppText";
import Thumbnail from "./Thumbnail";
import { ACCENT_COLORS } from "../styles/global";

export default class NewsItem extends Component {
  render() {
    const {
      style,
      imageUrl,
      title,
      description,
      author,
      date,
      location
    } = this.props;
    const accentColor = ACCENT_COLORS[this.props.index % ACCENT_COLORS.length];
    return (
      <TouchableOpacity style={style}>
        <View>
          <Thumbnail
            url={imageUrl}
            titleText={title}
            accentColor={accentColor}
            style={styles.thumbnail}
          />
          <View style={styles.content}>
            <Byline author={author} date={date} location={location} />
            <AppText>{description}</AppText>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

NewsItem.propTypes = {
  style: View.propTypes.style,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  author: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  location: PropTypes.string
};

const styles = StyleSheet.create({
  thumbnail: {
    marginBottom: 5
  },
  content: {
    paddingHorizontal: 5
  }
});
