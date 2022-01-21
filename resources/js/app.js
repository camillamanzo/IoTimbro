/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});




{/* <button id="scanButton">Scan</button>
<button id="writeButton">Write</button> */}

// log = ChromeSamples.log;

// if (!("NDEFReader" in window))
//   ChromeSamples.setStatus(
//     "Web NFC is not available.\n" +
//       'Please make sure the "Experimental Web Platform features" flag is enabled on Android.'
//   );
//   scanButton.addEventListener("click", async () => {
//     log("User clicked scan button");
  
//     try {
//       const ndef = new NDEFReader();
//       await ndef.scan();
//       log("> Scan started");
  
//       ndef.addEventListener("readingerror", () => {
//         log("Argh! Cannot read data from the NFC tag. Try another one?");
//       });
  
//       ndef.addEventListener("reading", ({ message, serialNumber }) => {
//         log(`> Serial Number: ${serialNumber}`);
//         log(`> Records: (${message.records.length})`);
//       });
//     } catch (error) {
//       log("Argh! " + error);
//     }
//   });
  
//   writeButton.addEventListener("click", async () => {
//     log("User clicked write button");
  
//     try {
//       const ndef = new NDEFReader();
//       await ndef.write("Hello world!");
//       log("> Message written");
//     } catch (error) {
//       log("Argh! " + error);
//     }
//   });














//     reader.on('card', async card => {

//         console.log();
//         console.log(`card detected`, card);

//         // example reading 12 bytes assuming containing text in utf8
//         try {

//             // reader.read(blockNumber, length, blockSize = 4, packetSize = 16)
//             const data = await reader.read(4, 12); // starts reading in block 4, continues to 5 and 6 in order to read 12 bytes
//             console.log(`data read`, data);
//             const payload = data.toString(); // utf8 is default encoding
//             console.log(`data converted`, payload);

//         } catch (err) {
//             console.error(`error when reading data`, err);
//         }

//         // example write 12 bytes containing text in utf8
//         try {

//             const data = Buffer.allocUnsafe(12);
//             data.fill(0);
//             const text = (new Date()).toTimeString();
//             data.write(text); // if text is longer than 12 bytes, it will be cut off
//             // reader.write(blockNumber, data, blockSize = 4)
//             await reader.write(4, data); // starts writing in block 4, continues to 5 and 6 in order to write 12 bytes
//             console.log(`data written`);

//         } catch (err) {
//             console.error(`error when writing data`, err);
//         }

//         });