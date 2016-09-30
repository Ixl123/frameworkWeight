#!/usr/bin/env node
console.log('Hello, world!');
require('es6-promise').polyfill();
require('isomorphic-fetch');
let fs = require('fs');
let libraries = require('./client/data/libraries.js');
let cdnjsLibraries = require('./client/data/cdnjsLibraries.json');
let pathTocdnjsLibraries = './client/data/cdnjsLibraries.json';
let libraries2;
// import data
// require('./client/data/libraries');
// require('./client/data/progress');

class Data {
  constructor() {}
  /**
   * checks wheter the data is older then 1 day
   * fetch all libraries from cdnjs api and store them into file 
   * in the client/data directory
   */
  getcdnjsAPIData() {
    // store all data fetched from cdnjs 
    this.getLastModifiedDataDate(pathTocdnjsLibraries, (myDate) => {
      if (this.checkDataDate(myDate)) {
        let apiURL = 'https://api.cdnjs.com/libraries';
        let path = './client/data/cdnjsLibraries.json';
        return fetch(apiURL)
          .then(response => response.json())
          //write file stringify parameter to pretty write
          .then(json => this.writeFile(path, JSON.stringify(json, null, 2)))
      } else {
        this.fetchEachLibraryFrom(cdnjsLibraries);
      }
    })
  }
  /**
   * writes a file into directory
   * @param  {[string]} filename with path
   * @param  {[string]} string to write 
   * @return {[string]}   logs out succes or error message
   */
  writeFile(filename, contents) {
    console.log(filename, contents);
    fs.writeFile(filename, contents, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('wrote a file to this directory: ' + filename);
      }
    });
  }
  /**
   * fetch each library from cdnjs and store the data in libraries folder creates
   */
  fetchEachLibraryFrom(cdnjsLibraries) {
    // console.log(cdnjsLibraries)
    console.log('fetchEachLibraryFrom');
    let fetchedCDNJSLibraries = cdnjsLibraries;

    fetchedCDNJSLibraries.results.map((librarieInfo, index) => {
      this.fetchcdnjSpecificLibrary(librarieInfo, index, (callBackObjectToSave) => {

        console.log(callBackObjectToSave);


      });
    });

  }
  /**
   * [fetchcdnjSpecificLibrary description]
   * @param  {[type]} libraryName [description]
   * @param  {[type]} i           [description]
   * @return {[type]}             [description]
   */
  fetchcdnjSpecificLibrary(libraryName, i) {

    return fetch('https://api.cdnjs.com/libraries?search=' + libraryName + '&fields=version,description,homepage,assets')
      .then(response => response.json())
      .then(json => this.receivecdnAPI(json.results[0], i))
      .then((callbackReceivedObject) => this.fetchLibrarySize(callbackReceivedObject))
  // frameworkType === 'CSS' ? dispatch(fetchLibrary(json[0].assets[].in)) : true,
  }
  receivecdnAPI(json, index, callbackReceivedObject) {
    console.log('receivedcdnAPI');

    return callbackReceivedObject([{
      index: index,
      name: json.name,
      url: json.latest,
      version: json.version,
      description: json.description,
      homepage: json.homepage,
      favicon: 'https://s2.googleusercontent.com/s2/favicons?domain=' + json.homepage !== undefined ? json.homepage : 'undefined'
    }]);
  }
  /**
   * gets the library size for an url
   * @param  {[type]} libraryURL [description]
   * @return {[type]}            [description]
   */
  fetchLibrarySize(object) {
    console.log('fetchLibrarySize:' + object);
    // return fetch(libraryURL)
    //   .then(response => response.text())
    //   .then(plainText =>
    //   // We can dispatch many times!
    //   // Here, we update the app state with the results of the API call.

    //   	this.receiveLibrary(libraryURL, calculateKBSize(gZip(plainText)), i, frameworkType))
    // )

  }
  /**
 * convert byteLength to bit
 * @param  {[type]} byteLength [description]
 * @return {[type]}            [description]
 */
  calculateKBSize(byteLength) {
    return Math.round(byteLength / 1000);
  }

  /**
   * check date date only fetch new files when data date is older then 24 hours
   * 
   */
  checkDataDate(dataDate) {
    console.log('checkDataDate:' + 'HIIIIIIIIIIIIIIEIRERIEJARIJAIRJ')
    //Get 1 day in milliseconds
    let oneDay = 1000 * 60 * 60 * 24;
    //get current date convert both dates in milliseconds
    let currentDate = new Date().getTime();
    let dataDateTime = dataDate.getTime();
    let difference = currentDate - dataDate;
    let daysDifference = Math.round(difference / oneDay);
    console.log('daysDiffernce: ' + daysDifference);
    return daysDifference > 1 ? true : false;
  }
  /**
   * returns last modified date of a file
   * @param  {[string]} path path to file 
   * @return {[callbackFunction with date object]} returns the last modified date as a callback of the file
   */
  getLastModifiedDataDate(path, callbackDate) {
    console.log('getLastModifiedDataDate' + path)
    fs.stat(path, (error, stats) => {
      let lastModifiedDate = new Date(stats.mtime);
      console.log(lastModifiedDate);
      return callbackDate(lastModifiedDate);
    });
  }
}
let data = new Data({});
//aAsync().then(() => bAsync()).then(() => cAsync()).done(() => finish);

//data.fetchcdnjSpecificLibrary('jquery', 1).then((test) => console.log(test));

// data.getLastModifiedDataDate('./client/data/libraries.js', (myDate) => data.checkDataDate(myDate));
// console.log(test);
// data.checkDataDate(test);
// data.fetchEachLibraryFrom();
data.getcdnjsAPIData();