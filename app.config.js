import config from './app/config'

export default {
  name: config.name,
  icon: `./${config.icon}`,
  splash: {
    image:  `./${config.splash.image}`,
    resizeMode: config.splash.resizeMode,
    backgroundColor: config.splash.backgroundColor
  },
  android: {
    adaptiveIcon: {
      backgroundColor: config.android.adaptiveIcon.backgroundColor,
      foregroundImage: `./${config.android.adaptiveIcon.foregroundImage}`,
    },
    icon: `./${config.icon}`,
    package: config.package,    
  },
  ios: {    
    bundleIdentifier: config.package,  
  },
}