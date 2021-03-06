import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    Button,
    AsyncStorage
} from 'react-native'
import Menu from '../components/AdminMenu'
export default class mainScreenAdmin extends React.Component {
    showData=async()=>{
        let myArray=await AsyncStorage.getItem('myArray')
        let dat=JSON.parse(myArray)
        alert(dat.email+' '+dat.password+' '+dat.fname+' '+dat.lname)
      }

    state = { 
        dat: [],
        fname: '',
        lname: '',
        designation: '',
        menuItems: [{ "itemText": "View Leave Requests"}, { "itemText": "View Attendance" }, { "itemText": "Manage Employees"}] }
        componentDidMount = () => {
            this.showData()
    
        }
    showData = async () => {
        let myArray = await AsyncStorage.getItem('myArray')
        dat = JSON.parse(myArray)
        this.setState({ fname: dat.fname })
        this.setState({ lname: dat.lname })
        this.setState({ designation: dat.designation })
    }
    renderMenu() {
        return this.state.menuItems.map(item =>
            <Menu key={item.itemText} item={item} />);
    }

    render() {
        return (
            <ImageBackground
                source={require('../assets/bglogo.png')}
                style={styles.container}>


                <View style={styles.overlayContainer}>
                    <View style={styles.top}>
                        <Text style={styles.header}>H O M E</Text>
                        <View style={styles.infoView}>
                            <Text style={styles.info}>Name:</Text>
                            <Text style={styles.info}>   {(this.state.fname)+' '+(this.state.lname)}</Text>
                        </View>
                        <View style={styles.infoView}>
                            <Text style={styles.info}>Designation:</Text>
                            <Text style={styles.info}>  {this.state.designation}</Text>
                        </View>
                    </View>
                    <View style={styles.menuContainer} >
                        {this.renderMenu()}
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flex: 1,
        width: '100%',
        height: '100%',

    },
    overlayContainer: {
        flex: 1,
        backgroundColor: 'rgba(47,163,218,.6)'
    },
    top: {
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        color: '#fff',
        fontSize: 28,
        borderColor: '#fff',
        borderWidth: 2,
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: 'rgba(255,255,255,.1)'

    },
    menuContainer: {
        height: '40%',
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    info: {
        color: '#fff',
        fontSize: 18,



    },
    infoView:{
        flexDirection: 'row',
        flexWrap: 'wrap',

    }

})