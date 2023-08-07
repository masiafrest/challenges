import DropdownArrow from '../DropdownArrow/DropdownArrow'
import {IoMdArrowBack} from 'react-icons/io'

import './index.scss'


export default function Header() {

  return (
      <header>
        <span className='back_arrow'>
          <IoMdArrowBack /> 
        </span>
        <span className='market_order'>
          Market order <DropdownArrow dir='down' color='royalblue'/>
        </span>
      </header>
  )
}
