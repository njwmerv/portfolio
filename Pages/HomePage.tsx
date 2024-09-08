import {Image, Text, StyleSheet, View, Pressable, useWindowDimensions} from 'react-native';
import PillButton from "@/components/PillButton";
import PreviewCell from "@/components/PreviewCell";

export default function HomePage({}){

    // Instance Variables

    const {height} = useWindowDimensions();

    const projectsList = [
        {title:'Tic-Tac-Toe', imageUri:'https://i.imgur.com/2LWzlBx.png', description:'Just simple tic-tac-toe implemented in Python, playable in the command line.'},
        {title:'Pong', imageUri:'https://i.imgur.com/hC5SI1R.png', description:'Pong recreated in Pygame, where you can 1v1 your friend.'},
        {title:'Juman Ping', imageUri:'https://i.imgur.com/8EQd0dK.png', description:'2D platformer game for the PC, where players create and break their own platforms.'}
    ];

    const navBarHeight = 75;

    // Methods

    const openInNewTab = (aUrl) => {
        window.open(aUrl, '_blank', 'noreferrer');
    };

    // Render

    return (
        <View style={styles.mainContainer}>
            <View style={[styles.navBar, {height:navBarHeight}]}>
                <View style={styles.linksContainer}>
                    <Pressable style={styles.link}
                               onPress={() => openInNewTab('https://github.com/njwmerv')}>
                        <Image style={styles.link}
                               source={{uri: 'https://i.imgur.com/6VekIvR.png'}}
                        />
                    </Pressable>

                    <Pressable style={styles.link}
                               onPress={() => openInNewTab('https://www.linkedin.com/in/nicanor-montoya-63029a255/')}>
                        <Image style={styles.link}
                               source={{uri: 'https://i.imgur.com/CdaktLT.png'}}
                        />
                    </Pressable>

                    <Pressable style={styles.link}
                               onPress={() => openInNewTab('mailto:montoya.nicanor04@gmail.com')}>
                        <Image style={styles.link}
                               source={{uri: 'https://i.imgur.com/Kjti7Je.png'}}
                        />
                    </Pressable>
                </View>

                <View style={styles.sectionLinksContainer}>
                    <Text>hi</Text>
                </View>
            </View>

            <View style={[styles.contentContainer, {height:height - navBarHeight}]}>
                <View style={[styles.contentSection, {height:height - navBarHeight - 20}]}>
                    <Text style={[styles.text, styles.headerText]}>About Me</Text>

                    <Text style={[styles.text]}>Lorem Ipsum dolor sit amet consectetur.</Text>

                    <Image style={styles.profilePicture}
                           source={{uri:'https://i.imgur.com/41v9YF4.jpeg'}}
                    />

                    <View style={styles.profileTextContainer}>
                        <Text style={[styles.text, styles.headerText, styles.profileText]}>Nicanor Montoya</Text>
                        <Text style={[styles.text, styles.profileText]}>Developer</Text>
                    </View>
                </View>

                <View style={[styles.contentSection, {height:height - navBarHeight}]}>
                    <Text style={[styles.text, styles.headerText]}>Projects</Text>

                    <Text style={[styles.text]}>Here's some of the stuff that I worked on.</Text>

                    <View style={styles.projectsList}>
                        {projectsList.map((aItem, aIndex) => (
                            <PreviewCell title={aItem.title}
                                         key={'projects-list-' + aIndex}
                                         imageUri={aItem.imageUri}
                                         description={aItem.description}
                            />
                        ))}
                    </View>

                    <PillButton label="See More"
                                onPress={() => null}
                                buttonStyle={styles.seeMore}
                    />
                </View>

                <View style={[styles.contentSection, {height:height - navBarHeight - 20}]}>
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
        flexDirection:'column',
        backgroundColor:'#112D4E'
    },
    navBar:{
        gap:15,
        width:'100%',
        padding:10,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
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
        gap:15,
        height:40,
        marginLeft:15,
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
        padding:20,
        overflowY:'scroll'
    },
    contentSection:{
        width:'100%',
        height:'100%'
    },
    projectsList:{
        margin:'auto',
        flexDirection:'row',
    },
    seeMore:{
        marginTop:20
    }
});
