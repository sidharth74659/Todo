# Todo

with mongodb and user authentication

# Table of contents

- [Tailwind CSS Setup](#tailwind-css-setuphttpswwwyoutubecomwatchvztjxyiq0nquab_channeljamesqquick)
  - [Installing](#installing)
  - [Folders](#folders)
  - [including components required in our stylesheet](#including-components-required-in-our-stylesheet)
  - [Create a tailwind-config file](#create-a-tailwind-config-file)
  - [config file for postcss](#config-file-for-postcss)
  - [Writing a build-script to run the tailwind css in `package.json`](#writing-a-build-script-to-run-the-tailwind-css-in-packagejson)
  - [Link tailwindcss inside your `index.html`](#link-tailwindcss-inside-your-indexhtml)
  - [Checking if tailwind is runnning or not](#checking-if-tailwind-is-runnning-or-not)
- [Polishing](#polishing)
  - [Enable dynamic build only for production](#enable-dynamic-build-only-for-production)
  - [Conditionally build/ optimize stylesheet](#conditionally-build-optimize-stylesheet)



### [Tailwind CSS Setup](https://www.youtube.com/watch?v=zTjxyIq0nqU&ab_channel=JamesQQuick)

#### Installing

    npm install tailwindcss

#### Folders

    mkdir css && cd css && touch styles.css

#### including components required in our stylesheet

Define what components we want to include inside styles.css

    /* copy these into css/styles.css */

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

#### Create a tailwind-config file

To reference the above styles by running the following command, we create a config file for tailwind.


    /* in project root directory */
    npx tailwindcss init

You can see the config file created as `Created Tailwind CSS config file: tailwind.config.js`

> Note : Few might need to install `autoprefixer`, `postcss-cli` and `watch`...
To install those run :

    npm install autoprefixer postcss-cli watch

#### config file for postcss

- [Why do we need to add PostCSS and Autoprefixer as well?](https://daily.dev/blog/how-to-use-tailwindcss-with-node-js-express-and-pug#add-tailwindcss)

create a `postcss.config.js` file and insert the following

    module.exports = {
    plugins: [require('tailwindcss'), require('autoprefixer')]
    }

If you want to change the file-name/ folder of `tailwind.config.js` Visit [here](https://tailwindcss.com/docs/configuration#using-a-different-file-name)

#### Writing a build-script to run the tailwind css in `package.json`

    /*  <command_to_run> : "postcss <file-to-compile> <flag to mention the output folder(-o)> <output-file-path_to_store_build/compiled_css> " */

    "build" : "postcss css/styles.css -o build/styles.css"

    /* in terminal : */

    npm run build

- This checks the file-to-compile : `css/styles.css`
- uses tailwindcss && autoprefixer as we mentioned in `postcss.config.js`
- and generate the output-file in `build/styles.css` (see the contents in this file after build)

#### Link tailwindcss inside your `index.html`

You can now include the build css(output-file : `build/styles.css`) inside your html

    /* if index.html is in project-root directory */

    <link rel="stylesheet" href="./build/styles.css">

#### Checking if tailwind is runnning or not

Add the following element in your `index.html` and check if it displays text in large and red color

    <div class="text-4xl text-red-400">Hello World!</div>

if yes : congrats!!! you setup the tailwind in your project

### Polishing

#### Enable dynamic build only for production

If you see the `build/styles.css` you can see it has more than 4k lines of code which is not that necessary for your project, to optimize it :

- Go to `tailwind.config.js` and change the value of purge form empty array : `purge : []` to

      purge: {enabled : true, content: ['./public/*.html']},

- where the value of `content` is the location of your `.html` file that you are using the tailwind in... If there are multiple html files, you can add them inside the `content` array.

- And then in terminal :

        npm run build

- Now you can see the `build/styles.css` contains less/ optimised code than before (probably less than 1000 lines)

> Overview :

- Try searching for the class `text-red-500` in `build/styles.css`, if you can't find it...

- Apply the `text-red-500` to an element in your `html` file that is using tailwind and run build : `npm run build` :

- Now you will find the class `text-red-500` in `build/styles.css`

#### Conditionally build/ optimize stylesheet

- The problem with the above thing is we have to continuously build by command , to avoid that we can make the `purge` conditionally build by making changes to the value of purge in `tailwind.config.js`.

        console.log(process.env.NODE_ENV)   //returns 'development'

- So we have to make the build/ optimize the stylesheets only when in 'production'... so we add

        const purge = process.env.NODE_ENV === 'development' ? false : true


- And assign this value to purge

        purge: {enabled : purge, content: ['./public/*.html']},
        

- Now everytime in prduction the file is optimized... you can check the `build/styles.css` and see the whole codebase there, when you run `npm run build`

