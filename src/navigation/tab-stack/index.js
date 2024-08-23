import React, {useContext} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useFocusEffect} from '@react-navigation/native';

import {
  HomeScreen,
  UpcomingEvents,
  TeamRostersScreen,
  RosterScreen,
  PdfScreen,
  NewsScreen,
  EventInformationScreen,
  EventInformationTeamsScreen,
  TeamListScreen,
} from '../../screens';
import {colors} from '../../comman';
import {
  EventSvgComponent,
  getAuthTokenDetails,
  HomeSvgComponent,
  NewsIconSvgComponent,
  ProfileIconComponent,
  TeamsSvgComponent,
} from '../../utils';
import {ApplicationContext} from '../../context-api/Context';
import {getTwitterAccessTokenApi} from '../../utils/rest-apis/twitter-apis';
import TeamsStacks from '../../screens/list-screen';
import {
  getRosterNewsFromUrlListApi,
  getScheduleApi,
} from '../../utils/rest-apis';
import {ProfileStack} from '../../screens/profile';
import WebViewStack from '../../screens/web-view-stack';

const TabNavigation = props => {
  const {token, setToken, setEventData, setNewsData} =
    useContext(ApplicationContext);
  console.log('props:: ', props);
  useFocusEffect(
    React.useCallback(() => {
      getAuthToken();
      getTwitterAccessToken();
      getOrganizationEventListApiResponse();
      getOrganizationNewsEventListApiResponse(
        'https://roarlions.com/index.aspx',
      );
    }, [token]),
  );

  const getAuthToken = () => {
    try {
      let token1 = getAuthTokenDetails().then(value => {
        setToken(value);
      });
    } catch (error) {
      return error;
    }
  };

  const getTwitterAccessToken = async () => {
    const response = await getTwitterAccessTokenApi();
  };

  const getOrganizationEventListApiResponse = async () => {
    let apiVal = await getScheduleApi();

    try {
      if (apiVal?.status === 200) {
        let newData = apiVal?.data?.content;
        // Modify the data structure to add mainTopEventDate inside events

        const filteredEvents = newData.flatMap(day =>
          day.events.filter(event => {
            if (typeof event === 'object' && event !== null) {
              event.mainTopEventDate = day.date; // Add the new property
              return true; // Include this event in the filteredEvents array
            }
            return false; // Exclude this event from the filteredEvents array
          }),
        );

        setEventData(filteredEvents);
      } else {
      }
    } catch (error) {
      setEventData([]);
    }
  };

  const getOrganizationNewsEventListApiResponse = async scheduleListUrlLink => {
    let apiVal = await getRosterNewsFromUrlListApi(scheduleListUrlLink);
    try {
        if (apiVal?.status === 200) {
          setNewsData(apiVal?.data?.content);
        } else {
        }
    } catch (error) {
      setNewsData([]);
    }
  };

  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <>
        <Tab.Screen
          name="Home"
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => {
              return (
                <HomeSvgComponent
                  color={focused ? colors.buttonPrimary : colors.black}
                />
              );
            },
            tabBarActiveTintColor: colors.buttonPrimary,
            tabBarInactiveTintColor: colors.black,
          }}
          component={HomeScreen}
        />
        <Tab.Screen
          name="TeamRostersScreen"
          options={{
            headerShown: false,
            tabBarButton: () => null,
            tabBarVisible: false,
          }}
          component={TeamRostersScreen}
        />
        <Tab.Screen
          name="EventInformationScreen"
          options={{
            headerShown: false,
            tabBarButton: () => null,
            tabBarVisible: false,
          }}
          component={EventInformationScreen}
        />
        <Tab.Screen
          name="Teams"
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => {
              return (
                <TeamsSvgComponent
                  color={focused ? colors.buttonPrimary : colors.black}
                />
              );
            },
            tabBarLabelStyle: {
              fontSize: 11,
              paddingBottom: 3.5,
            },
            tabBarActiveTintColor: colors.buttonPrimary,
            tabBarInactiveTintColor: colors.black,
          }}
          component={TeamsStacks}
        />
        <Tab.Screen
          name="News"
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => {
              return (
                <NewsIconSvgComponent
                  color={focused ? colors.buttonPrimary : colors.black}
                />
              );
            },
            tabBarLabelStyle: {
              fontSize: 11, 
              paddingBottom: 3.5,
            },
            tabBarActiveTintColor: colors.buttonPrimary,
            tabBarInactiveTintColor: colors.black,
          }}
          component={NewsScreen}
        />
        <Tab.Screen
          name="Schedule"
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => {
              return (
                <EventSvgComponent
                  color={focused ? colors.buttonPrimary : colors.black}
                />
              );
            },
            tabBarLabelStyle: {
              fontSize: 11, 
              paddingBottom: 3.5,
            },
            tabBarActiveTintColor: colors.buttonPrimary,
            tabBarInactiveTintColor: colors.black,
          }}
          component={UpcomingEvents}
        />

        <Tab.Screen
          name="RosterScreen"
          options={{
            headerShown: false,
            tabBarButton: () => null,
            tabBarVisible: false,
            tabBarActiveTintColor: colors.buttonPrimary,
            tabBarInactiveTintColor: colors.black,
          }}
          component={RosterScreen}
        />

        <Tab.Screen
          name="EventInformationTeamsScreen"
          options={{
            headerShown: false,
            tabBarButton: () => null,
            tabBarVisible: false,
            tabBarActiveTintColor: colors.buttonPrimary,
            tabBarInactiveTintColor: colors.black,
          }}
          component={EventInformationTeamsScreen}
        />
        <Tab.Screen
          name="TeamListScreen"
          options={{
            headerShown: false,
            tabBarButton: () => null,
            tabBarVisible: false,
            tabBarActiveTintColor: colors.buttonPrimary,
            tabBarInactiveTintColor: colors.black,
          }}
          component={TeamListScreen}
        />

        <Tab.Screen
          name="WebViewStack"
          options={{
            headerShown: false,
            tabBarButton: () => null,
            tabBarVisible: false,
            tabBarActiveTintColor: colors.buttonPrimary,
            tabBarInactiveTintColor: colors.black,
          }}
          component={WebViewStack}
        />

        <Tab.Screen
          name="PdfScreen"
          options={{
            headerShown: false,
            tabBarButton: () => null,
            tabBarVisible: false,
            tabBarActiveTintColor: colors.buttonPrimary,
            tabBarInactiveTintColor: colors.black,
          }}
          component={PdfScreen}
        />
        <Tab.Screen
          name="Profile"
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => {
              return (
                <ProfileIconComponent
                  color={focused ? colors.buttonPrimary : colors.black}
                />
              );
            },
            tabBarActiveTintColor: colors.buttonPrimary,
            tabBarInactiveTintColor: colors.black,
          }}
          component={ProfileStack}
        />
      </>
    </Tab.Navigator>
  );
};

export default TabNavigation;
