import React, { useState } from "react";
import { View,Text, TextInput, Button, Alert } from "react-native";


const Validation=()=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;



const validate = ()=>{
if (!emailRegex.test(email)){
Alert.alert('Invalid Email')
return false
}

if(!passwordRegex.test(password)){
    Alert.alert('Invalid Password')
    return false
}
Alert.alert('Success')
return true
}

    return(
        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
           <TextInput  placeholder="Enter your email" style={{width:250,height:50,margin:20,borderWidth:1,paddingHorizontal:10}} value={email} onChangeText={(text)=>setEmail(text)}/>
           <TextInput placeholder="Enter your password" style={{width:250,height:50,margin:20,borderWidth:1,paddingHorizontal:10}} value={password} onChangeText={setPassword}/>
           <Button title="Validate" onPress={validate}/>

        </View>
    )
}

export default Validation