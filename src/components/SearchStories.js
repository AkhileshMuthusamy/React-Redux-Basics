import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { doFetchStories } from '../actions/story';

class SearchStories extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.query} onChange={this.onChange} />
        <Button type="submit">Search</Button>
      </form>
    );
  }

  onSubmit(event) {
    const { query } = this.state;
    if (query) {
      this.props.onFetchStories(query);
      this.setState({ query: '' });
    }
    event.preventDefault();
  }

  onChange(event) {
    const { value } = event.target;
    this.setState({ query: value });
  }
}

const mapDispatchToProps = dispatch => ({
  onFetchStories: query => dispatch(doFetchStories(query))
});

export default connect(
  null,
  mapDispatchToProps
)(SearchStories);
