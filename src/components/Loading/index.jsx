import React, { useState, useEffect, useRef } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  Dimensions,
} from 'react-native'
import { StyleSheet } from 'react-native'
import { COLORS } from '../../style/MainStyle'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default function LoadingScreen({ navigation }) {
  //#region States
  //#endregion
  //#region Effects
  //#endregion
  const spinValue = useRef(new Animated.Value(0)).current
  const jumpValue = useRef(new Animated.Value(0)).current
  const blinkValue = useRef(new Animated.Value(0)).current

  Animated.timing(spinValue, {
    toValue: 1,
    duration: 4000,
    easing: Easing.linear,
    useNativeDriver: false,
  }).start()

  Animated.timing(jumpValue, {
    toValue: 2,
    duration: 4000,
    easing: Easing.in(Easing.bounce),
    useNativeDriver: false,
  }).start()

  Animated.timing(blinkValue, {
    toValue: 6,
    duration: 12000,
    easing: Easing.bounce,
    useNativeDriver: false,
  }).start()

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })
  const position = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-windowWidth / 2 - 160, 0],
  })
  const jump = jumpValue.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, -800, 0],
  })
  const scale = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1 / 2],
  })
  const blink = blinkValue.interpolate({
    inputRange: [0, 1, 2, 3, 4, 5, 6],
    outputRange: ['black', 'black', 'black', 'black', 'black', 'red', 'black'],
  })

  return (
    <View style={[styles.container]}>
      <Animated.View
        style={{ transform: [{ translateY: jump }, { scale: scale }] }}
      >
        <Animated.View
          style={[
            styles.circle,
            {
              transform: [{ translateX: position }, { rotate: spin }],
            },
          ]}
        >
          <View style={styles.redArea}></View>

          <View style={styles.whiteArea}></View>
          <Animated.View
            style={[
              styles.circle2,
              {
                borderColor: blink,
              },
            ]}
          >
            <View style={styles.circle3}></View>
          </Animated.View>
        </Animated.View>
      </Animated.View>
      <View style={{ flexDirection: 'row' }}>
        <Animated.Text style={{ fontSize: 28, color: '#fff' }}>
          Loading
        </Animated.Text>
        <Animated.Text
          style={{ fontSize: 28, color: '#fffffffd', opacity: spinValue }}
        >
          {' '}
          .
        </Animated.Text>

        <Animated.Text
          style={{ fontSize: 28, color: '#ffffffa6', opacity: spinValue }}
        >
          {' '}
          .
        </Animated.Text>
        <Animated.Text
          style={{ fontSize: 28, color: '#ffffff61', opacity: spinValue }}
        >
          {' '}
          .
        </Animated.Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.info,
  },
  redArea: {
    backgroundColor: 'red',
    height: '120%',
    width: '120%',
    borderColor: '#2e2e2e',
    borderWidth: 5,
  },
  whiteArea: {
    backgroundColor: COLORS.white,
    height: '120%',
    width: '120%',
    borderColor: '#2e2e2e',
    borderWidth: 5,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  circle2: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    position: 'absolute',
  },
  circle3: {
    width: 7,
    height: 7,
    borderRadius: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#2e2e2e',
    borderWidth: 7,
    position: 'absolute',
  },
})
