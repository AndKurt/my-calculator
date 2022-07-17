import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { logger } from 'redux-logger'
import { calculatorReducer } from './reducers/calculator'

const rootReducer = combineReducers({ calculatorReducer })

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) => [
			...getDefaultMiddleware(),
			//logger
		],
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
