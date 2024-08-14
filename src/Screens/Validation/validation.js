import React, { useState } from "react";
import { View,Text, TextInput, Button } from "react-native";


const Validation=()=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


    return(
        <View>
           <TextInput placeholder="Enter your email" style={{}} />
           <TextInput placeholder="Enter your password" style={{}}/>
           <Button title="Validate" 
           
           
           
           
           
           
           
           />

        </View>
    )
}

export default Validation