import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import style from './Loader.module.css';

export default class Load extends Component {
  //other logic
  render() {
    return (
      <Loader
        className={style.loader}
        type="Rings"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  }
}
