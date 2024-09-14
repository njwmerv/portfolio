import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigate} from 'react-router-dom';
import {navBarHeight} from '../Helpers/Constants';

export default function NavBar(){

  // Instance Variables

  const navigate = useNavigate();

  // Render

  return (
    <View style={[styles.navBar, {height:navBarHeight}]}>
      <Pressable onPress={() => navigate('/')}>
        <Text style={[styles.name]}>NJWM</Text>
      </Pressable>

      <View style={styles.pagesLinks}>
        <Pressable onPress={() => navigate('/projects')}>
          <Text style={[styles.link]}>Projects</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar:{
    gap:15,
    width:'100%',
    padding:10,
    paddingLeft:20,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'flex-start',
    backgroundColor:'#3F72AF'
  },
  name:{
    color:'#FFFFFF',
    fontSize:30,
    fontWeight:600
  },
  pagesLinks:{
    gap:20,
    height:'100%',
    alignItems:'center',
    paddingRight:20,
    flexDirection:'row'
  },
  link:{
    color:'#FFFFFF',
    fontSize:20,
    paddingHorizontal:20,
    fontWeight:600,
    borderLeftColor:'#FFFFFF',
    borderLeftWidth:4,
  }
});
