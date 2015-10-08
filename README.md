# Karma template

My personal general-purpose set up for karma which includes mocha, mocha reporter, webpack + sourcemaps, and babel. Running the command in the root of your project:

- Installs all npm dependencies with --save-dev
- Creates a `karma.conf.js` file
- Creates a `./tests` folder with a sample test file in it

## Install
```
npm install -g k88hudson/karma-template
```

## Usage
```
karma-template [options]
```

## Options
```
--no-install     skip npm install
--no-save        don't save npm devDependencies in package.json
--force          overwrite existing ./tests directory and karma.conf.js
```
