import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Keyboard,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useContext} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import ModalDropdown from 'react-native-modal-dropdown';
import {useFocusEffect} from '@react-navigation/native';
import jwt_decode from 'jwt-decode';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';

import {signUpYupValidations} from '../../yup-validations';
import {
  colors,
  customLables,
  images,
  screenName,
  VectorIcon,
  PROFESSIONOBJ,
} from '../../comman';
import {MainContainer} from '../../hoc';
import {UNAInputText, CustomModal} from '../../components';
import {DeleteIconSvgComponent, removeLoginSessionDetails} from '../../utils';
import {ApplicationContext} from '../../context-api/Context';
import {styles} from './styles';

const ProfileScreen = props => {
  const {token, setToken, optCodeGlobal} = useContext(ApplicationContext);
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [isModalVisibleOtp, setModalVisibleOtp] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [initialValues, setInitialValues] = React.useState({
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
  const [profession] = React.useState('Select Opton Name');

  useFocusEffect(
    React.useCallback(() => {
      if (token) {
        let {Email, FirstName, LastName, Phone} = jwt_decode(token);
        setInitialValues({
          password: '',
          confirmPassword: '',
          firstName: FirstName,
          lastName: LastName,
          email: Email,
          phone: Phone,
          unaRoles: '',
          optOutTextMessage: false,
          optOutEmail: false,
        });
      }
    }, [token]),
  );

  const toggleModal = val => {
    setModalVisible(!isModalVisible);
      setModalVisibleOtp(val);
  };
  const toggleModalOtp = val => {
    setModalVisibleOtp(!isModalVisibleOtp);
    if (val) {
      navigation.navigate(screenName.resetPasswordScreen, {
        optCodeGlobal: optCodeGlobal,
      });
    }
  };

  const onPressLogout = () => {
    removeLoginSessionDetails();
    setToken(null);
    navigation.navigate(screenName.login);
  };

  return (
    <MainContainer>
      <View style={styles.mainTopContainer}>
        <Image style={styles.image} source={images.profileIcon} />

        <Text style={styles.profileNameText}>{customLables.matthewRhodes}</Text>
      </View>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={signUpYupValidations}
        onSubmit={(values, actions) => {
          customerSignUpApResponse(values);
          actions.resetForm();
          setIsLoading(true);
        }}>
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
                    <View
                      style={{
                        marginTop: 20,
                        marginBottom: 0,
                      }}>
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
                  <View
                    style={{
                      marginTop: 20,
                      marginBottom: 0,
                      marginHorizontal: 20,
                    }}>
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

                  <View style={styles.mainInputContainer}>
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
                  <View style={styles.mainInputContainer}>
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

                  <View style={styles.mainInputContainer}>
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
                </>
              </TouchableWithoutFeedback>
            </KeyboardAwareScrollView>
            <ModalDropdown
              options={PROFESSIONOBJ?.map((item, i) => item?.name || '')}
              saveScrollPosition={false}
              style={styles.mainModalContainer}
              textStyle={styles.modalDropDownTextStyle}
              dropdownStyle={styles.dropDownStyling}
              dropdownTextStyle={styles.dropDownTextStyling}
              dropdownTextHighlightStyle={styles.dropDownTextHighlightStyling}
              disabled={isLoading}
              onSelect={(index, string) =>
                formikProps.setFieldValue('unaRoles', string)
              }
              defaultValue={profession}>
              <View style={styles.mainLabelTextIconContainer}>
                <Text style={styles.mainDropDownModalText}>{profession}</Text>

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
                {formikProps.touched.unaRoles && formikProps.errors.unaRoles}
              </Text>
            </View>
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
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 7,
              }}></View>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={styles.createButton}>
              <Text style={styles.createButtonText}>
                <Text style={styles.submitButtonText}>
                  {customLables.changePassword}
                </Text>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                removeLoginSessionDetails();
                setToken(null);
                // navigation.navigate(screenName.login);
                navigation.navigate('Profile');
              }}
              style={styles.createButton}>
              <Text style={styles.createButtonText}>
                <VectorIcon
                  type={'MaterialCommunityIcons'}
                  name={'logout'}
                  size={20}
                  color={colors.inActiveColor}
                />
                {customLables.logOut}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.createButton2}>
              <DeleteIconSvgComponent color={colors.red} />
              <Text style={styles.createButtonText2}>
                <View style={styles.spacer} />
                {customLables.deleteAccount}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        )}
      </Formik>
      <CustomModal
        toggleModal={val => toggleModal(val)}
        isModalVisible={isModalVisible}
      />
    </MainContainer>
  );
};

export default ProfileScreen;
