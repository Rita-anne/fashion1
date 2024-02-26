import { StyleSheet, Text, View, ScrollView,ImageBackground} from "react-native";
export default function Stock({product,cost,clothe}) {
    return(
        
<View style={{backgroundColor:'blue',flexDirection: 'column' }}> 
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }} >
    <ImageBackground style={{width:150, height:200,}} source={{uri:clothe}}>
    <Text style={{color:'white',backgroundColor:'#f9be02',width:80,borderRadius:10,textAlign:'center'}} >
    #best seller
    </Text>
    </ImageBackground>
    </View>
    <View>
<Text>
    {product}
</Text>
<Text>
    {cost}
</Text>

</View>

</View>

    )
}

const styles=StyleSheet.create({
    
})
