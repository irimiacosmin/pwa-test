# dsu-explorer-workspace

dsu-explorer-workspace is a basic workspace based on [template-workplace](https://github.com/PrivateSky/template-workspace) and contains the following applications:
* [dossier-explorer-ssapp](https://github.com/PrivateSky/dossier-explorer-ssapp.git)
* [psk-marketplace-ssapp](https://github.com/RomSoftIasi/psk-marketplace-ssapp.git)

**Notes**:
* A _workspace_ is a project with many other libraries and configuration loaded.
* An _included_ application means that the original code is in a separate repo but got included here (either by hard copy or brought in by git's clone commands)

## Prerequisites

You need the following software installed on your machine in order to continue the this guide

1. Install or update [Node](https://nodejs.org/en/) (including NPM) to version 12.14.0.
2. Install or update [Git](https://git-scm.com/)

## Installation

The only commands you need to run in the *dsu-explorer-workspace* workspace are:

```sh
# Step 0: Go inside the [dsu-explorer-workspace] folder
cd dsu-explorer-workspace

# Step 1: Brings all dependencies needed
$ npm install

# Step 2: Launch the Node js
$ npm run server

# Step 3: Scans all applications and wallet it finds in the configuration and tries to run the build script for each one
$ npm run build-all
```

After all this steps are done, you can access the application by going to [http://localhost:8080/web-wallet/loader/](http://localhost:8080/web-wallet/loader/)