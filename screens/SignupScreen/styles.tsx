import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E2DCED',
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',

    },
    logo: {
        flexDirection: 'row',
        marginTop: 10,
        
       
    },
    imageLogo: {
        height: 70,
        width: 70,
        paddingBottom: 8,
        marginTop: 20,
    },
    textLogo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1A0938',
        padding: 8,
    },
    loginSection: {
        alignItems: 'center',
        marginVertical:20,
        
    },
    textTitle: {
        color: '#1A0938',
        fontSize: 28,
        fontWeight: 'bold',
        paddingVertical: 20,
    },
    input:{
        backgroundColor: '#361E60',
        color: 'white',
        fontSize: 16,
        paddingBottom: 10,
        paddingLeft: 15,
        borderRadius: 40,
        width: 315,
        height: 60,
        
        marginBottom: 10,
        
    },
    // inputPassword: {
    //     backgroundColor: '#361E60',
    //     color: '#A7A7A7',
    //     fontSize: 20,
    //     paddingBottom: 10,
    //     paddingLeft: 15,
    //     borderRadius: 40,
    //     width: 315,
    //     height: 60,
        
    //     marginBottom: 10,
    // },
    buttonLogin: {
        backgroundColor: '#ED1BA3',
        borderRadius: 50,
        height: 70,
        width: 315,
        alignItems: 'center',
        justifyContent: 'center'
      },
      textLogin: {
        color: '#FFFFFF',
        margin: 10,
        fontWeight: 'bold',
        fontSize: 20,
      },
      textRegister: {
        marginTop: 10,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontSize: 20,
        color: 'black'
      }
      
});
export default styles;