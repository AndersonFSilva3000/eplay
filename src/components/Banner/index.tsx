import Tag from '../Tag'
import Button from '../Button'
import Loader from '../Loader'

import { useGetFeatuareGameQuery } from '../../service/api'
import { parceToBrl } from '../../utils'

import * as S from './styles'

const Banner = () => {
  const { data: game } = useGetFeatuareGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do Dia</Tag>
        <div>
          <S.Title>{game?.name}</S.Title>
          <S.Prices>
            De <span>{parceToBrl(game.prices.old)}</span> <br />
            por apenas {parceToBrl(game.prices.current)}
          </S.Prices>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar essa oferta."
        >
          Aproveitar
        </Button>
      </div>
    </S.Image>
  )
}

export default Banner