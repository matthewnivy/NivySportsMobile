import React, {useState, useRef, useContext, useEffect} from 'react';
import Modal from 'react-native-modal';
import {
  ActivityIndicator,
  Alert,
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Platform,
} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {colors, customLables, VectorIcon} from '../../comman';
import {ApplicationContext} from '../../context-api/Context';
import {verifyCustomerAccountApi} from '../../utils/rest-apis';
import {styles} from './styles';

const ConfirmationCodeModal = ({toggleModal, isModalVisible}) => {
  const [loading, setLoading] = useState(false);
  const {signupDetails, setVerfiedUserSignUp} = useContext(ApplicationContext);
  const otpInput = useRef(null);

  const verifyCustomerAccountApiResponse = async (phone, verificationCode) => {
    if (
      phone === '' ||
      phone === undefined ||
      verificationCode === undefined ||
      verificationCode === ''
    ) {
      setLoading(false);
      return;
    }

    try {
      if (signupDetails?.smsCode === verificationCode) {
        setLoading(true);
        let apiVal = await verifyCustomerAccountApi(phone, verificationCode);
        if (apiVal?.success === false) {
          Alert.alert('Please enter the correct code');
          setLoading(false);
        } else {
          setLoading(false);
          setVerfiedUserSignUp(true);
          toggleModal(false);
        }
      } else {
        Alert.alert('Please provide the valid code');
        setLoading(false);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const setText = () => {
    otpInput?.current?.setValue(signupDetails?.smsCode);
  };

  useEffect(() => {
    setText();
  }, []);

  const handleOptSubmit = () => {
    let optno = otpInput?.current?.state?.otpText.join('');
    verifyCustomerAccountApiResponse(signupDetails?.phone, optno);
  };

  return (
    <Modal isVisible={isModalVisible}>
      <View style={styles.mainContainer}>
        <View style={styles.closeContainer}>
          <TouchableOpacity onPress={() => toggleModal(false)}>
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
            {customLables.enterDigitCode}
          </Text>
          <View style={styles.spacer} />
          <Text
            style={styles.enterYourPhoneNumberToResetYourPasswordLabelStyle}>
            {customLables.enterCodeSentToYourDeviceToResetYourPassword}
          </Text>
        </View>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          extraHeight={0}
          scrollEnabled={false}
          enableOnAndroid={true}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <>
              <OTPTextInput
                ref={otpInput}
                inputCount={6}
                tintColor={colors.green2}
                textInputStyle={styles.textInputOTP}
                containerStyle={{
                  marginTop: 15,
                }}
              />
              <TouchableOpacity
                style={styles.createButton}
                disabled={loading}
                onPress={handleOptSubmit}>
                {loading ? (
                  <ActivityIndicator
                    size={12}
                    color={colors.inputFieldBackgroundColor}
                  />
                ) : (
                  <Text style={styles.createButtonText}>
                    {customLables.verifyCode}
                  </Text>
                )}
              </TouchableOpacity>
            </>
          </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
      </View>
    </Modal>
  );
};

export default ConfirmationCodeModal;
