var exec = require("cordova/exec");
module.exports = {
  setUserCredentials: function (successCallback, errorCallback, _userName, _deviceType, _deviceID) {
        if (errorCallback == null) { errorCallback = function () { } }
        if (typeof errorCallback != "function") {
            console.log("UserCredentialsPlugin.setUserCredentials failure: failure parameter not a function");
            return
        }

        if (typeof successCallback != "function") {
            console.log("UserCredentialsPlugin.setUserCredentials failure: success callback parameter must be a function");
            return
        }
        
         exec(successCallback, errorCallback, "UserCredentialsPlugin", "setUserCredentials", [_userName, _deviceType, _deviceID]);
  }
  

};