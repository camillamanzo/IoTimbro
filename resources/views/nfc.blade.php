@extends('./layouts.app')

@section('content')
    <p>
        <button onclick="readTag()">Read</button>
        <button onclick="writeTag()">Write</button>
    </p>

    <pre id="log"></pre>
@endsection

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
            consoleLog("Not able to read.");
            }
        }

        async function writeTag() {
            if ("NDEFReader" in window) {
                
                const ndef = new NDEFReader();

                try {
                    const ndef = new NDEFReader();

                    await ndef.write("We made it!!");
                    consoleLog("NDEF message written!");
                    } catch(error) {
                    consoleLog(error);
                }
            } else {
            consoleLog("Not able to write.");
            }
        }

        function consoleLog(data) {
            var logElement = document.getElementById('log');
            logElement.innerHTML += data + '\n';
        };
</script>
