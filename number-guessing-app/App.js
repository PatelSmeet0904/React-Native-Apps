import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import { useFonts } from 'expo-font';
// import AppLoading from 'expo-app-loading'

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState()
  const [gameIsOver, setGameIsOver] = useState(false)
  const [gameRound, setGameRound] = useState(0)

  function userNumberHandler(number) {
    setUserNumber(number)
  }

  function gameOverHandler(totalRound){
    setGameIsOver(true)
    setGameRound(totalRound)

  }

  function startNewGameHandler(){
    setUserNumber(null)
    setGameIsOver(false)
  }

  let screen = <StartGameScreen onConfirmNumber={userNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userGuess={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver){
    screen = <GameOverScreen totalRound={gameRound} userNumber={userNumber} onStartNewGame={startNewGameHandler} />
  }

  return (
    <LinearGradient colors={['#891536', '#ae9d00']} style={styles.container}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.container}
        imageStyle={styles.img}
      >
        <SafeAreaView style={styles.container}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    opacity: 0.20,

  }
});

