import React from 'react';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import LibrariesIncludedList from './LibrariesIncludedList.js';
const {Grid, Row, Col} = require('react-flexbox-grid');
const LibrariesGrid = () => (

<div>
  <Grid>
    <Row>
      <Col
           xs={ 12 }
           md={ 6 }>
      <Subheader>
        Left libraries which are currently included and right libraries which are currently excluded
      </Subheader>
      <LibrariesIncludedList></LibrariesIncludedList>
      </Col>
      <Col
           xs={ 12 }
           md={ 6 }>
      <Subheader>
        Left libraries which are currently included and right libraries which are currently excluded
      </Subheader>
      <LibrariesIncludedList></LibrariesIncludedList>
      </Col>
    </Row>
  </Grid>
</div>
);

export default LibrariesGrid;