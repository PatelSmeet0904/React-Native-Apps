import { useContext, useLayoutEffect } from 'react'
import { Text, Image, View, ScrollView, StyleSheet } from 'react-native'

import IconButton from '../compnents/IconButton'
import List from '../compnents/Meal Details/List'
import Subtitle from '../compnents/Meal Details/subtitle'
import { MEALS } from '../data/dummy-data'
import { FavoritesContext } from '../store/context/favorites-context'

function MealDetailScreen({ route, navigation }) {
    const favoriteMealsContext = useContext(FavoritesContext)

    const mealID = route.params.mealID
    const selectedMeal = MEALS.find((meal) => meal.id === mealID)

    const mealIsFavorite = favoriteMealsContext.ids.includes(mealID)

    function favoriteButtonHandler() {
        if (mealIsFavorite) {
            favoriteMealsContext.removeFavourites(mealID)
        } else {
            favoriteMealsContext.addFavourites(mealID)
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton
                    name={mealIsFavorite ? 'star' : 'star-outline'}
                    color='white' onPress={favoriteButtonHandler} />
            }
        })
    }, [favoriteButtonHandler, navigation])

    return (
        <ScrollView style={styles.root}>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.img} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <View style={styles.detailsContainer}>
                <Text style={styles.details}>{selectedMeal.duration}m</Text>
                <Text style={styles.details}>{selectedMeal.complexity}</Text>
                <Text style={styles.details}>{selectedMeal.affordability}</Text>
            </View>
            <View style={styles.listContainer}>
                <Subtitle>Ingredients</Subtitle>
                <List data={selectedMeal.ingredients} />
                <Subtitle>Steps</Subtitle>
                <List data={selectedMeal.steps} />
            </View>
        </ScrollView>
    )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    root: {
        marginBottom: 32
    },
    img: {
        height: 350,
        width: '100%',
    },
    title: {
        textAlign: 'center',
        padding: 12,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    listContainer: {
        margin: 12
    },
    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 4
    },
    details: {
        fontSize: 14,
        marginHorizontal: 4,
        color: '#e5dcdc'
    }
})