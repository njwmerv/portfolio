import PillButton from './PillButton.jsx';
import {openInNewTab} from '../Helpers/Helpers.js';

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

    // Styles
    const styles = {
        container:{
            width:300,
            padding:25,
            display:'flex',
            borderRadius:18,
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'space-between',
            backgroundColor:'#FFFFFFDD',
            ...containerStyle
        },
        content:{
            gap:15,
            width:'100%',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'space-between'
        },
        title:{
            fontSize:32,
            textAlign:'center',
            fontWeight:600,
            marginBottom:10,
            ...titleStyle
        },
        image:{
            width:250,
            height:250,
            borderRadius:18,
            alignSelf:'center',
            ...imageStyle
        },
        description:{
            width:'100%',
            fontSize:16,
            marginVertical:10,
            ...descriptionStyle
        },
        button:{
            margin:0,
            marginTop:20
        }
    };


    // Render

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <p style={styles.title}>{title}</p>

                <img style={styles.image}
                     src={imageUri}
                />

                <div style={styles.description}>{description}</div>
            </div>

            {projectLink ?
                <PillButton buttonStyle={styles.button}
                            label={buttonText}
                            onPress={() => openInNewTab(projectLink)}
                />
                :
                null
            }
        </div>
    );
}
