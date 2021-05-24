/* ************************************************************************

   Copyright:
     2015-2021 Norbert Schröder

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Norbert Schröder (scro34)

************************************************************************ */

qx.Class.define("bernstein.demo.Separator",
{
  extend: qx.ui.container.Composite,

  construct: function(width)
  {
    this.base(arguments);

    var layout = new qx.ui.layout.HBox(5).set({
      alignX: "center",
      alignY: "middle" 
    });
    
    this.set({
      layout: layout
    });
    
    this.add(new qx.ui.menu.Separator().set({
      width: width,
      maxHeight: 2
    }));
    
    this.add(new qx.ui.basic.Atom().set({
      decorator: "radiobutton-checked-hovered", 
      width: 15, 
      height: 15,
      maxHeight: 15,
      marginBottom: 3
    }));
    
    this.add(new qx.ui.menu.Separator().set({
      width: width,
      maxHeight: 2
    }));
      
  }

});
