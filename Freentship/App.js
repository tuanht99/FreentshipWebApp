import register from './theme/themeRegister';
import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
// Using DB Reference
import { db } from './core/config'
import React, { Component } from 'react';
import InputPhoneNumScreen from './component/InputPhoneNumScreen';

class NoteTaker extends Component {
  render() {
    return (
      <InputPhoneNumScreen />
    );
  }
}

export default NoteTaker;
