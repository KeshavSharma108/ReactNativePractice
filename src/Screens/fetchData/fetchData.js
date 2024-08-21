import React, { useState, useEffect } from "react";
import { View, FlatList, Text } from "react-native";

function FetchData() {
  const [api, setApi] = useState([]);

  const getAPIHouse = async () => {
    
    let results = await fetch("https://jsonplaceholder.typicode.com/users");
    results = await results.json();
    setApi(results);
    console.table(results);
  };
  useEffect(() => {
    getAPIHouse();
  }, []);

  const renderItem = ({item}) => {
   // console.log('data',item.name)
    return (
      <View style={{flexDirection:'row'}}>
        <View>
          <Text>Name</Text>
           <Text> {item.name} </Text>
           </View>
       
           <View>
          <Text>City</Text>
           <Text> {item.address.city} </Text>
           </View>
      </View>
    );
  };
  return (
    <View style={{flex:1}}>
      <FlatList data={api} renderItem={renderItem} />
    </View>
  );
}

export default FetchData;
