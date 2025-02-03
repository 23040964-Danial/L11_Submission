import React,{useState} from 'react';
import { StatusBar, View, Button, Text, TextInput, Alert } from 'react-native';

const Add = ({navigation, route}) => {
    const[name,setName] = useState("");

    return (
        <View>
            <StatusBar/>
            <Text>Name:</Text>
            <TextInput style={{borderWidth:1}} onChangeText={(text)=>setName(text)}/>
            <Button title='Submit'
                    onPress={()=>{
                        let mydata = JSON.parse(route.params.datastr);
                        let item = {name:name};
                        mydata.push(item);
                        fetch('https://46cd9aa176be434ab0857c319dbaaa7a.api.mockbin.io/',
                            {method: 'POST',
                                headers: {
                                    "Content-Type": "application/json",
                                    "Authorization": "46cd9aa176be434ab0857c319dbaaa7a"
                                },
                                body: JSON.stringify(mydata)
                            }
                        )
                            .then((response) => {
                                navigation.navigate('Home');
                            })

                    }
                    }
            />
        </View>
    );
};

export default Add;
