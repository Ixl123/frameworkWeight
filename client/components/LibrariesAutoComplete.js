import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
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
    if (this.props.libraries !== undefined && this.props.libraries.length > 0) {
      let searchedLibraryArray = this.props.libraries.filter(value => value !== undefined && value.name.search(searchText) >= 0);
      this.props.handleSearchInput(searchedLibraryArray);
    }
  }
  /**
   * gets triggered on autocomplete seleciton or pressing enter
   * @param  {[type]} value [description]
   * @return {[type]}       [description]
   */
  handleNewRequest = (value, index) => {
    debugger;
    console.log(value);

    //check wheter realy a autocomplete index got selected also gets triggered when pressing enter then dont do anyhting
    if (index !== -1) {
      let searchedLibrary = [];
      searchedLibrary.push(this.props.libraries[index]);
      this.props.handleSearchRequest(searchedLibrary);

    }


  };

  render() {
    const libraries = this.props.libraries;
    const progress = this.props.progress;
    return (
      <div>
        <AutoComplete
                      floatingLabelText="Search for a framework"
                      dataSource={ libraries.map(library => {
                                     if (library.size < progress.budget) {
                                       return library.name
                                     }
                                   }) }
                      maxSearchResults={ 8 }
                      onUpdateInput={ this.handleUpdateInput }
                      onNewRequest={ this.handleNewRequest }
                      style={ { marginBottom: 30 } } />
        <Subheader>
          Libraries
        </Subheader>
        <Divider/>
      </div>

      );
  }
}