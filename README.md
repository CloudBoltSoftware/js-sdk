# CloudBolt API Helper

## Overview

This is a package to simplify making calls to the CloudBolt API. It can be installed from the private NPM repo in CodeArtifact, [cloudbolt-npm](https://console.aws.amazon.com/codesuite/codeartifact/d/499620025628/cloudbolt/r/cloudbolt-npm?region=us-east-1).

## How to connect to this CodeArtifact repository to be able to install this and other private CloudBolt packages

1. Go to [cloudbolt-npm](https://console.aws.amazon.com/codesuite/codeartifact/d/499620025628/cloudbolt/r/cloudbolt-npm?region=us-east-1) and click the `View connection instructions` button.
2. Select `npm` from the list of options to be able to install this package.
3. Follow the instructions there and be sure to include the `.npmrc` file in your project.
4. Recommend adding a command to the prepare step to ensure the aws cli command is run to login to this repository prior to any install or publish. View this project's package.json and look at the `co:login` and `prepare` scripts for an example of this.

## How to publish a new version to CodeArtifact

1. Login to AWS CLI via `aws sso login`
2. Delete any local `types` and `lib` folder in this directory
3. Increment the version of the `package.json` for this project and do an install to be sure the `package-lock.json` is up to date as well.
4. Run the command `npm run build` which will create the `types` and `lib` folder for this version you are about to publish.
5. Run the command `npm publish` to publish this version to CodeArtifact
