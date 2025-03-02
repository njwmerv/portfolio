
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
            borderRadius:18,
            backgroundColor:'orange',
            ...buttonStyle
        },
        text:{
            color:'#FFFFFF',
            fontSize:24,
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
