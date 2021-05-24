/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Theme.define("bernstein.demo.theme.Font",
{
  extend: bernstein.theme.Font,

  fonts:
  {
    "title":
    {
      size: 36,
      family: ["serif"],
      sources: 
      [
        {
          family: "JosefinSlab",
          source: ["resource/bernstein/demo/fonts/JosefinSlab-Regular.ttf"]
        }
      ]
    },
    
    "qooxdoo":
    {
      size: 19,
      family: ["serif"],
      sources: 
      [
        {
          family: "JosefinSlabBold",
          source: ["resource/bernstein/demo/fonts/JosefinSlab-Bold.ttf"]
        }
      ]
    }
  }
});
