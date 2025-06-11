const { exec } = require('child_process');

// Use the Java binary from the downloaded JDK
const javaBin = process.env.JAVA_HOME ? `${process.env.JAVA_HOME}/bin/java` : 'java';
const jarProcess = exec(`${javaBin} -jar out/artifacts/research_assistant_jar/research-assistant.jar`);

jarProcess.stdout.on('data', (data) => {
    console.log(data);
});

jarProcess.stderr.on('data', (data) => {
    console.error(data);
});

jarProcess.on('close', (code) => {
    console.log(`JAR process exited with code ${code}`);
});

process.on('SIGTERM', () => {
    jarProcess.kill();
    process.exit(0);
});