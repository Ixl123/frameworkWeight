import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import Badge from 'material-ui/Badge';
import LibrariesAutoComplete from './LibrariesAutoComplete'
import { blue300, indigo900 } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import FlatButton from 'material-ui/FlatButton';
import { List, ListItem } from 'material-ui/List';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    height: 300,
    overflow: 'hidden'
  },
};
/**
 * libraries chips component. 
 */
export default class LibrariesSelectionChips extends React.Component {
  /**
   * dispatch open dialog action 
   * @param  {Array} library the library information as an Array
   * 
   */
  handleOpen = (library) => {
    debugger;

    this.props.openLibraryDialog(true, library)
  };
  /**
   * dispatches the action to closes the dialog
   * @return {[type]} [description]
   */
  handleClose = () => {
    this.props.closeLibraryDialog(false)
  };

  render() {

    const library = [];
    let libraries = this.props.libraries;
    let filteredLibraries = this.props.filteredLibraries;
    let progress = this.props.progress;
    if (progress.libraryDialogData !== null) {
      for (var key in progress.libraryDialogData) {
        if (progress.libraryDialogData.hasOwnProperty(key)) {
          library.push(progress.libraryDialogData[key] !== null ? <ListItem
                                                                            key={ key }
                                                                            primaryText={ key }
                                                                            secondaryText={ JSON.stringify(progress.libraryDialogData[key]) }>
                                                                  </ListItem> : null);
        }
      }
    }



    const actions = [
      <FlatButton
                  label="Close"
                  primary={ true }
                  keyboardFocused={ true }
                  onTouchTap={ this.handleClose } />,

    ];



    let displaySearchedLibraries = <div>
                                     { filteredLibraries.searchedLibraries !== undefined
                                       ? filteredLibraries.searchedLibraries.map((searchedLibrary, i) => (searchedLibrary.size <= this.props.progress.budget && i <= 110)
                                         ? <Badge
                                                  key={ searchedLibrary.name }
                                                  badgeContent={ searchedLibrary.size + ' KB' }
                                                  primary={ true }
                                                  badgeStyle={ searchedLibrary.size >= 10 ? {
                                                                 width: 50,
                                                                 height: 50
                                                               } : {
                                                                 width: 40,
                                                                 height: 40
                                                               } }>
                                             <Chip
                                                   style={ styles.chip }
                                                   onClick={ this.handleOpen.bind(this, filteredLibraries.searchedLibraries[i]) }>
                                               <Avatar
                                                       size={ 16 }
                                                       src={ searchedLibrary.favicon } />
                                               { searchedLibrary.name }
                                               { ' (' + searchedLibrary.version + ')' }
                                             </Chip>
                                           </Badge>
                                         : null)
                                       : null }
                                   </div>;
    let displaySizeIncludedLibraries = <div>
                                         { libraries.map((javaScriptLibrary, i) => (javaScriptLibrary.size <= this.props.progress.budget && i <= 50) ?
                                           
                                             <Badge
                                                    key={ javaScriptLibrary.name }
                                                    badgeContent={ javaScriptLibrary.size + ' KB' }
                                                    primary={ true }
                                                    badgeStyle={ javaScriptLibrary.size >= 10 ? {
                                                                   width: 50,
                                                                   height: 50
                                                                 } : {
                                                                   width: 40,
                                                                   height: 40
                                                                 } }>
                                               <Chip
                                                     style={ styles.chip }
                                                     onClick={ this.handleOpen.bind(this, libraries[i]) }>
                                                 <Avatar
                                                         size={ 16 }
                                                         src={ javaScriptLibrary.favicon } />
                                                 { javaScriptLibrary.name }
                                                 { ' (' + javaScriptLibrary.version + ')' }
                                               </Chip>
                                             </Badge> : null) }
                                       </div>;

    return (
      <div>
        <LibrariesAutoComplete {...this.props} />
        <div style={ styles.wrapper }>
          { displaySearchedLibraries.props.children !== null ? displaySearchedLibraries : displaySizeIncludedLibraries }
        </div>
        <Divider/>
        <Dialog
                title="Library Details"
                actions={ actions }
                modal={ false }
                open={ this.props.progress.libraryDialogOpened }
                onRequestClose={ this.handleClose }
                autoScrollBodyContent={ true }>
          <List>
            { library }
          </List>
        </Dialog>
      </div>
      );
  }
}