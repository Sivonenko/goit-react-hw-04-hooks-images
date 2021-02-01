import React, { Component } from 'react';
import Section from './Components/Section';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import axiosApi from './Components/Service/AxiosAPI';
import LoaderBtn from './Components/Button';
import LoaderSpinner from './Components/Loader/Loader';
import { animateScroll as scroll } from 'react-scroll';

import Modal from './Components/Modal/Modal';
import './App.css';

class App extends Component {
  state = {
    articles: [],
    query: '',
    page: 1,
    loading: false,
    showModal: false,
    url: '',
  };

  toogleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };

  handleAddQuery = text => {
    this.setState({
      query: text,
      page: 1,
      articles: [],
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    if (prevQuery !== nextQuery) {
      this.AxiosArticles();
    }
  }

  AxiosArticles = () => {
    const { query, page } = this.state;

    this.setState({ loading: true });

    axiosApi
      .axiosApiWithQuery(query, page)
      .then(data =>
        this.setState(prevState => {
          return {
            articles: [...prevState.articles, ...data],
            page: prevState.page + 1,
          };
        }),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleClick = () => {
    this.AxiosArticles();
    scroll.scrollToBottom();
  };

  handleAddUrlToModal = url => {
    this.toogleModal();
    this.setState(preveState => ({ url: (preveState.url = url) }));
  };

  render() {
    const { articles, loading, showModal, url } = this.state;

    return (
      <>
        <Section>
          <Searchbar addQueryOnSubmit={this.handleAddQuery} />
        </Section>

        <Section>
          {loading && <LoaderSpinner />}
          {articles.length > 0 && (
            <ImageGallery array={articles} onClick={this.handleAddUrlToModal} />
          )}
          {articles.length > 0 && <LoaderBtn onClick={this.handleClick} />}
          {showModal && (
            <Modal onClick={this.toogleModal}>
              {' '}
              <img src={url} alt="" />{' '}
            </Modal>
          )}
        </Section>
      </>
    );
  }
}

export default App;
