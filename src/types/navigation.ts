import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type MainStackParamList = {
  Home: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'Home'
>;
