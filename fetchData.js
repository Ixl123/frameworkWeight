#!/usr/bin/env node
console.log('Hello, world!');
require('es6-promise').polyfill();
let fetch = require('node-fetch');
var Promise = require('es6-promise').Promise;
const zlib = require('zlib');

let fs = require('fs');
let libraries = require('./client/data/libraries.js');
let cdnjsLibraries = require('./client/data/cdnjsLibraries.json');
let pathTocdnjsLibrariesFile = './client/data/cdnjsLibraries.json';
let editedcdnjsLibrariesFile = require('./client/data/editedcdnjsLibraries.json');
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
    this.getLastModifiedDataDate(pathTocdnjsLibrariesFile, (myDate) => {
      if (this.checkDataDate(myDate)) {
        let apiURL = 'https://api.cdnjs.com/libraries?fields=version,description,homepage,keywords,license,repository,autoupdate,author,assets';
        let path = './client/data/cdnjsLibraries.json';
        return fetch(apiURL)
          .then(response => response.json())
          //write file stringify parameter to pretty write
          .then(json => this.writeFile(path, JSON.stringify(json)))
      }
    })
    let editedcdnjsLibrariesPath = './client/data/editedcdnjsLibraries.json';
    let editedcdnjsLibraries = cdnjsLibraries.results.map(result => {
      // -1 for not found >= 0 for included
      let isLibraryIsIncludedIndex = editedcdnjsLibrariesFile.map(function(library) {
        return library.name
      }).indexOf(result.name);

      if (isLibraryIsIncludedIndex === -1 || (result.latest && this.checkLibraryAndVersion(editedcdnjsLibrariesFile, result.name, result.version))) {
        return fetch(result.latest)
          .then(response => response.text())
          //write file stringify parameter to pretty write
          .then(text => {

            let size = this.calculateKBSize(this.gZip(text));
            let editedResult = {};
            editedResult.size = size;
            editedResult.name = result.name;
            editedResult.latest = result.latest;
            editedResult.version = result.version;
            editedResult.keywords = result.keywords;
            editedResult.description = result.description;
            editedResult.homepage = result.homepage;
            editedResult.license = result.license;
            editedResult.author = result.author;
            editedResult.repository = result.repository;
            editedResult.autoupdate = result.autoupdate;
            editedResult.favicon = result.homepage !== undefined ? 'https://s2.googleusercontent.com/s2/favicons?domain=' + result.homepage : '';
            // find position to update
            if (isLibraryIsIncludedIndex === -1) {
              console.log('pushed library with name ' + editedResult.name)
              editedcdnjsLibrariesFile.push(editedResult);
            } else {
              console.log('updated library with name ' + editedResult.name)
              editedcdnjsLibrariesFile[isLibraryIsIncludedIndex] = editedResult;
            }
            return editedResult;

          }).catch(function error(error) {
          console.log('request failed', error); // error could either be a network or a runtime error
        });
      } else {

        console.log('no need for update');

        // soo actually dooo nothing no overwrite or something
        return editedcdnjsLibrariesFile[isLibraryIsIncludedIndex]
      }
    })

    Promise.all(editedcdnjsLibraries).then(json => {

      this.writeFile(editedcdnjsLibrariesPath, JSON.stringify(editedcdnjsLibrariesFile))
      console.log('wrote new file')
    }, function(err) {
      console.log(err);
      callback(err);
    });

  }
  /**
   * compares the current library version and the latest verion on fetched cdnjs.
   * @param  {[JSON]} editedcdnjsLibrariesFile local data json with all current libraries
   * @param  {[String]} resultName               the name of the library of the fetched cdnjs
   * @param  {[String]} resultVersion            the current version
   * @return {[boolean]}                         true when not the same version (so an update will be needed) else false
   */
  checkLibraryAndVersion(editedcdnjsLibrariesFile, resultName, resultVersion) {
    for (let librariesObject of editedcdnjsLibrariesFile) {

      if (librariesObject != undefined || librariesObject != null) {
        if (librariesObject.name === resultName && librariesObject.version === resultVersion) {
          return false
        }
      }
    }
    return true
  }
  /**
   * writes a file into directory
   * @param  {[string]} filename with path
   * @param  {[string]} string to write 
   * @return {[string]}   logs out succes or error message
   */
  writeFile(filename, contents) {
    fs.writeFile(filename, contents, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('wrote a file to this directory: ' + filename);
      }
    });
  }
  /**
   * gzip
   * @param  {[type]} arrayBuffer [description]
   * @return {[type]}             [description]
   */
  gZip(arrayBuffer) {
    let out = zlib.gzipSync(arrayBuffer)
    return out.length;
  }
  /**
 * convert byteLength to bit
 * @param  {[type]} byteLength [description]
 * @return {[type]}            [description]
 */
  calculateKBSize(byteLength) {
    return Math.round((byteLength / 1000) * 10) / 10;
  }

  /**
   * check date date only fetch new files when data date is older then 24 hours
   * 
   */
  checkDataDate(dataDate) {
    //Get 1 day in milliseconds
    let oneDay = 1000 * 60 * 60 * 24;
    //get current date convert both dates in milliseconds
    let currentDate = new Date().getTime();
    let dataDateTime = dataDate.getTime();
    let difference = currentDate - dataDate;
    let daysDifference = Math.round(difference / oneDay);
    return daysDifference >= 3 ? true : false;
  }
  /**
   * returns last modified date of a file
   * @param  {[string]} path path to file 
   * @return {[callbackFunction with date object]} returns the last modified date as a callback of the file
   */
  getLastModifiedDataDate(path, callbackDate) {
    fs.stat(path, (error, stats) => {
      let lastModifiedDate = new Date(stats.mtime);
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
