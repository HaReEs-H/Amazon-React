import React, { useContext, useReducer, createContext } from 'react'
//Prepares the data layer
const BasketContext = createContext()

//Wrap our app and provide the data layer
const BasketProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <BasketContext.Provider value={{ state, dispatch }}>
      {children}
    </BasketContext.Provider>
  )
}

//Pull information from the data layer
const useStateValue = () => {
  return useContext(BasketContext)
}

export { useStateValue, BasketContext }
export default BasketProvider
