# CloudBolt API Helper

## Overview

This is a package to simplify making calls to the CloudBolt API. It can be installed from the private NPM repo in CodeArtifact, [cloudbolt-npm](https://console.aws.amazon.com/codesuite/codeartifact/d/499620025628/cloudbolt/r/cloudbolt-npm?region=us-east-1).

## How to connect to this CodeArtifact repository to be able to install this and other private CloudBolt packages

Amazon recommended instructions are at [cloudbolt-npm](https://console.aws.amazon.com/codesuite/codeartifact/d/499620025628/cloudbolt/r/cloudbolt-npm?region=us-east-1). Click the `View connection instructions` button then select `npm` from the list of options. These steps are copied below with reccomendations for our organization's aws cli and sso setup.

1. Add a new `co:login` npm script in your `package.json`: `"aws sso login && aws codeartifact login --tool npm --repository cloudbolt-npm --domain cloudbolt --domain-owner 499620025628"`. This ensures your aws cli is logged in before setting the project's npm repo.
1. Add or edit a `prepare` npm script in your `package.json`. This ensures the aws cli is logged in and is using the CloudBolt private npm repo whenever installing or publishing.
   - If you don't already have a `prepare` script, add the following `prepare` script: `"rpm run co:login"`.
   - If you do already have a `prepare` script, use `concurrently` to run `co:login` at the same time. For example: `"concurrently \"npm run husky:install\" \"npm run co:login\""`.

## How to publish a new version to CodeArtifact

1. Delete any local `types` and `lib` folder in this directory
1. Increment the version of the `package.json` for this project and do an install to be sure the `package-lock.json` is up to date as well.
   - The command `npm version patch` does this for you. It creates a git tag too.
1. Run the command `npm run build` which will create the `types` and `lib` folder for this version you are about to publish.
1. Run the command `npm publish` to publish this version to CodeArtifact
