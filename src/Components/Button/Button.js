import React, { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import style from './Loader.module.css';

export default class LoadBtn extends Component {
  componentDidMount() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }
  render() {
    return (
      <button className={style['btn_loader']} onClick={this.props.onClick}>
        Load More
      </button>
    );
  }
}
