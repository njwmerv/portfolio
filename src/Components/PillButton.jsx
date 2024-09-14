import {Pressable, StyleSheet, Text} from 'react-native';

export default function PillButton({label,
                                     onPress,
                                     textStyle,
                                     buttonStyle}){

  // Render

  return (
    <Pressable style={[styles.pressable, buttonStyle]}
               onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable:{
    width:'fit-content',
    margin:'auto',
    padding:10,
    borderRadius:18,
    backgroundColor:'orange'
  },
  text:{
    color:'#FFFFFF',
    fontSize:24
  }
});
