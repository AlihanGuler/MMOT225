import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
const LoginScreen = ({navigation}) => {
  const {login} = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
      
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Mail Adresi"
       
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Şifre"
        secureTextEntry={true}
      />

<View style={styles.container}>
     
      <FormButton
        buttonTitle="Giriş Yap"
        onPress={() => login(email, password)}
      />
      
    </View>
      

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>
          Hesap Oluşturmak İçin Tıklayın
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e4605d',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#53055e',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#53055e',
    fontFamily: 'Lato-Regular',
  },
});