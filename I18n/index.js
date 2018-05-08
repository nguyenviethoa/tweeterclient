import I18n, { getLanguages } from 'react-native-i18n'

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true

I18n.translations = {
  en: {
    "signup": {
      "title": "Signup Twitter",
      "account": "Already Have Account? ",
      "login": "Login Here",
      "login_with": "...or login with:",
    },
  },
}

export default I18n;
