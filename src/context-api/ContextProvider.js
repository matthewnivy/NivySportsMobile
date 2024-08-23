import React, {useState} from 'react';

import {ApplicationContext} from './Context';

export const ContextProvider = ({children}) => {
  const [loginApiData, setLoginApiData] = useState([]);
  const [gamePlanData, setGamePlanData] = useState([]);
  const [eventData, setEventData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [optCodeGlobal, setOptCodeGlobal] = useState('');
  const [verificationMobileNo, setVerificationMobileNo] = useState('');
  const [twitterProfileImage, setTwitterProfileImage] = useState('');
  const [twitterUserId, setTwitterUserId] = useState(null);
  const [verfiedUserSignUp, setVerfiedUserSignUp] = useState(false);
  const [signupDetails, setSignUpDetails] = useState([]);
  const [twitterData, setTwitterData] = useState([]);
  const [itemWebLinkData, setItemWebLinkData] = useState([]);
  const [token, setToken] = useState(null);
  const [userDetails, setUserDetails] = useState({
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    unaRoles: '',
    userId: '',
  });

  return (
    <ApplicationContext.Provider
      value={{
        loginApiData,
        setLoginApiData,
        token,
        setToken,
        userDetails,
        setUserDetails,
        optCodeGlobal,
        setOptCodeGlobal,
        signupDetails,
        setSignUpDetails,
        verfiedUserSignUp,
        setVerfiedUserSignUp,
        verificationMobileNo,
        setVerificationMobileNo,
        twitterUserId,
        setTwitterUserId,
        twitterData,
        setTwitterData,
        twitterProfileImage,
        setTwitterProfileImage,
        gamePlanData,
        setGamePlanData,
        eventData,
        setEventData,
        newsData,
        setNewsData,
        itemWebLinkData,
        setItemWebLinkData,
      }}>
      {children}
    </ApplicationContext.Provider>
  );
};
