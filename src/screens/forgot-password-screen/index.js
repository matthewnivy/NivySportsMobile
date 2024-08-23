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
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';

import {colors, customLables} from '../../comman';
import {MainContainer} from '../../hoc';
import {UNAInputText} from '../../components';
import {BackIconSvgComponent} from '../../utils';
import {forgotPasswordYupValidations} from '../../yup-validations';
import {styles} from './styles';

const ForgotPasswordScreen = props => {
  const navigation = useNavigation();
  const [initialValues] = React.useState({
    password: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmitForgotPassword = (values, actions) => {
    actions.resetForm();
  };

  const navBackHandler = () => navigation.goBack();

  return (
    <MainContainer>
      <View style={styles.mainTopContainer}>
        <TouchableOpacity onPress={navBackHandler}>
          <BackIconSvgComponent color={colors.buttonPrimary} />
        </TouchableOpacity>
        <View style={styles.spacer} />
        <Text style={styles.mainHeaderText}>{customLables.changePassword}</Text>
      </View>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={forgotPasswordYupValidations}
        onSubmit={onSubmitForgotPassword}>
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
                  <View style={styles.mainTop1Container}>
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
                  <View style={styles.mainTop1Container}>
                    <Text style={styles.firstNameText}>
                      {customLables.newPassword}
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

                  <View style={styles.mainTop1Container}>
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
          </ScrollView>
        )}
      </Formik>
    </MainContainer>
  );
};

export default ForgotPasswordScreen;
