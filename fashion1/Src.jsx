import { StyleSheet, Text, View, ScrollView,ImageBackground} from "react-native";
export default function Fash({type,price,clothes}) {
    return(
        <View>
<ImageBackground style={{width:200, height:200, margin:100}} source={{uri:clothes}} >
<Text style={{color:'white'}} >
    #best seller
</Text>
<View style={{height:80,backgroundColor:'rgba(000,000,000,0.5)'}} >
<Text style={{color:'white'}}>
    {type}
</Text>
<Text style={{color:'white'}}>
    {price}
</Text>
</View>
</ImageBackground>
        </View>
    );
}

const styles=StyleSheet.create({
    
})





















