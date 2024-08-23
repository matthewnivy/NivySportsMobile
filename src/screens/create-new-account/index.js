import React, {useContext, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import ModalDropdown from 'react-native-modal-dropdown';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';

import {
  colors,
  customLables,
  screenName,
  VectorIcon,
  PROFESSIONOBJ,
} from '../../comman';
import {MainContainer} from '../../hoc';
import {UNAInputText, ConfirmationCodeModal} from '../../components';
import {signUpYupValidations} from '../../yup-validations';
import {addCustomerDeviceIdApi} from '../../utils/rest-apis';
import {ApplicationContext} from '../../context-api/Context';
import {getFcmTokenDetails} from '../../utils/preferences/localStorage';
import {styles} from './styles';

const CreateNewAccount = props => {
  const navigation = useNavigation();
  const {signupDetails, setSignUpDetails} = useContext(ApplicationContext);
  const [initialValues] = React.useState({
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    unaRoles: '',
    optOutTextMessage: false,
    optOutEmail: false,
  });
  const [isModalVisibleOtp, setModalVisibleOtp] = React.useState(false);
  const [profession, setProfession] = React.useState('Select');
  const [isLoading, setIsLoading] = React.useState(false);
  const [fcmToken, setFcmToken] = React.useState(null);

  const toggleModalOtp = val => {
    setModalVisibleOtp(!isModalVisibleOtp);
    navigation.navigate(screenName.login);
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
    getFcmToken();
  }, []);

  const customerSignUpApResponse = async ({
    password,
    firstName,
    lastName,
    email,
    phone,
    unaRoles,
    optOutTextMessage,
    optOutEmail,
  }) => {
    if (
      firstName === undefined ||
      firstName === '' ||
      password === '' ||
      password === undefined ||
      lastName === '' ||
      lastName === undefined ||
      email === '' ||
      email === undefined ||
      phone === '' ||
      phone === undefined ||
      unaRoles === '' ||
      unaRoles === undefined ||
      optOutTextMessage === '' ||
      optOutTextMessage === undefined ||
      optOutEmail === '' ||
      optOutEmail === undefined
    ) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    let apiVal = await addCustomerDeviceIdApi(
      password,
      firstName,
      lastName,
      email,
      phone,
      unaRoles,
      optOutTextMessage,
      optOutEmail,
      fcmToken,
    );
    try {
      setIsLoading(false);
      if (apiVal?.success === false) {
        Alert.alert('Creadentials are invalid');
        setIsLoading(false);
      } else {
        setSignUpDetails(apiVal?.content);
        setModalVisibleOtp(true);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  const onSubmitSignup = (values, actions) => {
    customerSignUpApResponse(values);
    actions.resetForm();
    setIsLoading(true);
  };

  const loginHandler = () => navigation.navigate(screenName.login);

  const toggleModalHandler = val => toggleModalOtp(val);

  return (
    <MainContainer>
      <View style={styles.mainTopContainer}>
        <Text style={styles.mainHeaderText}>
          {customLables.createNewAccount}
        </Text>
      </View>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={signUpYupValidations}
        onSubmit={onSubmitSignup}>
        {formikProps => (
          <ScrollView bounces={false}>
            <KeyboardAwareScrollView
              showsVerticalScrollIndicator={false}
              bounces={false}
              extraHeight={0}
              scrollEnabled={false}
              enableOnAndroid={true}>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <>
                  <View style={styles.firstMainContainer}>
                    <View style={styles.firstNameContainer}>
                      <Text style={styles.firstNameText}>
                        {customLables.firstName}
                      </Text>
                      <UNAInputText
                        style={styles.input2}
                        editable={!isLoading}
                        underlineColorAndroid="transparent"
                        placeholder="Enter First Name"
                        placeholderTextColor="#C6C6C6"
                        autoCapitalize="none"
                        value={formikProps.values.firstName}
                        onChangeText={formikProps.handleChange('firstName')}
                      />
                      <View style={styles.errorTextContainer}>
                        <Text style={styles.errorText}>
                          {formikProps.touched.firstName &&
                            formikProps.errors.firstName}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.spacer} />
                    <View style={styles.inputMainContainer}>
                      <Text style={styles.firstNameText}>
                        {customLables.lastName}
                      </Text>
                      <UNAInputText
                        style={styles.input2}
                        underlineColorAndroid="transparent"
                        placeholder="Enter Last Name"
                        placeholderTextColor="#C6C6C6"
                        autoCapitalize="none"
                        editable={!isLoading}
                        value={formikProps.values.lastName}
                        onChangeText={formikProps.handleChange('lastName')}
                      />
                      <View style={styles.errorTextContainer}>
                        <Text style={styles.errorText}>
                          {formikProps.touched.lastName &&
                            formikProps.errors.lastName}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.phoneMainContainer}>
                    <Text style={styles.firstNameText}>
                      {customLables.phoneNumber}
                    </Text>
                    <UNAInputText
                      style={styles.input}
                      underlineColorAndroid="transparent"
                      placeholder="Enter Phone Number"
                      placeholderTextColor="#C6C6C6"
                      autoCapitalize="none"
                      editable={!isLoading}
                      keyboardType={'phone-pad'}
                      value={formikProps.values.phone}
                      onChangeText={formikProps.handleChange('phone')}
                    />
                    <View style={styles.errorTextContainer1}>
                      <Text style={styles.errorText}>
                        {formikProps.touched.phone && formikProps.errors.phone}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.emailMainContainer}>
                    <Text style={styles.firstNameText}>
                      {customLables.emailAddress}
                    </Text>
                    <UNAInputText
                      style={styles.input}
                      underlineColorAndroid="transparent"
                      placeholder="Enter Email Address"
                      placeholderTextColor="#C6C6C6"
                      editable={!isLoading}
                      autoCapitalize="none"
                      value={formikProps.values.email}
                      onChangeText={formikProps.handleChange('email')}
                    />
                    <View style={styles.errorTextContainer}>
                      <Text style={styles.errorText}>
                        {formikProps.touched.email && formikProps.errors.email}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.emailMainContainer}>
                    <Text style={styles.firstNameText}>
                      {customLables.password}
                    </Text>
                    <UNAInputText
                      style={styles.input}
                      underlineColorAndroid="transparent"
                      placeholder="Enter Password"
                      placeholderTextColor="#C6C6C6"
                      autoCapitalize="none"
                      editable={!isLoading}
                      secureTextEntry={true}
                      value={formikProps.values.password}
                      onChangeText={formikProps.handleChange('password')}
                    />
                    <View style={styles.errorTextContainer1}>
                      <Text style={styles.errorText}>
                        {formikProps.touched.password &&
                          formikProps.errors.password}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.emailMainContainer}>
                    <Text style={styles.firstNameText}>
                      {customLables.confirmPassword}
                    </Text>
                    <UNAInputText
                      style={styles.input}
                      underlineColorAndroid="transparent"
                      placeholder="Confirm Password"
                      placeholderTextColor="#C6C6C6"
                      autoCapitalize="none"
                      editable={!isLoading}
                      secureTextEntry={true}
                      value={formikProps.values.confirmPassword}
                      onChangeText={formikProps.handleChange('confirmPassword')}
                    />
                    <View style={styles.errorTextContainer1}>
                      <Text style={styles.errorText}>
                        {formikProps.touched.confirmPassword &&
                          formikProps.errors.confirmPassword}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.emailMainContainer}>
                    <Text style={styles.firstNameText}>I Am A...</Text>
                    <ModalDropdown
                      options={PROFESSIONOBJ?.map(
                        (item, i) => item?.name || '',
                      )}
                      saveScrollPosition={false}
                      style={styles.mainModalContainer}
                      textStyle={styles.modalDropDownTextStyle}
                      dropdownStyle={styles.dropDownStyling}
                      dropdownTextStyle={styles.dropDownTextStyling}
                      dropdownTextHighlightStyle={
                        styles.dropDownTextHighlightStyling
                      }
                      disabled={isLoading}
                      onSelect={(_index, string) => {
                        formikProps.setFieldValue('unaRoles', string);
                        setProfession(string);
                      }}
                      defaultValue={profession}>
                      <View style={styles.mainLabelTextIconContainer}>
                        <Text style={styles.mainDropDownModalText}>
                          {profession}
                        </Text>
                        <VectorIcon
                          type={'Entypo'}
                          color={colors.placeholderColor}
                          name={'chevron-small-down'}
                          size={Platform.isPad ? 40 : 30}
                        />
                      </View>
                    </ModalDropdown>
                    <View style={styles.errorTextContainer2}>
                      <Text style={styles.errorText}>
                        {formikProps.touched.unaRoles &&
                          formikProps.errors.unaRoles}
                      </Text>
                    </View>
                  </View>
                </>
              </TouchableWithoutFeedback>
            </KeyboardAwareScrollView>
            <View style={styles.heightspacer} />
            <View style={styles.checkOneContainer}>
              <CheckBox
                disabled={isLoading}
                size={Platform.isPad ? 10 : 5}
                checkedColor={colors.buttonPrimary}
                containerStyle={styles.checkBoxContainer1}
                style={styles.mainCheckBoxStyle}
                value={formikProps.values.optOutTextMessage}
                onTintColor={colors.buttonPrimary}
                onCheckColor={colors.buttonPrimary}
                boxType={'square'}
                onValueChange={newValue =>
                  formikProps.setFieldValue('optOutTextMessage', newValue)
                }
              />
              <Text style={styles.checkboxInnerText}>
                {customLables.optOutOfTextMessagesFromUNA}
              </Text>
            </View>
            <View style={styles.errorTextContainer}>
              <Text style={styles.errorText}>
                {formikProps.touched.optOutEmail &&
                  formikProps.errors.optOutEmail &&
                  customLables.optOutEmail}
              </Text>
            </View>

            <View style={styles.checkOneContainer}>
              <CheckBox
                disabled={isLoading}
                size={Platform.isPad ? 10 : 5}
                checkedColor={colors.buttonPrimary}
                containerStyle={styles.checkBoxContainer1}
                style={styles.mainCheckBoxStyle}
                value={formikProps.values.optOutEmail}
                onTintColor={colors.buttonPrimary}
                onCheckColor={colors.buttonPrimary}
                boxType={'square'}
                onValueChange={newValue =>
                  formikProps.setFieldValue('optOutEmail', newValue)
                }
              />

              <Text style={styles.checkboxInnerText}>
                {customLables.optOutOfEmailsFromUNA}
              </Text>
            </View>
            <View style={styles.errorTextContainer}>
              <Text style={styles.errorText}>
                {formikProps.touched.optOutEmail &&
                  formikProps.errors.optOutEmail &&
                  customLables.optOutEmail}
              </Text>
            </View>
            <View style={styles.seprator} />
            <TouchableOpacity
              onPress={formikProps.handleSubmit}
              disabled={isLoading}
              style={styles.createButton}>
              <Text style={styles.createButtonText}>
                {isLoading ? (
                  <ActivityIndicator size={10} color={colors.backgroundColor} />
                ) : (
                  <Text style={styles.submitButtonText}>
                    {customLables.createAccount}
                  </Text>
                )}
              </Text>
            </TouchableOpacity>
            <View style={styles.bottomContainer}>
              <Text style={styles.bottomContainerText}>
                {customLables.alreadyHaveAAccount}
              </Text>
              <TouchableOpacity disabled={isLoading} onPress={loginHandler}>
                <Text
                  style={[
                    styles.bottomContainerText,
                    {color: colors.buttonPrimary},
                  ]}>
                  {customLables.login}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </Formik>
      <ConfirmationCodeModal
        toggleModal={toggleModalHandler}
        isModalVisible={isModalVisibleOtp}
      />
    </MainContainer>
  );
};

export default CreateNewAccount;
