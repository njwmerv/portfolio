import {useState} from 'react';

export default function PillButton({label,
                                    onPress,
                                    textStyle,
                                    buttonStyle}
){

    // Instance Variables

    const [hovered, setHovered] = useState(false);

    // Helper

    const mouseEnter = () => setHovered(true);

    const mouseLeave = () => setHovered(false);

    // Styles
    const styles = {
        pressable:{
            width:'fit-content',
            cursor:'pointer',
            margin:'auto',
            padding:10,
            borderWidth:2,
            boxShadow:(
                hovered ?
                    '1px 1px 1px 1px #162952'
                    :
                    '3px 3px 0 0 #162952'
            ),
            transform:(
                hovered ?
                    'translate(1px, 1px)'
                    :
                    'none'
            ),
            borderRadius:18,
            backgroundColor:'#2A4B91',
            ...buttonStyle
        },
        text:{
            color:'#FFFFFF',
            fontSize:24,
            fontWeight:600,
            ...textStyle
        }
    };

    // Render

    return (
        <button style={styles.pressable}
                onClick={onPress}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}>
            <p style={styles.text}>{label}</p>
        </button>
    );
}
