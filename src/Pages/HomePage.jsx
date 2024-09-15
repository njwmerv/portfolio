import {Image, Text, StyleSheet, View, Pressable, useWindowDimensions} from 'react-native';
// import PillButton from '../Components/PillButton';
import PreviewCell from '../Components/PreviewCell';
// import {useNavigate} from 'react-router-dom';
import {navBarHeight} from '../Helpers/Constants';
import {openInNewTab} from '../Helpers/Helpers';
import backgroundImage from './pixel-galaxy.png';

export default function HomePage(){

  // Instance Variables

  const {width, height} = useWindowDimensions();

  // const navigate = useNavigate();

  const projectsList = [
    {
      link:'https://github.com/njwmerv/tictactoe-python',
      title:'Tic-Tac-Toe',
      imageUri:'/tic-tac-toe.png',
      description:'Tic-tac-toe implemented in Python, playable in the command line.'
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

  const experiencesList = [
    {
      title:'UWaterloo',
      imageUri:'/uwaterloo-logo.png',
      description:'Sep 2023 - Today'
    },
    {
      title:'Tuq Inc.',
      imageUri:'/tuq-logo.png',
      description:'May 2024 - Aug 2024'
    }
  ];

  // Render

  return (
    <View style={[styles.contentContainer, {height:height - navBarHeight, backgroundImage:`url(${backgroundImage})`}]}>
      <View style={[styles.contentSection, styles.aboutLeft]}>
        <View style={[styles.profileTextContainer, width < 850 ? {width:width - 60} : {}]}>
          <Text style={[styles.text, styles.profileSubText]}>Hey, I'm</Text>

          <Text style={[styles.text, styles.profileNameText]}>Nicanor Josemaria Montoya</Text>

          <Text style={[styles.text, styles.profileSubText]}>Developer | Student</Text>

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
        </View>
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

        {/*<PillButton label="See More"*/}
        {/*            onPress={() => navigate('/projects')}*/}
        {/*            buttonStyle={styles.seeMore}*/}
        {/*/>*/}
      </View>

      <View style={[styles.contentSection, styles.experience]}>
        <Text style={[styles.text, styles.headerText]}>Experience</Text>

        <Text style={[styles.text]}>Here's a quick timeline of my career <b>so far</b>.</Text>

        <View style={styles.projectsList}>
          {experiencesList.map((aItem, aIndex) => (
            <PreviewCell title={aItem.title}
                         key={'experiences-list-' + aIndex}
                         imageUri={aItem.imageUri}
                         description={aItem.description}
                         descriptionStyle={styles.experienceDescription}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text:{
    color:'#FFFFFF',
    fontSize:24,
    textAlign:'center',
    marginBottom:10,
  },
  headerText:{
    fontSize:36,
  },
  aboutLeft:{
    gap:20,
    height:'100%',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center',
  },
  profileTextContainer:{
    padding:30,
    alignItems:'center',
    borderRadius:64,
    flexDirection:'column',
    backgroundColor:'#3F72AF60'
  },
  profileNameText:{
    fontSize:60
  },
  profileSubText:{
    fontSize:40
  },
  linksContainer:{
    gap:20,
    width:'100%',
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-evenly',
  },
  link:{
    width:72,
    height:72
  },
  contentContainer:{
    width:'100%',
    overflowX:'hidden',
    overflowY:'scroll',
    flexDirection:'column'
  },
  contentSection:{
    width:'100%',
    height:'fit-content',
    minHeight:'100%',
    marginBottom:20
  },
  projectsList:{
    gap:20,
    width:'fit-content',
    margin:'auto',
    flexWrap:'wrap',
    flexDirection:'row',
    justifyContent:'center'
  },
  seeMore:{
    marginTop:20
  },
  experience:{
    marginBottom:0
  },
  experienceDescription:{
    height:'fit-content',
    fontSize:24,
    textAlign:'center',
    fontWeight:600,
  }
});
