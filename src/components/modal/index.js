import React, {useState} from 'react';
import {
  Platform,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import Modal from 'react-native-modal';
import {Formik} from 'formik';

import {colors, customLables, VectorIcon} from '../../comman';
import {mobileValidation} from '../../yup-validations';
import {UNAInputText} from '../input';
import {getPasswordResetCodeApi} from '../../utils/rest-apis';
import {styles} from './styles';

const CustomModal = ({toggleModal, isModalVisible}) => {
  const [initialValues] = useState({mobileNo: ''});
  const [isLoading, setIsLoading] = useState(false);

  const getPasswordResetCodeApiHandler = async phoneNumber => {
    try {
      setIsLoading(true);
      const apiVal = await getPasswordResetCodeApi(phoneNumber);
      if (apiVal?.success) {
        toggleModal(true);
        setIsLoading(false);
      } else {
        toggleModal(false);
        setIsLoading(false);
      }
    } catch (error) {}
  };

  const onSubmitGetPasswordResetCode = (values, actions) => {
    getPasswordResetCodeApiHandler(values.mobileNo);
    actions.resetForm();
  };

  const onToggleHandler = () => toggleModal(false);

  return (
    <Modal isVisible={isModalVisible}>
      <View style={styles.mainContainer}>
        <View style={styles.closeContainer}>
          <TouchableOpacity onPress={onToggleHandler}>
            <VectorIcon
              type={'AntDesign'}
              color={colors.placeholderColor}
              name={'close'}
              size={Platform.isPad ? 40 : 20}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.forgotPasswordLabelStyle}>
            {customLables.forgotPassword}
          </Text>
          <View style={styles.spacer} />
          <Text
            style={styles.enterYourPhoneNumberToResetYourPasswordLabelStyle}>
            {customLables.enterYourPhoneNumberToResetYourPassword}
          </Text>
        </View>
        <Formik
          initialValues={initialValues}
          validationSchema={mobileValidation}
          onSubmit={onSubmitGetPasswordResetCode}>
          {formikProps => (
            <View style={styles.formikMainContainer}>
              <Text style={styles.firstNameText}>
                {customLables.phoneNumber}
              </Text>
              <UNAInputText
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Mobile Number"
                placeholderTextColor="#C6C6C6"
                autoCapitalize="none"
                value={formikProps.values.mobileNo}
                onChangeText={formikProps.handleChange('mobileNo')}
              />
              <View style={styles.errorTextContainer1}>
                <Text style={styles.errorText}>
                  {formikProps.touched.mobileNo && formikProps.errors.mobileNo}
                </Text>
              </View>
              <TouchableOpacity
                onPress={formikProps.handleSubmit}
                disabled={isLoading}
                style={styles.createButton}>
                <Text style={styles.createButtonText}>
                  {isLoading ? (
                    <ActivityIndicator
                      size={10}
                      color={colors.backgroundColor}
                      style={styles.activityIndicatorStyle}
                    />
                  ) : (
                    <Text style={styles.submitButtonText}>
                      {customLables.sendCode}
                    </Text>
                  )}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </Modal>
  );
};

export default CustomModal;
