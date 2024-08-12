import React, { useState } from "react";
import {View,Text,StyleSheet, TextInput, TouchableOpacity} from 'react-native'


const AddRemove=()=>{
  const [text,setText] = useState('')
const [add,setAdd] = useState([])
  const addItem=()=>{
   setAdd([...add,text])
   setText('')

  }


const removeItem=(id)=>{
setAdd(add.filter(item=> item.id === id))
  
}


return (
    <View style={styles.container}>
       <TextInput style={styles.input} placeholder="AddItem" value={text} onChangeText={(text)=>setText(text)}/>
       <Text>{text}</Text>
       <TouchableOpacity style={styles.addItem} onPress={()=>addItem()}>
        <Text>AddItem</Text>
       </TouchableOpacity>
    {
      add.map((item,id)=>{
        return (
          <View style={{flexDirection:'row', justifyContent:'space-evenly',width:500,margin:20,height:30}}>
            <Text>{item}</Text>
            <TouchableOpacity style={{width:60 , backgroundColor:'red',}} onPress={()=>removeItem(id)}>
              <Text>Remove</Text>
            </TouchableOpacity>
          </View>
        )
      })
    }
    </View>
)
}

export default AddRemove


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center'
  },
  input:{
    width:300,
    height:50,
    borderWidth:1,
    marginTop:20,
    borderRadius:20,
    paddingHorizontal:20
    
  },
  addItem:{
    width:200,
    height:30,
    alignItems:'center',
    backgroundColor:'#33E293',
    justifyContent:'center'
  }
  });