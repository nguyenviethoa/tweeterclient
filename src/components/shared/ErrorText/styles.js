import { StyleSheet } from 'react-native';

const errorStyles = StyleSheet.create({
  errorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  errorText: {
    fontSize: 15,
    color: '#ff0000',
  },
});

export default errorStyles;
