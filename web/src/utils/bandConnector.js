// export default function deviceName(){
//     let device_name  = ''
//     let primaryServices =  [0x1800, 0x1801, 0x180a, 0x1811, 0x1802, 0x180d];
//     let options = {
//         filters : [{namePrefix : "Mi Smart"}],
//         optionalServices: primaryServices
//     };
//     navigator.bluetooth.requestDevice(options)
//     .then(device => {
//         device_name = device.name;
//         console.log(device_name);
//         return device_name;
//     }).catch(error => {
//         console.log('Argh! ' + error);
//     });
//     //console.log(device_name);
//     //return Promise.all(device);
// }
// export default async function deviceName(){
//     let name  = ''
//     let primaryServices =  [0x1800, 0x1801, 0x180a, 0x1811, 0x1802, 0x180d];
//     let options = {
//         filters : [{namePrefix : "Mi Smart"}],
//         optionalServices: primaryServices
//     };
//     try {
//         const device = await navigator.bluetooth.requestDevice(options);
//         //console.log(device.name);
//         return device.name;
//     } catch(error)  {
//         console.log('Argh! ' + error);
//     }
// }

export default async function heartBeat(handle_event, ){
    let SERVICE_HEART_RATE  = 0x180D
    let CHARACTERISTIC_HEART_RATE_MEASURE = 0x2A37

    let target_service = SERVICE_HEART_RATE;
    let target_characteristic = CHARACTERISTIC_HEART_RATE_MEASURE;
    let primaryServices =  [0x1800, 0x1801, 0x180a, 0x1811, 0x1802, 0x180d]
    let options = {
        filters : [{namePrefix : "Mi Smart"}],
        optionalServices: primaryServices.concat(target_service)
    }
    try{
        console.log('Requesting Bluetooth Device...');
        const device = await navigator.bluetooth.requestDevice(options);

        console.log('Connecting to GATT Server...');
        const server = await device.gatt.connect();

        console.log('Getting Service...');
        const service = await server.getPrimaryService(target_service);

        console.log('Getting Characteristic...');
        const characteristic = await service.getCharacteristic(target_characteristic);

        await characteristic.startNotifications();
        console.log('> Notifications started');
        //alert("Notifications started")
        characteristic.addEventListener('characteristicvaluechanged', handle_event);
        
        return device.name;
    }catch(error) {
        console.log('Argh! ' + error);
    }
}

// export function heartBeat(){
//     let SERVICE_HEART_RATE  = 0x180D
//     let CHARACTERISTIC_HEART_RATE_MEASURE = 0x2A37

//     let service = SERVICE_HEART_RATE;
//     let characteristic = CHARACTERISTIC_HEART_RATE_MEASURE;
//     let primaryServices =  [0x1800, 0x1801, 0x180a, 0x1811, 0x1802, 0x180d]
//     let options = {
//         filters : [{namePrefix : "Mi Smart"}],
//         optionalServices: primaryServices.concat(service)
//     }

//     navigator.bluetooth.requestDevice(options)
//     .then(device => {
//         console.log('Connecting to GATT Server...');
//         return device.gatt.connect();
//     })
//     .then(server => {
//         console.log('Getting Service...');
//         return server.getPrimaryService(service);
//     })
//     .then(service => {
//         console.log('Getting Characteristic...');
//         return service.getCharacteristic(characteristic);
//     })
//     .then(characteristic => {
//         let myCharacteristic = characteristic;
//         return myCharacteristic.startNotifications().then(_ => {
//         console.log('> Notifications started');
//         myCharacteristic.addEventListener('characteristicvaluechanged',
//             handleNotifications);
//         });
//     }).catch(error => {
//         console.log('Argh! ' + error);
//     });

//     function handleNotifications(event) {
//         let value = event.target.value;
//         console.log("> " + value.getUint16());
//         //alert("> " + value.getUint16())
//         //log("> " + value.getUint16())
//     }
// }


