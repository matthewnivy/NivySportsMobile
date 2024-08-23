import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {styles} from './styles';
import {colors, customLables, screenName} from '../../comman';
import {MainContainer} from '../../hoc';
import {UNAInputText} from '../../components';
import {BackIconSvgComponent} from '../../utils';
import {Formik} from 'formik';
import {forgotPasswordYupValidations} from '../../yup-validations';
import {useNavigation} from '@react-navigation/native';
import {resetPasswordByCodeApi} from '../../utils/rest-apis';

const ResetPasswordScreen = props => {
  const navigation = useNavigation();
  const {optCodeGlobal} = props?.route?.params;
  const [initialValues] = React.useState({
    newPassword: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const resetPasswordByCodeApiResponse = async password => {
    setIsLoading(true);

    let apiVal = await resetPasswordByCodeApi(optCodeGlobal, password);
    try {
      setIsLoading(false);
      if (apiVal?.success === false) {
        Alert.alert('Creadentials are invalid');
        setIsLoading(false);
      } else {
        navigation.navigate(screenName.home);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <MainContainer>
      <View style={styles.mainTopContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIconSvgComponent color={colors.buttonPrimary} />
        </TouchableOpacity>
        <View style={styles.spacer} />
        <Text style={styles.mainHeaderText}>
          {customLables.resetYourPassword}
        </Text>
      </View>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={forgotPasswordYupValidations}
        onSubmit={(values, actions) => {
          resetPasswordByCodeApiResponse(values.newPassword);
          actions.resetForm();
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
                  <View style={styles.mainInputContainer}>
                    <Text style={styles.firstNameText}>
                      {customLables.enterNewPassword}
                    </Text>
                    <UNAInputText
                      style={styles.input}
                      underlineColorAndroid="transparent"
                      placeholder="Enter New Password"
                      placeholderTextColor="#C6C6C6"
                      autoCapitalize="none"
                      editable={!isLoading}
                      secureTextEntry={true}
                      value={formikProps.values.newPassword}
                      onChangeText={formikProps.handleChange('newPassword')}
                    />
                    <View style={styles.errorTextContainer1}>
                      <Text style={styles.errorText}>
                        {formikProps.touched.newPassword &&
                          formikProps.errors.newPassword}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.mainInputContainer}>
                    <Text style={styles.firstNameText}>
                      {customLables.confirmNewPassword}
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
            <View style={styles.bottomView} />
            <TouchableOpacity
              onPress={formikProps.handleSubmit}
              disabled={isLoading}
              style={styles.createButton}>
              <Text style={styles.createButtonText}>
                {isLoading ? (
                  <ActivityIndicator size={10} color={colors.backgroundColor} />
                ) : (
                  <Text style={styles.submitButtonText}>
                    {customLables.changePassword}
                  </Text>
                )}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        )}
      </Formik>
    </MainContainer>
  );
};

export default ResetPasswordScreen;
