import React from 'react'
import { useDispatch } from 'react-redux'

import Tag from '../Tag'
import Button from '../Button'

import { parceToBrl } from '../../utils'
import { add, open } from '../../store/reducers/cart'

import * as S from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <S.infosTag>
          <Tag size="small">{game.details.category}</Tag>
          <Tag size="small">{game.details.system}</Tag>
        </S.infosTag>
        <S.infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && <span>{parceToBrl(game.prices.old)}</span>}
            {game.prices.current && <>Por {parceToBrl(game.prices.current)}</>}
          </p>
          {game.prices.current && (
            <Button
              type="button"
              variant="primary"
              title="Adicionar este jogo ao carrinho"
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </S.infos>
      </div>
    </S.Banner>
  )
}

export default Hero
