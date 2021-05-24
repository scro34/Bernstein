/* ************************************************************************

   Copyright:
     2015-2021 Norbert Schröder

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Norbert Schröder (scro34)

************************************************************************ */

/**
 * @asset(bernstein/demo/*)
 * 
 */
qx.Class.define("bernstein.demo.Application",
{
  extend: qx.application.Standalone,


  members:
  {
    desktop: null,
    
    main: function()
    {
      this.base(arguments);

      if (qx.core.Environment.get("qx.debug")) {
        qx.log.appender.Native;
        qx.log.appender.Console;
      }

      /***************************************************************************/
      
      var doc = this.getRoot();
      
      var desktop = this.desktop = new qx.ui.window.Desktop()
      desktop.add(this.createTitle(), {top: 10, left: 10});
      
      var mainContainer = this.mainContainer = new qx.ui.container.Composite()
      mainContainer.setLayout(new qx.ui.layout.Canvas());
      mainContainer.add(desktop, {top: 0, left: 0, bottom: 0, right: 0});
      mainContainer.add(this.createDock(), {left: 5, bottom: 0, right: 5});
      
      doc.add(mainContainer, {edge: 0});
      
      var about = this.about = new bernstein.demo.About();
      about.open();
      
      desktop.add(about);
    },
    

    createTitle: function()
    {
      var separator = new bernstein.demo.Separator(80);
      
      var themeLabel = new qx.ui.basic.Label("Bernstein").set({
        font: "title", 
        textColor: "text-active",
        cursor: "pointer"
      });
      themeLabel.addListener("mouseover", function() {
        this.setTextColor("text-selected");
      }, themeLabel);
      themeLabel.addListener("mouseout", function() {
        this.setTextColor("text-active");
      }, themeLabel);
      themeLabel.addListener("click", function() {
        this.about.open();
      }, this);
      
      var container = new qx.ui.container.Composite(new qx.ui.layout.VBox(0).set({
        alignX: "center"
      }));
      container.add(themeLabel);
      container.add(separator);
      container.add(new qx.ui.basic.Label("Theme Demo"));
      
      return container;
    },
    
    
    createVersionInfo: function()
    {
      var qooxdoo = new qx.ui.basic.Label("qooxdoo").set({font: "qooxdoo", paddingBottom: 3, cursor: "pointer"});
      qooxdoo.addListener("mouseover", function() {
        this.setTextColor("text-selected");
      }, qooxdoo);
      qooxdoo.addListener("mouseout", function() {
        this.setTextColor("text-label");
      }, qooxdoo);
      qooxdoo.addListener("click", function() {
        this.pressButton("WebBrowser");
      }, this);
      
      var container = new qx.ui.container.Composite(new qx.ui.layout.HBox(5).set({alignY: "middle"}));
      container.add(new qx.ui.basic.Label("powered by").set({font: "small"}));
      container.add(qooxdoo);
      container.add(new qx.ui.basic.Label(qx.core.Environment.get("qx.version")).set({font: "small"}));

      return container;
    },


    createDock: function()
    {
      var container = new qx.ui.container.Composite(new qx.ui.layout.HBox(10).set({
        alignX: "center"
      })).set({
        paddingBottom: 5
      });
      container.addListener("appear", function() {
        this.fadeIn(200);
      }, container);
      
      var button;
      var buttonData = this.getButtonData();
      for (var i = 0; i < buttonData.length; i++) {
        button = new qx.ui.form.ToggleButton(null, buttonData[i].icon).set({
          padding: 10, 
          toolTip: new qx.ui.tooltip.ToolTip(buttonData[i].toolTip)
        });
        button.addState("circle");
        button.setUserData("name", buttonData[i].name);
        button.addListener("changeValue", buttonData[i].action, this);
        container.add(button);
      }
      
      var buttonDock = this.buttonDock = new qx.ui.container.Composite(new qx.ui.layout.Canvas());
      buttonDock.add(container, {top: 0, left: 0, bottom: 0, right: 0});
      buttonDock.add(this.createVersionInfo(), {bottom: 2, right: 0});
      
      buttonDock.addListener("mousemove", function(e) {
        var docHeight = this.getRoot()._computeSizeHint().height;
        var buttonDockHeight = this.buttonDock._computeSizeHint().height;
        var buttonDockContainer = this.buttonDock.getChildren()[0];
        
        if (!this.hasActiveButtons(buttonDockContainer) || (e.getDocumentTop() >= docHeight - 20 && e.getDocumentTop() <= docHeight - 3)) {
          buttonDockContainer.setVisibility("visible");
        } else if (e.getDocumentTop() <= docHeight - buttonDockHeight + 10 || e.getDocumentTop() >= docHeight - 3) {
          buttonDockContainer.setVisibility("excluded");
        } 
      }, this);
      
      return buttonDock;
    },
    
    
    hasActiveButtons: function(container)
    {
      var buttonDockButtons = container.getChildren();

      for (var i = 0; i < buttonDockButtons.length; i++) {
        if (buttonDockButtons[i].getValue()) {
          return true;
        }
      }
      
      return false;
    },
    
    
    checkShowDock: function()
    {
      var container = this.buttonDock.getChildren()[0];
      
      if (!this.hasActiveButtons(container)) {
        container.setVisibility("visible");
      }
    },


    pressButton: function(buttonName)
    {
      var buttonDockContainer = this.buttonDock.getChildren()[0];
      var buttonDockButtons = buttonDockContainer.getChildren();

      for (var i = 0; i < buttonDockButtons.length; i++) {
        if (buttonDockButtons[i].getUserData("name") == buttonName) {
          buttonDockButtons[i].setValue(true);
          break;
        }
      }
    },
    

    dockButtonClick: function(button, targetWindow, openFunc)
    {
      if (button.getValue()) {
        openFunc();
      } else {
        if (targetWindow.getVisibility() == "visible" && !targetWindow.getActive()) {
          button.setValue(true);
        } else {
          targetWindow.close();
        }
      }
    },


    onCalculator: function(e)
    {
      var button = e.getTarget();
      var that = this;
      
      this.dockButtonClick(button, this.calculator, function()
      {
        if (!that.calculator) {
          that.calculator = new bernstein.demo.Calculator();
          that.calculator.addListener("close", function() {
            button.setValue(false);
            this.checkShowDock();
          }, that);
          that.desktop.add(that.calculator, {top: 20, right: 50});
        }
        that.calculator.open();
      });
    },

    
    onColorChooser: function(e)
    {
      var button = e.getTarget();
      var that = this;
      
      this.dockButtonClick(button, this.colorChooser, function()
      {
        if (!that.colorChooser) {
          that.colorChooser = new bernstein.demo.ColorChooser();
          that.colorChooser.addListener("close", function() {
            button.setValue(false);
            this.checkShowDock();
          }, that);
          that.desktop.add(that.colorChooser, {bottom: 30, right: 10});
        }
        that.colorChooser.open();
      });
    },
    
    
    onTableWindow: function(e)
    {
      var button = e.getTarget();
      var that = this;
      
      this.dockButtonClick(button, this.tableWindow, function()
      {
        if (!that.tableWindow) {
          that.tableWindow = new bernstein.demo.TableWindow();
          that.tableWindow.addListener("close", function() {
            button.setValue(false);
            this.checkShowDock();
          }, that);
          that.desktop.add(that.tableWindow, {left: 50, bottom: 20});
        }
        that.tableWindow.open();
      });
    },
    
    
    onWebBrowser: function(e)
    {
      var button = e.getTarget();
      var that = this;
      
      this.dockButtonClick(button, this.webBrowser, function()
      {
        if (!that.webBrowser) {
          that.webBrowser = new bernstein.demo.WebBrowser();
          that.webBrowser.addListener("close", function() {
            button.setValue(false);
            this.checkShowDock();
          }, that);
          that.desktop.add(that.webBrowser);
        }
        that.webBrowser.open();
      });
    },

    
    onWidgetBrowser: function(e)
    {
      var button = e.getTarget();
      var that = this;
      
      this.dockButtonClick(button, this.widgetBrowser, function()
      {
        if (!that.widgetBrowser) {
          that.widgetBrowser = new bernstein.demo.WidgetBrowser();
          that.widgetBrowser.addListener("close", function() {
            button.setValue(false);
            this.checkShowDock();
          }, that);
          that.desktop.add(that.widgetBrowser);
        }
        that.widgetBrowser.open();
      });
    },

    getButtonData: function()
    {
      return [
        {
          icon: "@fontawesome/f0ca/32",
          toolTip: "Widget Browser",
          name: "WidgetBrowser",
          action: this.onWidgetBrowser
        },
        {
          icon: "@fontawesome/f1ec/32",
          toolTip: "Calculator",
          name: "Calculator",
          action: this.onCalculator
        },
        {
          icon: "@fontawesome/f53f/32",
          toolTip: "Color Selector",
          name: "ColorSelector",
          action: this.onColorChooser
        },
        {
          icon: "@fontawesome/f0ce/32",
          toolTip: "Table",
          name: "Table",
          action: this.onTableWindow
        },
        {
          icon: "@fontawesome/f0ac/32",
          toolTip: "Web Browser",
          name: "WebBrowser",
          action: this.onWebBrowser
        }
      ];
    }
    
  }
});
