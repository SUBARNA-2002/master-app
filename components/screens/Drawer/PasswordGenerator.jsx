/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, SafeAreaView, Button, TextInput} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import BouncyCheckBox from 'react-native-bouncy-checkbox';
import {ScrollView} from 'react-native-gesture-handler';

const PasswordGenerator = () => {
  const PasswordSchema = Yup.object().shape({
    passwordLength: Yup.number()
      .min(4, 'Password must be at least 4 characters')
      .max(16, 'Password must be at most 16 characters')
      .required('Password length is required'),
  });

  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePassowrdString = length => {
    let characterList = '';
    const upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
    const numberCharacters = '0123456789';
    const symbolCharacters = '!@#$%^&*()_+';
    if (lowerCase) {
      characterList += lowerCaseCharacters;
    }
    if (upperCase) {
      characterList += upperCaseCharacters;
    }
    if (numbers) {
      characterList += numberCharacters;
    }
    if (symbols) {
      characterList += symbolCharacters;
    }
    const passwordResult = createPassword(characterList, length);
    setPassword(passwordResult);
    setIsPassGenerated(true);
  };
  const createPassword = (characters, length) => {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }
    return result;
  };

  const resetPassword = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView>
        <View>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontSize: 30,
              paddingTop: 20,
            }}>
            Password Generater
          </Text>
          <Formik
            initialValues={{passwordLength: ''}}
            validationSchema={PasswordSchema}
            onSubmit={values => {
              generatePassowrdString(values.passwordLength);
            }}>
            {({handleChange, handleBlur, handleSubmit, values, errors}) => (
              <View>
                <Text
                  style={{
                    color: 'black',
                    textAlign: 'center',
                    fontSize: 20,
                    paddingTop: 20,
                  }}>
                  Enter Password Length
                </Text>
                <Text
                  style={{
                    color: 'black',
                    textAlign: 'center',
                    fontSize: 20,
                    paddingTop: 20,
                  }}>
                  {errors.passwordLength}
                </Text>
                <TextInput
                  style={{
                    color: 'black',
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    margin: 20,
                    padding: 10,
                    fontSize: 20,
                  }}
                  onChangeText={handleChange('passwordLength')}
                  onBlur={handleBlur('passwordLength')}
                  value={values.passwordLength}
                  keyboardType="numeric"
                />
                <Button title="Generate Password" onPress={handleSubmit} />
              </View>
            )}
          </Formik>
          <View style={{paddingHorizontal: 10, paddingVertical: 10, gap: 10}}>
            <BouncyCheckBox
              fillColor="black"
              text="Lower Case"
              isChecked={lowerCase}
              onPress={() => setLowerCase(!lowerCase)}
            />
            <BouncyCheckBox
              fillColor="black"
              text="Upper Case"
              isChecked={upperCase}
              onPress={() => setUpperCase(!upperCase)}
            />
            <BouncyCheckBox
              fillColor="black"
              text="Numbers"
              isChecked={numbers}
              onPress={() => setNumbers(!numbers)}
            />
            <BouncyCheckBox
              fillColor="black"
              text="Symbols"
              isChecked={symbols}
              onPress={() => setSymbols(!symbols)}
            />
          </View>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontSize: 20,
              paddingTop: 20,
            }}>
            {isPassGenerated ? `Password: ${password}` : ''}
          </Text>
          <Button title="Reset" onPress={resetPassword} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default PasswordGenerator;
