import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native-paper';
import { StyleSheet, Text, View , ScrollView} from 'react-native';
import Src from '../fashion1/Src'
import Titles from './Src1';
import Stock from './Src2';
export default function App() {
  const fash =[
  {type:"shirts",
    price:"$10.00",
    clothes:"https://tse3.mm.bing.net/th?id=OIP.moiDVFf7BmXg6m2PyOPZQQHaFj&pid=Api&P=0&h=220"
  },
  {type:"GJ Jeans",
    price:"$46.oo",
    clothes:"https://tse1.mm.bing.net/th?id=OIP.P0aeKsGxou-OsSsZCPtLewHaFj&pid=Api&P=0&h=220"
  },
  {type:"skirts",
    price:"$48.00",
    clothes:"https://tse1.mm.bing.net/th?id=OIP.U8GEJEhTuDOHZYNg5RJ7pgHaDn&pid=Api&P=0&h=220"
  },
  

  ];
  const stock =[
  {
    product:"White T-shirt",
    cost:"$40",
    clothe:"https://tse1.mm.bing.net/th?id=OIP.U8GEJEhTuDOHZYNg5RJ7pgHaDn&pid=Api&P=0&h=220",
  },
   {
    product:"red T-shirt",
    cost:"$40",
    clothe:"https://tse1.mm.bing.net/th?id=OIP.U8GEJEhTuDOHZYNg5RJ7pgHaDn&pid=Api&P=0&h=220",
  },
   {
    product:"black T-shirt",
    cost:"$40",
    clothe:"https://tse1.mm.bing.net/th?id=OIP.U8GEJEhTuDOHZYNg5RJ7pgHaDn&pid=Api&P=0&h=220",
  },
   {
    product:"purple T-shirt",
    cost:"$40",
    clothe:"https://tse1.mm.bing.net/th?id=OIP.U8GEJEhTuDOHZYNg5RJ7pgHaDn&pid=Api&P=0&h=220",

  },
   {
    product:"pink T-shirt",
    cost:"$40",
    clothe:"https://tse1.mm.bing.net/th?id=OIP.U8GEJEhTuDOHZYNg5RJ7pgHaDn&pid=Api&P=0&h=220",
  },
  {
    product:"pink T-shirt",
    cost:"$40",
    clothe:"https://tse1.mm.bing.net/th?id=OIP.U8GEJEhTuDOHZYNg5RJ7pgHaDn&pid=Api&P=0&h=220",
  },
  {
    product:"pink T-shirt",
    cost:"$40",
    clothe:"https://tse1.mm.bing.net/th?id=OIP.U8GEJEhTuDOHZYNg5RJ7pgHaDn&pid=Api&P=0&h=220",
  },
  {
    product:"pink T-shirt",
    cost:"$40",
    clothe:"https://tse1.mm.bing.net/th?id=OIP.U8GEJEhTuDOHZYNg5RJ7pgHaDn&pid=Api&P=0&h=220",
  },
  {
    product:"pink T-shirt",
    cost:"$40",
    clothe:"https://tse1.mm.bing.net/th?id=OIP.U8GEJEhTuDOHZYNg5RJ7pgHaDn&pid=Api&P=0&h=220",
  },
  

  ]
    
  
  return (
    <View>
        <Text style={{fontSize:30,marginHorizontal:150,marginTop:50,}}>
                Search
            </Text>
            <TextInput style={{margin:10,backgroundColor:'#e6ffff',}} label='' mode='outlined' placeholder='search...'></TextInput>
   
    <View>
      
      <ScrollView horizontal={true} >
        <Text style={{fontSize:20,marginHorizontal:40,borderRadius:15,width:70,textAlign:'center',backgroundColor:'#f9be02'}} >
          All
        </Text>
      {/* <Titles name='All'/> */}
      <Titles name='Man'/>
      <Titles name='Women'/>
      <Titles name='dress'/>
      <Titles name='Baby'/>

      </ScrollView>
    
      <ScrollView horizontal={true}>
{fash.map((item,index)=>{
return(

  <View key={index}>
<Src type={item.type} price={item.price} clothes={item.clothes}  />
  </View>
)}
)}
</ScrollView>
</View>
<Text style={{fontSize:20,fontWeight:500,top:10,margin:10}}>
  Product Results (43)
</Text>

  {stock.map((item,index)=>{
    return(<View key={index}>
      <Stock product={item.product} clothe={item.clothe} cost={item.cost}/>
    </View>)
    
  })}

    </View>
    
  )}
