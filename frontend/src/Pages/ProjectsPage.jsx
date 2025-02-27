import {useState} from 'react';
import Select from 'react-select';
import PillButton from '../Components/PillButton.jsx';
import PreviewCell from '../Components/PreviewCell.jsx';
import {navBarHeight} from '../Helpers/Constants.js';
import backgroundImage from './pixel-galaxy.png';

export default function ProjectPage(){

	// Instance Variables

	const [projects, setProjects] = useState([]);
	const [filteredProjects, setFilteredProjects] = useState([
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
			description:'Pong recreated in Pygame, where you can 1v1 your friend. Pong recreated in Pygame, where you can 1v1 your friend. Pong recreated in Pygame, where you can 1v1 your friend. Pong recreated in Pygame, where you can 1v1 your friend. Pong recreated in Pygame, where you can 1v1 your friend. Pong recreated in Pygame, where you can 1v1 your friend.'
		},
		{
			link:'https://github.com/njwmerv/juman-ping',
			title:'Juman Ping',
			imageUri:'/juman-ping.png',
			description:'2D platformer game for the PC, where players create and break their own platforms.'
		},
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
		},
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
	]);
	const [tags, setTags] = useState([
		{label:'Python', value:'python'},
		{label:'C++', value:'c++'}
	]);
	const [tagsInput, setTagsInput] = useState('');
	const [selectedTags, setSelectedTags] = useState(null);

	// Styles

	const styles = {
		contentContainer:{
			width:'100vw',
			height:`calc(100dvh - ${navBarHeight}px)`,
			display:'flex',
			overflowX:'hidden',
			overflowY:'scroll',
			flexDirection:'column',
			alignItems:'center',
			scrollbarWidth:'none',
			msOverflowStyle:'none',
			paddingBottom:'20px',
			backgroundImage:`url(${backgroundImage})`
		},
		filtersContainer:{
			gap:'10px',
			margin:'20px',
			display:'flex',
			flexDirection:'column',
			alignItems:'center'
		},
		searchContainer:{
			width:'95vw',
			maxWidth:'500px',
			display:'flex',
			flexDirection:'row'
		},
		searchInput:{
			width:'calc(100% - 110px)',
			fontSize:'24px',
			height:'2em',
			borderRadius:'16px',
			paddingLeft:'10px',
			paddingRight:'10px'
		},
		searchButton:{
			width:'100px',
			marginLeft:'10px'
		},
		tagContainer:{
			width:'100%'
		},
		tagInput:{
			control: (baseStyles, state) => ({
				...baseStyles,
				borderRadius:'16px'
			}),
			multiValue: (baseStyles, state) => ({
				...baseStyles,
				borderRadius:'16px'
			})
		},
		grid:{
			gap:'30px',
			width:'95vw',
			display:'grid',
			justifyContent:'space-evenly',
			gridTemplateColumns:'repeat(auto-fit, minmax(325px, 1fr))',
			gridAutoRows:'auto'
		},
		cell:{
			justifySelf:'center'
		},
		empty:{
			color:'#FFFFFF',
			fontSize:'32px'
		}
	};

	// Render

	return (
		<div style={styles.contentContainer}>
			<div style={styles.filtersContainer}>
				<div style={styles.searchContainer}>
					<input name="search"
					       style={styles.searchInput}
					       placeholder="Search for a project..."
					/>

					<PillButton label="Search"
					            onPress={null}
					            buttonStyle={styles.searchButton}
					/>
				</div>

				<div style={styles.tagContainer}>
					<Select value={selectedTags}
					        options={tags}
					        onChange={setSelectedTags}
					        styles={styles.tagInput}
					        placeholder="Select tags"
					        isMulti={true}
					        isClearable={true}
					        isSearchable={true}
					        inputValue={tagsInput}
					        onInputChange={setTagsInput}
					/>
				</div>
			</div>

			{filteredProjects.length === 0 ?
				<p style={styles.empty}>That doesn't exist... (YET!)</p>
				:
				<div style={styles.grid}>
					{filteredProjects.map((aItem, aIndex) => (
						<PreviewCell title={aItem.title}
						             key={'projects-list-' + aIndex}
						             imageUri={aItem.imageUri}
						             description={aItem.description}
						             projectLink={aItem.link}
						             containerStyle={styles.cell}
						/>
					))}
				</div>
			}
		</div>
	);
}
