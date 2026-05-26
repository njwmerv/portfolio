import {useEffect, useState} from 'react';
import Select from 'react-select';
import PreviewCell from '../Components/PreviewCell.jsx';
import {navBarHeight} from '../Helpers/Constants.js';
import backgroundImage from './pixel-galaxy.png';
import {PROJECTS, TAGS} from '../Utility/projects.js';

export default function ProjectPage(){

	// Instance Variables

	const [searchString, setSearchString] = useState('');
	const [filteredProjects, setFilteredProjects] = useState([]);
	const [tagsInput, setTagsInput] = useState('');
	const [selectedTags, setSelectedTags] = useState(null);

	// Effects

	useEffect(() => {
		if(!searchString && !selectedTags){
			setFilteredProjects(PROJECTS);
			return;
		}
		let filtered = [...PROJECTS];
		if(searchString){
			const regex = new RegExp(searchString, 'i');
			filtered = PROJECTS.filter((aProject) => aProject.name.match(regex));
		}
		if(selectedTags){
			const selected = selectedTags.map((aSelection) => aSelection.value);
			filtered = filtered.filter((aProject) => selected.every((tag) => aProject.tags.includes(tag)));
		}
		setFilteredProjects(filtered);
	}, [searchString, selectedTags]);

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
			width:'100%',
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
			control: (baseStyles) => ({
				...baseStyles,
				borderRadius:'16px'
			}),
			multiValue: (baseStyles) => ({
				...baseStyles,
				borderRadius:'16px'
			})
		},
		grid:{
			gap:'20px',
			width:'95vw',
			display:'grid',
			paddingBottom:'20px',
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
					       value={searchString}
					       onInput={(aEvent) => setSearchString(aEvent.target.value)}
					       placeholder="Search for a project..."
					/>
				</div>

				<div style={styles.tagContainer}>
					<Select value={selectedTags}
					        options={TAGS}
					        onChange={setSelectedTags}
					        styles={styles.tagInput}
					        placeholder="Select tags"
					        isMulti
					        isClearable={true}
					        isSearchable={true}
					        inputValue={tagsInput}
					        onInputChange={setTagsInput}
					/>
				</div>
			</div>

			{filteredProjects.length === 0 ?
				<p style={styles.empty}>That doesn&#39;t exist... (YET!)</p>
				:
				<div style={styles.grid}>
					{filteredProjects.map((aItem, aIndex) => (
						<PreviewCell title={aItem.name}
						             key={'projects-list-' + aIndex}
						             imageUri={aItem.image}
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
