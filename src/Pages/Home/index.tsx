import React from 'react'

import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../service/api'

const Home = () => {
  const { data: onSaleGames, isLoading: loadingOnSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: loadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductList
        id="onSale"
        games={onSaleGames}
        title="Promoções"
        background="gray"
        isLoading={loadingOnSale}
      />
      <ProductList
        id="soon"
        games={soonGames}
        title="Em breve"
        background="black"
        isLoading={loadingSoon}
      />
    </>
  )
}

export default Home
