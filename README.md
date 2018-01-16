# [dibk-bus-tilbygg](https://dibk-bus-tilbygg.firebaseapp.com/) [![Build Status](https://travis-ci.com/netliferesearch/dibk-bus-tilbygg.svg?token=7NpjNJdFW93Qs1rPvcce&branch=master)](https://travis-ci.com/netliferesearch/dibk-bus-tilbygg)

The dibk-bus-tilbygg project is a wizard that uses [losen](https://github.com/netliferesearch/losen).  
The documentation for losen can be found here https://dibk-storybook.firebaseapp.com/.

## Development

You need to link [netliferesearch/losen](https://github.com/netliferesearch/losen) to run this project locally. Head over to you clone of that repo in the terminal and type `yarn link`.

Head back to this repo in you terminal and type `yarn link losen`.

Then run `yarn && yarn start` to run the development server.

## Testing

To run the tests you need to type the command `yarn test`.

The data for this wizard can be found in `src/api/bus-tilbygg.json`.

## Deploy

The project is hosted on [`Firebase`](https://console.firebase.google.com/u/0/project/dibk-bus-tilbygg/overview) :fire:. You need to be invited to it to be able to deploy.

To deploy you need the firebase tools.
Install it with the following command:

`yarn global add firebase-tools`

Follow the instructions for:
`firebase login`

To build the production bundle you run `yarn run build`.
Then you are ready to type `yarn deploy` :sparkles:

## Deploy to production

First build this project `npm run build` (make sure you are using latest version of [losen](https://github.com/netliferesearch/losen)).  
Then navigate to the wizard page in [DIBK staging](https://azr-dibkstaging.azurewebsites.net/).
Could not login from the last page so you could try and go to https://azr-dibkstaging.azurewebsites.net/tests/veiviser-1/.
You will find the page in the icon top left and `Forside/Tests/Veiviser 1`
Select folder icon (folder top right) then press "Media" (between "Blokker" and "Skjemaer").
Scroll all the way to the bottom and chose "For denne Side".
Upload the Javascript bundle found in `build/static` after the build step.
Then press the menu icon (last icon row right) and update the file in "Javascriptfil for veiviseren" to the file you just uploaded.
The last step is to publish the page.
The pictures and text changes are uploaded to Episerver.
