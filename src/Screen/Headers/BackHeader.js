import React, {Component} from 'react';
import {StyleSheet, Platform} from 'react-native';
import {Header} from 'react-native-elements';

import Logo from '../../widgets/Logo';
import SearchIcon from '../../widgets/SearchIcon';
import BackIcon from '../../widgets/BackIcon';

import colors from '../../config/colors';

export default class BackHeader extends Component {
  render() {
    return (
      <Header
        backgroundColor={colors.headerColor}
        containerStyle={styles.header_container}
        leftComponent={<BackIcon {...this.props} />}
        centerComponent={<Logo {...this.props} />}
        rightComponent={<SearchIcon {...this.props} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  header_container: {
    marginTop: Platform.OS === 'ios' ? 0 : -24,
  },
});
