import React from 'react';
import { connect } from 'react-redux';
import './Stories.css';
import Story from './Story';
import { getReadableStories, getFetchError } from '../selectors/story';

const COLUMNS = {
  title: {
    label: 'Title',
    width: '40%'
  },
  author: {
    label: 'Author',
    width: '30%'
  },
  comments: {
    label: 'Comments',
    width: '10%'
  },
  points: {
    label: 'Points',
    width: '10%'
  },
  archive: {
    width: '10%'
  }
};

const Stories = ({ stories, error }) => {
  // console.log(stories);
  return (
    <div className="stories">
      <StoriesHeader columns={COLUMNS} />
      {error && (
        <div>
          <p className="error">Something went wrong...</p>
          <p className="error">{error.message}</p>
        </div>
      )}
      {(stories || []).map(story => (
        <Story key={story.objectID} story={story} columns={COLUMNS} />
      ))}
    </div>
  );
};

const StoriesHeader = ({ columns }) => {
  return (
    <div className="stories-header">
      {Object.keys(columns).map(key => {
        // console.log(key);
        return (
          <span key={key} style={{ width: columns[key].width }}>
            {columns[key].label}
          </span>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  stories: getReadableStories(state),
  error: getFetchError(state)
});

export default connect(mapStateToProps)(Stories);
