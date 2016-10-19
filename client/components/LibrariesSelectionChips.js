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
    cursor: 'pointer',
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',

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

      if (progress.libraryDialogData.name !== null) {
        library.push(
          <h4 key={ progress.libraryDialogData.name }>{ `${progress.libraryDialogData.name}` }</h4>
        );
      }
      if (progress.libraryDialogData.size !== null) {
        library.push(<div
                          key={ 1 }
                          className="dl-item dl-item--row">
                       <div className="dl-data dl-data--row">
                         <p className="dl-text--bold">
                           Size
                         </p>
                       </div>
                       <div className="dl-data dl-data--row">
                         <p>
                           { `${progress.libraryDialogData.size} KB` }
                         </p>
                       </div>
                     </div>);
      }
      if (progress.libraryDialogData.author !== null) {
        library.push(<div
                          key={ 2 }
                          className="dl-item dl-item--row">
                       <div className="dl-data dl-data--row">
                         <p className="dl-text dl-text--bold">
                           Author
                         </p>
                       </div>
                       <div className="dl-data dl-data--row">
                         <p className="dl-text">
                           { `${progress.libraryDialogData.author.name !== undefined ? progress.libraryDialogData.author.name : progress.libraryDialogData.author}` }
                         </p>
                       </div>
                     </div>);
      }
      if (progress.libraryDialogData.latest !== null) {
        library.push(<div
                          key={ 3 }
                          className="dl-item dl-item--row">
                       <div className="dl-data dl-data--row">
                         <p className="dl-text dl-text--bold">
                           Latest
                         </p>
                       </div>
                       <div className="dl-data dl-data--row">
                         <a
                            className="dl-text dl-text--href"
                            href={ progress.libraryDialogData.latest }>
                           { `${progress.libraryDialogData.latest}` }
                         </a>
                       </div>
                     </div>);
      }
      if (progress.libraryDialogData.version !== null) {
        library.push(<div
                          key={ 4 }
                          className="dl-item dl-item--row">
                       <div className="dl-data dl-data--row">
                         <p className="dl-text dl-text--bold">
                           Version
                         </p>
                       </div>
                       <div className="dl-data dl-data--row">
                         <p className="dl-text">
                           { `${progress.libraryDialogData.version}` }
                         </p>
                       </div>
                     </div>);
      }
      if (progress.libraryDialogData.keywords !== null) {
        library.push(<div
                          key={ 5 }
                          className="dl-item dl-item--row">
                       <div className="dl-data dl-data--row">
                         <p className="dl-text dl-text--bold">
                           Keywords
                         </p>
                       </div>
                       <div className="dl-data dl-data--row">
                         <p className="dl-text">
                           { `${progress.libraryDialogData.keywords}` }
                         </p>
                       </div>
                     </div>);
      }
      if (progress.libraryDialogData.description !== null) {
        library.push(<div
                          key={ 6 }
                          className="dl-item dl-item--row">
                       <div className="dl-data dl-data--row">
                         <p className="dl-text dl-text--bold">
                           Description
                         </p>
                       </div>
                       <div className="dl-data dl-data--row">
                         <p className="dl-text">
                           { `${progress.libraryDialogData.description}` }
                         </p>
                       </div>
                     </div>);
      }
      if (progress.libraryDialogData.repository !== null) {
        library.push(<div
                          key={ 7 }
                          className="dl-item dl-item--row">
                       <div className="dl-data dl-data--row">
                         <p className="dl-text dl-text--bold">
                           GitUrl
                         </p>
                       </div>
                       <div className="dl-data dl-data--row">
                         <a
                            className="dl-text dl-text--href"
                            href={ progress.libraryDialogData.repository.url }>
                           { `${progress.libraryDialogData.repository.url}` }
                         </a>
                       </div>
                     </div>);
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
                                       ? filteredLibraries.searchedLibraries.map((searchedLibrary, i) => (searchedLibrary.size <= this.props.progress.budget && i <= 50)
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
                actions={ actions }
                modal={ false }
                open={ this.props.progress.libraryDialogOpened }
                onRequestClose={ this.handleClose }
                autoScrollBodyContent={ true }>
          { library }
        </Dialog>
      </div>
      );
  }
}