import React, {useEffect} from 'react';
import {Formik} from 'formik';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';

import {customLables, colors} from '../../comman';
import {screenName} from '../../comman/constants';
import {ConfirmationCodeModal, UNAInputText} from '../../components';
import {ApplicationContext} from '../../context-api/Context';
import {MainContainer} from '../../hoc';
import {customerLogIn} from '../../utils/rest-apis';
import {styles} from './styles';
import {loginYupValidations} from '../../yup-validations';
import {getAuthTokenDetails} from '../../utils';
import UNALightLogo from '../../comman/images/UNALightLogo.svg';
import {getFcmTokenDetails} from '../../utils/preferences/localStorage';

const Login = props => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = React.useState(false);
  const [token, setToken] = React.useState('');
  const [fcmToken, setFcmToken] = React.useState(null);
  const [isModalVisibleOtp, setModalVisibleOtp] = React.useState(false);
  const {setLoginApiData, setVerificationMobileNo} =
    React.useContext(ApplicationContext);
  const [initialValues, setInitialValues] = React.useState({
    phoneNumber: '',
    password: '',
  });

  const toggleModalOtp = val => {
    setModalVisibleOtp(!isModalVisibleOtp);
    navigation.navigate(screenName.homeScreen);
  };

  const getFcmToken = () => {
    try {
      let fcmToken2 = getFcmTokenDetails().then(value => {
        setFcmToken(value);
      });
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getAuthToken();
    getFcmToken();
  }, [token, fcmToken]);

  const getAuthToken = () => {
    try {
      let token1 = getAuthTokenDetails().then(value => {
        setToken(value);
      });
    } catch (error) {
      return error;
    }
  };

  const getLoginResponse = async (customerPhone, password, fcmToken) => {
    if (
      customerPhone === undefined ||
      customerPhone === '' ||
      password === '' ||
      password === undefined
    ) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    let apiVal = await customerLogIn(customerPhone, password, fcmToken);
    try {
      setLoginApiData(apiVal);
      setIsLoading(false);
      if (apiVal?.success === false) {
        Alert.alert('Creadentials are invalid');
        setLoginApiData([]);
        setIsLoading(false);
      } else {
        console.log(apiVal);
        navigation.navigate(screenName.home);
      }
    } catch (error) {
      setLoginApiData([]);
      setIsLoading(false);
    }
  };

  return (
    <MainContainer>
      <KeyboardAwareScrollView bounces={false} enableOnAndroid={true}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={loginYupValidations}
            onSubmit={(values, actions) => {
              actions.resetForm();
              setVerificationMobileNo(values.phoneNumber);
              getLoginResponse(values.phoneNumber, values.password, fcmToken);
              setIsLoading(true);
            }}>
            {formikProps => (
              <>
                <View style={styles.topImageContainer}>
                  <UNALightLogo width={500} height={200} />
                </View>
                <View style={styles.topLevelContainer}>
                  <View style={styles.loginContainer}>
                    <Text style={styles.loginText}>{customLables.login}</Text>
                  </View>
                  <View style={styles.phoneNumberContainer}>
                    <Text style={styles.phoneNumberText}>
                      {customLables.phoneNumber}
                    </Text>
                  </View>

                  <UNAInputText
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Enter Phone Number"
                    placeholderTextColor="#C6C6C6"
                    autoCapitalize="none"
                    keyboardType={'phone-pad'}
                    value={formikProps.values.phoneNumber}
                    onChangeText={formikProps.handleChange('phoneNumber')}
                  />
                  <View style={styles.errorTextContainer}>
                    <Text style={styles.errorText}>
                      {formikProps.touched.phoneNumber &&
                        formikProps.errors.phoneNumber &&
                        customLables.phoneNumber}
                    </Text>
                  </View>
                  <View style={styles.passwordContainer}>
                    <Text style={styles.passwordText}>
                      {customLables.password}
                    </Text>
                  </View>

                  <UNAInputText
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Enter Password"
                    placeholderTextColor="#C6C6C6"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    value={formikProps.values.password}
                    onChangeText={formikProps.handleChange('password')}
                  />
                  <View style={styles.errorTextContainer}>
                    <Text style={styles.errorText}>
                      {formikProps.touched.password &&
                        formikProps.errors.password &&
                        customLables.password}
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.forgotLinkStyleContainer}>
                    <Text style={styles.forgotLinkText}>
                      {customLables.forgotPasswordLink}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.submitButton}
                    onPress={formikProps.handleSubmit}>
                    {isLoading ? (
                      <ActivityIndicator
                        size={10}
                        color={colors.backgroundColor}
                      />
                    ) : (
                      <Text style={styles.submitButtonText}>
                        {customLables.login}
                      </Text>
                    )}
                  </TouchableOpacity>

                  <View style={styles.orContainer}>
                    <Text style={styles.orTextStyle}>{customLables.or}</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.createButton}
                    onPress={() =>
                      navigation.navigate(screenName.createNewAccount)
                    }
                    disabled={isLoading}>
                    <Text style={styles.createButtonText}>
                      {customLables.createAccount}
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
      <ConfirmationCodeModal
        toggleModal={val => toggleModalOtp(val)}
        isModalVisible={isModalVisibleOtp}
      />
    </MainContainer>
  );
};

export default Login;
