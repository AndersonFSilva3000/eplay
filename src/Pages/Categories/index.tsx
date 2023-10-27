import React from 'react'

import ProductList from '../../components/ProductList'

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetFightGamesQuery,
  useGetSimulationGamesQuery,
  useGetRpgGamesQuery
} from '../../service/api'

const Categories = () => {
  const { data: gamesAction, isLoading: loadingAction } =
    useGetActionGamesQuery()
  const { data: gamesSport, isLoading: loadingSport } = useGetSportGamesQuery()
  const { data: gamesSimulation, isLoading: loadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: gamesFight, isLoading: loadingFight } = useGetFightGamesQuery()
  const { data: gamesRpg, isLoading: loadingRpg } = useGetRpgGamesQuery()

  return (
    <>
      <ProductList
        id="action"
        games={gamesAction}
        title="Ação"
        background="black"
        isLoading={loadingAction}
      />
      <ProductList
        id="sports"
        games={gamesSport}
        title="Esportes"
        background="gray"
        isLoading={loadingSport}
      />
      <ProductList
        id="figth"
        games={gamesFight}
        title="Luta"
        background="black"
        isLoading={loadingFight}
      />
      <ProductList
        id="rpg"
        games={gamesRpg}
        title="RPG"
        background="gray"
        isLoading={loadingRpg}
      />
      <ProductList
        id="simulation"
        games={gamesSimulation}
        title="Simulação"
        background="black"
        isLoading={loadingSimulation}
      />
    </>
  )
}

export default Categories
