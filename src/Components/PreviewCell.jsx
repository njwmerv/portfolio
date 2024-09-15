import {View, Text, Image, StyleSheet} from 'react-native';
import PillButton from './PillButton';
import {openInNewTab} from '../Helpers/Helpers';

export default function PreviewCell({title,
                                      imageUri,
                                      imageStyle,
                                      titleStyle,
                                      description,
                                      projectLink,
                                      containerStyle,
                                      descriptionStyle,
                                      buttonText = "Go to Project"
  }){

  // Render

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.content}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>

        <Image style={[styles.image, imageStyle]}
               source={{uri:imageUri}}
        />

        <Text style={[styles.description, descriptionStyle]}>{description}</Text>
      </View>

      {projectLink ?
        <PillButton buttonStyle={styles.button}
                    label={buttonText}
                    onPress={() => openInNewTab(projectLink)}
        />
        :
        null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width:300,
    padding:25,
    alignItems:'center',
    borderRadius:18,
    justifyContent:'space-between',
    backgroundColor:'#efedf5',
  },
  title:{
    fontSize:32,
    textAlign:'center',
    fontWeight:600,
    marginBottom:10
  },
  image:{
    width:250,
    height:250,
    borderRadius:18,
  },
  description:{
    width:'100%',
    fontSize:16,
    marginVertical:10,
  },
  button:{
    margin:0
  }
});
