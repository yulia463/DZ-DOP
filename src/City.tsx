import React from 'react';
import {CurrentBankomat} from "./CurrentBankomat";
import {MoneyType} from "./App";
import styled from "styled-components";

type CityPropsType = {
    data: MoneyType[]
}

export const City = (props: CityPropsType) => {

    // пока это пропускам
    // const mappedMoney = props.data.map((el: MoneyType, index) => (
    //     <CurrentBankomat
    //         key={index}
    //         money={el}
    //     />
    // ))

    const mappedData =
        props.data.map(el => {
            return (
                <CurrentBankomat key={el.number} money={el}/>
            )
        })

    return (
        <div>
            <Wrapper>{mappedData}</Wrapper>
        </div>
    );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 30px;
`


export const Button = styled.a` 
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white; /* The GitHub button is a primary button * edit this to target it specifically! */
    `




// yarn add styled-components
// yarn add @types/styled-components


// Вроде все норм, ну точнее почти норм- дублирование-это грех. Хотелось бы от него избавиться.
// И StyledComponents нам в этом отлично поможет, ведь он может принимать пропсы!
// Как это сделать в документашке