import React from 'react';

import { Animated, Easing, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Check from 'react-native-vector-icons/Octicons';

import { styles } from './styles';

const AppButton = ({ title, title2 }) => {
  const [joined, setJoined] = React.useState(false);
  const textOpacity = React.useRef(new Animated.Value(1)).current;
  const animatedOpacity = React.useRef(new Animated.Value(0)).current;

  const handleAnimation = () => {
    setTimeout(() => setJoined(false), 250);
    Animated.sequence([
      Animated.timing(textOpacity, {
        toValue: 0,
        duration: 100,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(animatedOpacity, {
        toValue: 1,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(animatedOpacity, {
        toValue: 0,
        duration: 750,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 250,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start();
    setTimeout(() => setJoined(true), 1000);
  };

  const resetAnim = () => {
    setJoined(false);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container]}
      onPress={joined ? resetAnim : handleAnimation}>
      <Animatable.View style={styles.button} animation={joined ? 'fadeOut' : 'fadeIn'}>
        <LinearGradient
          useAngle
          angle={45}
          style={styles.linearGradient}
          angleCenter={{ x: 0.5, y: 1 }}
          colors={['#ff1476', '#9900ff']}
        />
      </Animatable.View>
      {!!animatedOpacity && (
        <Animated.View style={{ opacity: animatedOpacity }}>
          <Check size={40} name='check' color='white' />
        </Animated.View>
      )}
      <Animated.Text
        style={[
          styles.title,
          { opacity: textOpacity, color: joined ? 'black' : 'white' },
        ]}>
        {joined ? title2 : title}
      </Animated.Text>
    </TouchableOpacity>
  );
};

export default AppButton;
