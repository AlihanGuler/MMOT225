import React, { useContext,Component} from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import { Container, Header, Content, Left, Body, Right, Title, Tab, Tabs, Button } from 'native-base';
import Tab1 from '../screens/TabOne';
import { abs } from 'react-native-reanimated';


const HomeScreen = ({navigation}) => {
    const {logout} = useContext(AuthContext);

        return (
            <Container>
                <Header style={{ backgroundColor: '#4a0c53' }} hasTabs >
                    <Left />
                    
                    <Right />
                </Header>
                <Tabs>
                    <Tab tabStyle={{ backgroundColor: '#4a0c53' }}
                        activeTabStyle={{ backgroundColor: '#bf6c6a' }}
                        heading="İş">
                        <Tab1 />
                    </Tab>                   
                </Tabs>   
                <Button buttonTitle='Logout' onPress={() => logout()} ><Text>Çıkış</Text></Button> 
            </Container>
            
        );
    
}
export default HomeScreen;
