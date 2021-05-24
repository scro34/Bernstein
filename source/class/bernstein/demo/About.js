/* ************************************************************************

   Copyright:
     2015-2021 Norbert Schröder

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Norbert Schröder (scro34)

************************************************************************ */

qx.Class.define("bernstein.demo.About",
{
  extend: qx.ui.window.Window,

  construct: function()
  {
    this.base(arguments);

    this._createControls();
  },


  members:
  {
    _aboutTextUrl: "resource/bernstein/demo/about.html",
    
    _createControls: function()
    {
      this.set({
        layout: new qx.ui.layout.VBox(0),
        caption: "About",
        icon: "@fontawesome/f05a/16",
        contentPadding: 5,
        showMaximize: false,
        showMinimize: false,
        resizable: false
      });

      var url = qx.util.ResourceManager.getInstance().toUri(this._aboutTextUrl);
      //url = this._aboutTextUrl;
      
      var textBox = this.textBox = new qx.ui.embed.ThemedIframe(url).set({
        width: 580,
        height: 350
      });
      
      this.add(textBox, {flex: 1});
      this.add(new qx.ui.menu.Separator().set({
        margin: 5
      }));
      this.add(this._getButtonBox());

      this.addListenerOnce("appear", this.center, this);
      
      this.addListener("appear", function() {
        this.fadeIn(200);
      }, this);

      this.addListener("keypress", function(e) {
        if (e.getKeyIdentifier() == "Escape") {
          this.close();
        }
      }, this);
    },
    
    
    _getButtonBox: function()
    {
      var btnClose = new qx.ui.form.Button("Close", "@fontawesome/f00d/14").set({
        width: 100
      });
      btnClose.addState("circle");
      btnClose.addListener("execute", this.close, this);
      
      var container = new qx.ui.container.Composite(new qx.ui.layout.HBox().set({
        alignX: "center"
      }));
      container.add(btnClose);
      
      return container;
    }
    
  }
});
