import { useLinkProps } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Text, TextInput } from 'react-native';

export default FormInput = ({title, placeholderInput, styleText, styleInput,  ...rest }) => {
  return (
    <>
    {title !== undefined ? <Text style={styleText}>{title}</Text> : null}
      <TextInput 
        placeholder={placeholderInput} 
        style={styleInput}
        {...rest} 
      />
    </>
  );
}