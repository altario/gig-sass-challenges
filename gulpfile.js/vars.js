// dependencies --------------------

// dependencies: gulp
const gulp = require('gulp');



// vars --------------------

// browserSync
browserSync = global.browserSync;



// global vars --------------------
global.var = {

  build: {
    base: '/build'
  },

  // project
  project: {
    base: () => {
      return `${process.cwd()}`; // ./
    },
    src: () => {
      return `${global.var.project.base}/src`; // ./src
    },
    dest: () => {
      return `${global.var.project.base}${global.var.build.base}`; // ./build
    },
    assets: {
      src: () => {
        return `${global.var.project.src}/assets`; // ./src/assets
      },
      dest: () => {
        return `${global.var.project.dest}/assets`; // ./build/assets
      },
      css: () => {
        return `/css`; // /css
      },
      sass: () => {
        return `/sass`; // /sass
      }
    }
  },

  // browsersync
  browserSync: {
    baseDir: './',
    port: 3000,
    options: {
      browser: [
        'chrome',
        // 'firefox',
        // 'iexplorer',
        // 'safari'
      ]
    }
  },

  // watch
  watch: {
    tasks: [
      'browser-sync',
      'html',
      'sass',
    ]
  },

  // html
  html: {
    src: () => {
      return `${global.var.project.src}/*.html`;
    },
    dest: () => {
      return `${global.var.project.dest}`;
    },
    watch: () => {
      return `${global.var.html.src}`
    }
  },

  // sass
  sass: {
    src: () => {
      return `${global.var.project.assets.src}${global.var.project.assets.sass}/*.{sass,scss}`;
    },
    dest: () => {
      return `${global.var.project.assets.dest}${global.var.project.assets.css}`;
    },
    options: {
      errLogToConsole: true,
      outputStyle: 'expanded',
    },
    watch: () => {
      return `${global.var.project.assets.src}${global.var.project.assets.sass}/*.{sass,scss}`
    }
  }
};



// resolvers --------------------

function resolveVars(obj) {
  for(let prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      if(typeof obj[prop] === 'object') {
        resolveVars(obj[prop]);
      }
      else {
        if(typeof obj[prop] === 'function') {
          obj[prop] = obj[prop].call();
        }
      }
    }
  }
}

resolveVars(global.var);
