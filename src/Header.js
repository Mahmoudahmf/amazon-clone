import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
function Header() {
    return (
        <div className='header'>
            <img className='header__logo' alt="amazone logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png'/>

            <div className='header__search'>
              <input className='headre__searchInPut' type="text" />
              <SearchIcon className="header__searchIcon"/>
            </div>

            <div className='header__nav'>

                <div className= "header__option">
                    <span className="header__optionOne">
                      Hello Guest
                    </span>

                    <span className="header__optionTwo">
                      Sign In
                    </span>

                </div>

                <div className= "header__option">
                    <span className="header__optionOne">
                      Returns
                    </span>

                    <span className="header__optionTwo">
                      & Orders
                    </span>

                </div>

                <div className= "header__option">
                    <span className="header__optionOne">
                      Your
                    </span>

                    <span className="header__optionTwo">
                      Prime
                    </span>

                </div>

                <div className="header__optionBasket">
                 <ShoppingBasketIcon/>
                 <span className="header__optionLineTwo header__basketCount">0</span>
                </div>

            </div>

            
        </div>
    )
}

export default Header
