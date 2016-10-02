import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

export default class AutoCompleteExampleSimple extends React.Component {

  constructor(props) {
    super(props);


  }
  /**
   * gets triggered on every input
   * @param  {[type]} value [description]
   * @return {[type]}       [description]
   */
  handleUpdateInput = (searchText, array) => {
    // console.log(value);
    // console.log(array.length);

    if (array !== undefined && array.length > 0) {

      let testArray = array.filter(value => value !== undefined && value.search(searchText) >= 0);
      //create redux handler
      // this.props.libraries = value;
      console.log(testArray.length);

    }
    ;

  }
  /**
   * show detail view
   * @param  {[type]} value [description]
   * @return {[type]}       [description]
   */
  handleNewRequest = (value) => {
    console.log(value);
    //create redux handler
    // this.props.libraries = value;

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
                      onNewRequest={ this.handleNewRequest } />
      </div>
      );
  }
}