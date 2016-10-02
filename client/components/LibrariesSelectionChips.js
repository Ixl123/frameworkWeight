import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import Badge from 'material-ui/Badge';
import AutoCompleteExampleSimple from './LibrariesAutoComplete'
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
        <h4>Frameworks</h4>
        <AutoCompleteExampleSimple {...this.props} />
        <div style={ styles.wrapper }>
          { libraries.map((javaScriptLibrary, i) => (javaScriptLibrary.size <= this.props.progress.budget && i <= 50) ?
            
              <Badge
                     key={ javaScriptLibrary.name }
                     badgeContent={ javaScriptLibrary.size + ' KB' }
                     primary={ true }
                     badgeStyle={ { width: 45, height: 45 } }>
                <Chip style={ styles.chip }>
                  <Avatar
                          size={ 16 }
                          src={ javaScriptLibrary.favicon } />
                  { javaScriptLibrary.name }
                  { ' (' + javaScriptLibrary.version + ')' }
                </Chip>
              </Badge> : null) }
        </div>
        <Divider/>
      </div>
      );
  }
}