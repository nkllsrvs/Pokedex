import { StyleSheet } from "react-native"; 
const COLOR_DEFAULT = "#ff2d2d";
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLOR_DEFAULT,
    },
    containerLogo:{
        flex: 2,
        backgroundColor: COLOR_DEFAULT,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    containerForm:{
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30, 
        paddingStart: "5%",
        paddingEnd: "5%",
    },
    containerHeader:{
        marginBottom: "14%",
        marginTop: "8%",
        paddingStart: "5%",
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: "5%",
        marginBottom: "5%",    
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: "5%",
        fontSize: 1
    },
    text:{
         color: '#a1a1a1',
    },
    button:{
        position: 'absolute',
        backgroundColor: COLOR_DEFAULT,
        borderRadius: 50,
        paddingVertical: 8,
        width: "60%",
        alignSelf: 'center',
        bottom: "15%",
        justifyContent:"center",
        alignItems:"center",
    },
    logo:{
        width: '100%',
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});
export { styles, COLOR_DEFAULT };