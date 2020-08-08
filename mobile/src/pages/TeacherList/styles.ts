import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F7',
  },

  teacherList: {
    marginTop: -40
  },

  searchForm: {
    marginBottom: 24
  },

  label: {
    fontFamily: 'Poppins_400Regular',
    color: '#D4C2FF'
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  input: {
    height: 54,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 4,
    marginBottom: 16
  },

  inputBlock: {
    width: '48%'
  },

  submitButton: {
    backgroundColor: '#04D361',
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  submitButtonText: {
    color: '#FFF',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
  }
});

export default styles;
