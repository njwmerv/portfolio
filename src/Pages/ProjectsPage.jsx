import {StyleSheet, View, Text, useWindowDimensions} from 'react-native';
import {navBarHeight} from '../Helpers/Constants';

export default function ProjectPage(){

  // Instance Variables

  const {height} = useWindowDimensions();

  // Render

  return (
    <View style={[styles.contentContainer, {height:height - navBarHeight}]}>
      <Text>Hi brother...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer:{
    width:'100%',
    flexDirection:'column',
    backgroundColor:'#112D4E'
  }
});
