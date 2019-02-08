import React, {Component} from 'react';
import './App.css';
import Burger from './components/Burger/Burger';
import BurgerForm from './components/BurgerForm/BurgerForm';


// список доступных ингредиентов
const availableIngredients = [
    {name: 'salad', price: 5, label: 'Салат'},
    {name: 'cheese', price: 20, label: 'Сыр'},
    {name: 'meat', price: 50, label: 'Мясо'},
    {name: 'bacon', price: 30, label: 'Бекон'}
];


class App extends Component {
    state = {
        ingredients: {
            salad: {count: 0, total: 0},
            cheese: {count: 0, total: 0},
            meat: {count: 0, total: 0},
            bacon: {count: 0, total: 0}
        },
        total: 0
    };

    addIngredient = (name) => {
        // скопировать ингредиент
        let ingredient = {...this.state.ingredients[name]};

        // поменять свойства в копии ингредиента
        // find - метод массива, который работает аналогично findIndex,
        // но находит не индекс элемента в массиве,
        // а возвращает сам элемент.
        let price = availableIngredients.find(item => item.name === name).price;
        ingredient.count += 1;
        ingredient.total = ingredient.count * price;

        // скопипровать объект "ингредиенты"
        let ingredients = {...this.state.ingredients};

        // поменять ингредиент в копии объекта "ингредиенты"
        ingredients[name] = ingredient;

        // скопировать состояние (state) компонента App.js
        let state = {...this.state};

        // поменять объект "игредиенты" в копии состояния (state)
        state.ingredients = ingredients;
        this.getCost(state);
        // задать новый state с перерисовкой компонентов на странице
        this.setState(state);
    };

    removeIngredient = (name) => {
        // всё то же самое, что и в addIngredient
        // только количество уменьшается на 1, а не увеличивается
        // и есть проверка, что нельзя уменьшить количество ингредиента меньше 0

        let ingredient = {...this.state.ingredients[name]};
        let price = availableIngredients.find(item => item.name === name).price;
        if (ingredient.count > 0) {
            ingredient.count -= 1;
        }
        ingredient.total = ingredient.count * price;

        let ingredients = {...this.state.ingredients};
        ingredients[name] = ingredient;

        let state = {...this.state};
        state.ingredients = ingredients;
        this.setState(state);
    };

    getCost = () => {
        return 20+this.state.ingredients.salad.total+this.state.ingredients.cheese.total+this.state.ingredients.meat.total+this.state.ingredients.bacon.total;
    }

    render() {
        return (
            <div className="App">
                <Burger ingredients={this.state.ingredients}/>
                <p> Current Price : {this.getCost()} KGS</p>
                {/* здесь вывести панель с общей ценой */}
                {/* для подсчёта цены можно добавить метод в App.js */}
                {/* и вызвать его в фигурных скобках в JSX, */}
                {/* чтобы получить и вывести результат. */}
                <BurgerForm add = {this.addIngredient} sub = {this.removeIngredient} ></BurgerForm>
                {/* под ценой вывести форму BurgerForm */}
                {/* в форме вывести IngredientControl для каждого ингредиента */}
            </div>
        );
    }
}

export default App;
