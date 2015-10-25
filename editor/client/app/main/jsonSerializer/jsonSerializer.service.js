'use strict';

angular.module('editorApp')
  /**
   * JSON serializer.
   */
  .service('JsonSerializer', function() {
    /**
     * Serializes an object into a JSON string.
     * All properties whose names start with '$' are not included in the resulting JSON.
     * @param  {object} object - the object to serialize
     * @return {string}        - the serialized JSON string
     */
    this.serialize = function(object) {
      return JSON.stringify(object, replacer);
    };

    /**
     * Deserializes a JSON string into an object.
     * @param  {string} jsonString - the JSON string to deserialize
     * @return {object}            - the deserialized object
     */
    this.deserialize = function(jsonString) {
      return JSON.parse(jsonString);
    };

    function replacer(key, value) {
      if (typeof key !== 'undefined' && //initially the replacer gets called with an empty key --MDN
        key.substr(0, 1) === '$') { //internal or temporary properties
        return undefined; //won`t be included in the resulting JSON
      }
      return value;
    }
  });
