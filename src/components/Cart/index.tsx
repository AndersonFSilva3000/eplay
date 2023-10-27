import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'
import Tag from '../Tag'

import { RootReducer } from '../../store/configureStore'
import { close, remove } from '../../store/reducers/cart'
import { getTotalPrince, parceToBrl } from '../../utils'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay
        onClick={closeCart}
        className="animate__animated  animate__fadeOutRight"
      />
      <S.SideBar>
        {items.length > 0 ? (
          <>
            <ul className="animate__animated animate__fadeInRight">
              {items.map((item) => (
                <S.CardItem key={item.id}>
                  <img src={item.media.thumbnail} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <Tag size="small">{item.details.category}</Tag>
                    <Tag size="small">{item.details.system}</Tag>
                    <span>{parceToBrl(item.prices.current)}</span>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    type="button"
                  ></button>
                </S.CardItem>
              ))}
            </ul>
            <S.Quantity>{items.length} jogo(s) no carrinho</S.Quantity>
            <S.Princes>
              Total de {parceToBrl(getTotalPrince(items))}{' '}
              <span>Em até 6x se juros</span>
            </S.Princes>
            <Button
              onClick={goToCheckout}
              title="Clique aqui para continuar com as compra"
              type="button"
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione ao menos um produto para continuar a
            compra
          </p>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
