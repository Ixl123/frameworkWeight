import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import LibrariesIncludedList from './LibrariesIncludedList.js';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  }

};


const LibrariesGrid = () => (
<div style={ styles.root }>
  <GridList>
    <Subheader>
      Left libraries which are currently included and right libraries which are currently excluded
    </Subheader>
    <LibrariesIncludedList></LibrariesIncludedList>
  </GridList>
  <GridList>
    <Subheader>
      Left libraries which are currently included and right libraries which are currently excluded
    </Subheader>
    <LibrariesIncludedList></LibrariesIncludedList>
  </GridList>
</div>
);

export default LibrariesGrid;