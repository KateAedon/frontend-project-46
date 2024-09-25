
const { execSync } = require('child_process');


const reporterId = process.env.CC_TEST_REPORTER_ID;
if (!reporterId) {
    console.error('CC_TEST_REPORTER_ID is not defined.');
    process.exit(1);
}


execSync(`npx codeclimate-test-reporter after-build --exit-code $?`, {
    stdio: 'inherit',
    env: {
        ...process.env,
        CODECLIMATE_REPO_TOKEN: reporterId, 
    },
});
