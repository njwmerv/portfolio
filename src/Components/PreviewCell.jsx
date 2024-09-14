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
      <Text style={[styles.title, titleStyle]}>{title}</Text>

      <Image style={[styles.image, imageStyle]}
             source={{uri:imageUri}}
      />

      <Text style={[styles.description, descriptionStyle]}>{description}</Text>

      {projectLink ?
        <PillButton label={buttonText}
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
    backgroundColor:'#FFFFFF',
  },
  title:{
    fontSize:32,
    textAlign:'center',
    marginBottom:10
  },
  image:{
    width:250,
    height:250,
    borderRadius:18,
    backgroundColor:'#FFFFFF',
  },
  description:{
    width:'100%',
    height:96,
    fontSize:16,
    marginVertical:10,
  }
});
