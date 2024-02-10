/*Here we define all the application level states and define
 actions to make the changes to the state*/

const initialState = {
  basket: [],
}

const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => amount + item.price, 0)
}

//Selector
const reducer = (state, action) => {
  switch (action.type) {
    case 'add_to_basket':
      return {
        ...state,
        basket: [...state.basket, action.payload],
      }

    case 'remove_from_basket':
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.payload
      )
      let newBasket = [...state.basket]
      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn(
          `Can't remove product (id:${action.id}) as it is not in the basket`
        )
      }
      return {
        ...state,
        basket: newBasket,
      }

    default:
      return state
  }
}

export { initialState, getBasketTotal }
export default reducer
