const { exec } = require('child_process');

// Run the Spring Boot JAR
const jarProcess = exec('java -jar F:/New folder/research-assistant/out/artifacts/research_assistant_jar/research-assistant.jar' );

jarProcess.stdout.on('data', (data) => {
    console.log(data);
});

jarProcess.stderr.on('data', (data) => {
    console.error(data);
});

jarProcess.on('close', (code) => {
    console.log(`JAR process exited with code ${code}`);
});

// Keep the Node.js process alive
process.on('SIGTERM', () => {
    jarProcess.kill();
    process.exit(0);
});