import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1A0938',
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        

    },
    logo: {
        flexDirection: 'row',
        marginTop: 15,
       
    },
    imageLogo: {
        height: 60,
        width: 60,
        paddingBottom: 8,
    },
    textLogo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        padding: 8,
    },
    loginSection: {
        alignItems: 'center',
        marginVertical:20,
        
    },
    textTitle: {
        color: '#ED1BA3',
        fontSize: 28,
        fontWeight: 'bold',
        paddingVertical: 20,
        marginBottom: 30,
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
    //     color: 'white',
    //     fontSize: 14,
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
        fontSize: 18,
      },
      textRegister: {
        marginTop: 10,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontSize: 18,
        color: '#A7A7A7',
        // color: 'white'
      }
      
});
export default styles;