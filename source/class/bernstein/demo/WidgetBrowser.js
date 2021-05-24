/* ************************************************************************

   Copyright:
     2015-2021 Norbert Schröder

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Norbert Schröder (scro34)

************************************************************************ */

qx.Class.define("bernstein.demo.WidgetBrowser",
{
  extend: qx.ui.window.Window,
  

  construct: function()
  {
    this.base(arguments);
    this._createControls();
  },


  members:
  {
    _tabView: null,

    _createControls: function()
    {
      this.set({
        layout: new qx.ui.layout.VBox(),
        contentPadding: [10, 0, 0, 0],
        caption: "WidgetBrowser",
        icon: "@fontawesome/f0ca/16",
      });
      
      this._tabView = new bernstein.demo.view.TabView();
      this._tabView.set({
        minWidth: 880,
        minHeight: 610,
        padding: 5
      });
      
      this.add(this._tabView, {flex: 1});
      
      this.addListener("appear", function() {
        this.center();
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
