import { useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MealsList from '../compnents/MealsList'
import { MEALS } from '../data/dummy-data';
import { FavoritesContext } from '../store/context/favorites-context';

function FavoriteItemsScreen() {

    const favoritesMealCtx = useContext(FavoritesContext);
    const favoriteMeals = MEALS.filter(meal => favoritesMealCtx.ids.includes(meal.id))

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>You have no favorite Meals yet.</Text>
            </View>
        )
    }

    return <MealsList items={favoriteMeals} />
}

export default FavoriteItemsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white'
    }
})