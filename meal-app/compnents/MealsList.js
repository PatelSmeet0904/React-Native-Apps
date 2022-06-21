import {View, FlatList, StyleSheet} from 'react-native'
import MealItem from './MealItem'

function MealsList({items}){
    function renderMealItem(itemData){

        const item = itemData.item

        const mealItem = {
            id: item.id,
            title: item.title,
            img: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability
        }

        return <MealItem {...mealItem} />
    }

    // <mealItem title={} />
    return (
        <View style={styles.container}>
            <FlatList data={items} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
        </View>
    )
}

export default MealsList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
}) 