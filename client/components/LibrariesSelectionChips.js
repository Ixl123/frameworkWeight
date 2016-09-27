import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import Badge from 'material-ui/Badge';

import { blue300, indigo900 } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

function handleRequestDelete() {
  alert('You clicked the delete button.');
}

function handleTouchTap() {
  alert('You clicked the Chip.');
}

/**
 * Examples of Chips, using an image [Avatar](/#/components/font-icon), [Font Icon](/#/components/font-icon) Avatar,
 * [SVG Icon](/#/components/svg-icon) Avatar, "Letter" (string) Avatar, and with custom colors.
 *
 * Chips with the `onRequestDelete` property defined will display a delete icon.
 */
export default class LibrariesSelectionChips extends React.Component {

  render() {
    const libraries = this.props.libraries;

    return (
      <div>
        <h4>JavaScript Frameworks</h4>
        <div style={ styles.wrapper }>
          { libraries[0].map((javaScriptLibraries, i) => javaScriptLibraries.size_compressed <= this.props.progress.budget ?
              <Badge
                     badgeContent={ javaScriptLibraries.size_compressed + ' KB' }
                     primary={ true }
                     badgeStyle={ { width: 40, height: 40 } }>
                <Chip key={ i }>
                  <Avatar src={ javaScriptLibraries.img } />
                  { javaScriptLibraries.name }
                </Chip>
              </Badge> : null) }
        </div>
        <Divider/>
        <h4>CSS Frameworks</h4>
        <div style={ styles.wrapper }>
          { libraries[1].map((cssLibraries, i) => cssLibraries.size_compressed <= this.props.progress.budget ? <Badge
                                                                                                                      badgeContent={ cssLibraries.size_compressed + ' KB' }
                                                                                                                      primary={ true }
                                                                                                                      badgeStyle={ { width: 40, height: 40 } }>
                                                                                                                 <Chip key={ i }>
                                                                                                                   <Avatar src={ cssLibraries.img } />
                                                                                                                   { cssLibraries.name }
                                                                                                                 </Chip>
                                                                                                               </Badge> : null) }
        </div>
      </div>
      );
  }
}