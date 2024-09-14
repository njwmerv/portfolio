import {Image, Text, StyleSheet, View, Pressable} from 'react-native';
import PillButton from '../Components/PillButton';
import PreviewCell from '../Components/PreviewCell';
import {openInNewTab} from '../Helpers/Helpers';

export default function HomePage(){

  // Instance Variables

  const projectsList = [
    {
      link:'https://github.com/njwmerv/tictactoe-python',
      title:'Tic-Tac-Toe',
      imageUri:'/tic-tac-toe.png',
      description:'Just simple tic-tac-toe implemented in Python, playable in the command line.'
    },
    {
      link:'https://github.com/njwmerv/pong',
      title:'Pong',
      imageUri:'/pong.png',
      description:'Pong recreated in Pygame, where you can 1v1 your friend.'
    },
    {
      link:'https://github.com/njwmerv/juman-ping',
      title:'Juman Ping',
      imageUri:'/juman-ping.png',
      description:'2D platformer game for the PC, where players create and break their own platforms.'
    }
  ];

  // Render

  return (
    <View style={styles.mainContainer}>
      <View style={styles.navBar}>
        <Image style={styles.profilePicture}
               source={{uri:'/2048me.jpg'}}
        />

        <View style={styles.profileTextContainer}>
          <Text style={[styles.text, styles.headerText, styles.profileText]}>Nicanor Montoya</Text>
          <Text style={[styles.text, styles.profileText]}>Developer</Text>
        </View>

        <View style={styles.linksContainer}>
          <Pressable onPress={() => openInNewTab('https://github.com/njwmerv')}>
            <Image style={styles.link}
                   source={{uri:'/github-logo-2.png'}}
            />
          </Pressable>

          <Pressable onPress={() => openInNewTab('https://www.linkedin.com/in/nicanor-montoya-63029a255/')}>
            <Image style={styles.link}
                   source={{uri:'/linkedin-logo-2.png'}}
            />
          </Pressable>

          <Pressable onPress={() => openInNewTab('mailto:montoya.nicanor04@gmail.com')}>
            <Image style={styles.link}
                   source={{uri:'/email-logo-2.png'}}
            />
          </Pressable>
        </View>

        <View style={styles.sectionLinksContainer}>

        </View>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.contentSection}>
          <Text style={[styles.text, styles.headerText]}>About Me</Text>

          <Text style={[styles.text]}>Lorem Ipsum dolor sit amet consectetur.</Text>
        </View>

        <View style={styles.contentSection}>
          <Text style={[styles.text, styles.headerText]}>Projects</Text>

          <Text style={[styles.text]}>Here's some of the stuff that I worked on.</Text>

          <View style={styles.projectsList}>
            {projectsList.map((aItem, aIndex) => (
              <PreviewCell title={aItem.title}
                           key={'projects-list-' + aIndex}
                           imageUri={aItem.imageUri}
                           description={aItem.description}
                           projectLink={aItem.link}
              />
            ))}
          </View>

          <PillButton label="See More"
                      onPress={() => null}
                      buttonStyle={styles.seeMore}
          />
        </View>

        <View style={[styles.contentSection, {marginBottom:0}]}>
          <Text style={[styles.text, styles.headerText]}>Experience</Text>

          <Text style={[styles.text]}>Lorem Ipsum dolor sit amet consectetur.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text:{
    color:'#FFFFFF',
    fontSize:16
  },
  headerText:{
    fontSize:32,
  },
  mainContainer:{
    width:'100%',
    height:'100%',
    flexDirection:'row',
    backgroundColor:'#112D4E'
  },
  navBar:{
    gap:15,
    flex:1,
    height:'100%',
    padding:10,
    flexDirection:'column',
    backgroundColor:'#3F72AF'
  },
  profilePicture:{
    width:150,
    height:150,
    borderRadius:'50%',
    marginTop:15,
    marginHorizontal:'auto'
  },
  profileTextContainer:{
    alignItems:'center',
    flexDirection:'column'
  },
  profileText:{
    textAlign:'center',
    lineHeight:28
  },
  linksContainer:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  link:{
    width:40,
    height:40
  },
  sectionLinksContainer:{

  },
  contentContainer:{
    flex:7,
    padding:20,
    overflowY:'scroll'
  },
  contentSection:{
    width:'100%',
    height:'100%',
    marginBottom:20
  },
  projectsList:{
    margin:'auto',
    flexDirection:'row',
  },
  seeMore:{
    marginTop:20
  }
});
