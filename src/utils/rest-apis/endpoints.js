const endpoints = {
  customerLogIn: `CustomerUserLogin`,
  createUnaAccount: `CustomerSignUp`,
  getCustomerRewardList: `GetCustomerRewardList`,
  getOrganizationEventList: `GetOrganizationEventList`,
  upcomingEvents: `UpcomingEvents`,
  getCustomerRewardsHistory: 'GetCustomerRewardsHistory',
  getPasswordResetCode: 'GetPasswordResetCode',
  resetPasswordByCode: 'ResetPasswordByCode',
  send: 'send',
  verifyCustomerAccount: 'VerifyCustomerAccount',
  getCodeCustomerAccountVerification: 'GetCodeCustomerAccountVerification',
  eventAvailable: 'EventAvailable',
  getCustomerScorePoints: 'GetCustomerScorePoints',
  addCustomerDeviceId: 'AddCustomerDeviceId',
  getRosterList: 'GetRosterList',
  rostersListFromUrl: 'RostersList',
  scheduleList: 'ScheduleList',
  newsList: 'NewsList',
  getGameProgramsList: 'GetGameProgramsList',
  schedules: 'Schedules',
  sendNotificationToSubscribers: 'sendNotificationToSubscribers',
};

const methods = {
  get: `GET`,
  post: `POST`,
  put: `PUT`,
  delete: `DELETE`,
};

const header = {
  simpleHeader: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  },
  jsonHeader: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },

  multiImage: 'multipart/form-data',

  // twitterApiHeader: {
  //   Authorization:
  //     'Bearer AAAAAAAAAAAAAAAAAAAAAGy4kAEAAAAAo9w1ndDGsQA829XlVXx%2B4EJ%2FNG8%3DJeOyJV27NVymvc2Xw6Wt0foOGLm3q5fIChLy8EntSGq51QCQzo',
  // },

  // twitterApiHeader: {
  //   Authorization: `Bearer ${Config.API_KEY}`,
  // },
  twitterApiHeader: {
    Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAAGy4kAEAAAAAaNZi5I6w%2BnwTxrQyrou%2FBnirSvA%3DQHaTyDK96Uz1SH0qaPdYSGxjlGEARZfZkfR7Nbcv7uCNACANYu`,
  },
};

async function authenticatedHeader() {
  const beareToken = await getAuthTokenDetails().then(value => {
    return value;
  });
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: beareToken,
  };
}

export {endpoints, methods, header, authenticatedHeader};
