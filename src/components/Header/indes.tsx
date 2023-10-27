import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import Logo from '../../asents/images/logo.svg'
import Carrinho from '../../asents/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/configureStore'

import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamgurguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamgurguer>
          <Link to="/">
            <h1>
              <img src={Logo} alt="Logo egames" />
            </h1>
          </Link>
          <nav>
            <S.Links>
              <S.LinkItens>
                <Link
                  title="Clique aqui para acessar a seção de Categorias"
                  to="/categories"
                >
                  Categorias
                </Link>
              </S.LinkItens>
              <S.LinkItens>
                <HashLink
                  title="Clique aqui para acessar a seção de Em breve"
                  to="/#soon"
                >
                  Em breve
                </HashLink>
              </S.LinkItens>
              <S.LinkItens>
                <HashLink
                  title="Clique aqui para acessar a seção de Promoções"
                  to="/#onSale"
                >
                  Promoções
                </HashLink>
              </S.LinkItens>
            </S.Links>
          </nav>
        </div>
        <S.CartButton role="button" onClick={openCart}>
          {items.length} <span>- produto(s)</span>
          <img src={Carrinho} alt="Carrinho" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkItens>
            <Link
              onClick={() => setIsMenuOpen(false)}
              title="Clique aqui para acessar a seção de Categorias"
              to="/categories"
            >
              Categorias
            </Link>
          </S.LinkItens>
          <S.LinkItens>
            <HashLink
              onClick={() => setIsMenuOpen(false)}
              title="Clique aqui para acessar a seção de Em breve"
              to="/#soon"
            >
              Em breve
            </HashLink>
          </S.LinkItens>
          <S.LinkItens>
            <HashLink
              onClick={() => setIsMenuOpen(false)}
              title="Clique aqui para acessar a seção de Promoções"
              to="/#onSale"
            >
              Promoções
            </HashLink>
          </S.LinkItens>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
