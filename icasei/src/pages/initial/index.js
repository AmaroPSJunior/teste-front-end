import React, { Component } from 'react';
import Pesquisar from '../../components/pesquisar';
import { Link } from 'react-router-dom';
import './styles.scss';

const Initial = () => (
  <div className="Initial">
    <Pesquisar />
    <Link href={`videodetails/${Link}`}>link</Link>
  </div>
);

export default Initial;