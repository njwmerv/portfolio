import {View, Text, Image, StyleSheet} from 'react-native';
import PillButton from "@/components/PillButton";

export default function PreviewCell({title,
                                     imageUri,
                                     imageStyle,
                                     titleStyle,
                                     description,
                                     containerStyle,
                                     descriptionStyle}){

    // Render

    return (
      <View style={[styles.container, containerStyle]}>
          <Text style={[styles.title, titleStyle]}>{title}</Text>

          <Image style={[styles.image, imageStyle]}
                 source={{uri:imageUri}}
          />

          <Text style={[styles.description, descriptionStyle]}>{description}</Text>

          <PillButton label="Go to Project"
                      onPress={() => null}
          />
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:300,
        padding:25,
        alignItems:'center',
        marginRight:20,
        borderRadius:18,
        backgroundColor:'#FFFFFF',
    },
    title:{
        fontSize:32,
        marginBottom:10
    },
    image:{
        width:250,
        height:250,
        borderRadius:18,
        backgroundColor:'#999999',
    },
    description:{
        width:'100%',
        height:96,
        fontSize:16,
        marginVertical:10,
    }
});
