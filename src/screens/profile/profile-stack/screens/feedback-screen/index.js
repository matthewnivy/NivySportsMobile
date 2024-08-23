import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import {
  FEEDBACKOBJ,
  VectorIcon,
  colors,
  customLables,
  images,
} from '../../../../../comman';
import ModalDropdown from 'react-native-modal-dropdown';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {feedBackYupValidations} from '../../../../../yup-validations';
import {UNAInputText} from '../../../../../components';

const FeedBackScreen = props => {
  const navigation = useNavigation();
  const [profession, setProfession] = React.useState('Select');
  const [isLoading, setIsLoading] = React.useState(false);
  const [initialValues, setInitialValues] = React.useState({
    subject: '',
    message: '',
    name: '',
    email: '',
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topImageContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButtonStyle}>
          <Image
            style={styles.backArrowStyle}
            resizeMode="contain"
            source={images.backRosterImage}
          />
        </TouchableOpacity>
        <Text style={styles.headingTextHeader}>Feedback</Text>
        <View style={styles.lastContainerTop} />
      </View>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={feedBackYupValidations}
        onSubmit={(values, actions) => {
          actions.resetForm();
          setIsLoading(true);
        }}>
        {formikProps => (
          <ScrollView style={styles.scrollViewStyle} bounces={false}>
            <KeyboardAwareScrollView
              showsVerticalScrollIndicator={false}
              bounces={false}
              extraHeight={0}
              scrollEnabled={false}
              enableOnAndroid={true}>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <>
                  <View style={styles.mainContentContainer}>
                    <Text style={styles.labelText}>Subject</Text>
                    <ModalDropdown
                      options={FEEDBACKOBJ?.map((item, i) => item?.name || '')}
                      saveScrollPosition={false}
                      style={styles.mainModalContainer}
                      textStyle={styles.modalDropDownTextStyle}
                      dropdownStyle={styles.dropDownStyling}
                      dropdownTextStyle={styles.dropDownTextStyling}
                      dropdownTextHighlightStyle={
                        styles.dropDownTextHighlightStyling
                      }
                      disabled={isLoading}
                      onSelect={(index, string) =>
                        formikProps.setFieldValue('subject', string)
                      }
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
                    <View
                      style={{
                        marginTop: 10,
                      }}>
                      <UNAInputText
                        style={styles.textAreaInput}
                        underlineColorAndroid="transparent"
                        placeholder="Send A message"
                        placeholderTextColor="#C6C6C6"
                        autoCapitalize="none"
                        numberOfLines={100}
                        multiline={true}
                        editable={!isLoading}
                        value={formikProps.values.message}
                        onChangeText={formikProps.handleChange('message')}
                      />
                      <View style={styles.errorTextContainer1}>
                        <Text style={styles.errorText}>
                          {formikProps.touched.message &&
                            formikProps.errors.message}
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text style={styles.labelText}>Name</Text>
                      <UNAInputText
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Enter user name"
                        placeholderTextColor="#C6C6C6"
                        autoCapitalize="none"
                        editable={!isLoading}
                        value={formikProps.values.name}
                        onChangeText={formikProps.handleChange('name')}
                      />
                      <View style={styles.errorTextContainer1}>
                        <Text style={styles.errorText}>
                          {formikProps.touched.name && formikProps.errors.name}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        marginTop: 10,
                      }}>
                      <Text style={styles.labelText}>Email</Text>
                      <UNAInputText
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Enter Email Address"
                        placeholderTextColor="#C6C6C6"
                        autoCapitalize="none"
                        editable={!isLoading}
                        value={formikProps.values.email}
                        onChangeText={formikProps.handleChange('email')}
                      />
                      <View style={styles.errorTextContainer1}>
                        <Text style={styles.errorText}>
                          {formikProps.touched.email &&
                            formikProps.errors.email}
                        </Text>
                      </View>
                    </View>
                  </View>
                </>
              </TouchableWithoutFeedback>
            </KeyboardAwareScrollView>
          </ScrollView>
        )}
      </Formik>
      <TouchableOpacity
        disabled={isLoading}
        style={styles.submitButtonStyle}
        onPress={() => navigation.navigate('Profile')}>
        <Text style={[styles.bottomContainerText, {color: colors.white}]}>
          Send
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FeedBackScreen;
