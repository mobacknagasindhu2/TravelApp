import { StyleSheet, Text, View,TextInput,Image } from 'react-native'


export default function MySubscribtionScreen() {
  return (
    <View>
   <Text>
    Choose a plan
   </Text>
    <Text>
      To continue, Subscribe to one of th plans
    </Text>
     

     <View>
      <Text>
        Unlimiited 3 months access to 100% prasadam
      </Text>
      
      
      <br/>
      <Text>INR 1000/3 Months</Text>
      <Text>Subscribe</Text> 

     </View>
    </View>
  );
}


const styles = StyleSheet.create({
  
  text : {
  fontSize:30,
  textAlign:"center",
  alignSelf:"flex-start",
    color:"#3B278C",
  margin:7,
  fontWeight:"bold",
  fontFamily:"Fantasy",
  marginBottom:40
 
  }
});

