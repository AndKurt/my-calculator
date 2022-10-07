import { Calculation } from '@components/Calculation'
import { savePathToLS } from '@utils/localStorageFunc'
import React, { useEffect } from 'react'
import { HomeContainer, HomeWrapper } from './components'

export const HomePage = () => {
	useEffect(() => {
		savePathToLS(window.location.href.split('/')[3])
	}, [])

	return (
		<HomeWrapper>
			<HomeContainer>
				<Calculation />
			</HomeContainer>
		</HomeWrapper>
	)
}
