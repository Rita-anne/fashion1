import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native-paper';
import { StyleSheet, Text, View , ScrollView} from 'react-native';
import Src from '../fashion1/Src'
export default function App() {
  const fash =[
    {type:"pants",
    price:"$",
    clothes:"https://tse1.mm.bing.net/th?id=OIP.odOmvkbLK5gBUQujCLdBIwHaKq&pid=Api&P=0&h=220"
  },
  {type:"shirts",
    price:"$",
    clothes:"https://tse1.mm.bing.net/th?id=OIP.odOmvkbLK5gBUQujCLdBIwHaKq&pid=Api&P=0&h=220"
  },
  {type:"skirts",
    price:"$",
    clothes:"https://tse1.mm.bing.net/th?id=OIP.odOmvkbLK5gBUQujCLdBIwHaKq&pid=Api&P=0&h=220"
  },

  ];
    
  
  return (
    // <ScrollView>
      
    // </ScrollView>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <View>
      <ScrollView horizontal>
{fash.map((item,index)=>{
return(
  <View>
<Src type={item.type} price={item.price} clothes={item.clothes}  />
  </View>
)}
)}
</ScrollView>
    </View>
  );
}

// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   backgroundColor: '#fff',
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   // },
// });
