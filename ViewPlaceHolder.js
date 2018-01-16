import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Card } from './';
import * as Color from './styles/Color';
import Styles from './styles';

const RowWithImagePlaceholder = props => {
  const { container, photoView, itemView, itemContainer } = rowStyles;
  return (
    <View style={container}>
      <View style={photoView} />
      <View style={itemContainer}>
        <View style={itemView} />
        <View style={itemView} />
      </View>
    </View>
  );
};

const CardWithImagePlaceholder = props => {
  const { container, photoView, itemView } = cardStyles;
  return (
    <View style={container}>
      <View style={photoView} />
      <View style={itemView} />
      <View style={itemView} />
    </View>
  );
};

const ListPlaceholder = props => {
  return (
    <ScrollView style={Styles.screen}>
      <View style={[Styles.childCenter]}>
        <RowWithImagePlaceholder />
        <RowWithImagePlaceholder />
        <RowWithImagePlaceholder />
        <RowWithImagePlaceholder />
        <RowWithImagePlaceholder />
        <RowWithImagePlaceholder />
      </View>
    </ScrollView>
  );
};

const ListCardPlaceholder = props => {
  return (
    <ScrollView style={Styles.screen}>
      <View style={[Styles.childCenter]}>
        <Card style={{ borderWidth: 0 }}>
          <CardWithImagePlaceholder />
        </Card>
        <Card style={{ borderWidth: 0 }}>
          <CardWithImagePlaceholder />
        </Card>
        <Card style={{ borderWidth: 0 }}>
          <CardWithImagePlaceholder />
        </Card>
      </View>
    </ScrollView>
  );
};

const rowStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  photoView: {
    width: 80,
    height: 80,
    backgroundColor: Color.PLACEHOLDER_GRAY,
  },
  itemView: {
    marginTop: 0,
    marginLeft: 20,
    height: 20,
    width: null,
    backgroundColor: Color.PLACEHOLDER_GRAY,
  },
});

const cardStyles = StyleSheet.create({
  container: {
    margin: 20,
    alignItems: 'stretch',
  },
  photoView: {
    width: Dimensions.get('window').width - 40,
    height: 200,
    alignSelf: 'stretch',
    backgroundColor: Color.PLACEHOLDER_GRAY,
  },
  itemView: {
    marginTop: 20,
    height: 20,
    alignSelf: 'stretch',
    backgroundColor: Color.PLACEHOLDER_GRAY,
  },
});

export { RowWithImagePlaceholder, ListPlaceholder, ListCardPlaceholder };
