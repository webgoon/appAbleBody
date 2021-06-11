import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>Help flatten the cruve. If you must travel, please pretty please excercise caution for your safety and the safety of our community.</Text>
      <Text style={styles.learnMore}>Learn More</Text>
    </View>
  )
}

export default CovidMessage
