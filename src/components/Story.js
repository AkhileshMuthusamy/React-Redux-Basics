import React from 'react';
import './Story.css';
import { connect } from 'react-redux';
import { doArchiveStory } from '../actions/archive';
import { ButtonInline } from './Button';

const Story = ({ story, columns, onArchive }) => {
  // console.log(columns);
  const { title, url, author, num_comments, points, objectID } = story;
  return (
    <div className="story">
      <span style={{ width: columns.title.width }}>
        <a href={url}>{title}</a>
      </span>
      <span style={{ width: columns.author.width }}>{author}</span>
      <span style={{ width: columns.comments.width }}>{num_comments}</span>
      <span style={{ width: columns.points.width }}>{points}</span>
      <span style={{ width: columns.archive.width }}>
        <ButtonInline onClick={() => onArchive(objectID)}>Archive</ButtonInline>
      </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onArchive: id => dispatch(doArchiveStory(id))
});

export default connect(
  null,
  mapDispatchToProps
)(Story);
