<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>NFC READER</title>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    </head>
    <body>
        <h1>NFC READER</h1>

        <p>
            <button onclick="readTag()">Lettura NFC</button>
            <button onclick="writeTag()">Scrittura NFC</button>
        </p>
        <pre id="log"></pre>
    </body>
    <script>

        async function readTag() {
            if ("NDEFReader" in window) {
                const ndef = new NDEFReader();
                try {
                    await ndef.scan();
                    ndef.onreading = event => {
                        const decoder = new TextDecoder();
                        for (const record of event.message.records) {
                            consoleLog("Record type:  " + record.recordType);
                            consoleLog("MIME type:    " + record.mediaType);
                            consoleLog("=== data ===\n" + decoder.decode(record.data));
                        }
                    }
                } catch(error) {
                consoleLog(error);
                }
            } else {
                consoleLog("Web NFC non supportato, impossibile leggere.");
            }
        }

        async function writeTag() {
            if ("NDEFReader" in window) {
                const ndef = new NDEFReader();
                try {
                    await ndef.write("Hey ciao e benvenuto in MTH!");
                    consoleLog("Il messagio NDEF è stato scritto!");
                } catch(error) {
                    consoleLog(error);
                }
            } else {
                consoleLog("Web NFC non supportato, impossibile scrivere.");
            }
        }

        function consoleLog(data) {
            var logElement = document.getElementById('log');
            logElement.innerHTML += data + '\n';
        }

    </script>
</html>
