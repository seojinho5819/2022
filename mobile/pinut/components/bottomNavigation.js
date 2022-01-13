import React from 'react'
import { TouchableOpacity,Text,StyleSheet ,View } from "react-native";

const BottomNavigation = () => {
    const num = [1,2,3,4]
    return (
        <View style={styles.view}>
        {
            num.map((num,index) => (
                <TouchableOpacity
                 key={index}
                 style={styles.buttons}
                 >
                    <Text>{num}</Text>
                </TouchableOpacity>)
            )
        }
        </View>
        
    )
     
} 
const styles = StyleSheet.create({
    view : {
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        
    },
    buttons:{
        height: 40,
        width:'25%',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        
    }
 })
export default BottomNavigation