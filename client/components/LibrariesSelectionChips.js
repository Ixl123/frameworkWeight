import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from './MyChip.js';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import Badge from 'material-ui/Badge';
import LibrariesAutoComplete from './LibrariesAutoComplete'
import { cyan500 } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import FlatButton from 'material-ui/FlatButton';
import { List, ListItem } from 'material-ui/List';
// ICONS
import KeywoardIcon from 'material-ui/svg-icons/communication/vpn-key';
import LatestIcon from 'material-ui/svg-icons/av/fiber-new';
import AuthorIcon from 'material-ui/svg-icons/social/person';
import SizeIcon from 'material-ui/svg-icons/places/fitness-center';
import InfoIcon from 'material-ui/svg-icons/action/info';
import ActionHomeIcon from 'material-ui/svg-icons/action/home';

import TimelineIcon from 'material-ui/svg-icons/action/timeline';

const styles = {
  chip: {
    margin: 4,
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
    this.props.openLibraryDialog(true, library);
  };
  /**
   * dispatches the action to closes the dialog
   * @return {[type]} [description]
   */
  handleClose = () => {
    this.props.closeLibraryDialog(false);
  };
  handleRequestDelete = (framework) => {
    //add to actual budget
    //mark as added 
    let index = this.props.libraries.findIndex((library) => library.name === framework.name)
    this.props.toggleLibrary(index)
    let includedLibraries = this.props.libraries.filter((library) => {
      if (library.included) {
        return library;
      }
    })
    let actualBudget = 0;
    includedLibraries.forEach((library) => {
      actualBudget += library.size;
    });
    debugger;
    this.props.addToActualBudget(Math.round(actualBudget * 10) / 10);
  };
  getVisibleLibraries = (libraries, filter) => {

    switch (filter) {
      case 'SHOW_ALL_INCLUDED':
        return libraries.filter((library, i) => {
          if( (library.size <= this.props.progress.budget) ) {
            return library;
          }
        })
      case 'SHOW_ALL_INCLUDED_AND_INPUT_SEARCH':
        return libraries.filter((library, i) => {
          if (library.size <= this.props.progress.budget && library.searched === true) {
            return library;
          }
        })
    }
  }
  render() {
    let library = [];
    let libraries = this.props.libraries;
    let filteredLibraries = this.props.filteredLibraries;
    let progress = this.props.progress;
    let visibilityFilter = this.props.progress.visibilityFilter;
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
                       <div className="dl-data dl-data-icon--row">
                         <SizeIcon/>
                       </div>
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
                       <div className="dl-data dl-data-icon--row">
                         <AuthorIcon/>
                       </div>
                       <div className="dl-data dl-data--row">
                         <p className="dl-text--bold">
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
                       <div className="dl-data dl-data-icon--row">
                         <LatestIcon/>
                       </div>
                       <div className="dl-data dl-data--row">
                         <p className="dl-text--bold">
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
                       <div className="dl-data dl-data-icon--row">
                         <TimelineIcon/>
                       </div>
                       <div className="dl-data dl-data--row">
                         <p className="dl-text--bold">
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
                       <div className="dl-data dl-data-icon--row">
                         <KeywoardIcon/>
                       </div>
                       <div className="dl-data dl-data--row">
                         <p className="dl-text--bold">
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
                       <div className="dl-data dl-data-icon--row">
                         <InfoIcon/>
                       </div>
                       <div className="dl-data dl-data--row">
                         <p className="dl-text--bold">
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
                       <div className="dl-data dl-data-icon--row">
                         <FontIcon className="fa fa-github" />
                       </div>
                       <div className="dl-data dl-data--row">
                         <p className="dl-text--bold">
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
      if (progress.libraryDialogData.homepage !== null) {
        library.push(<div
                          key={ 8 }
                          className="dl-item dl-item--row">
                       <div className="dl-data dl-data-icon--row">
                         <ActionHomeIcon/>
                       </div>
                       <div className="dl-data dl-data--row">
                         <p className="dl-text--bold">
                           Homepage
                         </p>
                       </div>
                       <div className="dl-data dl-data--row">
                         <a
                            className="dl-text dl-text--href"
                            href={ progress.libraryDialogData.homepage }>
                           { `${progress.libraryDialogData.homepage}` }
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

    let displaySizeIncludedLibraries = <div>
                                         { this.getVisibleLibraries(libraries, visibilityFilter).map(
                                             (javaScriptLibrary, i) => i <= 30 ? <Badge
                                                                                        key={ javaScriptLibrary.name }
                                                                                        badgeContent={ javaScriptLibrary.size + ' KB' }
                                                                                        secondary={ true }
                                                                                        badgeStyle={ javaScriptLibrary.size >= 10 ? {
                                                                                                       width: 50,
                                                                                                       height: 50
                                                                                                     } : {
                                                                                                       width: 40,
                                                                                                       height: 40
                                                                                                     } }>
                                                                                   { javaScriptLibrary.included === true ? <Chip
                                                                                                                                 backgroundColor={ cyan500 }
                                                                                                                                 style={ styles.chip }
                                                                                                                                 onRequestDelete={ () => this.handleRequestDelete(javaScriptLibrary) }
                                                                                                                                 onTouchTap={ this.handleOpen.bind(this, libraries[i]) }>
                                                                                                                             { javaScriptLibrary.homepage === null ? <Avatar size={ 32 }>
                                                                                                                                                                       { javaScriptLibrary.name.charAt(0) }
                                                                                                                                                                     </Avatar> : <Avatar
                                                                                                                                                                                         size={ 32 }
                                                                                                                                                                                         src={ javaScriptLibrary.favicon } /> }
                                                                                                                             { javaScriptLibrary.name }
                                                                                                                             { ' (' + javaScriptLibrary.version + ')' }
                                                                                                                           </Chip> : <Chip
                                                                                                                                           style={ styles.chip }
                                                                                                                                           onRequestDelete={ () => this.handleRequestDelete(javaScriptLibrary) }
                                                                                                                                           onTouchTap={ this.handleOpen.bind(this, libraries[i]) }>
                                                                                                                                       { javaScriptLibrary.homepage === null ? <Avatar size={ 32 }>
                                                                                                                                                                                 { javaScriptLibrary.name.charAt(0) }
                                                                                                                                                                               </Avatar> : <Avatar
                                                                                                                                                                                                   size={ 32 }
                                                                                                                                                                                                   src={ javaScriptLibrary.favicon } /> }
                                                                                                                                       { javaScriptLibrary.name }
                                                                                                                                       { ' (' + javaScriptLibrary.version + ')' }
                                                                                                                                     </Chip> }
                                                                                 </Badge> : null
                                           
                                           
                                           ) }
                                       </div>;

    return (
      <div>
        <LibrariesAutoComplete {...this.props} />
        <div style={ styles.wrapper }>
          { displaySizeIncludedLibraries }
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
