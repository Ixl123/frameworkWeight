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
    height: 300,
    overflow: 'auto'
  },
};
/**
 * libraries chips component. 
 */

export default class LibrariesSelectionChips extends React.Component {

  render() {
    let libraries = this.props.libraries;

    let filteredLibraries = this.props.filteredLibraries;
    console.log(filteredLibraries);
    let displaySearchedLibraries = <div>
                                     { filteredLibraries.searchedLibraries !== undefined
                                       ? filteredLibraries.searchedLibraries.map((searchedLibrary, i) => (searchedLibrary.size <= this.props.progress.budget && i <= 100)
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
                                             <Chip style={ styles.chip }>
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
                                               <Chip style={ styles.chip }>
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
        <h4>Frameworks</h4>
        <AutoCompleteExampleSimple {...this.props} />
        <div style={ styles.wrapper }>
          { displaySearchedLibraries.props.children !== null ? displaySearchedLibraries : displaySizeIncludedLibraries }
        </div>
        <Divider/>
      </div>
      );
  }
}