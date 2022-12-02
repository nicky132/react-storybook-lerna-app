import React, { FC } from 'react';
import { Card, Button } from '@nicky/base';
const CardBtn = () => {
  const btn = <Button text="OK" onClick={() => console.log('ok123456')} />;
  return <Card content={btn}></Card>;
};
export default CardBtn;
