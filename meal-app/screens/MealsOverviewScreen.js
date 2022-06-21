import { useLayoutEffect } from 'react';
import MealsList from '../compnents/MealsList';
import { CATEGORIES, MEALS } from '../data/dummy-data'

function MealsOverviewScreen({ route, navigation }) {

    const catID = route.params.categoriesId

    const displyeMeal = MEALS.filter((mealData) => {
        return mealData.categoryIds.indexOf(catID) >= 0
    })

    useLayoutEffect(() => {

        const categoryTitle = CATEGORIES.find((category) => category.id === catID).title
        navigation.setOptions({title: categoryTitle})

    }, [navigation, catID])

    return <MealsList items={displyeMeal} />
}

export default MealsOverviewScreen;

