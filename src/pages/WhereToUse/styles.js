import { FaTaxi } from 'react-icons/fa';
import { GiOpenBook } from 'react-icons/gi';
import { MdRestaurant } from 'react-icons/md';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Restaurant = styled(MdRestaurant)`
  width: 70px;
  height: 70px;
  margin: 15px;
  @media (max-width: 770px) {
    margin: 12px;
    width: 56px;
    height: 56px;
  }
`;

export const Book = styled(GiOpenBook)`
  width: 70px;
  height: 70px;
  margin: 15px;
  @media (max-width: 770px) {
    margin: 12px;
    width: 56px;
    height: 56px;
  }
`;

export const Taxi = styled(FaTaxi)`
  width: 70px;
  height: 70px;
  margin: 15px;
  @media (max-width: 770px) {
    margin: 12px;
    width: 56px;
    height: 56px;
  }
`;

export const Category = styled.div`
  height: 105px;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  left: 12.5%;
  top: 24%;
  width: 100%;
  align-items: center;
`;

export const Round = styled.button`
  border: none;
  background: #fa8929;
  margin: 0 auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  color: white;
  display: inline-block;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #fe7600;
    cursor: pointer;
    transform: scale(1.1,1.1);
  }
`;

export const ItemList = styled.li`
  align-items: center;
  display: flex;
  margin: 30px;
  background:white;
  border: 2px solid #fa8929;
  border-radius: 15px;
  padding: 10px;
  
`;
export const CenterImg = styled.div` 
  width: 100%; 
  display: flex;
  justify-items: center;
`;
export const Img = styled.img`
  width: 170px;
  height: 150px;
  margin: 0 auto;
  border-radius: 10px;
`;

export const Info = styled.div`
  display:flex;
  text-align: center;
  flex-direction: column;
  color: black;
  &>h3, &>h2{
    font-size: 1.3em;
  }
  &>h2{
    margin-bottom: 15px;
  }
  &>h3{
    font-weight: normal;
  }
`;

export const Ul = styled.ul`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
`;