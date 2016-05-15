# About the «Bernstein» theme

«Bernstein» (engl. amber) is a dark theme for desktop applications written in qooxdoo v3.0 or above. 
The decorators of the theme are mainly based on gradients and shadows, i. e. only very few image files are involved, 
which makes it a relatively lean theme causing hardly any flicker effects.

If you are looking for a "clean" and "modern" design for your GUI, «Bernstein» is certainly not what you want. 
However, if you enjoy "dark and dirty" desktop environments this theme may be just what you've been waiting for.

What «Bernstein» (and its accompanying demo application) is clearly lacking is a decent icon theme. The Tango or Oxygen 
icons that are included in the framework in my opinion don't match a dark design at all. So, any link to a suitable icon 
set with an appropriate license would be very much appreciated.

## How to use «Bernstein»

1. Download the theme files and unzip the contents into an appropriate folder named "Bernstein" on your local machine. 
(Recommendation: Put the theme outside of the qooxdoo SDK folder, but on the same directory level.)

2. Modify the contrib.json file of your application by adding «Bernstein» as a library, e.g.
  ```
  [...]
  "jobs" :
  {
    "libraries" :
    {
      "library" :
      [
        {
          "manifest" : "../Bernstein/Manifest.json"
        }
      ]
    }
  }
  [...]
  ```
3. Change the `QXTHEME` key in `config.json` to `"bernstein.theme.Theme"`. This way the theme of your application is 
**replaced** by «Bernstein». The downside to this approach: If you want to modify and/or extend the "amber" appearance 
of your application you have to do this directly in the «Bernstein» theme files which may later lead to subtle bugs or
strange side effects.
You might, therefore, want to invest a few more minutes, leave the `QXTHEME` key in `config.json` untouched and let
your predefined application theme **inherit** from «Bernstein» instead of being replaced by it. To do this, go to the 
theme folder of your application and modify Appearance.js, Color.js, Decoration.js and Font.js as shown in this 
example:
  ```
  qx.Theme.define("myapp.theme.Appearance",
  {
    //extend : qx.theme.modern.Appearance,
    extend : bernstein.theme.Appearance,

    appearances :
    {
    }
  });
  ```
This way you can safely add new appearances, decorators, colors and fonts, or overwrite existing ones.

4. Generate your application and your are done.
