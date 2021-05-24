<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/scro34/Bernstein">
    <img src="bernstein.png" alt="Logo">
  </a>

  <h3 align="center"></h3>

  <p align="center">
    A theme for the Qooxdoo JavaScript Framework
  </p>
</p>

<!-- ABOUT THE PROJECT -->
## About the &laquo;Bernstein&raquo; theme (v2.0.0)

<p>&laquo;Bernstein&raquo; (engl. <i>amber</i>) is a dark theme for desktop applications written in qooxdoo v3.0 or above. It has now - at long last - been adapted to qooxdoo v6.0.0 (thanks to Dmitry Zolotov, aka <a href="https://github.com/goldim" target="_blank">goldim</a>).</p>
<p>The decorators of the theme are mainly based on gradients and shadows, i. e.
only very few image files are involved, which makes it a relatively lean theme causing hardly any flicker effects.</p>

**Form Controls**
<img src="widgetbrowser.png" alt="Screen shot example">

<p>Instead of one of qooxdoo's icon themes &laquo;Bernstein&raquo; (and its accompanying demo application) now includes the <a href="https://fontawesome.com" target="_blank">Font Awesome</a> icon font (v.5.15.3). If you want to use the font icons in your own Bernstein-based aplication, please refer to the <a href="https://qooxdoo.org/documentation/6.0/#/development/howto/icon_fonts?id=using-icon-fonts" target="_blank">qooxdoo documentation</a> or the source code of this demo on how to do that.</p>

<!-- GETTING STARTED -->
## Using the Theme in your Application
To use Bernstein in your application, go to the application root directory and install the theme into your project:
```sh
$ qx package update
$ qx package list
$ qx package install scro34/Bernstein
```
Now you just have to modify your compile.json to enable the theme:
```sh
"applications": [
  {
    ...
    "theme": "bernstein.theme.Theme",
    ...
  }
],
```

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` file for more information.

<!-- CONTACT -->
## Contact

Norbert Schröder - [@scro34](http://scro34.de/) - email: n.schroeder@scro34.de