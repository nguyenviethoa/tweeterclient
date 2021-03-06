import {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  toyContainer: {
    borderWidth: 1,
    flex: 0.49,
  },
  toyHeader: {
    flexDirection: 'row',
    padding: 7,
    alignItems: 'center',
  },
  toyTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 26,
    flex: 1,
  },
  toyStatus: {
    width: 20,
    height: 20,
    backgroundColor: 'green',
    borderRadius: 10,
    borderWidth: 1,
  },
  toyFooter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
  }
});
