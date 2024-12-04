import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import teamStyles from '../styles/teamStyles';
import buttonStyles from '../styles/buttonStyles';

const TeamScore = ({ teamName, score, onAdd, onSubtract }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <View style={teamStyles.teamContainer}>
      <Text style={teamStyles.teamName}>{teamName}</Text>
      <Text style={teamStyles.score}>{score}</Text>
      <View style={teamStyles.buttonRow}>
        <TouchableOpacity
          style={[
            buttonStyles.button,
            isPressed && buttonStyles.buttonPressed,
          ]}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          onPress={onAdd}>
          <Text style={buttonStyles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            buttonStyles.button,
            isPressed && buttonStyles.buttonPressed,
          ]}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          onPress={onSubtract}>
          <Text style={buttonStyles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TeamScore;
