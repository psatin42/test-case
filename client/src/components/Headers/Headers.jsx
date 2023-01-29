import React from 'react';
import HeaderCard from '../HeaderCard/HeaderCard';
import './Headers.css';

const headers = [
  { title: 'Расход', img: '/image_1.svg' },
  { title: 'Давление', img: '/image_2.svg' },
  { title: 'Температура', img: '/image_3.svg' },
];

export default function Headers() {
  return (
    <div className="headers">
      {headers.map((el) => <HeaderCard title={el.title} key={el.title} img={el.img} />)}
    </div>
  );
}
