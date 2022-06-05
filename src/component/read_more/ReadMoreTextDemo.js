/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ReadMore from 'react-native-read-more-text';

export const ReadMoreTextDemo = () => {
  const handleTextReady = () => {
    console.log('ready!');
  };

  const _renderRevealedFooter = handlePress => {
    return (
      <Text style={{color: 'blue', marginTop: 5}} onPress={handlePress}>
        Show less
      </Text>
    );
  };

  const _renderTruncatedFooter = handlePress => {
    return (
      <Text style={{color: 'blue', marginTop: 5}} onPress={handlePress}>
        Read more
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Read more text</Text>
      <View style={styles.card}>
        <ReadMore
          numberOfLines={2}
          onReady={handleTextReady}
          renderRevealedFooter={_renderRevealedFooter}
          renderTruncatedFooter={_renderTruncatedFooter}>
          <Text style={styles.cardText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </Text>
        </ReadMore>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: 'rgba(0,0,0,0.05)',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  card: {
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 3,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1,
    backgroundColor: '#fff',
    marginTop: 40,
  },
  cardText: {
    fontSize: 14,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
  },
});
