export default function isWebBluetoothEnabled() {
    //log = ChromeSamples.log;
    if (navigator.bluetooth) {
        console.log("Web Bluetooth API is available");
        //alert("Web Bluetooth API is available");
        return true;
    } else {
        //ChromeSamples.setStatus('Web Bluetooth API is not available.\n' +
        //    'Please make sure the "Experimental Web Platform features" flag is enabled.');
        console.log('Web Bluetooth API is not available.\n' +
        'Please make sure the "Experimental Web Platform features" flag is enabled.');
        alert('Web Bluetooth API is not available.\n' +
        'Please make sure the "Experimental Web Platform features" flag is enabled.');
        return false;
    }
}