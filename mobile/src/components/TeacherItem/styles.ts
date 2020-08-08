import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#E5E5F0',
    marginBottom: 16,
    overflow: 'hidden'
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#EEE'
  },

  profileInfo: {
    marginLeft: 16
  },

  name: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#32264d'
  },

  subject: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#6A6180',
    marginTop: 4
  },

  bio: {
    marginHorizontal: 24,
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 24,
    color: '#6A6180'
  },

  footer: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#FAFAFC',
    marginTop: 24
  },

  price: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#6A6180'
  },

  priceValue: {
    fontFamily: 'Archivo_700Bold',
    color: '#8257E5',
    fontSize: 16
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },

  favoriteButton: {
    backgroundColor: '#8257E5',
    width: 56,
    height: 56,
    borderRadius: 8,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },

  favorited: {
    backgroundColor: '#E33D3D'
  },

  contactButton: {
    backgroundColor: '#04D361',
    height: 56,
    borderRadius: 8,
    marginRight: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  contactButtonText: {
    color: '#FFF',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    marginLeft: 16
  }
});

export default styles;
