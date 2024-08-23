import React, {useContext, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Keyboard,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import {useFocusEffect} from '@react-navigation/native';
import jwt_decode from 'jwt-decode';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';

import {signUpYupValidations} from '../../../../../yup-validations';

import {colors, customLables, images, screenName} from '../../../../../comman';
import {MainContainer} from '../../../../../hoc';
import {
  UNAInputText,
  CustomModal,
} from '../../../../../components';
import {ApplicationContext} from '../../../../../context-api/Context';

import {styles} from './styles';

const ProfileScreen = props => {
  const navigation = useNavigation();
  const {token, optCodeGlobal} = useContext(ApplicationContext);

  const [isModalVisible, setModalVisible] = React.useState(false);
  const [isModalVisibleOtp, setModalVisibleOtp] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [iAmData, setIAmData] = React.useState([
    {
      id: '1',
      bool: false,
      label: 'Student',
    },
    {
      id: '2',
      bool: false,
      label: 'Alumni',
    },
    {
      id: '3',
      bool: false,
      label: 'Faculty',
    },
    {
      id: '4',
      bool: false,
      label: 'Staff',
    },
    {
      id: '5',
      bool: false,
      label: 'Fan',
    },
  ]);
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

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        navigation.goBack();
        return true;
      },
    );
    return () => backHandler.remove();
  }, [navigation]);

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

  const handleCheckBoxChange = id => {
    const updatedData = iAmData.map(item => {
      if (item.id === id) {
        return {
          ...item,
          bool: !item.bool, // Toggle the bool value
        };
      }
      return item;
    });

    setIAmData(updatedData);
  };

  return (
    <MainContainer>
      <View style={styles.mainTopContainer}>
        <View style={styles.containerTopStyle}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButtonStyle}>
            <Image
              style={styles.backArrowStyle}
              resizeMode="contain"
              source={images.backNewIcon}
            />
          </TouchableOpacity>
          <View style={styles.containerTop}>
            {/* <Image style={styles.image} source={images.profileIcon} /> */}
            <Text style={styles.profileNameText}>
              Profile
            </Text>
          </View>
          <View style={styles.spacerH5} />
        </View>
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
                    <View style={styles.mainInputContainer}>
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
                  <View style={styles.inputMainContainer}>
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

                  <View style={styles.containerCheckBoxesMain}>
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
                </>
              </TouchableWithoutFeedback>
            </KeyboardAwareScrollView>
            <View style={styles.containerCheckBoxesMain}>
              <Text style={styles.firstNameText}>I Am A...</Text>
              {iAmData.map(value => {
                return (
                  <View style={styles.iamMainContainer} key={value.id}>
                    <CheckBox
                      disabled={isLoading}
                      size={Platform.isPad ? 25 : 25}
                      checkedColor={colors.buttonPrimary}
                      containerStyle={styles.checkBoxContainer1}
                      style={styles.mainCheckBoxStyle}
                      value={value.bool}
                      onTintColor={colors.buttonPrimary}
                      onCheckColor={colors.buttonPrimary}
                      boxType={'square'}
                      onValueChange={newValue => handleCheckBoxChange(value.id)}
                    />
                    <Text
                      style={[
                        styles.iamLabelStyle,
                        {
                          color: value?.bool
                            ? colors.buttonPrimary
                            : colors.black,
                        },
                      ]}>
                      {value.label}
                    </Text>
                    <View style={styles.spacerH5} />
                  </View>
                );
              })}
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
