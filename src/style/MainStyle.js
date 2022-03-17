import { StyleSheet } from "react-native"; 
const COLORS = {
    default: "#d60909",
    danger: "#ecb0e1",
    success: "#00a878",
    warning: "#f3c178",
    info: "#3c91e6",
    black: "#000",
    white: "#fff",
    gray: "#ccc",
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.default,
    },
    containerLogo:{
        flex: 2,
        backgroundColor: COLORS.default,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    containerForm:{
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30, 
        paddingStart: "5%",
        paddingEnd: "3%",
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
        marginTop: 10,
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        fontSize: 18,
        width: "100%",
        paddingLeft: "5%",
        borderBottomColor: COLORS.gray,
    },
    text:{
         color: '#a1a1a1',
         paddingLeft: 10,
         paddingRight: 10,
    },
    button:{
        position: 'absolute',
        backgroundColor: COLORS.default,
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
    },
    containerColumn:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'nowrap',
        margin: "15%",
    },
    containerRow:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    smallText:{
        fontSize: 12,
        color: '#a1a1a1',
    },
    inputArea:{
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
    },
    icon:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
    }
});
export { styles, COLORS };