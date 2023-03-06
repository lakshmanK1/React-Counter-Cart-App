import React,{useContext} from 'react'
import { ContextStore } from '../Store/ContextApi'

import { DivStyle, InnerDiv, IncreBtn, DecreBtn, DeleteBtn, HOne, ResetBtn } from './CounterStyledCmp';
import {AiOutlineDelete} from 'react-icons/ai';
import {BsCart3} from 'react-icons/bs';
import {GrPowerReset} from 'react-icons/gr'

function Counter() {
    const cntxStore = useContext(ContextStore);

    const CartIcon = {
        width:'35px',
         height:'30px',
          color: '#F24973',
          margin:'20px'
    }

    const ResetIcon = {
        width:'15px',
         height:'15px',
        color: '#1b49ea',
    }

  return (
    <div>
        <div style={{display:'flex'}}>
        <BsCart3 style={CartIcon}/>
        <HOne>{cntxStore.totalQnty}</HOne>
        </div>
        <ResetBtn onClick={()=>{cntxStore.resetAllItems()}}><GrPowerReset style={ResetIcon}/>RESET</ResetBtn>
        {
            cntxStore.itemsArr.map((data)=>{
                return( 
                <DivStyle key={data.id}>
                    <InnerDiv>{data.qnty}</InnerDiv>
                    <IncreBtn onClick={()=>{cntxStore.incrementCount(data.id)}}>+</IncreBtn>
                    <DecreBtn onClick={()=>{cntxStore.decrementCount(data.id)}}>-</DecreBtn>
                    <DeleteBtn onClick={()=>{cntxStore.removeItem(data.id)}}><AiOutlineDelete/></DeleteBtn>
                </DivStyle>
                );
            })
        }
    </div>
  )
}

export default Counter