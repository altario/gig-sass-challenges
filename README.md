# Altar: gig-sass-challenges **[DO NOT FORK]**

## STEPS

1. **Clone** the project to your GitHub account **[DO NOT FORK]**
2. Create a branch with your name (ex: andre-pinto)
3. Develop under that branch
4. Run `gulp build` at the end
5. Submit a **Pull Request** on your **Repo**
6. Send us an email with your **Repo**

## EXERCISE

From the sass map provided in the "**INPUT**" you have to create a way to generate `@import` for google fonts like in their website ([Google Fonts](https://fonts.google.com/)) through mixins/functions concatenating so the output of the css file is the expected.

## INPUT (initial code)

```scss
$font-family--primary: 'Aguafina Script';

$google-fonts: (
  Roboto: (
    300,
    400,
    500,
    700
  ),
  Source-Sans-Pro: (
    400,
    600,
    700
  ),
  Aguafina-Script: (
    400
  )
);

// your code here...

body {
  font-family: $font-family--primary;
}
```

## OUTPUT (css file)

```css
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700&display=swap");
@import url("https://fonts.googleapis.com/css?family=Aguafina+Script:400&display=swap");
@import url("https://fonts.googleapis.com/css?family=Indie+Flower&display=swap");
body {
  font-family: "Indie Flower";
}
```

## Project: How to run (first steps)

`npm install` --> install local dependencies from **package.json**

`npm install gulp` --> install local gulp dependency

### Develop mode (in terminal/cmd run command)

`gulp` --> (runs the project, starts a local server and opens the window on the local server endpoint)

### Output Build Folder (build)

The gulp outputs to the **build** folder

## Tech

The source files (editable) are located in the `src/` folder.
To ensure the integrity of the project you should only edit these files inside this folder.
The gulp scripts are able to handle with preprocessing (html, sass, etc...)
