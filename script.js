WebViewer({
    path: 'lib', // Path to the PDFTron 'lib' folder on your server
    initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf',
    // You can add more configuration options here
}, document.getElementById('viewer'))
.then(instance => {
    // WebViewer is now initialized, and you can use `instance` to access the API
    const { docViewer, annotManager } = instance;

    // Example: Listen for document loaded event
    docViewer.on('documentLoaded', () => {
        console.log('Document is loaded');
        // Perform any actions you need once the document is loaded
    });

    // You can add more API interactions here based on your requirements
});


