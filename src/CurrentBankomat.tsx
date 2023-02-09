import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (
        <>
            <Banknote color={props.money.banknotes === "Dollars" ? "blue" : "chartreuse"  }>
                <div>{props.money.banknotes}</div>
                <div>{props.money.value}</div>
                <div>{props.money.number}</div>
            </Banknote>



            {/*{props.money.banknotes === "Dollars"*/}
            {/*    ?*/}
            {/*    <BanknoteGreen>*/}
            {/*        <div>{props.money.banknotes}</div>*/}
            {/*        <div>{props.money.value}</div>*/}
            {/*        <div>{props.money.number}</div>*/}
            {/*    </BanknoteGreen>*/}
            {/*    :*/}
            {/*    <BanknoteBlue>*/}
            {/*        <div>{props.money.banknotes}</div>*/}
            {/*        <div>{props.money.value}</div>*/}
            {/*        <div>{props.money.number}</div>*/}
            {/*    </BanknoteBlue>*/}
            {/*}*/}
        </>
    );
};

const Banknote = styled.div`
  background-color: ${props => {
      if(props.color=== "blue"){
          return "chartreuse"
      }else{
          return "#61dafb"
      }
  }};
  width: 400px;
  height: 200px;
  margin: 10px;
`

//
// const BanknoteGreen = styled.div`
//   background-color: #aad47a;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `
//
// const BanknoteBlue = styled.div`
//   background-color: #61dafb;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `