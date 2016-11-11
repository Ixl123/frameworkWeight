import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import ActionHomeIcon from 'material-ui/svg-icons/action/home';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import { cyan500 } from 'material-ui/styles/colors';

export default class LibrariesAutoComplete extends React.Component {

  constructor(props) {
    super(props);
  }
  /**
   * gets triggered on every input
   * @param  {[type]} value [description]
   * @return {[type]}       [description]
   */
  handleUpdateInput = (searchText) => {
    let indicesArray = [];
    if (this.props.libraries !== undefined && this.props.libraries.length > 0) {
      this.props.libraries.forEach(
        (value, index) => {
          if (value !== undefined && value.name.search(searchText) >= 0) {
            indicesArray.push(index);
          }
        })
    }
    this.props.handleSearchInput(indicesArray, searchText);
  };
  /**
   * gets triggered on autocomplete seleciton or pressing enter
   * @param  {[type]} value [description]
   * @return {[type]}       [description]
   */
  handleNewRequest = (value, index) => {

    //check wheter realy a autocomplete index got selected also gets triggered when pressing enter then dont do anyhting
    if (index !== -1) {
      // let searchedLibrary = [];
      // searchedLibrary.push(this.props.libraries[index]);
      this.props.handleSearchRequest(index, value);
    } else {
      // empty search reset
      this.handleUpdateInput(value)
    }
  };
  handleSelectedLibraryFilter = () => {
    this.props.handleSelectedLibraryFilter();
  }
  render() {
    const libraries = this.props.libraries;
    const progress = this.props.progress;
    return (
      <div>
        <AutoComplete
                      floatingLabelText="Search for a framework"
                      dataSource={ libraries.map((library) => {
                                     if (library.size < progress.budget) {
                                       return library.name
                                     }
                                   }) }
                      filter={ AutoComplete.caseInsensitiveFilter }
                      maxSearchResults={ 8 }
                      searchText={ progress.searchedString === '' ? '' : progress.searchedString }
                      onUpdateInput={ this.handleUpdateInput }
                      onNewRequest={ this.handleNewRequest }
                      style={ { marginBottom: 30 } } />
        <Subheader>
          Libraries
          <IconButton
                      tooltip="filter selected libraries"
                      onClick={ this.handleSelectedLibraryFilter }>
            <FontIcon
                      className="fa fa-filter"
                      color={ progress.visibilityFilter === 'SHOW_USERS_SELECTED' ? cyan500 : null } />
          </IconButton>
        </Subheader>
        <Divider/>
      </div>
      );
  }
}