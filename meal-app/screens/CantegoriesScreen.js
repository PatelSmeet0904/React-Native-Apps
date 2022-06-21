import {FlatList} from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoriesGridTile from '../compnents/CategoriesGridTile'


function CategoriesScreen({navigation}){
    function renderCategoriesItem(itemData){
        function pressHandler(){
            navigation.navigate('MealsOverview', {categoriesId: itemData.item.id,})
        }

        return <CategoriesGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />
    }

    return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoriesItem} numColumns={2} />
}

export default CategoriesScreen