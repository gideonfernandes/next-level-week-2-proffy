import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#8257E5'
  },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    marginVertical: 40,
    maxWidth: 160,
    lineHeight: 32,
    fontSize: 24
  }
});

export default styles;
