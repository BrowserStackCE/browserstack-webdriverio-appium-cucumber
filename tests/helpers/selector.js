/**
 * 
 * @param {{
 * android:any
 * ios:any
 * }} options 
 */

module.exports = function selector(options){
    if(driver.isIOS){
        return options.ios
    }else if(driver.isAndroid){
        return options.android
    }else{
        throw "Unsupported Platform"
    }
}