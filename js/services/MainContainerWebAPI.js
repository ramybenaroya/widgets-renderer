var MainContainerServerActionCreators = require('../actions/MainContainerServerActionCreators');

module.exports = {

  getData: function() {
    var mainContainerData = JSON.parse(localStorage.getItem('mainContainerData'));
    MainContainerServerActionCreators.receiveMainContainerData(mainContainerData);
  }

};