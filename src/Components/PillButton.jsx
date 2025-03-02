
export default function PillButton({label,
                                    onPress,
                                    textStyle,
                                    buttonStyle}
    ){

    // Styles
    const styles = {
        pressable:{
            width:'fit-content',
            cursor:'pointer',
            margin:'auto',
            padding:10,
            borderWidth:2,
            borderColor:'#162952',
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
                onClick={onPress}>
            <p style={styles.text}>{label}</p>
        </button>
    );
}
