/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2010 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * ???

************************************************************************ */

qx.Class.define("bernstein.demo.ColorChooser",
{
  extend: qx.ui.window.Window,

  construct: function()
  {
    this.base(arguments);

    this._createControls();
  },


  members:
  {
    _createControls: function()
    {
      this.set({
        layout: new qx.ui.layout.VBox(16),
        icon: "@fontawesome/f53f/16",
        caption: "Color Selector",
        allowStretchX: false,
        allowStretchY: false
      });
    
      var box = new qx.ui.container.Composite().set({
        layout: new qx.ui.layout.VBox(),
        padding: 3,
        allowGrowX: true,
        allowGrowY: true
      });
    
      var colorSelector = new qx.ui.control.ColorSelector();
      colorSelector.getChildControl("hex-field").setWidth(65);

      box.add(colorSelector);
      this.add(box, {flex: 1});
      
      this.addListener("appear", function() {
        this.fadeIn(200);
      }, this);

      this.addListener("keypress", function(e) {
        if (e.getKeyIdentifier() == "Escape") {
          this.close();
        }
      }, this);
    }
  }

});

