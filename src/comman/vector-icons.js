import React from 'react';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';

export const VectorIcon = Props => {
  const {type, size, color, name, style} = Props;
  const Icon = () => {
    switch (type) {
      case 'FontistoIcon':
        return <FontistoIcon name={name} size={size} color={color} />;
        break;
      case 'AntDesign':
        return <AntDesign name={name} size={size} color={color} />;
        break;
      case 'Entypo':
        return <Entypo name={name} size={size} color={color} />;
        break;
      case 'EvilIcons':
        return <EvilIcons name={name} size={size} color={color} />;
        break;
      case 'Feather':
        return <Feather name={name} size={size} color={color} />;
        break;

      case 'FontAwesome':
        return <FontAwesome name={name} size={size} color={color} />;
        break;
      case 'FontAwesome5':
        return <FontAwesome5 name={name} size={size} color={color} />;
        break;
      case 'FontAwesome5Pro':
        return <FontAwesome5Pro name={name} size={size} color={color} />;
        break;
      case 'Foundation':
        return <Foundation name={name} size={size} color={color} />;
        break;

      case 'Ionicons':
        return <Ionicons name={name} size={size} color={color} />;
        break;

      case 'MaterialCommunityIcons':
        return <MaterialCommunityIcons name={name} size={size} color={color} />;
        break;

      case 'MaterialIcons':
        return <MaterialIcons name={name} size={size} color={color} />;
        break;

      case 'Octicons':
        return <Octicons name={name} size={size} color={color} />;
        break;

      case 'Zocial':
        return <Zocial name={name} size={size} color={color} />;
        break;

      default:
        return <FontAwesome5 name={name} size={size} color={color} />;
        break;
    }
  };
  return <>{Icon()}</>;
};
