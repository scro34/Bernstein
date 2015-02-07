/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2011 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (martinwittemann)

************************************************************************ */

qx.Class.define("qxc.application.formdemo.FormItems", {
  extend : qx.ui.container.Composite,

  construct : function() {
    this.base(arguments);

    this.__widgets = [];
    this._createView();
  },

  members : {
    __widgets : null,

    _createView : function()
    {
      var grid = new qx.ui.layout.Grid(20, 5);
      grid.setColumnFlex(0, 1);
      grid.setColumnFlex(1, 1);
      this.setLayout(grid);
      this.setPadding(10);
      var tabIndex = 1;

      /*****************************************
       * TEXT INPUT
       ****************************************/

      var form = new qx.ui.form.Form();

      var textGroupBox = new qx.ui.groupbox.GroupBox("Text");
      textGroupBox.setLayout(new qx.ui.layout.Canvas());
      this.add(textGroupBox, {row: 0, column: 0});

      // text field
      var textField = new qx.ui.form.TextField();
      textField.setPlaceholder("required");
      textField.setTabIndex(tabIndex++);
      textField.setRequired(true);
      this.__widgets.push(textField);
      form.add(textField, "TextField");

      // password field
      var passwordField = new qx.ui.form.PasswordField();
      passwordField.setPlaceholder("password");
      passwordField.setTabIndex(tabIndex++);
      textField.setRequired(true);
      this.__widgets.push(passwordField);
      form.add(passwordField, "PasswordField");

      // text area
      var textArea = new qx.ui.form.TextArea();
      textArea.setPlaceholder("placeholder text...");
      textArea.setTabIndex(tabIndex++);
      this.__widgets.push(textArea);
      form.add(textArea, "TextArea");

      // combo box
      var comboBox = new qx.ui.form.ComboBox();
      comboBox.setPlaceholder("Pick an item");
      comboBox.setTabIndex(tabIndex++);
      this.__createItems(comboBox);
      this.__widgets.push(comboBox);
      form.add(comboBox, "ComboBox");

      // virtual combo box
      var virtualComboBox = new qx.ui.form.VirtualComboBox();
      virtualComboBox.setPlaceholder("Pick an item");
      virtualComboBox.setTabIndex(tabIndex++);
      this.__createItemsVirtual(virtualComboBox);
      this.__widgets.push(virtualComboBox);
      form.add(virtualComboBox, "VirtualComboBox");

      // date field
      var dateField = new qx.ui.form.DateField();
      dateField.setPlaceholder("Pick a date");
      dateField.setTabIndex(tabIndex++);
      this.__widgets.push(dateField);
      form.add(dateField, "DateField");

      var renderedForm = new qx.ui.form.renderer.Single(form);
      textGroupBox.add(renderedForm);

      /*****************************************
       * SELECTION
       ****************************************/

      form = new qx.ui.form.Form();

      var selectionGroupBox = new qx.ui.groupbox.GroupBox("Selection");
      selectionGroupBox.setLayout(new qx.ui.layout.Canvas());
      this.add(selectionGroupBox, {row:1, column: 0, rowSpan: 2});

      // select box
      var selectBox = new qx.ui.form.SelectBox();
      selectBox.setTabIndex(tabIndex++);
      form.add(selectBox, "SelectBox");
      this.__createItems(selectBox);
      this.__widgets.push(selectBox);

      // virtual select box
      var virtualSelectBox = new qx.ui.form.VirtualSelectBox();
      virtualSelectBox.setTabIndex(tabIndex++);
      form.add(virtualSelectBox, "VirtualSelectBox");
      this.__createItemsVirtual(virtualSelectBox);
      this.__widgets.push(virtualSelectBox);

      // list
      var list = new qx.ui.form.List();
      list.setTabIndex(tabIndex++);
      list.setHeight(60);
      list.setWidth(155);
      form.add(list, "List");
      this.__createItems(list);
      this.__widgets.push(list);

      // radio button group
      var radioButtonGroup = new qx.ui.form.RadioButtonGroup();
      radioButtonGroup.add(new qx.ui.form.RadioButton("RadioButton 1").set({tabIndex: tabIndex++}));
      radioButtonGroup.add(new qx.ui.form.RadioButton("RadioButton 2").set({tabIndex: tabIndex++}));
      radioButtonGroup.add(new qx.ui.form.RadioButton("RadioButton 3").set({tabIndex: tabIndex++}));
      form.add(radioButtonGroup, "RadioButtonGroup");
      this.__widgets.push(radioButtonGroup);

      renderedForm = new qx.ui.form.renderer.Single(form);
      selectionGroupBox.add(renderedForm);

      /*****************************************
       * BUTTONS
       ****************************************/

      var buttonGroupBox = new qx.ui.groupbox.GroupBox("Buttons");
      var layout = new qx.ui.layout.Grid(8, 8);
      buttonGroupBox.setLayout(layout);
      layout.setColumnAlign(0, "right", "middle");
      this.add(buttonGroupBox, {row: 0, column: 1});

      // button
      var button = new qx.ui.form.Button("Button").set({tabIndex: tabIndex++});
      var label = new qx.ui.basic.Label("Button :");
      label.setBuddy(button);
      buttonGroupBox.add(label, {row: 0, column: 0});
      buttonGroupBox.add(button, {row: 0, column: 1});
      this.__widgets.push(button);

      // toggle button
      var toggleButton = new qx.ui.form.ToggleButton("ToggleButton").set({tabIndex: tabIndex++});
      label = new qx.ui.basic.Label("ToggleButton :");
      label.setBuddy(toggleButton);
      buttonGroupBox.add(label, {row: 1, column: 0});
      buttonGroupBox.add(toggleButton, {row: 1, column: 1});
      this.__widgets.push(toggleButton);

      // toggle button
      var repeatButton = new qx.ui.form.RepeatButton("0").set({tabIndex: tabIndex++});
      label = new qx.ui.basic.Label("RepeatButton :");
      label.setBuddy(repeatButton);
      buttonGroupBox.add(label, {row: 2, column: 0});
      buttonGroupBox.add(repeatButton, {row: 2, column: 1});
      this.__widgets.push(repeatButton);

      // menu button
      var menuButton = new qx.ui.form.MenuButton("MenuButton", null, this.__createMenuForMenuButton()).set({tabIndex: tabIndex++});
      label = new qx.ui.basic.Label("MenuButton :");
      label.setBuddy(menuButton);
      buttonGroupBox.add(label, {row: 3, column: 0});
      buttonGroupBox.add(menuButton, {row: 3, column: 1});
      this.__widgets.push(menuButton);

      // split button
      var splitButton = new qx.ui.form.SplitButton("SplitButton", null, this.__createMenuForSplitButton()).set({tabIndex: tabIndex++});
      label = new qx.ui.basic.Label("SplitButton :");
      label.setBuddy(splitButton);
      buttonGroupBox.add(label, {row: 4, column: 0});
      buttonGroupBox.add(splitButton, {row: 4, column: 1});
      this.__widgets.push(splitButton);

      // Listener
      repeatButton.addListener("execute", function()
      {
        var tempValue = parseInt(repeatButton.getLabel(), 10) + 1;
        repeatButton.setLabel(tempValue.toString());
      });

      /*****************************************
       * BOOLEAN INPUT
       ****************************************/

      form = new qx.ui.form.Form();

      var booleanGroupBox = new qx.ui.groupbox.GroupBox("Boolean");
      booleanGroupBox.setLayout(new qx.ui.layout.Canvas());
      this.add(booleanGroupBox, {row:1, column: 1});

      // check box
      var checkBox = new qx.ui.form.CheckBox().set({tabIndex: tabIndex++});
      form.add(checkBox, "CheckBox");
      this.__widgets.push(checkBox);

      // tri-state check box
      var triCheckBox = new qx.ui.form.CheckBox().set({
        tabIndex: tabIndex++,
        triState: true,
        value: null
      });
      form.add(triCheckBox, "Tri-State CheckBox");
      this.__widgets.push(triCheckBox);

      // radio button
      var radioButton = new qx.ui.form.RadioButton().set({tabIndex: tabIndex++});
      form.add(radioButton, "RadioButton");
      this.__widgets.push(radioButton);

      renderedForm = new qx.ui.form.renderer.Single(form);
      booleanGroupBox.add(renderedForm);

      /*****************************************
       * NUMBER INPUT
       ****************************************/

      form = new qx.ui.form.Form();

      var numberGroupBox = new qx.ui.groupbox.GroupBox("Number");
      numberGroupBox.setLayout(new qx.ui.layout.Canvas());
      this.add(numberGroupBox, {row: 2, column: 1});

      // spinner
      var spinner = new qx.ui.form.Spinner(0, 50, 100).set({tabIndex: tabIndex++});
      form.add(spinner, "Spinner");
      this.__widgets.push(spinner);

      // slider
      var slider = new qx.ui.form.Slider().set({tabIndex: tabIndex++});
      slider.setWidth(130);
      form.add(slider, "Slider");
      this.__widgets.push(slider);

      slider.bind("value", spinner, "value");
      spinner.bind("value", slider, "value");

      renderedForm = new qx.ui.form.renderer.Single(form);
      numberGroupBox.add(renderedForm);
    },


    __createItems: function(widget)
    {
      for (var i = 0; i < 10; i++) {
        var tempItem = new qx.ui.form.ListItem("Item " + i);
        widget.add(tempItem);
      }
    },


    __createItemsVirtual: function(widget)
    {
      // Creates the model data
      var model = new qx.data.Array();
      for (var i = 0; i < 300; i++) {
        model.push("Item " + (i));
      }
      widget.setModel(model);
    },


    __createMenuForMenuButton : function()
    {
      // Creates the option menu
      var optionMenu = new qx.ui.menu.Menu;

      for (var i = 0; i < 3; i++) {
        optionMenu.add(new qx.ui.menu.RadioButton("Option" + i));
      }

      var groupOptions = new qx.ui.form.RadioGroup;
      groupOptions.add.apply(groupOptions, optionMenu.getChildren());

      // create main menu and buttons
      var menu = new qx.ui.menu.Menu();

      for (i = 0; i < 3; i++) {
        var tempButton = new qx.ui.menu.Button("Button" + i);
        menu.add(tempButton);
      }

      var optionButton = new qx.ui.menu.Button("Options", "", null, optionMenu);
      menu.addSeparator();
      menu.add(optionButton);

      return menu;
    },


    __createMenuForSplitButton : function()
    {
      var menu = new qx.ui.menu.Menu;

      var site1 = new qx.ui.menu.Button("Website 1");
      var site2 = new qx.ui.menu.Button("Website 2");
      var site3 = new qx.ui.menu.Button("Website 3");

      menu.add(site1);
      menu.add(site2);
      menu.add(site3);

      return menu;
    },


    getWidgets : function() {
      return this.__widgets;
    }
  }
});
/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2009 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (martinwittemann)

************************************************************************ */

/**
 * The form object is responsible for managing form items. For that, it takes
 * advantage of two existing qooxdoo classes.
 * The {@link qx.ui.form.Resetter} is used for resetting and the
 * {@link qx.ui.form.validation.Manager} is used for all validation purposes.
 *
 * The view code can be found in the used renderer ({@link qx.ui.form.renderer}).
 */
qx.Class.define("qx.ui.form.Form",
{
  extend : qx.core.Object,


  construct : function()
  {
    this.base(arguments);

    this.__groups = [];
    this._buttons = [];
    this._buttonOptions = [];
    this._validationManager = this._createValidationManager();
    this._resetter = this._createResetter();
  },


  events : {
    /** Fired as soon as something changes in the form.*/
    "change" : "qx.event.type.Event"
  },


  members :
  {
    __groups : null,
    _validationManager : null,
    _groupCounter : 0,
    _buttons : null,
    _buttonOptions : null,
    _resetter : null,

    /*
    ---------------------------------------------------------------------------
       ADD
    ---------------------------------------------------------------------------
    */

    /**
     * Adds a form item to the form including its internal
     * {@link qx.ui.form.validation.Manager} and {@link qx.ui.form.Resetter}.
     *
     * *Hint:* The order of all add calls represent the order in the layout.
     *
     * @param item {qx.ui.form.IForm} A supported form item.
     * @param label {String} The string, which should be used as label.
     * @param validator {Function | qx.ui.form.validation.AsyncValidator ? null}
     *   The validator which is used by the validation
     *   {@link qx.ui.form.validation.Manager}.
     * @param name {String?null} The name which is used by the data binding
     *   controller {@link qx.data.controller.Form}.
     * @param validatorContext {var?null} The context of the validator.
     * @param options {Map?null} An additional map containin custom data which
     *   will be available in your form renderer specific to the added item.
     */
    add : function(item, label, validator, name, validatorContext, options) {
      if (this.__isFirstAdd()) {
        this.__groups.push({
          title: null, items: [], labels: [], names: [],
          options: [], headerOptions: {}
        });
      }
      // save the given arguments
      this.__groups[this._groupCounter].items.push(item);
      this.__groups[this._groupCounter].labels.push(label);
      this.__groups[this._groupCounter].options.push(options);
      // if no name is given, use the label without not working character
      if (name == null) {
        name = label.replace(
          /\s+|&|-|\+|\*|\/|\||!|\.|,|:|\?|;|~|%|\{|\}|\(|\)|\[|\]|<|>|=|\^|@|\\/g, ""
        );
      }
      this.__groups[this._groupCounter].names.push(name);

      // add the item to the validation manager
      this._validationManager.add(item, validator, validatorContext);
      // add the item to the reset manager
      this._resetter.add(item);
      // fire the change event
      this.fireEvent("change");
    },


    /**
     * Adds a group header to the form.
     *
     * *Hint:* The order of all add calls represent the order in the layout.
     *
     * @param title {String} The title of the group header.
     * @param options {Map?null} A special set of custom data which will be
     *   given to the renderer.
     */
    addGroupHeader : function(title, options) {
      if (!this.__isFirstAdd()) {
        this._groupCounter++;
      }
      this.__groups.push({
        title: title, items: [], labels: [], names: [],
        options: [], headerOptions: options
      });
      // fire the change event
      this.fireEvent("change");
    },


    /**
     * Adds a button to the form.
     *
     * *Hint:* The order of all add calls represent the order in the layout.
     *
     * @param button {qx.ui.form.Button} The button to add.
     * @param options {Map?null} An additional map containin custom data which
     *   will be available in your form renderer specific to the added button.
     */
    addButton : function(button, options) {
      this._buttons.push(button);
      this._buttonOptions.push(options || null);
      // fire the change event
      this.fireEvent("change");
    },


    /**
     * Returns whether something has already been added.
     *
     * @return {Boolean} true, if nothing has been added jet.
     */
    __isFirstAdd : function() {
      return this.__groups.length === 0;
    },


    /*
    ---------------------------------------------------------------------------
       REMOVE
    ---------------------------------------------------------------------------
    */


    /**
     * Removes the given item from the form.
     *
     * @param item {qx.ui.form.IForm} A supported form item.
     * @return {Boolean} <code>true</code>, if the item could be removed.
     */
    remove : function(item) {
      for (var i = 0; i < this.__groups.length; i++) {
        var group = this.__groups[i];
        for (var j = 0; j < group.items.length; j++) {
          var storedItem = group.items[j];
          if (storedItem === item) {
            // remove all stored data
            group.items.splice(j, 1);
            group.labels.splice(j, 1);
            group.names.splice(j, 1);
            group.options.splice(j, 1);

            // remove the item to the validation manager
            this._validationManager.remove(item);
            // remove the item to the reset manager
            this._resetter.remove(item);

            // fire the change event
            this.fireEvent("change");
            return true;
          }
        }
      }
      return false;
    },


    /**
     * Removes the given group header from the form. All items in the group will be moved to
     * another group (usually the previous group). If there is more than one group with
     * the same title, only the first group will be removed.
     *
     * @param title {String} The title.
     * @return {Boolean} <code>true</code>, if the header could be removed.
     */
    removeGroupHeader : function(title) {
      for (var i = 0; i < this.__groups.length; i++) {
        var group = this.__groups[i];
        if (group.title === title) {
          var targetGroup;

          // if it's the first group
          if (i == 0) {
            // if it's the only group
            if (this.__groups.length == 1) {
              // remove the title and the header options
              group.title = null;
              group.headerOptions = {};
              // fire the change event
              this.fireEvent("change");
              return true;
            } else {
              // add to the next
              targetGroup = this.__groups[i+1];
            }
          } else {
            // add to the previous group
            targetGroup = this.__groups[i-1];
          }

          // copy the data over
          targetGroup.items = targetGroup.items.concat(group.items);
          targetGroup.labels = targetGroup.labels.concat(group.labels);
          targetGroup.names = targetGroup.names.concat(group.names);
          targetGroup.options = targetGroup.options.concat(group.options);

          // delete the group
          this.__groups.splice(i, 1);

          this._groupCounter--;

          // fire the change event
          this.fireEvent("change");
          return true;
        }
      }
      return false;
    },


    /**
     * Removes the given button from the form.
     *
     * @param button {qx.ui.form.Button} The button to remove.
     * @return {Boolean} <code>true</code>, if the button could be removed.
     */
    removeButton : function(button) {
      for (var i = 0; i < this._buttons.length; i++) {
        var storedButton = this._buttons[i];
        if (storedButton === button) {
          this._buttons.splice(i, 1);
          this._buttonOptions.splice(i, 1);
          // fire the change event
          this.fireEvent("change");
          return true;
        }
      }
      return false;
    },



    /*
    ---------------------------------------------------------------------------
       RESET SUPPORT
    ---------------------------------------------------------------------------
    */

    /**
     * Resets the form. This means reseting all form items and the validation.
     */
    reset : function() {
      this._resetter.reset();
      this._validationManager.reset();
    },


    /**
     * Redefines the values used for resetting. It calls
     * {@link qx.ui.form.Resetter#redefine} to get that.
     */
    redefineResetter : function() {
      this._resetter.redefine();
    },


    /**
     * Redefines the value used for resetting of the given item. It calls
     * {@link qx.ui.form.Resetter#redefineItem} to get that.
     *
     * @param item {qx.ui.core.Widget} The item to redefine.
     */
    redefineResetterItem : function(item) {
      this._resetter.redefineItem(item);
    },



    /*
    ---------------------------------------------------------------------------
       VALIDATION
    ---------------------------------------------------------------------------
    */

    /**
     * Validates the form using the
     * {@link qx.ui.form.validation.Manager#validate} method.
     *
     * @return {Boolean | null} The validation result.
     */
    validate : function() {
      return this._validationManager.validate();
    },


    /**
     * Returns the internally used validation manager. If you want to do some
     * enhanced validation tasks, you need to use the validation manager.
     *
     * @return {qx.ui.form.validation.Manager} The used manager.
     */
    getValidationManager : function() {
      return this._validationManager;
    },


    /*
    ---------------------------------------------------------------------------
       RENDERER SUPPORT
    ---------------------------------------------------------------------------
    */

    /**
     * Accessor method for the renderer which returns all added items in a
     * array containing a map of all items:
     * {title: title, items: [], labels: [], names: []}
     *
     * @return {Array} An array containing all necessary data for the renderer.
     * @internal
     */
    getGroups : function() {
      return this.__groups;
    },


    /**
     * Accessor method for the renderer which returns all added buttons in an
     * array.
     * @return {Array} An array containing all added buttons.
     * @internal
     */
    getButtons : function() {
      return this._buttons;
    },


    /**
     * Accessor method for the renderer which returns all added options for
     * the buttons in an array.
     * @return {Array} An array containing all added options for the buttons.
     * @internal
     */
    getButtonOptions : function() {
      return this._buttonOptions;
    },



    /*
    ---------------------------------------------------------------------------
       INTERNAL
    ---------------------------------------------------------------------------
    */

    /**
     * Returns all added items as a map.
     *
     * @return {Map} A map containing for every item an entry with its name.
     *
     * @internal
     */
    getItems : function() {
      var items = {};
      // go threw all groups
      for (var i = 0; i < this.__groups.length; i++) {
        var group = this.__groups[i];
        // get all items
        for (var j = 0; j < group.names.length; j++) {
          var name = group.names[j];
          items[name] = group.items[j];
        }
      }
      return items;
    },


    /**
     * Creates and returns the used validation manager.
     *
     * @return {qx.ui.form.validation.Manager} The validation manager.
     */
    _createValidationManager : function() {
      return new qx.ui.form.validation.Manager();
    },


    /**
     * Creates and returns the used resetter.
     *
     * @return {qx.ui.form.Resetter} the resetter class.
     */
    _createResetter : function() {
      return new qx.ui.form.Resetter();
    }
  },


  /*
  *****************************************************************************
     DESTRUCTOR
  *****************************************************************************
  */
  destruct : function()
  {
    // holding references to widgets --> must set to null
    this.__groups = this._buttons = this._buttonOptions = null;
    this._validationManager.dispose();
    this._resetter.dispose();
  }
});
/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2009 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (martinwittemann)

************************************************************************ */
/**
 * This validation manager is responsible for validation of forms.
 *
 * @ignore(qx.ui.tooltip)
 * @ignore(qx.ui.tooltip.Manager.*)
 */
qx.Class.define("qx.ui.form.validation.Manager",
{
  extend : qx.core.Object,

  construct : function()
  {
    this.base(arguments);

    // storage for all form items
    this.__formItems = [];
    // storage for all results of async validation calls
    this.__asyncResults = {};
    // set the default required field message
    this.setRequiredFieldMessage(qx.locale.Manager.tr("This field is required"));
  },


  events :
  {
    /**
     * Change event for the valid state.
     */
    "changeValid" : "qx.event.type.Data",

    /**
     * Signals that the validation is done. This is not needed on synchronous
     * validation (validation is done right after the call) but very important
     * in the case an asynchronous validator will be used.
     */
    "complete" : "qx.event.type.Event"
  },


  properties :
  {
    /**
     * The validator of the form itself. You can set a function (for
     * synchronous validation) or a {@link qx.ui.form.validation.AsyncValidator}.
     * In both cases, the function can have all added form items as first
     * argument and the manager as a second argument. The manager should be used
     * to set the {@link #invalidMessage}.
     *
     * Keep in mind that the validator is optional if you don't need the
     * validation in the context of the whole form.
     * @type {Function | AsyncValidator}
     */
    validator :
    {
      check : "value instanceof Function || qx.Class.isSubClassOf(value.constructor, qx.ui.form.validation.AsyncValidator)",
      init : null,
      nullable : true
    },

    /**
     * The invalid message should store the message why the form validation
     * failed. It will be added to the array returned by
     * {@link #getInvalidMessages}.
     */
    invalidMessage :
    {
      check : "String",
      init: ""
    },


    /**
     * This message will be shown if a required field is empty and no individual
     * {@link qx.ui.form.MForm#requiredInvalidMessage} is given.
     */
    requiredFieldMessage :
    {
      check : "String",
      init : ""
    },


    /**
     * The context for the form validation.
     */
    context :
    {
      nullable : true
    }
  },


  members :
  {
    __formItems : null,
    __valid : null,
    __asyncResults : null,
    __syncValid : null,


    /**
     * Add a form item to the validation manager.
     *
     * The form item has to implement at least two interfaces:
     * <ol>
     *   <li>The {@link qx.ui.form.IForm} Interface</li>
     *   <li>One of the following interfaces:
     *     <ul>
     *       <li>{@link qx.ui.form.IBooleanForm}</li>
     *       <li>{@link qx.ui.form.IColorForm}</li>
     *       <li>{@link qx.ui.form.IDateForm}</li>
     *       <li>{@link qx.ui.form.INumberForm}</li>
     *       <li>{@link qx.ui.form.IStringForm}</li>
     *     </ul>
     *   </li>
     * </ol>
     * The validator can be a synchronous or asynchronous validator. In
     * both cases the validator can either returns a boolean or fire an
     * {@link qx.core.ValidationError}. For synchronous validation, a plain
     * JavaScript function should be used. For all asynchronous validations,
     * a {@link qx.ui.form.validation.AsyncValidator} is needed to wrap the
     * plain function.
     *
     * @param formItem {qx.ui.core.Widget} The form item to add.
     * @param validator {Function | qx.ui.form.validation.AsyncValidator}
     *   The validator.
     * @param context {var?null} The context of the validator.
     */
    add: function(formItem, validator, context) {
      // check for the form API
      if (!this.__supportsInvalid(formItem)) {
        throw new Error("Added widget not supported.");
      }
      // check for the data type
      if (this.__supportsSingleSelection(formItem) && !formItem.getValue) {
        // check for a validator
        if (validator != null) {
          throw new Error("Widgets supporting selection can only be validated " +
          "in the form validator");
        }
      }
      var dataEntry =
      {
        item : formItem,
        validator : validator,
        valid : null,
        context : context
      };
      this.__formItems.push(dataEntry);
    },


    /**
     * Remove a form item from the validation manager.
     *
     * @param formItem {qx.ui.core.Widget} The form item to remove.
     * @return {qx.ui.core.Widget?null} The removed form item or
     *  <code>null</code> if the item could not be found.
     */
    remove : function(formItem)
    {
      var items = this.__formItems;

      for (var i = 0, len = items.length; i < len; i++)
      {
        if (formItem === items[i].item)
        {
          items.splice(i, 1);
          return formItem;
        }
      }

      return null;
    },


    /**
     * Returns registered form items from the validation manager.
     *
     * @return {Array} The form items which will be validated.
     */
    getItems : function()
    {
      var items = [];
      for (var i=0; i < this.__formItems.length; i++) {
        items.push(this.__formItems[i].item);
      };
      return items;
    },


    /**
     * Invokes the validation. If only synchronous validators are set, the
     * result of the whole validation is available at the end of the method
     * and can be returned. If an asynchronous validator is set, the result
     * is still unknown at the end of this method so nothing will be returned.
     * In both cases, a {@link #complete} event will be fired if the validation
     * has ended. The result of the validation can then be accessed with the
     * {@link #getValid} method.
     *
     * @return {Boolean|undefined} The validation result, if available.
     */
    validate : function() {
      var valid = true;
      this.__syncValid = true; // collaboration of all synchronous validations
      var items = [];

      // check all validators for the added form items
      for (var i = 0; i < this.__formItems.length; i++) {
        var formItem = this.__formItems[i].item;
        var validator = this.__formItems[i].validator;

        // store the items in case of form validation
        items.push(formItem);

        // ignore all form items without a validator
        if (validator == null) {
          // check for the required property
          var validatorResult = this.__validateRequired(formItem);
          valid = valid && validatorResult;
          this.__syncValid = validatorResult && this.__syncValid;
          continue;
        }

        var validatorResult = this.__validateItem(
          this.__formItems[i], formItem.getValue()
        );
        // keep that order to ensure that null is returned on async cases
        valid = validatorResult && valid;
        if (validatorResult != null) {
          this.__syncValid = validatorResult && this.__syncValid;
        }
      }

      // check the form validator (be sure to invoke it even if the form
      // items are already false, so keep the order!)
      var formValid = this.__validateForm(items);
      if (qx.lang.Type.isBoolean(formValid)) {
        this.__syncValid = formValid && this.__syncValid;
      }
      valid = formValid && valid;

      this.__setValid(valid);

      if (qx.lang.Object.isEmpty(this.__asyncResults)) {
        this.fireEvent("complete");
      }
      return valid;
    },


    /**
     * Checks if the form item is required. If so, the value is checked
     * and the result will be returned. If the form item is not required, true
     * will be returned.
     *
     * @param formItem {qx.ui.core.Widget} The form item to check.
     * @return {var} Validation result
     */
    __validateRequired : function(formItem) {
      if (formItem.getRequired()) {
        // if its a widget supporting the selection
        if (this.__supportsSingleSelection(formItem)) {
          var validatorResult = !!formItem.getSelection()[0];
        // otherwise, a value should be supplied
        } else {
          var value = formItem.getValue();
          var validatorResult = !!value || value === 0;
        }
        formItem.setValid(validatorResult);
        var individualMessage = formItem.getRequiredInvalidMessage();
        var message = individualMessage ? individualMessage : this.getRequiredFieldMessage();
        formItem.setInvalidMessage(message);
        return validatorResult;
      }
      return true;
    },


    /**
     * Validates a form item. This method handles the differences of
     * synchronous and asynchronous validation and returns the result of the
     * validation if possible (synchronous cases). If the validation is
     * asynchronous, null will be returned.
     *
     * @param dataEntry {Object} The map stored in {@link #add}
     * @param value {var} The currently set value
     * @return {Boolean|null} Validation result or <code>null</code> for async
     * validation
     */
    __validateItem : function(dataEntry, value) {
      var formItem = dataEntry.item;
      var context = dataEntry.context;
      var validator = dataEntry.validator;

      // check for asynchronous validation
      if (this.__isAsyncValidator(validator)) {
        // used to check if all async validations are done
        this.__asyncResults[formItem.toHashCode()] = null;
        validator.validate(formItem, formItem.getValue(), this, context);
        return null;
      }

      var validatorResult = null;

      try {
        var validatorResult = validator.call(context || this, value, formItem);
        if (validatorResult === undefined) {
          validatorResult = true;
        }

      } catch (e) {
        if (e instanceof qx.core.ValidationError) {
          validatorResult = false;
          if (e.message && e.message != qx.type.BaseError.DEFAULTMESSAGE) {
            var invalidMessage = e.message;
          } else {
            var invalidMessage = e.getComment();
          }
          formItem.setInvalidMessage(invalidMessage);
        } else {
          throw e;
        }
      }

      formItem.setValid(validatorResult);
      dataEntry.valid = validatorResult;

      return validatorResult;
    },


    /**
     * Validates the form. It checks for asynchronous validation and handles
     * the differences to synchronous validation. If no form validator is given,
     * true will be returned. If a synchronous validator is given, the
     * validation result will be returned. In asynchronous cases, null will be
     * returned cause the result is not available.
     *
     * @param items {qx.ui.core.Widget[]} An array of all form items.
     * @return {Boolean|null} description
     */
    __validateForm: function(items) {
      var formValidator = this.getValidator();
      var context = this.getContext() || this;

      if (formValidator == null) {
        return true;
      }

      // reset the invalidMessage
      this.setInvalidMessage("");

      if (this.__isAsyncValidator(formValidator)) {
        this.__asyncResults[this.toHashCode()] = null;
        formValidator.validateForm(items, this, context);
        return null;
      }

      try {
        var formValid = formValidator.call(context, items, this);
        if (formValid === undefined) {
          formValid = true;
        }
      } catch (e) {
        if (e instanceof qx.core.ValidationError) {
          formValid = false;

          if (e.message && e.message != qx.type.BaseError.DEFAULTMESSAGE) {
            var invalidMessage = e.message;
          } else {
            var invalidMessage = e.getComment();
          }
          this.setInvalidMessage(invalidMessage);
        } else {
          throw e;
        }
      }
      return formValid;
    },


    /**
     * Helper function which checks, if the given validator is synchronous
     * or asynchronous.
     *
     * @param validator {Function|qx.ui.form.validation.AsyncValidator}
     *   The validator to check.
     * @return {Boolean} True, if the given validator is asynchronous.
     */
    __isAsyncValidator : function(validator) {
      var async = false;
      if (!qx.lang.Type.isFunction(validator)) {
        async = qx.Class.isSubClassOf(
          validator.constructor, qx.ui.form.validation.AsyncValidator
        );
      }
      return async;
    },


    /**
     * Returns true, if the given item implements the {@link qx.ui.form.IForm}
     * interface.
     *
     * @param formItem {qx.core.Object} The item to check.
     * @return {Boolean} true, if the given item implements the
     *   necessary interface.
     */
    __supportsInvalid : function(formItem) {
      var clazz = formItem.constructor;
      return qx.Class.hasInterface(clazz, qx.ui.form.IForm);
    },


    /**
     * Returns true, if the given item implements the
     * {@link qx.ui.core.ISingleSelection} interface.
     *
     * @param formItem {qx.core.Object} The item to check.
     * @return {Boolean} true, if the given item implements the
     *   necessary interface.
     */
    __supportsSingleSelection : function(formItem) {
      var clazz = formItem.constructor;
      return qx.Class.hasInterface(clazz, qx.ui.core.ISingleSelection);
    },


    /**
     * Internal setter for the valid member. It generates the event if
     * necessary and stores the new value
     *
     * @param value {Boolean|null} The new valid value of the manager.
     */
    __setValid: function(value) {
      this._showToolTip(value);
      var oldValue = this.__valid;
      this.__valid = value;
      // check for the change event
      if (oldValue != value) {
        this.fireDataEvent("changeValid", value, oldValue);
      }
    },


    /**
     * Responsible for showing a tooltip in case the validation is done for
     * widgets based on qx.ui.core.Widget.
     * @param valid {Boolean} <code>false</code>, if the tooltip should be shown
     */
    _showToolTip : function(valid) {
      // ignore if we don't have a tooltip manager e.g. mobile apps
      if (!qx.ui.tooltip || !qx.ui.tooltip.Manager) {
        return;
      }
      var tooltip = qx.ui.tooltip.Manager.getInstance().getSharedErrorTooltip();

      if (!valid) {
        var firstInvalid;
        for (var i = 0; i < this.__formItems.length; i++) {
          var item = this.__formItems[i].item;
          if (!item.isValid()) {
            firstInvalid = item;
            // only for desktop widgets
            if (!(item.getContentLocation)) {
              return;
            }
            // only consider items on the screen
            if (item.isSeeable() === false) {
              continue;
            }

            tooltip.setLabel(item.getInvalidMessage());

            if (tooltip.getPlaceMethod() == "mouse") {
              var location = item.getContentLocation();
              var top = location.top - tooltip.getOffsetTop();
              tooltip.placeToPoint({left: location.right, top: top});
            } else {
              tooltip.placeToWidget(item);
            }

            tooltip.show();
            return;
          }
        }
      } else {
        tooltip.exclude();
      }
    },


    /**
     * Returns the valid state of the manager.
     *
     * @return {Boolean|null} The valid state of the manager.
     */
    getValid: function() {
      return this.__valid;
    },


    /**
     * Returns the valid state of the manager.
     *
     * @return {Boolean|null} The valid state of the manager.
     */
    isValid: function() {
      return this.getValid();
    },


    /**
     * Returns an array of all invalid messages of the invalid form items and
     * the form manager itself.
     *
     * @return {String[]} All invalid messages.
     */
    getInvalidMessages: function() {
      var messages = [];
      // combine the messages of all form items
      for (var i = 0; i < this.__formItems.length; i++) {
        var formItem = this.__formItems[i].item;
        if (!formItem.getValid()) {
          messages.push(formItem.getInvalidMessage());
        }
      }
      // add the forms fail message
      if (this.getInvalidMessage() != "") {
        messages.push(this.getInvalidMessage());
      }

      return messages;
    },


    /**
     * Selects invalid form items
     *
     * @return {Array} invalid form items
     */
    getInvalidFormItems : function() {
      var res = [];
      for (var i = 0; i < this.__formItems.length; i++) {
        var formItem = this.__formItems[i].item;
        if (!formItem.getValid()) {
          res.push(formItem);
        }
      }

      return res;
    },


    /**
     * Resets the validator.
     */
    reset: function() {
      // reset all form items
      for (var i = 0; i < this.__formItems.length; i++) {
        var dataEntry = this.__formItems[i];
        // set the field to valid
        dataEntry.item.setValid(true);
      }
      // set the manager to its initial valid value
      this.__valid = null;
    },


    /**
     * Internal helper method to set the given item to valid for asynchronous
     * validation calls. This indirection is used to determinate if the
     * validation process is completed or if other asynchronous validators
     * are still validating. {@link #__checkValidationComplete} checks if the
     * validation is complete and will be called at the end of this method.
     *
     * @param formItem {qx.ui.core.Widget} The form item to set the valid state.
     * @param valid {Boolean} The valid state for the form item.
     *
     * @internal
     */
    setItemValid: function(formItem, valid) {
      // store the result
      this.__asyncResults[formItem.toHashCode()] = valid;
      formItem.setValid(valid);
      this.__checkValidationComplete();
    },


    /**
     * Internal helper method to set the form manager to valid for asynchronous
     * validation calls. This indirection is used to determinate if the
     * validation process is completed or if other asynchronous validators
     * are still validating. {@link #__checkValidationComplete} checks if the
     * validation is complete and will be called at the end of this method.
     *
     * @param valid {Boolean} The valid state for the form manager.
     *
     * @internal
     */
    setFormValid : function(valid) {
      this.__asyncResults[this.toHashCode()] = valid;
      this.__checkValidationComplete();
    },


    /**
     * Checks if all asynchronous validators have validated so the result
     * is final and the {@link #complete} event can be fired. If that's not
     * the case, nothing will happen in the method.
     */
    __checkValidationComplete : function() {
      var valid = this.__syncValid;

      // check if all async validators are done
      for (var hash in this.__asyncResults) {
        var currentResult = this.__asyncResults[hash];
        valid = currentResult && valid;
        // the validation is not done so just do nothing
        if (currentResult == null) {
          return;
        }
      }
      // set the actual valid state of the manager
      this.__setValid(valid);
      // reset the results
      this.__asyncResults = {};
      // fire the complete event (no entry in the results with null)
      this.fireEvent("complete");
    }
  },


  /*
  *****************************************************************************
     DESTRUCTOR
  *****************************************************************************
  */
  destruct : function()
  {
    this.__formItems = null;
  }
});
/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2009 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (martinwittemann)

************************************************************************ */
/**
 * This class is responsible for validation in all asynchronous cases and
 * should always be used with {@link qx.ui.form.validation.Manager}.
 *
 *
 * It acts like a wrapper for asynchronous validation functions. These
 * validation function must be set in the constructor. The form manager will
 * invoke the validation and the validator function will be called with two
 * arguments:
 * <ul>
 *  <li>asyncValidator: A reference to the corresponding validator.</li>
 *  <li>value: The value of the assigned input field.</li>
 * </ul>
 * These two parameters are needed to set the validation status of the current
 * validator. {@link #setValid} is responsible for doing that.
 *
 *
 * *Warning:* Instances of this class can only be used with one input
 * field at a time. Multi usage is not supported!
 *
 * *Warning:* Calling {@link #setValid} synchronously does not work. If you
 * have an synchronous validator, please check
 * {@link qx.ui.form.validation.Manager#add}. If you have both cases, you have
 * to wrap the synchronous call in a timeout to make it asychronous.
 */
qx.Class.define("qx.ui.form.validation.AsyncValidator",
{
  extend : qx.core.Object,

  /**
   * @param validator {Function} The validator function, which has to be
   *   asynchronous.
   */
  construct : function(validator)
  {
    this.base(arguments);
    // save the validator function
    this.__validatorFunction = validator;
  },

  members :
  {
    __validatorFunction : null,
    __item : null,
    __manager : null,
    __usedForForm : null,

    /**
     * The validate function should only be called by
     * {@link qx.ui.form.validation.Manager}.
     *
     * It stores the given information and calls the validation function set in
     * the constructor. The method is used for form fields only. Validating a
     * form itself will be invokes with {@link #validateForm}.
     *
     * @param item {qx.ui.core.Widget} The form item which should be validated.
     * @param value {var} The value of the form item.
     * @param manager {qx.ui.form.validation.Manager} A reference to the form
     *   manager.
     * @param context {var?null} The context of the validator.
     *
     * @internal
     */
    validate: function(item, value, manager, context) {
      // mark as item validator
      this.__usedForForm = false;
      // store the item and the manager
      this.__item = item;
      this.__manager = manager;
      // invoke the user set validator function
      this.__validatorFunction.call(context || this, this, value);
    },


    /**
     * The validateForm function should only be called by
     * {@link qx.ui.form.validation.Manager}.
     *
     * It stores the given information and calls the validation function set in
     * the constructor. The method is used for forms only. Validating a
     * form item will be invokes with {@link #validate}.
     *
     * @param items {qx.ui.core.Widget[]} All form items of the form manager.
     * @param manager {qx.ui.form.validation.Manager} A reference to the form
     *   manager.
     * @param context {var?null} The context of the validator.
     *
     * @internal
     */
    validateForm : function(items, manager, context) {
      this.__usedForForm = true;
      this.__manager = manager;
      this.__validatorFunction.call(context, items, this);
    },


    /**
     * This method should be called within the asynchronous callback to tell the
     * validator the result of the validation.
     *
     * @param valid {Boolean} The boolean state of the validation.
     * @param message {String?} The invalidMessage of the validation.
     */
    setValid: function(valid, message) {
      // valid processing
      if (this.__usedForForm) {
        // message processing
        if (message !== undefined) {
          this.__manager.setInvalidMessage(message);
        }
        this.__manager.setFormValid(valid);
      } else {
        // message processing
        if (message !== undefined) {
          this.__item.setInvalidMessage(message);
        }
        this.__manager.setItemValid(this.__item, valid);
      }
    }
  },


  /*
   *****************************************************************************
      DESTRUCT
   *****************************************************************************
   */

  destruct : function() {
    this.__manager = this.__item = null;
  }
});
/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2009 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (martinwittemann)

************************************************************************ */
/**
 * The resetter is responsible for managing a set of items and resetting these
 * items on a {@link #reset} call. It can handle all form items supplying a
 * value property and all widgets implementing the single selection linked list
 * or select box.
 */
qx.Class.define("qx.ui.form.Resetter",
{
  extend : qx.core.Object,


  construct : function()
  {
    this.base(arguments);

    this.__items = [];
  },

  members :
  {
    __items : null,

    /**
     * Adding a widget to the reseter will get its current value and store
     * it for resetting. To access the value, the given item needs to specify
     * a value property or implement the {@link qx.ui.core.ISingleSelection}
     * interface.
     *
     * @param item {qx.ui.core.Widget} The widget which should be added.
     */
    add : function(item) {
      // check the init values
      if (this._supportsValue(item)) {
        var init = item.getValue();
      } else if (this.__supportsSingleSelection(item)) {
        var init = item.getSelection();
      } else if (this.__supportsDataBindingSelection(item)) {
        var init = item.getSelection().concat();
      } else {
        throw new Error("Item " + item + " not supported for reseting.");
      }
      // store the item and its init value
      this.__items.push({item: item, init: init});
    },


    /**
     * Removes a widget to the reseter
     *
     * @param item {qx.ui.core.Widget} The widget which should be removed.
     * @return {Boolean} <code>true</code>, if the widget has been removed.
     */
    remove : function(item) {
      for (var i = 0; i < this.__items.length; i++) {
        var storedItem = this.__items[i];
        if (storedItem.item === item) {
          this.__items.splice(i, 1);
          return true;
        }
      }
      return false;
    },


    /**
     * Resets all added form items to their initial value. The initial value
     * is the value in the widget during the {@link #add}.
     */
    reset: function() {
      // reset all form items
      for (var i = 0; i < this.__items.length; i++) {
        var dataEntry = this.__items[i];
        // set the init value
        this.__setItem(dataEntry.item, dataEntry.init);
      }
    },


    /**
     * Resets a single given item. The item has to be added to the resetter
     * instance before. Otherwise, an error is thrown.
     *
     * @param item {qx.ui.core.Widget} The widget, which should be resetted.
     */
    resetItem : function(item)
    {
      // get the init value
      var init;
      for (var i = 0; i < this.__items.length; i++) {
        var dataEntry = this.__items[i];
        if (dataEntry.item === item) {
          init = dataEntry.init;
          break;
        }
      };

      // check for the available init value
      if (init === undefined) {
        throw new Error("The given item has not been added.");
      }

      this.__setItem(item, init);
    },


    /**
     * Internal helper for setting an item to a given init value. It checks
     * for the supported APIs and uses the fitting API.
     *
     * @param item {qx.ui.core.Widget} The item to reset.
     * @param init {var} The value to set.
     */
    __setItem : function(item, init)
    {
      // set the init value
      if (this._supportsValue(item)) {
        item.setValue(init);
      } else if (
        this.__supportsSingleSelection(item) ||
        this.__supportsDataBindingSelection(item)
      ) {
        item.setSelection(init);
      }
    },


    /**
     * Takes the current values of all added items and uses these values as
     * init values for resetting.
     */
    redefine: function() {
      // go threw all added items
      for (var i = 0; i < this.__items.length; i++) {
        var item = this.__items[i].item;
        // set the new init value for the item
        this.__items[i].init = this.__getCurrentValue(item);
      }
    },


    /**
     * Takes the current value of the given item and stores this value as init
     * value for resetting.
     *
     * @param item {qx.ui.core.Widget} The item to redefine.
     */
    redefineItem : function(item)
    {
      // get the data entry
      var dataEntry;
      for (var i = 0; i < this.__items.length; i++) {
        if (this.__items[i].item === item) {
          dataEntry = this.__items[i];
          break;
        }
      };

      // check for the available init value
      if (dataEntry === undefined) {
        throw new Error("The given item has not been added.");
      }

      // set the new init value for the item
      dataEntry.init = this.__getCurrentValue(dataEntry.item);
    },


    /**
     * Internal helper top access the value of a given item.
     *
     * @param item {qx.ui.core.Widget} The item to access.
     * @return {var} The item's value
     */
    __getCurrentValue : function(item)
    {
      if (this._supportsValue(item)) {
        return item.getValue();
      } else if (
        this.__supportsSingleSelection(item) ||
        this.__supportsDataBindingSelection(item)
      ) {
        return item.getSelection();
      }
    },


    /**
     * Returns true, if the given item implements the
     * {@link qx.ui.core.ISingleSelection} interface.
     *
     * @param formItem {qx.core.Object} The item to check.
     * @return {Boolean} true, if the given item implements the
     *   necessary interface.
     */
    __supportsSingleSelection : function(formItem) {
      var clazz = formItem.constructor;
      return qx.Class.hasInterface(clazz, qx.ui.core.ISingleSelection);
    },


    /**
     * Returns true, if the given item implements the
     * {@link qx.data.controller.ISelection} interface.
     *
     * @param formItem {qx.core.Object} The item to check.
     * @return {Boolean} true, if the given item implements the
     *   necessary interface.
     */
    __supportsDataBindingSelection : function(formItem) {
      var clazz = formItem.constructor;
      return qx.Class.hasInterface(clazz, qx.data.controller.ISelection);
    },


    /**
     * Returns true, if the value property is supplied by the form item.
     *
     * @param formItem {qx.core.Object} The item to check.
     * @return {Boolean} true, if the given item implements the
     *   necessary interface.
     */
    _supportsValue : function(formItem) {
      var clazz = formItem.constructor;
      return (
        qx.Class.hasInterface(clazz, qx.ui.form.IBooleanForm) ||
        qx.Class.hasInterface(clazz, qx.ui.form.IColorForm) ||
        qx.Class.hasInterface(clazz, qx.ui.form.IDateForm) ||
        qx.Class.hasInterface(clazz, qx.ui.form.INumberForm) ||
        qx.Class.hasInterface(clazz, qx.ui.form.IStringForm)
      );
    }
  },


  /*
  *****************************************************************************
     DESTRUCTOR
  *****************************************************************************
  */
  destruct : function()
  {
    // holding references to widgets --> must set to null
    this.__items = null;
  }
});
/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (martinwittemann)

************************************************************************ */

/**
 * Form interface for all form widgets which have date as their primary
 * data type like datechooser's.
 */
qx.Interface.define("qx.ui.form.IDateForm",
{
  /*
  *****************************************************************************
     EVENTS
  *****************************************************************************
  */

  events :
  {
    /** Fired when the value was modified */
    "changeValue" : "qx.event.type.Data"
  },



  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    /*
    ---------------------------------------------------------------------------
      VALUE PROPERTY
    ---------------------------------------------------------------------------
    */

    /**
     * Sets the element's value.
     *
     * @param value {Date|null} The new value of the element.
     */
    setValue : function(value) {
      return arguments.length == 1;
    },


    /**
     * Resets the element's value to its initial value.
     */
    resetValue : function() {},


    /**
     * The element's user set value.
     *
     * @return {Date|null} The value.
     */
    getValue : function() {}
  }
});
/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)
     * Andreas Ecker (ecker)

************************************************************************ */

/**
 * A password input field, which hides the entered text.
 */
qx.Class.define("qx.ui.form.PasswordField",
{
  extend : qx.ui.form.TextField,

  members :
  {
    // overridden
    _createInputElement : function() {
      return new qx.html.Input("password");
    }
  }
});
/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)
     * Andreas Ecker (ecker)
     * Jonathan Weiß (jonathan_rass)
     * Tristan Koch (tristankoch)

************************************************************************ */

/**
 * The TextField is a multi-line text input field.
 */
qx.Class.define("qx.ui.form.TextArea",
{
  extend : qx.ui.form.AbstractField,



  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param value {String?""} The text area's initial value
   */
  construct : function(value)
  {
    this.base(arguments, value);
    this.initWrap();

    this.addListener("roll", this._onRoll, this);
  },




  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */

  properties :
  {
    /** Controls whether text wrap is activated or not. */
    wrap :
    {
      check : "Boolean",
      init : true,
      apply : "_applyWrap"
    },

    // overridden
    appearance :
    {
      refine : true,
      init : "textarea"
    },

    /** Factor for scrolling the <code>TextArea</code> with the mouse wheel. */
    singleStep :
    {
      check : "Integer",
      init : 20
    },

    /** Minimal line height. On default this is set to four lines. */
    minimalLineHeight :
    {
      check : "Integer",
      apply : "_applyMinimalLineHeight",
      init : 4
    },

    /**
    * Whether the <code>TextArea</code> should automatically adjust to
    * the height of the content.
    *
    * To set the initial height, modify {@link #minHeight}. If you wish
    * to set a minHeight below four lines of text, also set
    * {@link #minimalLineHeight}. In order to limit growing to a certain
    * height, set {@link #maxHeight} respectively. Please note that
    * autoSize is ignored when the {@link #height} property is in use.
    */
    autoSize :
    {
      check : "Boolean",
      apply : "_applyAutoSize",
      init : false
    }

  },




  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    __areaClone : null,
    __areaHeight : null,
    __originalAreaHeight : null,

    // overridden
    setValue : function(value)
    {
      value = this.base(arguments, value);
      this.__autoSize();

      return value;
    },

    /**
     * Handles the roll for scrolling the <code>TextArea</code>.
     *
     * @param e {qx.event.type.Roll} roll event.
     */
    _onRoll : function(e) {
      // only wheel
      if (e.getPointerType() != "wheel") {
        return;
      }
      var contentElement = this.getContentElement();
      var scrollY = contentElement.getScrollY();

      contentElement.scrollToY(scrollY + (e.getDelta().y / 30) * this.getSingleStep());

      var newScrollY = contentElement.getScrollY();

      if (newScrollY != scrollY) {
        e.stop();
      }
    },

    /*
    ---------------------------------------------------------------------------
      AUTO SIZE
    ---------------------------------------------------------------------------
    */

    /**
    * Adjust height of <code>TextArea</code> so that content fits without scroll bar.
    *
    */
    __autoSize: function() {
      if (this.isAutoSize()) {
        var clone = this.__getAreaClone();

        if (clone && this.getBounds()) {

          // Remember original area height
          this.__originalAreaHeight = this.__originalAreaHeight || this._getAreaHeight();

          var scrolledHeight = this._getScrolledAreaHeight();

          // Show scroll-bar when above maxHeight, if defined
          if (this.getMaxHeight()) {
            var insets = this.getInsets();
            var innerMaxHeight = -insets.top + this.getMaxHeight() - insets.bottom;
            if (scrolledHeight > innerMaxHeight) {
                this.getContentElement().setStyle("overflowY", "auto");
            } else {
                this.getContentElement().setStyle("overflowY", "hidden");
            }
          }

          // Never shrink below original area height
          var desiredHeight = Math.max(scrolledHeight, this.__originalAreaHeight);

          // Set new height
          this._setAreaHeight(desiredHeight);

        // On init, the clone is not yet present. Try again on appear.
        } else {
          this.getContentElement().addListenerOnce("appear", function() {
            this.__autoSize();
          }, this);
        }
      }
    },

    /**
    * Get actual height of <code>TextArea</code>
    *
    * @return {Integer} Height of <code>TextArea</code>
    */
    _getAreaHeight: function() {
      return this.getInnerSize().height;
    },

    /**
    * Set actual height of <code>TextArea</code>
    *
    * @param height {Integer} Desired height of <code>TextArea</code>
    */
    _setAreaHeight: function(height) {
      if (this._getAreaHeight() !== height) {
        this.__areaHeight = height;

        qx.ui.core.queue.Layout.add(this);

        // Apply height directly. This works-around a visual glitch in WebKit
        // browsers where a line-break causes the text to be moved upwards
        // for one line. Since this change appears instantly whereas the queue
        // is computed later, a flicker is visible.
        qx.ui.core.queue.Manager.flush();

        this.__forceRewrap();
      }
    },

    /**
    * Get scrolled area height. Equals the total height of the <code>TextArea</code>,
    * as if no scroll-bar was visible.
    *
    * @return {Integer} Height of scrolled area
    */
    _getScrolledAreaHeight: function() {
      var clone = this.__getAreaClone();
      var cloneDom = clone.getDomElement();

      if (cloneDom) {

        // Clone created but not yet in DOM. Try again.
        if (!cloneDom.parentNode) {
          qx.html.Element.flush();
          return this._getScrolledAreaHeight();
        }

        // In WebKit and IE8, "wrap" must have been "soft" on DOM level before setting
        // "off" can disable wrapping. To fix, make sure wrap is toggled.
        // Otherwise, the height of an auto-size text area with wrapping
        // disabled initially is incorrectly computed as if wrapping was enabled.
        if (qx.core.Environment.get("engine.name") === "webkit" ||
            (qx.core.Environment.get("engine.name") == "mshtml")) {
          clone.setWrap(!this.getWrap(), true);
        }

        clone.setWrap(this.getWrap(), true);

        // Webkit needs overflow "hidden" in order to correctly compute height
        if (qx.core.Environment.get("engine.name") === "webkit" ||
            (qx.core.Environment.get("engine.name") == "mshtml")) {
          cloneDom.style.overflow = "hidden";
        }

        // IE >= 8 needs overflow "visible" in order to correctly compute height
        if (qx.core.Environment.get("engine.name") == "mshtml" &&
          qx.core.Environment.get("browser.documentmode") >= 8) {
          cloneDom.style.overflow = "visible";
          cloneDom.style.overflowX = "hidden";
        }

        // Update value
        clone.setValue(this.getValue() || "");

        // Force IE > 8 to update size measurements
        if (qx.core.Environment.get("engine.name") == "mshtml") {
          cloneDom.style.height = "auto";
          qx.html.Element.flush();
          cloneDom.style.height = "0";
        }

        // Recompute
        this.__scrollCloneToBottom(clone);

        if (qx.core.Environment.get("engine.name") == "mshtml" &&
            qx.core.Environment.get("browser.documentmode") == 8) {
          // Flush required for scrollTop to return correct value
          // when initial value should be taken into consideration
          if (!cloneDom.scrollTop) {
            qx.html.Element.flush();
          }
        }

        return cloneDom.scrollTop;
      }
    },

    /**
    * Returns the area clone.
    *
    * @return {Element|null} DOM Element or <code>null</code> if there is no
    * original element
    */
    __getAreaClone: function() {
      this.__areaClone = this.__areaClone || this.__createAreaClone();
      return this.__areaClone;
    },

    /**
    * Creates and prepares the area clone.
    *
    * @return {Element} Element
    */
    __createAreaClone: function() {
      var orig,
          clone,
          cloneDom,
          cloneHtml;

      orig = this.getContentElement();

      // An existing DOM element is required
      if (!orig.getDomElement()) {
        return null;
      }

      // Create DOM clone
      cloneDom = qx.bom.Element.clone(orig.getDomElement());

      // Convert to qx.html Element
      cloneHtml = new qx.html.Input("textarea");
      cloneHtml.useElement(cloneDom);
      clone = cloneHtml;

      // Push out of view
      // Zero height (i.e. scrolled area equals height)
      clone.setStyles({
        position: "absolute",
        top: 0,
        left: "-9999px",
        height: 0,
        overflow: "hidden"
      }, true);

      // Fix attributes
      clone.removeAttribute('id');
      clone.removeAttribute('name');
      clone.setAttribute("tabIndex", "-1");

      // Copy value
      clone.setValue(orig.getValue() || "");

      // Attach to DOM
      clone.insertBefore(orig);

      // Make sure scrollTop is actual height
      this.__scrollCloneToBottom(clone);

      return clone;
    },

    /**
    * Scroll <code>TextArea</code> to bottom. That way, scrollTop reflects the height
    * of the <code>TextArea</code>.
    *
    * @param clone {Element} The <code>TextArea</code> to scroll
    */
    __scrollCloneToBottom: function(clone) {
      clone = clone.getDomElement();
      if (clone) {
        clone.scrollTop = 10000;
      }
    },

    /*
    ---------------------------------------------------------------------------
      FIELD API
    ---------------------------------------------------------------------------
    */

    // overridden
    _createInputElement : function()
    {
      return new qx.html.Input("textarea", {
        overflowX: "auto",
        overflowY: "auto"
      });
    },


    /*
    ---------------------------------------------------------------------------
      APPLY ROUTINES
    ---------------------------------------------------------------------------
    */

    // property apply
    _applyWrap : function(value, old) {
      this.getContentElement().setWrap(value);
      if (this._placeholder) {
        var whiteSpace = value ? "normal" : "nowrap";
        this._placeholder.setStyle("whiteSpace", whiteSpace);
      }
      this.__autoSize();
    },

    // property apply
    _applyMinimalLineHeight : function() {
      qx.ui.core.queue.Layout.add(this);
    },

    // property apply
    _applyAutoSize: function(value, old) {
      if (qx.core.Environment.get("qx.debug")) {
        this.__warnAutoSizeAndHeight();
      }

      if (value) {
        this.__autoSize();
        this.addListener("input", this.__autoSize, this);

        // This is done asynchronously on purpose. The style given would
        // otherwise be overridden by the DOM changes queued in the
        // property apply for wrap. See [BUG #4493] for more details.
        if (!this.getBounds()) {
          this.addListenerOnce("appear", function() {
            this.getContentElement().setStyle("overflowY", "hidden");
          });
        } else {
          this.getContentElement().setStyle("overflowY", "hidden");
        }

      } else {
        this.removeListener("input", this.__autoSize);
        this.getContentElement().setStyle("overflowY", "auto");
      }
    },


    // property apply
    _applyDimension : function(value) {
      this.base(arguments);

      if (qx.core.Environment.get("qx.debug")) {
        this.__warnAutoSizeAndHeight();
      }

      if (value === this.getMaxHeight()) {
        this.__autoSize();
      }
    },

    /**
     * Force rewrapping of text.
     *
     * The distribution of characters depends on the space available.
     * Unfortunately, browsers do not reliably (or not at all) rewrap text when
     * the size of the text area changes.
     *
     * This method is called on change of the area's size.
     */
    __forceRewrap : function() {
      var content = this.getContentElement();
      var element = content.getDomElement();

      // Temporarily increase width
      var width = content.getStyle("width");
      content.setStyle("width", parseInt(width, 10) + 1000 + "px", true);

      // Force browser to render
      if (element) {
        qx.bom.element.Dimension.getWidth(element);
      }

      // Restore width
      content.setStyle("width", width, true);
    },

    /**
     * Warn when both autoSize and height property are set.
     *
     */
    __warnAutoSizeAndHeight: function() {
      if (this.isAutoSize() && this.getHeight()) {
        this.warn("autoSize is ignored when the height property is set. " +
                  "If you want to set an initial height, use the minHeight " +
                  "property instead.");
      }
    },

    /*
    ---------------------------------------------------------------------------
      LAYOUT
    ---------------------------------------------------------------------------
    */

    // overridden
    _getContentHint : function()
    {
      var hint = this.base(arguments);

      // lines of text
      hint.height = hint.height * this.getMinimalLineHeight();

      // 20 character wide
      hint.width = this._getTextSize().width * 20;

      if (this.isAutoSize()) {
        hint.height = this.__areaHeight || hint.height;
      }

      return hint;
    }
  },


  destruct : function() {
    this.setAutoSize(false);
    if (this.__areaClone) {
      this.__areaClone.dispose();
    }
  }
});
/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (martinwittemann)
     * Sebastian Werner (wpbasti)
     * Jonathan Weiß (jonathan_rass)

************************************************************************ */

/**
 * Basic class for a selectbox like lists. Basically supports a popup
 * with a list and the whole children management.
 *
 * @childControl list {qx.ui.form.List} list component of the selectbox
 * @childControl popup {qx.ui.popup.Popup} popup which shows the list
 *
 */
qx.Class.define("qx.ui.form.AbstractSelectBox",
{
  extend  : qx.ui.core.Widget,
  include : [
    qx.ui.core.MRemoteChildrenHandling,
    qx.ui.form.MForm
  ],
  implement : [
    qx.ui.form.IForm
  ],
  type : "abstract",



  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  construct : function()
  {
    this.base(arguments);

    // set the layout
    var layout = new qx.ui.layout.HBox();
    this._setLayout(layout);
    layout.setAlignY("middle");

    // Register listeners
    this.addListener("keypress", this._onKeyPress);
    this.addListener("blur", this._onBlur, this);

    // register the resize listener
    this.addListener("resize", this._onResize, this);
  },



  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */

  properties :
  {
    // overridden
    focusable :
    {
      refine : true,
      init : true
    },

    // overridden
    width :
    {
      refine : true,
      init : 120
    },

    /**
     * The maximum height of the list popup. Setting this value to
     * <code>null</code> will set cause the list to be auto-sized.
     */
    maxListHeight :
    {
      check : "Number",
      apply : "_applyMaxListHeight",
      nullable: true,
      init : 200
    },

    /**
     * Formatter which format the value from the selected <code>ListItem</code>.
     * Uses the default formatter {@link #_defaultFormat}.
     */
    format :
    {
      check : "Function",
      init : function(item) {
        return this._defaultFormat(item);
      },
      nullable : true
    }
  },



  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    // overridden
    _createChildControlImpl : function(id, hash)
    {
      var control;

      switch(id)
      {
        case "list":
          control = new qx.ui.form.List().set({
            focusable: false,
            keepFocus: true,
            height: null,
            width: null,
            maxHeight: this.getMaxListHeight(),
            selectionMode: "one",
            quickSelection: true
          });

          control.addListener("changeSelection", this._onListChangeSelection, this);
          control.addListener("pointerdown", this._onListPointerDown, this);
          break;

        case "popup":
          control = new qx.ui.popup.Popup(new qx.ui.layout.VBox);
          control.setAutoHide(false);
          control.setKeepActive(true);
          control.addListener("tap", this.close, this);
          control.add(this.getChildControl("list"));

          control.addListener("changeVisibility", this._onPopupChangeVisibility, this);
          break;
      }

      return control || this.base(arguments, id);
    },



    /*
    ---------------------------------------------------------------------------
      APPLY ROUTINES
    ---------------------------------------------------------------------------
    */

    // property apply
    _applyMaxListHeight : function(value, old) {
      this.getChildControl("list").setMaxHeight(value);
    },



    /*
    ---------------------------------------------------------------------------
      PUBLIC METHODS
    ---------------------------------------------------------------------------
    */

    /**
     * Returns the list widget.
     * @return {qx.ui.form.List} the list
     */
    getChildrenContainer : function() {
      return this.getChildControl("list");
    },



    /*
    ---------------------------------------------------------------------------
      LIST STUFF
    ---------------------------------------------------------------------------
    */

    /**
     * Shows the list popup.
     */
    open : function()
    {
      var popup = this.getChildControl("popup");

      popup.placeToWidget(this, true);
      popup.show();
    },


    /**
     * Hides the list popup.
     */
    close : function() {
      this.getChildControl("popup").hide();
    },


    /**
     * Toggles the popup's visibility.
     */
    toggle : function()
    {
      var isListOpen = this.getChildControl("popup").isVisible();
      if (isListOpen) {
        this.close();
      } else {
        this.open();
      }
    },


    /*
    ---------------------------------------------------------------------------
      FORMAT HANDLING
    ---------------------------------------------------------------------------
    */


    /**
     * Return the formatted label text from the <code>ListItem</code>.
     * The formatter removes all HTML tags and converts all HTML entities
     * to string characters when the rich property is <code>true</code>.
     *
     * @param item {ListItem} The list item to format.
     * @return {String} The formatted text.
     */
    _defaultFormat : function(item)
    {
      var valueLabel = item ? item.getLabel() : "";
      var rich = item ? item.getRich() : false;

      if (rich) {
        valueLabel = valueLabel.replace(/<[^>]+?>/g, "");
        valueLabel = qx.bom.String.unescape(valueLabel);
      }

      return valueLabel;
    },


    /*
    ---------------------------------------------------------------------------
      EVENT LISTENERS
    ---------------------------------------------------------------------------
    */

    /**
     * Handler for the blur event of the current widget.
     *
     * @param e {qx.event.type.Focus} The blur event.
     */
    _onBlur : function(e)
    {
      this.close();
    },


    /**
     * Reacts on special keys and forwards other key events to the list widget.
     *
     * @param e {qx.event.type.KeySequence} Keypress event
     */
    _onKeyPress : function(e)
    {
      // get the key identifier
      var identifier = e.getKeyIdentifier();
      var listPopup = this.getChildControl("popup");

      // disabled pageUp and pageDown keys
      if (listPopup.isHidden() && (identifier == "PageDown" || identifier == "PageUp")) {
        e.stopPropagation();
      }

      // hide the list always on escape
      else if (!listPopup.isHidden() && identifier == "Escape")
      {
        this.close();
        e.stop();
      }

      // forward the rest of the events to the list
      else
      {
        this.getChildControl("list").handleKeyPress(e);
      }
    },


    /**
     * Updates list minimum size.
     *
     * @param e {qx.event.type.Data} Data event
     */
    _onResize : function(e){
      this.getChildControl("popup").setMinWidth(e.getData().width);
    },


    /**
     * Syncs the own property from the list change
     *
     * @param e {qx.event.type.Data} Data Event
     */
    _onListChangeSelection : function(e) {
      throw new Error("Abstract method: _onListChangeSelection()");
    },


    /**
     * Redirects pointerdown event from the list to this widget.
     *
     * @param e {qx.event.type.Pointer} Pointer Event
     */
    _onListPointerDown : function(e) {
      throw new Error("Abstract method: _onListPointerDown()");
    },


    /**
     * Redirects changeVisibility event from the list to this widget.
     *
     * @param e {qx.event.type.Data} Property change event
     */
    _onPopupChangeVisibility : function(e) {
      e.getData() == "visible" ? this.addState("popupOpen") : this.removeState("popupOpen");
    }
  }
});
/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (martinwittemann)
     * Sebastian Werner (wpbasti)
     * Jonathan Weiß (jonathan_rass)

************************************************************************ */

/**
 * Basically a text fields which allows a selection from a list of
 * preconfigured options. Allows custom user input. Public API is value
 * oriented.
 *
 * To work with selections without custom input the ideal candidates are
 * the {@link SelectBox} or the {@link RadioGroup}.
 *
 * @childControl textfield {qx.ui.form.TextField} textfield component of the combobox
 * @childControl button {qx.ui.form.Button} button to open the list popup
 * @childControl list {qx.ui.form.List} list inside the popup
 */
qx.Class.define("qx.ui.form.ComboBox",
{
  extend  : qx.ui.form.AbstractSelectBox,
  implement : [qx.ui.form.IStringForm],



  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  construct : function()
  {
    this.base(arguments);

    var textField = this._createChildControl("textfield");
    this._createChildControl("button");

    this.addListener("tap", this._onTap);

    // forward the focusin and focusout events to the textfield. The textfield
    // is not focusable so the events need to be forwarded manually.
    this.addListener("focusin", function(e) {
      textField.fireNonBubblingEvent("focusin", qx.event.type.Focus);
    }, this);

    this.addListener("focusout", function(e) {
      textField.fireNonBubblingEvent("focusout", qx.event.type.Focus);
    }, this);
  },



  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */

  properties :
  {
    // overridden
    appearance :
    {
      refine : true,
      init : "combobox"
    },


    /**
     * String value which will be shown as a hint if the field is all of:
     * unset, unfocused and enabled. Set to null to not show a placeholder
     * text.
     */
    placeholder :
    {
      check : "String",
      nullable : true,
      apply : "_applyPlaceholder"
    }
  },



  /*
  *****************************************************************************
     EVENTS
  *****************************************************************************
  */

  events :
  {
    /** Whenever the value is changed this event is fired
     *
     *  Event data: The new text value of the field.
     */
    "changeValue" : "qx.event.type.Data"
  },




  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    __preSelectedItem : null,
    __onInputId : null,


    // property apply
    _applyPlaceholder : function(value, old) {
      this.getChildControl("textfield").setPlaceholder(value);
    },

    /*
    ---------------------------------------------------------------------------
      WIDGET API
    ---------------------------------------------------------------------------
    */

    // overridden
    _createChildControlImpl : function(id, hash)
    {
      var control;

      switch(id)
      {
        case "textfield":
          control = new qx.ui.form.TextField();
          control.setFocusable(false);
          control.addState("inner");
          control.addListener("changeValue", this._onTextFieldChangeValue, this);
          control.addListener("blur", this.close, this);
          this._add(control, {flex: 1});
          break;

        case "button":
          control = new qx.ui.form.Button();
          control.setFocusable(false);
          control.setKeepActive(true);
          control.addState("inner");
          control.addListener("execute", this.toggle, this)
          this._add(control);
          break;

        case "list":
          // Get the list from the AbstractSelectBox
          control = this.base(arguments, id)

          // Change selection mode
          control.setSelectionMode("single");
          break;
      }

      return control || this.base(arguments, id);
    },


    // overridden
    /**
     * @lint ignoreReferenceField(_forwardStates)
     */
    _forwardStates : {
      focused : true,
      invalid : true
    },


    // overridden
    tabFocus : function()
    {
      var field = this.getChildControl("textfield");

      field.getFocusElement().focus();
      field.selectAllText();
    },


    // overridden
    focus : function()
    {
      this.base(arguments);
      this.getChildControl("textfield").getFocusElement().focus();
    },


    // interface implementation
    setValue : function(value)
    {
      var textfield = this.getChildControl("textfield");
      if (textfield.getValue() == value) {
        return;
      }

      // Apply to text field
      textfield.setValue(value);
    },


    // interface implementation
    getValue : function() {
      return this.getChildControl("textfield").getValue();
    },


    // interface implementation
    resetValue : function() {
      this.getChildControl("textfield").setValue(null);
    },




    /*
    ---------------------------------------------------------------------------
      EVENT LISTENERS
    ---------------------------------------------------------------------------
    */

    // overridden
    _onKeyPress : function(e)
    {
      var popup = this.getChildControl("popup");
      var iden = e.getKeyIdentifier();

      if (iden == "Down" && e.isAltPressed())
      {
        this.getChildControl("button").addState("selected");
        this.toggle();
        e.stopPropagation();
      }
      else if (iden == "Enter")
      {
        if (popup.isVisible())
        {
          this._setPreselectedItem();
          this.resetAllTextSelection();
          this.close();
          e.stop();
        }
      }
      else if (popup.isVisible())
      {
        this.base(arguments, e);
      }
    },


    /**
     * Toggles the popup's visibility.
     *
     * @param e {qx.event.type.Pointer} Pointer tap event
     */
    _onTap : function(e) {
      this.close();
    },


    // overridden
    _onListPointerDown : function(e) {
      this._setPreselectedItem();
    },


    /**
     * Apply pre-selected item
     */
    _setPreselectedItem: function() {
      if (this.__preSelectedItem)
      {
        var label = this.__preSelectedItem.getLabel();

        if (this.getFormat()!= null) {
          label = this.getFormat().call(this, this.__preSelectedItem);
        }

        // check for translation
        if (label && label.translate) {
          label = label.translate();
        }
        this.setValue(label);
        this.__preSelectedItem = null;
      }
    },


    // overridden
    _onListChangeSelection : function(e)
    {
      var current = e.getData();
      if (current.length > 0)
      {
        // Ignore quick context (e.g. pointerover)
        // and configure the new value when closing the popup afterwards
        var list = this.getChildControl("list");
        var ctx = list.getSelectionContext();
        if (ctx == "quick" || ctx == "key" )
        {
          this.__preSelectedItem = current[0];
        }
        else
        {
          var label = current[0].getLabel();

          if (this.getFormat()!= null) {
            label = this.getFormat().call(this, current[0]);
          }

          // check for translation
          if (label && label.translate) {
            label = label.translate();
          }
          this.setValue(label);
          this.__preSelectedItem = null;
        }
      }
    },


    // overridden
    _onPopupChangeVisibility : function(e)
    {
      this.base(arguments, e);

      // Synchronize the list with the current value on every
      // opening of the popup. This is useful because through
      // the quick selection mode, the list may keep an invalid
      // selection on close or the user may enter text while
      // the combobox is closed and reopen it afterwards.
      var popup = this.getChildControl("popup");
      if (popup.isVisible())
      {
        var list = this.getChildControl("list");
        var value = this.getValue();
        var item = null;

        if (value) {
          item = list.findItem(value);
        }

        if (item) {
          list.setSelection([item]);
        } else {
          list.resetSelection();
        }
      }
      else
      {
        // When closing the popup text should selected and field should
        // have the focus. Identical to when reaching the field using the TAB key.
        //
        // Only focus if popup was visible before. Fixes [BUG #4453].
        if (e.getOldData() == "visible") {
          this.tabFocus();
        }
      }

      // In all cases: Remove focused state from button
      this.getChildControl("button").removeState("selected");
    },


    /**
     * Reacts on value changes of the text field and syncs the
     * value to the combobox.
     *
     * @param e {qx.event.type.Data} Change event
     */
    _onTextFieldChangeValue : function(e)
    {
      var value = e.getData();

      var list = this.getChildControl("list");
      if (value != null) {
        // Select item when possible
        var item = list.findItem(value, false);
        if (item) {
          list.setSelection([item]);
        } else {
          list.resetSelection();
        }
      } else {
        list.resetSelection();
      }

      // Fire event
      this.fireDataEvent("changeValue", value, e.getOldData());
    },


    /*
    ---------------------------------------------------------------------------
      TEXTFIELD SELECTION API
    ---------------------------------------------------------------------------
    */

    /**
     * Returns the current selection.
     * This method only works if the widget is already created and
     * added to the document.
     *
     * @return {String|null}
     */
    getTextSelection : function() {
      return this.getChildControl("textfield").getTextSelection();
    },


    /**
     * Returns the current selection length.
     * This method only works if the widget is already created and
     * added to the document.
     *
     * @return {Integer|null}
     */
    getTextSelectionLength : function() {
      return this.getChildControl("textfield").getTextSelectionLength();
    },


    /**
     * Set the selection to the given start and end (zero-based).
     * If no end value is given the selection will extend to the
     * end of the textfield's content.
     * This method only works if the widget is already created and
     * added to the document.
     *
     * @param start {Integer} start of the selection (zero-based)
     * @param end {Integer} end of the selection
     */
    setTextSelection : function(start, end) {
      this.getChildControl("textfield").setTextSelection(start, end);
    },


    /**
     * Clears the current selection.
     * This method only works if the widget is already created and
     * added to the document.
     *
     */
    clearTextSelection : function() {
      this.getChildControl("textfield").clearTextSelection();
    },


    /**
     * Selects the whole content
     *
     */
    selectAllText : function() {
      this.getChildControl("textfield").selectAllText();
    },


    /**
     * Clear any text selection, then select all text
     *
     */
    resetAllTextSelection: function() {
      this.clearTextSelection();
      this.selectAllText();
    }
  }
});
/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2011 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Christian Hagendorn (chris_schmidt)

************************************************************************ */

/**
 * Basic class for widgets which need a virtual list as popup for example a
 * SelectBox. It's basically supports a drop-down as popup with a virtual list
 * and the whole children management.
 *
 * @childControl dropdown {qx.ui.form.core.VirtualDropDownList} The drop-down list.
 */
qx.Class.define("qx.ui.form.core.AbstractVirtualBox",
{
  extend  : qx.ui.core.Widget,
  include : qx.ui.form.MForm,
  implement : qx.ui.form.IForm,
  type : "abstract",


  /**
   * @param model {qx.data.Array?null} The model data for the widget.
   */
  construct : function(model)
  {
    this.base(arguments);

    // set the layout
    var layout = new qx.ui.layout.HBox();
    this._setLayout(layout);
    layout.setAlignY("middle");

    // Register listeners
    this.addListener("keypress", this._handleKeyboard, this);
    this.addListener("tap", this._handlePointer, this);
    this.addListener("blur", this._onBlur, this);
    this.addListener("resize", this._onResize, this);

    this._createChildControl("dropdown");

    if (model != null) {
      this.initModel(model);
    } else {
      this.__defaultModel = new qx.data.Array();
      this.initModel(this.__defaultModel);
    }
  },


  properties :
  {
    // overridden
    focusable :
    {
      refine : true,
      init : true
    },


    // overridden
    width :
    {
      refine : true,
      init : 120
    },


    /** Data array containing the data which should be shown in the drop-down. */
    model :
    {
      check : "qx.data.Array",
      apply : "_applyModel",
      event: "changeModel",
      nullable : false,
      deferredInit : true
    },


    /**
     * Delegation object which can have one or more functions defined by the
     * {@link qx.ui.list.core.IListDelegate} interface.
     */
    delegate :
    {
      apply: "_applyDelegate",
      event: "changeDelegate",
      init: null,
      nullable: true
    },


    /**
     * The path to the property which holds the information that should be
     * displayed as a label. This is only needed if objects are stored in the
     * model.
     */
    labelPath :
    {
      check: "String",
      apply: "_applyLabelPath",
      event: "changeLabelPath",
      nullable: true
    },


    /**
     * A map containing the options for the label binding. The possible keys
     * can be found in the {@link qx.data.SingleValueBinding} documentation.
     */
    labelOptions :
    {
      apply: "_applyLabelOptions",
      event: "changeLabelOptions",
      nullable: true
    },


    /**
     * The path to the property which holds the information that should be
     * displayed as an icon. This is only needed if objects are stored in the
     * model and icons should be displayed.
     */
    iconPath :
    {
      check: "String",
      event : "changeIconPath",
      apply: "_applyIconPath",
      nullable: true
    },


    /**
     * A map containing the options for the icon binding. The possible keys
     * can be found in the {@link qx.data.SingleValueBinding} documentation.
     */
    iconOptions :
    {
      apply: "_applyIconOptions",
      event : "changeIconOptions",
      nullable: true
    },


    /** Default item height. */
    itemHeight :
    {
      check : "Integer",
      init : 25,
      apply : "_applyRowHeight",
      themeable : true
    },


    /**
     * The maximum height of the drop-down list. Setting this value to
     * <code>null</code> will set cause the list to be auto-sized.
     */
    maxListHeight :
    {
      check : "Number",
      apply : "_applyMaxListHeight",
      nullable: true,
      init : 200
    }
  },


  members :
  {
    __defaultModel : null,

    /**
     * @lint ignoreReferenceField(_forwardStates)
     */
    _forwardStates : {
      focused : true,
      invalid : true
    },


    /*
    ---------------------------------------------------------------------------
      PUBLIC API
    ---------------------------------------------------------------------------
    */


    /**
     * Trigger a rebuild from the internal data structure.
     */
    refresh : function()
    {
      this.getChildControl("dropdown").getChildControl("list").refresh();
      qx.ui.core.queue.Widget.add(this);
    },


    /**
     * Shows the drop-down.
     */
    open : function() {
      this._beforeOpen();
      this.getChildControl("dropdown").open();
    },


    /**
     * Hides the drop-down.
     */
    close : function() {
      this._beforeClose();
      this.getChildControl("dropdown").close();
    },


    /**
     * Toggles the drop-down visibility.
     */
    toggle : function() {
      var dropDown =this.getChildControl("dropdown");

      if (dropDown.isVisible()) {
        this.close();
      } else {
        this.open();
      }
    },


    /*
    ---------------------------------------------------------------------------
      INTERNAL API
    ---------------------------------------------------------------------------
    */


    // overridden
    _createChildControlImpl : function(id, hash)
    {
      var control;

      switch(id)
      {
        case "dropdown":
          control = new qx.ui.form.core.VirtualDropDownList(this);
          control.addListener("changeVisibility", this._onPopupChangeVisibility, this);
          break;
      }

      return control || this.base(arguments, id, hash);
    },


    /**
     * This method is called before the drop-down is opened.
     */
    _beforeOpen: function() {},


    /**
     * This method is called before the drop-down is closed.
     */
    _beforeClose: function() {},


    /**
     * Returns the action dependent on the user interaction: e. q. <code>open</code>,
     * or <code>close</code>.
     *
     * @param event {qx.event.type.KeySequence} The keyboard event.
     * @return {String|null} The action or <code>null</code> when interaction
     *  doesn't hit any action.
     */
    _getAction : function(event)
    {
      var keyIdentifier = event.getKeyIdentifier();
      var isOpen = this.getChildControl("dropdown").isVisible();
      var isModifierPressed = this._isModifierPressed(event);

      if (
        !isOpen && !isModifierPressed &&
        (keyIdentifier === "Down" || keyIdentifier === "Up")
      ) {
        return "open";
      } else if (
        isOpen && !isModifierPressed && keyIdentifier === "Escape"
      ) {
        return "close";
      } else {
        return null;
      }
    },


    /**
     * Helper Method to create bind path depended on the passed path.
     *
     * @param source {String} The path to the selection.
     * @param path {String?null} The path to the item's property.
     * @return {String} The created path.
     */
    _getBindPath : function(source, path)
    {
      var bindPath = source + "[0]";

      if (path != null && path != "") {
        bindPath += "." + path;
      }

      return bindPath;
    },

    /**
     * Helper method to check if one modifier key is pressed. e.q.
     * <code>Control</code>, <code>Shift</code>, <code>Meta</code> or
     * <code>Alt</code>.
     *
     * @param event {qx.event.type.KeySequence} The keyboard event.
     * @return {Boolean} <code>True</code> when a modifier key is pressed,
     *   <code>false</code> otherwise.
     */
    _isModifierPressed : function(event)
    {
      var isAltPressed = event.isAltPressed();
      var isCtrlOrCommandPressed = event.isCtrlOrCommandPressed();
      var isShiftPressed = event.isShiftPressed();
      var isMetaPressed = event.isMetaPressed();

      return (isAltPressed || isCtrlOrCommandPressed ||
        isShiftPressed || isMetaPressed);
    },


    /*
    ---------------------------------------------------------------------------
      EVENT LISTENERS
    ---------------------------------------------------------------------------
    */


    /**
     * Handler for the blur event of the current widget.
     *
     * @param event {qx.event.type.Focus} The blur event.
     */
    _onBlur : function(event) {
      this.close();
    },


    /**
     * Handles the complete keyboard events for user interaction. If there is
     * no defined user interaction {@link #_getAction}, the event is delegated
     * to the {@link qx.ui.form.core.VirtualDropDownList#_handleKeyboard} method.
     *
     * @param event {qx.event.type.KeySequence} The keyboard event.
     */
    _handleKeyboard : function(event)
    {
      var action = this._getAction(event);
      var isOpen = this.getChildControl("dropdown").isVisible();

      switch(action)
      {
        case "open":
          this.open();
          break;

        case "close":
          this.close();
          break;

        default:
          if (isOpen) {
            this.getChildControl("dropdown")._handleKeyboard(event);
          }
          break;
      }
    },


    /**
     * Handles all pointer events dispatched on the widget.
     *
     * @param event {qx.event.type.Pointer|qx.event.type.Roll} The pointer event.
     */
    _handlePointer : function(event) {},


    /**
     * Updates drop-down minimum size.
     *
     * @param event {qx.event.type.Data} Data event.
     */
    _onResize : function(event){
      this.getChildControl("dropdown").setMinWidth(event.getData().width);
    },


    /**
     * Adds/removes the state 'popupOpen' depending on the visibility of the popup
     *
     * @param event {qx.event.type.Data} Data event
     */
    _onPopupChangeVisibility : function(event)
    {
      event.getData() == "visible" ? this.addState("popupOpen") : this.removeState("popupOpen");
    },


    /*
    ---------------------------------------------------------------------------
      APPLY ROUTINES
    ---------------------------------------------------------------------------
    */


    // property apply
    _applyModel : function(value, old)
    {
      this.getChildControl("dropdown").getChildControl("list").setModel(value);
      qx.ui.core.queue.Widget.add(this);
    },


    // property apply
    _applyDelegate : function(value, old) {
      this.getChildControl("dropdown").getChildControl("list").setDelegate(value);
    },


    // property apply
    _applyLabelPath : function(value, old)
    {
      this.getChildControl("dropdown").getChildControl("list").setLabelPath(value);
      qx.ui.core.queue.Widget.add(this);
    },


    // property apply
    _applyLabelOptions : function(value, old)
    {
      this.getChildControl("dropdown").getChildControl("list").setLabelOptions(value);
      qx.ui.core.queue.Widget.add(this);
    },


    // property apply
    _applyIconPath : function(value, old)
    {
      this.getChildControl("dropdown").getChildControl("list").setIconPath(value);
      qx.ui.core.queue.Widget.add(this);
    },


    // property apply
    _applyIconOptions : function(value, old)
    {
      this.getChildControl("dropdown").getChildControl("list").setIconOptions(value);
      qx.ui.core.queue.Widget.add(this);
    },


    // property apply
    _applyRowHeight : function(value, old) {
      this.getChildControl("dropdown").getChildControl("list").setItemHeight(value);
    },


    // property apply
    _applyMaxListHeight : function(value, old) {
      this.getChildControl("dropdown").getChildControl("list").setMaxHeight(value);
    }
  },

  destruct : function()
  {
    if (this.__defaultModel) {
      this.__defaultModel.dispose();
    }
  }
});
/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2011 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Christian Hagendorn (chris_schmidt)

************************************************************************ */

/**
 * A drop-down (popup) widget which contains a virtual list for selection.
 *
 * @childControl list {qx.ui.list.List} The virtual list.
 *
 * @internal
 */
qx.Class.define("qx.ui.form.core.VirtualDropDownList",
{
  extend  : qx.ui.popup.Popup,


  /**
   * Creates the drop-down list.
   *
   * @param target {qx.ui.form.core.AbstractVirtualBox} The composite widget.
   */
  construct : function(target)
  {
    qx.core.Assert.assertNotNull(target, "Invalid parameter 'target'!");
    qx.core.Assert.assertNotUndefined(target, "Invalid parameter 'target'!");
    qx.core.Assert.assertInterface(target, qx.ui.form.core.AbstractVirtualBox,
      "Invalid parameter 'target'!");

    this.base(arguments, new qx.ui.layout.VBox());

    this._target = target;

    this._createChildControl("list");
    this.addListener("changeVisibility", this.__onChangeVisibility, this);

    this.__defaultSelection = new qx.data.Array();
    this.initSelection(this.__defaultSelection);
  },


  properties :
  {
    // overridden
    autoHide :
    {
      refine : true,
      init : false
    },


    // overridden
    keepActive :
    {
      refine : true,
      init : true
    },


    /** Current selected items. */
    selection :
    {
      check : "qx.data.Array",
      event : "changeSelection",
      apply : "_applySelection",
      nullable : false,
      deferredInit : true
    }
  },


  events : {
    /**
     * This event is fired as soon as the content of the selection property changes, but
     * this is not equal to the change of the selection of the widget. If the selection
     * of the widget changes, the content of the array stored in the selection property
     * changes. This means you have to listen to the change event of the selection array
     * to get an event as soon as the user changes the selected item.
     * <pre class="javascript">obj.getSelection().addListener("change", listener, this);</pre>
     */
    "changeSelection" : "qx.event.type.Data"
  },


  members :
  {
    /** @type {qx.ui.form.core.AbstractVirtualBox} The composite widget. */
    _target : null,


    /** @type {var} The pre-selected model item. */
    _preselected : null,


    /**
     * @type {Boolean} Indicator to ignore selection changes from the
     * {@link #selection} array.
     */
    __ignoreSelection : false,


    /** @type {Boolean} Indicator to ignore selection changes from the list. */
    __ignoreListSelection : false,


    __defaultSelection : null,


    /*
    ---------------------------------------------------------------------------
      PUBLIC API
    ---------------------------------------------------------------------------
    */


    /**
     * Shows the drop-down.
     */
    open : function()
    {
      this.placeToWidget(this._target, true);
      this.show();
    },


    /**
     * Hides the drop-down.
     */
    close : function() {
      this.hide();
    },


    /**
     * Pre-selects the drop-down item corresponding to the given model object.
     *
     * @param modelItem {Object} Item to be pre-selected.
     */
    setPreselected : function(modelItem)
    {
      this._preselected = modelItem;
      this.__ignoreListSelection = true;
      var listSelection = this.getChildControl("list").getSelection();
      var helper = new qx.data.Array([modelItem]);
      this.__synchronizeSelection(helper, listSelection);
      helper.dispose();
      this.__ignoreListSelection = false;
    },


    /*
    ---------------------------------------------------------------------------
      INTERNAL API
    ---------------------------------------------------------------------------
    */


    // overridden
    _createChildControlImpl : function(id, hash)
    {
      var control;

      switch(id)
      {
        case "list":
          control = new qx.ui.list.List().set({
            focusable: false,
            keepFocus: true,
            height: null,
            width: null,
            maxHeight: this._target.getMaxListHeight(),
            selectionMode: "one",
            quickSelection: true
          });

          control.getSelection().addListener("change", this._onListChangeSelection, this);
          control.addListener("tap", this._handlePointer, this);
          control.addListener("changeModel", this._onChangeModel, this);
          control.addListener("changeDelegate", this._onChangeDelegate, this);

          this.add(control, {flex: 1});
          break;
      }

      return control || this.base(arguments, id, hash);
    },


    /*
    ---------------------------------------------------------------------------
      EVENT LISTENERS
    ---------------------------------------------------------------------------
    */


    /**
     * Handles the complete keyboard events dispatched on the widget.
     *
     * @param event {qx.event.type.KeySequence} The keyboard event.
     */
    _handleKeyboard : function(event)
    {
      if (this.isVisible() && event.getKeyIdentifier() === "Enter") {
        this.__selectPreselected();
        return;
      }

      var clone = event.clone();
      clone.setTarget(this.getChildControl("list"));
      clone.setBubbles(false);

      this.getChildControl("list").dispatchEvent(clone);
    },


    /**
     * Handles all mouse events dispatched on the widget.
     *
     * @param event {qx.event.type.Mouse} The mouse event.
     */
    _handlePointer : function(event) {
      this.__selectPreselected();
    },


    /**
     * Handler for the local selection change. The method is responsible for
     * the synchronization between the own selection and the selection
     * form the drop-down.
     *
     * @param event {qx.event.type.Data} The data event.
     */
    __onChangeSelection : function(event)
    {
      if (this.__ignoreSelection) {
        return;
      }

      var selection = this.getSelection();
      var listSelection = this.getChildControl("list").getSelection();

      this.__ignoreListSelection = true;
      this.__synchronizeSelection(selection, listSelection);
      this.__ignoreListSelection = false;

      this.__ignoreSelection = true;
      this.__synchronizeSelection(listSelection, selection);
      this.__ignoreSelection = false;
    },


    /**
     * Handler for the selection change on the list. The method is responsible
     * for the synchronization between the list selection and the own selection.
     *
     * @param event {qx.event.type.Data} The data event.
     */
    _onListChangeSelection : function(event)
    {
      if (this.__ignoreListSelection) {
        return;
      }

      var listSelection = this.getChildControl("list").getSelection();

      if (this.isVisible()) {
        this.setPreselected(listSelection.getItem(0));
      } else {
        this.__ignoreSelection = true;
        this.__synchronizeSelection(listSelection, this.getSelection());
        this.__ignoreSelection = false;
      }
    },


    /**
     * Handler for the own visibility changes. The method is responsible that
     * the list selects the current selected item.
     *
     * @param event {qx.event.type.Data} The event.
     */
    __onChangeVisibility : function(event)
    {
      if (this.isVisible())
      {
        if (this._preselected == null)
        {
          var selection = this.getSelection();
          var listSelection = this.getChildControl("list").getSelection();
          this.__synchronizeSelection(selection, listSelection);
        }
        this.__adjustSize();
      } else {
        this.setPreselected(null);
      }
    },


    /**
     * Handler for the model change event.
     *
     * @param event {qx.event.type.Data} The change event.
     */
    _onChangeModel : function(event) {
      this.getSelection().removeAll();
    },


    /**
     * Handler for the delegate change event.
     *
     * @param event {qx.event.type.Data} The change event.
     */
    _onChangeDelegate : function(event) {
      this.getSelection().removeAll();
    },


    /*
    ---------------------------------------------------------------------------
      APPLY ROUTINES
    ---------------------------------------------------------------------------
    */


    // property apply
    _applySelection : function(value, old)
    {
      value.addListener("change", this.__onChangeSelection, this);

      if (old != null) {
        old.removeListener("change", this.__onChangeSelection, this);
      }

      this.__synchronizeSelection(
        value, this.getChildControl("list").getSelection(value)
      );
    },


    /*
    ---------------------------------------------------------------------------
      HELPER METHODS
    ---------------------------------------------------------------------------
    */


    /**
     * Helper method to select the current preselected item, also closes the
     * drop-down.
     */
    __selectPreselected : function()
    {
      if (this._preselected != null)
      {
        var selection = this.getSelection();
        selection.splice(0, 1, this._preselected);
        this._preselected = null;
        this.close();
      }
    },


    /**
     * Helper method to synchronize both selection. The target selection has
     * the same selection like the source selection after the synchronization.
     *
     * @param source {qx.data.Array} The source selection.
     * @param target {qx.data.Array} The target selection.
     */
    __synchronizeSelection : function(source, target)
    {
      if (source.equals(target)) {
        return;
      }

      if (source.getLength() <= 0) {
        target.removeAll();
      }
      else
      {
        var nativeArray = target.toArray();
        qx.lang.Array.removeAll(nativeArray);
        for (var i = 0; i < source.getLength(); i++) {
          nativeArray.push(source.getItem(i));
        }
        target.length = nativeArray.length;

        // necessary for keeping preselected items in sync
        target.fireDataEvent("change", {});
      }
    },


    /**
     * Adjust the drop-down to the available width and height, by calling
     * {@link #__adjustWidth} and {@link #__adjustHeight}.
     */
    __adjustSize : function()
    {
      this.__adjustWidth();
      this.__adjustHeight();
    },


    /**
     * Adjust the drop-down to the available width. The width is limited by
     * the current with from the _target.
     */
    __adjustWidth : function()
    {
      var width = this._target.getBounds().width;
      this.setWidth(width);
    },


    /**
     * Adjust the drop-down to the available height. Ensure that the list
     * is never bigger that the max list height and the available space
     * in the viewport.
     */
    __adjustHeight : function()
    {
      var availableHeigth = this.__getAvailableHeigth();
      var maxListHeight = this._target.getMaxListHeight();
      var list = this.getChildControl("list");
      var itemsHeight = list.getPane().getRowConfig().getTotalSize();

      if (maxListHeight == null || itemsHeight < maxListHeight) {
        maxListHeight = itemsHeight;
      }

      if (maxListHeight > availableHeigth) {
        list.setMaxHeight(availableHeigth);
      } else if (maxListHeight < availableHeigth) {
        list.setMaxHeight(maxListHeight);
      }
    },


    /**
     * Calculates the available height in the viewport.
     *
     * @return {Integer} Available height in the viewport.
     */
    __getAvailableHeigth : function()
    {
      var distance = this.getLayoutLocation(this._target);
      var viewPortHeight = qx.bom.Viewport.getHeight();

      // distance to the bottom and top borders of the viewport
      var toTop = distance.top;
      var toBottom = viewPortHeight - distance.bottom;

      return toTop > toBottom ? toTop : toBottom;
    }
  },

  destruct : function()
  {
    if (this.__defaultSelection) {
      this.__defaultSelection.dispose();
    }
  }
});
/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2011 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Daniel Wagner (d_wagner)
     * Christian Hagendorn (chris_schmidt)

************************************************************************ */

/**
 * A virtual form widget that allows text entry as well as selection from a
 * drop-down.
 *
 * @childControl textfield {qx.ui.form.TextField} Field for text entry.
 * @childControl button {qx.ui.form.Button} Opens the drop-down.
 */
qx.Class.define("qx.ui.form.VirtualComboBox",
{
  extend : qx.ui.form.core.AbstractVirtualBox,

  implement : [qx.ui.form.IStringForm],


  construct : function(model)
  {
    this.base(arguments, model);

    var textField = this._createChildControl("textfield");
    this._createChildControl("button");

    var dropdown = this.getChildControl("dropdown");
    dropdown.getChildControl("list").setSelectionMode("single");

    this.__selection = dropdown.getSelection();
    this.__selection.addListener("change", this.__onSelectionChange, this);

    this.bind("value", textField, "value");
    textField.bind("value", this, "value");

    // forward the focusin and focusout events to the textfield. The textfield
    // is not focusable so the events need to be forwarded manually.
    this.addListener("focusin", function(e) {
      textField.fireNonBubblingEvent("focusin", qx.event.type.Focus);
    }, this);

    this.addListener("focusout", function(e) {
      textField.fireNonBubblingEvent("focusout", qx.event.type.Focus);
    }, this);
  },

  properties :
  {
    // overridden
    appearance :
    {
      refine: true,
      init: "virtual-combobox"
    },

    // overridden
    width :
    {
      refine: true,
      init: 120
    },


    /**
     * The currently selected or entered value.
     */
    value :
    {
      nullable: true,
      event: "changeValue"
    },


    /**
     * String value which will be shown as a hint if the field is all of:
     * unset, unfocused and enabled. Set to null to not show a placeholder
     * text.
     */
    placeholder :
    {
      check : "String",
      nullable : true,
      apply : "_applyPlaceholder"
    },


    /**
     * Formatting function that will be applied to the value of a selected model
     * item's label before it is written to the text field. Also used to find
     * and preselect the first list entry that begins with the current content
     * of the text field when the drop-down list is opened. Can be used e.g. to
     * strip HTML tags from rich-formatted item labels. The function will be
     * called with the item's label (String) as the only parameter.
     */
    defaultFormat :
    {
      check: "Function",
      init: null,
      nullable: true
    }
  },

  members :
  {
    /** @type {var} Binding id between local value and text field value. */
    __localBindId : null,


    /** @type {var} Binding id between text field value and local value. */
    __textFieldBindId : null,


    /** @type {qx.data.Array} the drop-down selection. */
    __selection : null,


    /** @type {Boolean} Indicator to ignore selection changes from the list. */
    __ignoreChangeSelection : null,


    /*
    ---------------------------------------------------------------------------
      PUBLIC API
    ---------------------------------------------------------------------------
    */


    /**
     * Returns the current selection. This method only works if the widget is
     * already created and added to the document.
     *
     * @return {String|null} The current text selection.
     */
    getTextSelection : function() {
      return this.getChildControl("textfield").getTextSelection();
    },


    /**
     * Returns the current selection length. This method only works if the
     * widget is already created and added to the document.
     *
     * @return {Integer|null} The current text selection length.
     */
    getTextSelectionLength : function() {
      return this.getChildControl("textfield").getTextSelectionLength();
    },


    /**
     * Set the selection to the given start and end (zero-based). If no end
     * value is given the selection will extend to the end of the textfield's
     * content. This method only works if the widget is already created and
     * added to the document.
     *
     * @param start {Integer} Start of the selection (zero-based).
     * @param end {Integer} End of the selection.
     */
    setTextSelection : function(start, end) {
      this.getChildControl("textfield").setTextSelection(start,  end);
    },


    /**
     * Clears the current selection. This method only works if the widget is
     * already created and added to the document.
     */
    clearTextSelection : function() {
      this.getChildControl("textfield").clearTextSelection();
    },


    /**
     * Selects the whole content.
     */
    selectAllText : function() {
      this.getChildControl("textfield").selectAllText();
    },


    /**
     * Clear any text selection, then select all text.
     */
    resetAllTextSelection : function()
    {
      this.clearTextSelection();
      this.selectAllText();
    },


    // overridden
    tabFocus : function()
    {
      var field = this.getChildControl("textfield");

      field.getFocusElement().focus();
      field.selectAllText();
    },


    // overridden
    focus : function()
    {
      this.base(arguments);
      this.getChildControl("textfield").getFocusElement().focus();
    },


    /*
    ---------------------------------------------------------------------------
      INTERNAL API
    ---------------------------------------------------------------------------
    */


    // overridden
    _createChildControlImpl : function(id, hash)
    {
      var control;

      switch (id)
      {
        case "textfield" :
          control = new qx.ui.form.TextField();
          control.setFocusable(false);
          control.addState("inner");
          this._add(control, {flex : 1});
          break;

        case "button" :
          control = new qx.ui.form.Button();
          control.setFocusable(false);
          control.setKeepActive(true);
          control.addState("inner");
          control.addListener("execute", this.toggle, this);
          this._add(control);
          break;
      }

      return control || this.base(arguments, id, hash);
    },


    // overridden
    _beforeOpen : function() {
      this.__selectFirstMatch();
    },


    // overridden
    _handleKeyboard : function(event)
    {
      var action = this._getAction(event);

      switch(action)
      {
        case "select":
          this.setValue(this.getChildControl("textfield").getValue());
          break;

        default:
          this.base(arguments, event);
          break;
      }
    },


    // overridden
    _getAction : function(event)
    {
      var keyIdentifier = event.getKeyIdentifier();
      var isOpen = this.getChildControl("dropdown").isVisible();
      var isModifierPressed = this._isModifierPressed(event);

      if (!isOpen && !isModifierPressed && keyIdentifier === "Enter") {
        return "select";
      } else {
        return this.base(arguments, event);
      }
    },


    /*
    ---------------------------------------------------------------------------
      EVENT LISTENERS
    ---------------------------------------------------------------------------
    */


    // overridden
    _handlePointer : function(event) {
      this.base(arguments, event);

      var type = event.getType();
      if (type !== "tap") {
        return;
      }

      this.close();
    },


    /**
     * Handler to synchronize selection changes with the value property.
     *
     * @param event {qx.event.type.Data} The change event from the qx.data.Array.
     */
    __onSelectionChange : function(event) {
      if (this.__ignoreChangeSelection == true) {
        return;
      }

      var selected = this.__selection.getItem(0);
      if(selected){
        selected = this.__convertValue(selected);
        this.setValue(selected);
      }
    },


    /*
    ---------------------------------------------------------------------------
      APPLY ROUTINES
    ---------------------------------------------------------------------------
    */
    // property apply
    _applyPlaceholder : function(value, old) {
      this.getChildControl("textfield").setPlaceholder(value);
    },


    /*
    ---------------------------------------------------------------------------
      HELPER METHODS
    ---------------------------------------------------------------------------
    */


    /**
     * Selects the first list item that starts with the text field's value.
     */
    __selectFirstMatch : function()
    {
      var value = this.getValue();
      var dropdown = this.getChildControl("dropdown");
      var selection = dropdown.getSelection();

      if (this.__convertValue(selection.getItem(0)) !== value)
      {
        // reset the old selection
        this.__ignoreChangeSelection = true;
        selection.removeAll();
        this.__ignoreChangeSelection = false;

        // No calculation is needed when the value is empty
        if (value == null || value == "") {
          return;
        }

        var model = this.getModel();
        var lookupTable = dropdown.getChildControl("list")._getLookupTable();
        for (var i = 0, l = lookupTable.length; i < l; i++)
        {
          var modelItem = model.getItem(lookupTable[i]);
          var itemLabel = this.__convertValue(modelItem);

          if (itemLabel && itemLabel.indexOf(value) == 0) {
            dropdown.setPreselected(modelItem);
            break;
          }
        }
      }
    },


    /**
     * Helper method to convert the model item to a String.
     *
     * @param modelItem {var} The model item to convert.
     * @return {String} The converted value.
     */
    __convertValue : function(modelItem)
    {
      var labelOptions = this.getLabelOptions();
      var formatter = this.getDefaultFormat();
      var labelPath = this.getLabelPath();
      var result = null;

      if (labelPath != null) {
        result = qx.data.SingleValueBinding.resolvePropertyChain(modelItem, labelPath);
      } else if (qx.lang.Type.isString(modelItem)) {
        result = modelItem;
      }

      var converter = qx.util.Delegate.getMethod(labelOptions, "converter");
      if (converter != null) {
        result = converter(result);
      }

      if (result != null && formatter != null) {
        result = formatter(qx.lang.String.stripTags(result));
      }

      return result;
    }
  },


  destruct : function()
  {
    var textField = this.getChildControl("textfield");
    this.removeAllBindings();
    textField.removeAllBindings();

    this.__selection.removeListener("change", this.__onSelectionChange, this);
    this.__selection = null;
  }
});
/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (martinwittemann)

************************************************************************ */

/**
 * A *date field* is like a combo box with the date as popup. As button to
 * open the calendar a calendar icon is shown at the right to the textfield.
 *
 * To be conform with all form widgets, the {@link qx.ui.form.IForm} interface
 * is implemented.
 *
 * The following example creates a date field and sets the current
 * date as selected.
 *
 * <pre class='javascript'>
 * var dateField = new qx.ui.form.DateField();
 * this.getRoot().add(dateField, {top: 20, left: 20});
 * dateField.setValue(new Date());
 * </pre>
 *
 * @childControl list {qx.ui.control.DateChooser} date chooser component
 * @childControl popup {qx.ui.popup.Popup} popup which shows the list control
 * @childControl textfield {qx.ui.form.TextField} text field for manual date entry
 * @childControl button {qx.ui.form.Button} button that opens the list control
 */
qx.Class.define("qx.ui.form.DateField",
{
  extend : qx.ui.core.Widget,
  include : [
    qx.ui.core.MRemoteChildrenHandling,
    qx.ui.form.MForm
  ],
  implement : [
    qx.ui.form.IForm,
    qx.ui.form.IDateForm
  ],


  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  construct : function()
  {
    this.base(arguments);

    // set the layout
    var layout = new qx.ui.layout.HBox();
    this._setLayout(layout);
    layout.setAlignY("middle");

    // text field
    var textField = this._createChildControl("textfield");
    this._createChildControl("button");

    // register listeners
    this.addListener("tap", this._onTap, this);
    this.addListener("blur", this._onBlur, this);

    // forward the focusin and focusout events to the textfield. The textfield
    // is not focusable so the events need to be forwarded manually.
    this.addListener("focusin", function(e) {
      textField.fireNonBubblingEvent("focusin", qx.event.type.Focus);
      textField.setTextSelection(0,0);
    }, this);

    this.addListener("focusout", function(e) {
      textField.fireNonBubblingEvent("focusout", qx.event.type.Focus);
    }, this);

    // initializes the DateField with the default format
    this._setDefaultDateFormat();

    // adds a locale change listener
    this._addLocaleChangeListener();
  },




  /*
  *****************************************************************************
     EVENTS
  *****************************************************************************
  */

  events :
  {
    /** Whenever the value is changed this event is fired
     *
     *  Event data: The new text value of the field.
     */
    "changeValue" : "qx.event.type.Data"
  },




  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */

  properties :
  {

    /** The formatter, which converts the selected date to a string. **/
    dateFormat :
    {
      check : "qx.util.format.DateFormat",
      apply : "_applyDateFormat"
    },

    /**
     * String value which will be shown as a hint if the field is all of:
     * unset, unfocused and enabled. Set to null to not show a placeholder
     * text.
     */
    placeholder :
    {
      check : "String",
      nullable : true,
      apply : "_applyPlaceholder"
    },

    // overridden
    appearance :
    {
      refine : true,
      init : "datefield"
    },

    // overridden
    focusable :
    {
      refine : true,
      init : true
    },

    // overridden
    width :
    {
      refine : true,
      init : 120
    }
  },




  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  statics :
  {
    __dateFormat : null,
    __formatter : null,

    /**
     * Get the shared default date formatter
     *
     * @return {qx.util.format.DateFormat} The shared date formatter
     */
    getDefaultDateFormatter : function()
    {
      var format = qx.locale.Date.getDateFormat("medium").toString();

      if (format == this.__dateFormat) {
        return this.__formatter;
      }

      if (this.__formatter) {
        this.__formatter.dispose();
      }

      this.__formatter = new qx.util.format.DateFormat(format, qx.locale.Manager.getInstance().getLocale());
      this.__dateFormat = format;

      return this.__formatter;
    }
  },




  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    __localeListenerId : null,


    /**
     * @lint ignoreReferenceField(_forwardStates)
     */
    _forwardStates : {
      focused : true,
      invalid : true
    },


    /*
    ---------------------------------------------------------------------------
      PROTECTED METHODS
    ---------------------------------------------------------------------------
    */
    /**
     * Sets the default date format which is returned by
     * {@link #getDefaultDateFormatter}. You can overrride this method to
     * define your own default format.
     */
    _setDefaultDateFormat : function() {
      this.setDateFormat(qx.ui.form.DateField.getDefaultDateFormatter());
    },


    /**
     * Checks for "qx.dynlocale" and adds a listener to the locale changes.
     * On every change, {@link #_setDefaultDateFormat} is called to reinitialize
     * the format. You can easily override that method to prevent that behavior.
     */
    _addLocaleChangeListener : function() {
      // listen for locale changes
      if (qx.core.Environment.get("qx.dynlocale"))
      {
        this.__localeListenerId =
          qx.locale.Manager.getInstance().addListener("changeLocale", function() {
            this._setDefaultDateFormat();
          }, this);
      }
    },


    /*
    ---------------------------------------------------------------------------
      PUBLIC METHODS
    ---------------------------------------------------------------------------
    */


    /**
    * This method sets the date, which will be formatted according to
    * #dateFormat to the date field. It will also select the date in the
    * calendar popup.
    *
    * @param value {Date} The date to set.
     */
    setValue : function(value)
    {
      // set the date to the textfield
      var textField = this.getChildControl("textfield");
      textField.setValue(this.getDateFormat().format(value));

      // set the date in the datechooser
      var dateChooser = this.getChildControl("list");
      dateChooser.setValue(value);
    },


    /**
     * Returns the current set date, parsed from the input-field
     * corresponding to the {@link #dateFormat}.
     * If the given text could not be parsed, <code>null</code> will be returned.
     *
     * @return {Date} The currently set date.
     */
    getValue : function()
    {
      // get the value of the textfield
      var textfieldValue = this.getChildControl("textfield").getValue();

      // return the parsed date
      try {
        return this.getDateFormat().parse(textfieldValue);
      } catch (ex) {
        return null;
      }
    },


    /**
     * Resets the DateField. The textfield will be empty and the datechooser
     * will also have no selection.
     */
    resetValue: function()
    {
      // set the date to the textfield
      var textField = this.getChildControl("textfield");
      textField.setValue("");

      // set the date in the datechooser
      var dateChooser = this.getChildControl("list");
      dateChooser.setValue(null);
    },


    /*
    ---------------------------------------------------------------------------
      LIST STUFF
    ---------------------------------------------------------------------------
    */

    /**
     * Shows the date chooser popup.
     */
    open : function()
    {
      var popup = this.getChildControl("popup");

      popup.placeToWidget(this, true);
      popup.show();
    },


    /**
     * Hides the date chooser popup.
     */
    close : function() {
      this.getChildControl("popup").hide();
    },


    /**
     * Toggles the date chooser popup visibility.
     */
    toggle : function()
    {
      var isListOpen = this.getChildControl("popup").isVisible();
      if (isListOpen) {
        this.close();
      } else {
        this.open();
      }
    },


    /*
    ---------------------------------------------------------------------------
      PROPERTY APPLY METHODS
    ---------------------------------------------------------------------------
    */

    // property apply routine
    _applyDateFormat : function(value, old)
    {
      // if old is undefined or null do nothing
      if (!old) {
        return;
      }

      // get the date with the old date format
      try
      {
        var textfield = this.getChildControl("textfield");
        var dateStr = textfield.getValue();
        var currentDate = old.parse(dateStr);
        textfield.setValue(value.format(currentDate));
      }
      catch (ex) {
        // do nothing if the former date could not be parsed
      }
    },


    // property apply routine
    _applyPlaceholder : function(value, old) {
      this.getChildControl("textfield").setPlaceholder(value);
    },


    /*
    ---------------------------------------------------------------------------
      WIDGET API
    ---------------------------------------------------------------------------
    */

    // overridden
    _createChildControlImpl : function(id, hash)
    {
      var control;

      switch(id)
      {
        case "textfield":
          control = new qx.ui.form.TextField();
          control.setFocusable(false);
          control.addState("inner");
          control.addListener("changeValue", this._onTextFieldChangeValue, this);
          control.addListener("blur", this.close, this);
          this._add(control, {flex: 1});
          break;

        case "button":
          control = new qx.ui.form.Button();
          control.setFocusable(false);
          control.setKeepActive(true);
          control.addState("inner");
          control.addListener("execute", this.toggle, this);
          this._add(control);
          break;

        case "list":
          control = new qx.ui.control.DateChooser();
          control.setFocusable(false);
          control.setKeepFocus(true);
          control.addListener("execute", this._onChangeDate, this);
          break;

        case "popup":
          control = new qx.ui.popup.Popup(new qx.ui.layout.VBox);
          control.setAutoHide(false);
          control.add(this.getChildControl("list"));
          control.addListener("pointerup", this._onChangeDate, this);
          control.addListener("changeVisibility", this._onPopupChangeVisibility, this);
          break;
      }

      return control || this.base(arguments, id);
    },




   /*
   ---------------------------------------------------------------------------
     EVENT LISTENERS
   ---------------------------------------------------------------------------
   */

   /**
    * Handler method which handles the tap on the calender popup.
    *
    * @param e {qx.event.type.Pointer} The pointer event.
    */
    _onChangeDate : function(e)
    {
      var textField = this.getChildControl("textfield");

      var selectedDate = this.getChildControl("list").getValue();

      textField.setValue(this.getDateFormat().format(selectedDate));
      this.close();
    },


    /**
     * Toggles the popup's visibility.
     *
     * @param e {qx.event.type.Pointer} Pointer tap event
     */
    _onTap : function(e) {
      this.close();
    },


    /**
     * Handler for the blur event of the current widget.
     *
     * @param e {qx.event.type.Focus} The blur event.
     */
    _onBlur : function(e) {
      this.close();
    },


    /**
     * Handler method which handles the key press. It forwards all key event
     * to the opened date chooser except the escape key event. Escape closes
     * the popup.
     * If the list is cloned, all key events will not be processed further.
     *
     * @param e {qx.event.type.KeySequence} Keypress event
     */
    _onKeyPress : function(e)
    {
      // get the key identifier
      var iden = e.getKeyIdentifier();
      if (iden == "Down" && e.isAltPressed())
      {
        this.toggle();
        e.stopPropagation();
        return;
      }

      // if the popup is closed, ignore all
      var popup = this.getChildControl("popup");
      if (popup.getVisibility() == "hidden") {
        return;
      }

      // hide the list always on escape
      if (iden == "Escape")
      {
        this.close();
        e.stopPropagation();
        return;
      }

      // Stop navigation keys when popup is open
      if (iden === "Left" || iden === "Right" || iden === "Down" || iden === "Up") {
        e.preventDefault();
      }

      // forward the rest of the events to the date chooser
      this.getChildControl("list").handleKeyPress(e);
    },


    /**
     * Redirects changeVisibility event from the list to this widget.
     *
     * @param e {qx.event.type.Data} Property change event
     */
    _onPopupChangeVisibility : function(e)
    {
      e.getData() == "visible" ? this.addState("popupOpen") : this.removeState("popupOpen");

      // Synchronize the chooser with the current value on every
      // opening of the popup. This is needed when the value has been
      // modified and not saved yet (e.g. no blur)
      var popup = this.getChildControl("popup");
      if (popup.isVisible())
      {
        var chooser = this.getChildControl("list");
        var date = this.getValue();
        chooser.setValue(date);
      }
    },


    /**
     * Reacts on value changes of the text field and syncs the
     * value to the combobox.
     *
     * @param e {qx.event.type.Data} Change event
     */
    _onTextFieldChangeValue : function(e)
    {
      // Apply to popup
      var date = this.getValue();
      if (date != null)
      {
        var list = this.getChildControl("list");
        list.setValue(date);
      }

      // Fire event
      this.fireDataEvent("changeValue", this.getValue());
    },


    /**
     * Checks if the textfield of the DateField is empty.
     *
     * @return {Boolean} True, if the textfield of the DateField is empty.
     */
    isEmpty: function()
    {
      var value = this.getChildControl("textfield").getValue();
      return value == null || value == "";
    }
  },


  destruct : function() {
    // listen for locale changes
    if (qx.core.Environment.get("qx.dynlocale"))
    {
      if (this.__localeListenerId) {
        qx.locale.Manager.getInstance().removeListenerById(this.__localeListenerId);
      }
    }
  }
});
/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2006 STZ-IDA, Germany, http://www.stz-ida.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Til Schneider (til132)
     * Martin Wittemann (martinwittemann)

************************************************************************ */

/**
 * A *date chooser* is a small calendar including a navigation bar to switch the shown
 * month. It includes a column for the calendar week and shows one month. Selecting
 * a date is as easy as tapping on it.
 *
 * To be conform with all form widgets, the {@link qx.ui.form.IForm} interface
 * is implemented.
 *
 * The following example creates and adds a date chooser to the root element.
 * A listener alerts the user if a new date is selected.
 *
 * <pre class='javascript'>
 * var chooser = new qx.ui.control.DateChooser();
 * this.getRoot().add(chooser, { left : 20, top: 20});
 *
 * chooser.addListener("changeValue", function(e) {
 *   alert(e.getData());
 * });
 * </pre>
 *
 * Additionally to a selection event an execute event is available which is
 * fired by doubletap or tapping the space / enter key. With this event you
 * can for example save the selection and close the date chooser.
 *
 * @childControl navigation-bar {qx.ui.container.Composite} container for the navigation bar controls
 * @childControl last-year-button-tooltip {qx.ui.tooltip.ToolTip} tooltip for the last year button
 * @childControl last-year-button {qx.ui.form.Button} button to jump to the last year
 * @childControl last-month-button-tooltip {qx.ui.tooltip.ToolTip} tooltip for the last month button
 * @childControl last-month-button {qx.ui.form.Button} button to jump to the last month
 * @childControl next-month-button-tooltip {qx.ui.tooltip.ToolTip} tooltip for the next month button
 * @childControl next-month-button {qx.ui.form.Button} button to jump to the next month
 * @childControl next-year-button-tooltip {qx.ui.tooltip.ToolTip} tooltip for the next year button
 * @childControl next-year-button {qx.ui.form.Button} button to jump to the next year
 * @childControl month-year-label {qx.ui.basic.Label} shows the current month and year
 * @childControl week {qx.ui.basic.Label} week label (used multiple times)
 * @childControl weekday {qx.ui.basic.Label} weekday label (used multiple times)
 * @childControl day {qx.ui.basic.Label} day label (used multiple times)
 * @childControl date-pane {qx.ui.container.Composite} the pane used to position the week, weekday and day labels
 *
 */
qx.Class.define("qx.ui.control.DateChooser",
{
  extend : qx.ui.core.Widget,
  include : [
    qx.ui.core.MExecutable,
    qx.ui.form.MForm
  ],
  implement : [
    qx.ui.form.IExecutable,
    qx.ui.form.IForm,
    qx.ui.form.IDateForm
  ],


  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param date {Date ? null} The initial date to show. If <code>null</code>
   * the current day (today) is shown.
   */
  construct : function(date)
  {
    this.base(arguments);

    // set the layout
    var layout = new qx.ui.layout.VBox();
    this._setLayout(layout);

    // create the child controls
    this._createChildControl("navigation-bar");
    this._createChildControl("date-pane");

    // Support for key events
    this.addListener("keypress", this._onKeyPress);

    // initialize format - moved from statics{} to constructor due to [BUG #7149]
    var DateChooser = qx.ui.control.DateChooser;
    if (!DateChooser.MONTH_YEAR_FORMAT) {
        DateChooser.MONTH_YEAR_FORMAT = qx.locale.Date.getDateTimeFormat("yyyyMMMM", "MMMM yyyy");
    }

    // Show the right date
    var shownDate = (date != null) ? date : new Date();
    this.showMonth(shownDate.getMonth(), shownDate.getFullYear());

    // listen for locale changes
    if (qx.core.Environment.get("qx.dynlocale")) {
      qx.locale.Manager.getInstance().addListener("changeLocale", this._updateDatePane, this);
    }

    // register pointer up and down handler
    this.addListener("pointerdown", this._onPointerUpDown, this);
    this.addListener("pointerup", this._onPointerUpDown, this);
  },



  /*
  *****************************************************************************
     STATICS
  *****************************************************************************
  */

  statics :
  {
    /**
     * @type {string} The format for the date year label at the top center.
     */
    MONTH_YEAR_FORMAT : null,

    /**
     * @type {string} The format for the weekday labels (the headers of the date table).
     */
    WEEKDAY_FORMAT : "EE",

    /**
     * @type {string} The format for the week numbers (the labels of the left column).
     */
    WEEK_FORMAT : "ww"
  },


  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */

  properties :
  {
    // overridden
    appearance :
    {
      refine : true,
      init   : "datechooser"
    },

    // overrridden
    width :
    {
      refine : true,
      init : 200
    },

    // overridden
    height :
    {
      refine : true,
      init : 150
    },

    /** The currently shown month. 0 = january, 1 = february, and so on. */
    shownMonth :
    {
      check : "Integer",
      init : null,
      nullable : true,
      event : "changeShownMonth"
    },

    /** The currently shown year. */
    shownYear :
    {
      check : "Integer",
      init : null,
      nullable : true,
      event : "changeShownYear"
    },

    /** The date value of the widget. */
    value :
    {
      check : "Date",
      init : null,
      nullable : true,
      event : "changeValue",
      apply : "_applyValue"
    }
  },




  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    __weekdayLabelArr : null,
    __dayLabelArr : null,
    __weekLabelArr : null,


    // overridden
    /**
     * @lint ignoreReferenceField(_forwardStates)
     */
    _forwardStates :
    {
      invalid : true
    },


    /*
    ---------------------------------------------------------------------------
      WIDGET INTERNALS
    ---------------------------------------------------------------------------
    */

    // overridden
    _createChildControlImpl : function(id, hash)
    {
      var control;

      switch(id)
      {
        // NAVIGATION BAR STUFF
        case "navigation-bar":
          control = new qx.ui.container.Composite(new qx.ui.layout.HBox());

          // Add the navigation bar elements
          control.add(this.getChildControl("last-year-button"));
          control.add(this.getChildControl("last-month-button"));
          control.add(this.getChildControl("month-year-label"), {flex: 1});
          control.add(this.getChildControl("next-month-button"));
          control.add(this.getChildControl("next-year-button"));

          this._add(control);
          break;

        case "last-year-button-tooltip":
          control = new qx.ui.tooltip.ToolTip(this.tr("Last year"));
          break;

        case "last-year-button":
          control = new qx.ui.toolbar.Button();
          control.addState("lastYear");
          control.setFocusable(false);
          control.setToolTip(this.getChildControl("last-year-button-tooltip"));
          control.addListener("tap", this._onNavButtonTap, this);
          break;

        case "last-month-button-tooltip":
          control = new qx.ui.tooltip.ToolTip(this.tr("Last month"));
          break;

        case "last-month-button":
          control = new qx.ui.toolbar.Button();
          control.addState("lastMonth");
          control.setFocusable(false);
          control.setToolTip(this.getChildControl("last-month-button-tooltip"));
          control.addListener("tap", this._onNavButtonTap, this);
          break;

        case "next-month-button-tooltip":
          control = new qx.ui.tooltip.ToolTip(this.tr("Next month"));
          break;

        case "next-month-button":
          control = new qx.ui.toolbar.Button();
          control.addState("nextMonth");
          control.setFocusable(false);
          control.setToolTip(this.getChildControl("next-month-button-tooltip"));
          control.addListener("tap", this._onNavButtonTap, this);
          break;

        case "next-year-button-tooltip":
          control = new qx.ui.tooltip.ToolTip(this.tr("Next year"));
          break;

        case "next-year-button":
          control = new qx.ui.toolbar.Button();
          control.addState("nextYear");
          control.setFocusable(false);
          control.setToolTip(this.getChildControl("next-year-button-tooltip"));
          control.addListener("tap", this._onNavButtonTap, this);
          break;

        case "month-year-label":
          control = new qx.ui.basic.Label();
          control.setAllowGrowX(true);
          control.setAnonymous(true);
          break;

        case "week":
          control = new qx.ui.basic.Label();
          control.setAllowGrowX(true);
          control.setAllowGrowY(true);
          control.setSelectable(false);
          control.setAnonymous(true);
          control.setCursor("default");
          break;

        case "weekday":
          control = new qx.ui.basic.Label();
          control.setAllowGrowX(true);
          control.setAllowGrowY(true);
          control.setSelectable(false);
          control.setAnonymous(true);
          control.setCursor("default");
          break;

        case "day":
          control = new qx.ui.basic.Label();
          control.setAllowGrowX(true);
          control.setAllowGrowY(true);
          control.setCursor("default");
          control.addListener("pointerdown", this._onDayTap, this);
          control.addListener("dbltap", this._onDayDblTap, this);
          break;

        case "date-pane":
          var controlLayout = new qx.ui.layout.Grid()
          control = new qx.ui.container.Composite(controlLayout);

          for (var i = 0; i < 8; i++) {
            controlLayout.setColumnFlex(i, 1);
          }

          for (var i = 0; i < 7; i++) {
            controlLayout.setRowFlex(i, 1);
          }

          // Create the weekdays
          // Add an empty label as spacer for the week numbers
          var label = this.getChildControl("week#0");
          label.addState("header");
          control.add(label, {column: 0, row: 0});

          this.__weekdayLabelArr = [];
          for (var i=0; i<7; i++)
          {
            label = this.getChildControl("weekday#" + i);
            control.add(label, {column: i + 1, row: 0});
            this.__weekdayLabelArr.push(label);
          }

          // Add the days
          this.__dayLabelArr = [];
          this.__weekLabelArr = [];

          for (var y = 0; y < 6; y++)
          {
            // Add the week label
            var label = this.getChildControl("week#" + (y+1));
            control.add(label, {column: 0, row: y + 1});
            this.__weekLabelArr.push(label);

            // Add the day labels
            for (var x = 0; x < 7; x++)
            {
              var label = this.getChildControl("day#" + ((y*7)+x));
              control.add(label, {column:x + 1, row:y + 1});
              this.__dayLabelArr.push(label);
            }
          }

          this._add(control);
          break;
      }

      return control || this.base(arguments, id);
    },


    // apply methods
    _applyValue : function(value, old)
    {
      if ((value != null) && (this.getShownMonth() != value.getMonth() || this.getShownYear() != value.getFullYear()))
      {
        // The new date is in another month -> Show that month
        this.showMonth(value.getMonth(), value.getFullYear());
      }
      else
      {
        // The new date is in the current month -> Just change the states
        var newDay = (value == null) ? -1 : value.getDate();

        for (var i=0; i<6*7; i++)
        {
          var dayLabel = this.__dayLabelArr[i];

          if (dayLabel.hasState("otherMonth"))
          {
            if (dayLabel.hasState("selected")) {
              dayLabel.removeState("selected");
            }
          }
          else
          {
            var day = parseInt(dayLabel.getValue(), 10);

            if (day == newDay) {
              dayLabel.addState("selected");
            } else if (dayLabel.hasState("selected")) {
              dayLabel.removeState("selected");
            }
          }
        }
      }
    },



    /*
    ---------------------------------------------------------------------------
      EVENT HANDLER
    ---------------------------------------------------------------------------
    */

    /**
     * Handler which stops the propagation of the tap event if
     * the navigation bar or calendar headers will be tapped.
     *
     * @param e {qx.event.type.Pointer} The pointer up / down event
     */
    _onPointerUpDown : function(e) {
      var target = e.getTarget();

      if (target == this.getChildControl("navigation-bar") ||
          target == this.getChildControl("date-pane")) {
        e.stopPropagation();
        return;
      }
    },


    /**
     * Event handler. Called when a navigation button has been tapped.
     *
     * @param evt {qx.event.type.Data} The data event.
     */
    _onNavButtonTap : function(evt)
    {
      var year = this.getShownYear();
      var month = this.getShownMonth();

      switch(evt.getCurrentTarget())
      {
        case this.getChildControl("last-year-button"):
          year--;
          break;

        case this.getChildControl("last-month-button"):
          month--;

          if (month < 0)
          {
            month = 11;
            year--;
          }

          break;

        case this.getChildControl("next-month-button"):
          month++;

          if (month >= 12)
          {
            month = 0;
            year++;
          }

          break;

        case this.getChildControl("next-year-button"):
          year++;
          break;
      }

      this.showMonth(month, year);
    },


    /**
     * Event handler. Called when a day has been tapped.
     *
     * @param evt {qx.event.type.Data} The event.
     */
    _onDayTap : function(evt)
    {
      var time = evt.getCurrentTarget().dateTime;
      this.setValue(new Date(time));
    },


    /**
     * Event handler. Called when a day has been double-tapped.
     */
    _onDayDblTap : function() {
      this.execute();
    },


    /**
     * Event handler. Called when a key was pressed.
     *
     * @param evt {qx.event.type.Data} The event.
     */
    _onKeyPress : function(evt)
    {
      var dayIncrement = null;
      var monthIncrement = null;
      var yearIncrement = null;

      if (evt.getModifiers() == 0)
      {
        switch(evt.getKeyIdentifier())
        {
          case "Left":
            dayIncrement = -1;
            break;

          case "Right":
            dayIncrement = 1;
            break;

          case "Up":
            dayIncrement = -7;
            break;

          case "Down":
            dayIncrement = 7;
            break;

          case "PageUp":
            monthIncrement = -1;
            break;

          case "PageDown":
            monthIncrement = 1;
            break;

          case "Escape":
            if (this.getValue() != null)
            {
              this.setValue(null);
              return;
            }

            break;

          case "Enter":
          case "Space":
            if (this.getValue() != null) {
              this.execute();
            }

            return;
        }
      }
      else if (evt.isShiftPressed())
      {
        switch(evt.getKeyIdentifier())
        {
          case "PageUp":
            yearIncrement = -1;
            break;

          case "PageDown":
            yearIncrement = 1;
            break;
        }
      }

      if (dayIncrement != null || monthIncrement != null || yearIncrement != null)
      {
        var date = this.getValue();

        if (date != null) {
          date = new Date(date.getTime());
        }

        if (date == null) {
          date = new Date();
        }
        else
        {
          if (dayIncrement != null){date.setDate(date.getDate() + dayIncrement);}
          if (monthIncrement != null){date.setMonth(date.getMonth() + monthIncrement);}
          if (yearIncrement != null){date.setFullYear(date.getFullYear() + yearIncrement);}
        }

        this.setValue(date);
      }
    },


    /**
     * Shows a certain month.
     *
     * @param month {Integer ? null} the month to show (0 = january). If not set
     *      the month will remain the same.
     * @param year {Integer ? null} the year to show. If not set the year will
     *      remain the same.
     */
    showMonth : function(month, year)
    {
      if ((month != null && month != this.getShownMonth()) || (year != null && year != this.getShownYear()))
      {
        if (month != null) {
          this.setShownMonth(month);
        }

        if (year != null) {
          this.setShownYear(year);
        }

        this._updateDatePane();
      }
    },


    /**
     * Event handler. Used to handle the key events.
     *
     * @param e {qx.event.type.Data} The event.
     */
    handleKeyPress : function(e) {
      this._onKeyPress(e);
    },


    /**
     * Updates the date pane.
     */
    _updateDatePane : function()
    {
      var DateChooser = qx.ui.control.DateChooser;

      var today = new Date();
      var todayYear = today.getFullYear();
      var todayMonth = today.getMonth();
      var todayDayOfMonth = today.getDate();

      var selDate = this.getValue();
      var selYear = (selDate == null) ? -1 : selDate.getFullYear();
      var selMonth = (selDate == null) ? -1 : selDate.getMonth();
      var selDayOfMonth = (selDate == null) ? -1 : selDate.getDate();

      var shownMonth = this.getShownMonth();
      var shownYear = this.getShownYear();

      var startOfWeek = qx.locale.Date.getWeekStart();

      // Create a help date that points to the first of the current month
      var helpDate = new Date(this.getShownYear(), this.getShownMonth(), 1);

      var monthYearFormat = new qx.util.format.DateFormat(DateChooser.MONTH_YEAR_FORMAT);
      this.getChildControl("month-year-label").setValue(monthYearFormat.format(helpDate));

      // Show the day names
      var firstDayOfWeek = helpDate.getDay();
      var firstSundayInMonth = 1 + ((7 - firstDayOfWeek) % 7);
      var weekDayFormat = new qx.util.format.DateFormat(DateChooser.WEEKDAY_FORMAT);

      for (var i=0; i<7; i++)
      {
        var day = (i + startOfWeek) % 7;

        var dayLabel = this.__weekdayLabelArr[i];

        helpDate.setDate(firstSundayInMonth + day);
        dayLabel.setValue(weekDayFormat.format(helpDate));

        if (qx.locale.Date.isWeekend(day)) {
          dayLabel.addState("weekend");
        } else {
          dayLabel.removeState("weekend");
        }
      }

      // Show the days
      helpDate = new Date(shownYear, shownMonth, 1, 12, 0, 0);
      var nrDaysOfLastMonth = (7 + firstDayOfWeek - startOfWeek) % 7;
      helpDate.setDate(helpDate.getDate() - nrDaysOfLastMonth);

      var weekFormat = new qx.util.format.DateFormat(DateChooser.WEEK_FORMAT);

      for (var week=0; week<6; week++)
      {
        this.__weekLabelArr[week].setValue(weekFormat.format(helpDate));

        for (var i=0; i<7; i++)
        {
          var dayLabel = this.__dayLabelArr[week * 7 + i];

          var year = helpDate.getFullYear();
          var month = helpDate.getMonth();
          var dayOfMonth = helpDate.getDate();

          var isSelectedDate = (selYear == year && selMonth == month && selDayOfMonth == dayOfMonth);

          if (isSelectedDate) {
            dayLabel.addState("selected");
          } else {
            dayLabel.removeState("selected");
          }

          if (month != shownMonth) {
            dayLabel.addState("otherMonth");
          } else {
            dayLabel.removeState("otherMonth");
          }

          var isToday = (year == todayYear && month == todayMonth && dayOfMonth == todayDayOfMonth);

          if (isToday) {
            dayLabel.addState("today");
          } else {
            dayLabel.removeState("today");
          }

          dayLabel.setValue("" + dayOfMonth);
          dayLabel.dateTime = helpDate.getTime();

          // Go to the next day
          helpDate.setDate(helpDate.getDate() + 1);
        }
      }

      monthYearFormat.dispose();
      weekDayFormat.dispose();
      weekFormat.dispose();
    }
  },




  /*
  *****************************************************************************
     DESTRUCTOR
  *****************************************************************************
  */

  destruct : function()
  {
    if (qx.core.Environment.get("qx.dynlocale")) {
      qx.locale.Manager.getInstance().removeListener("changeLocale", this._updateDatePane, this);
    }

    this.__weekdayLabelArr = this.__dayLabelArr = this.__weekLabelArr = null;
  }
});
/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2009 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (martinwittemann)

************************************************************************ */
/**
 * This interface defines the necessary features a form renderer should have.
 * Keep in mind that all renderes has to be widgets.
 */
qx.Interface.define("qx.ui.form.renderer.IFormRenderer",
{
  members :
  {
    /**
     * Add a group of form items with the corresponding names. The names should
     * be displayed as hint for the user what to do with the form item.
     * The title is optional and can be used as grouping for the given form
     * items.
     *
     * @param items {qx.ui.core.Widget[]} An array of form items to render.
     * @param names {String[]} An array of names for the form items.
     * @param title {String?} A title of the group you are adding.
     * @param itemsOptions {Array?null} The added additional data.
     * @param headerOptions {Map?null} The options map as defined by the form
     *   for the current group header.
     */
    addItems : function(items, names, title, itemsOptions, headerOptions) {},


    /**
     * Adds a button the form renderer.
     *
     * @param button {qx.ui.form.Button} A button which should be added to
     *   the form.
     * @param options {Map?null} The added additional data.
     */
    addButton : function(button, options) {}

  }
});
/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2009 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (martinwittemann)

************************************************************************ */

/**
 * Abstract renderer for {@link qx.ui.form.Form}. This abstract renderer should
 * be the superclass of all form renderer. It takes the form, which is
 * supplied as constructor parameter and configures itself. So if you need to
 * set some additional information on your renderer before adding the widgets,
 * be sure to do that before calling this.base(arguments, form).
 */
qx.Class.define("qx.ui.form.renderer.AbstractRenderer",
{
  type : "abstract",
  extend : qx.ui.core.Widget,
  implement : qx.ui.form.renderer.IFormRenderer,

  /**
   * @param form {qx.ui.form.Form} The form to render.
   */
  construct : function(form)
  {
    this.base(arguments);

    this._labels = [];

    // translation support
    if (qx.core.Environment.get("qx.dynlocale")) {
      qx.locale.Manager.getInstance().addListener(
        "changeLocale", this._onChangeLocale, this
      );
      this._names = [];
    }
    this._form = form;
    this._render();

    form.addListener("change", this._onFormChange, this);
  },


  members :
  {
    _names : null,
    _form : null,
    _labels : null,


    /**
     * Renders the form: add's the items and buttons.
     */
    _render : function() {
      // add the groups
      var groups = this._form.getGroups();
      for (var i = 0; i < groups.length; i++) {
        var group = groups[i];
        this.addItems(
          group.items, group.labels, group.title, group.options, group.headerOptions
        );
      }

      // add the buttons
      var buttons = this._form.getButtons();
      var buttonOptions = this._form.getButtonOptions();
      for (var i = 0; i < buttons.length; i++) {
        this.addButton(buttons[i], buttonOptions[i]);
      }
    },


    /**
     * Handler responsible for updating the rendered widget as soon as the
     * form changes.
     */
    _onFormChange : function() {
      this._removeAll();
      // remove all created labels
      for (var i=0; i < this._labels.length; i++) {
        this._labels[i].dispose();
      }
      this._labels = [];

      this._render();
    },


    /**
     * Helper to bind the item's visibility to the label's visibility.
     * @param item {qx.ui.core.Widget} The form element.
     * @param label {qx.ui.basic.Label} The label for the form element.
     */
    _connectVisibility : function(item, label) {
      // map the items visibility to the label
      item.bind("visibility", label, "visibility");
    },


    /**
     * Locale change event handler
     *
     * @signature function(e)
     * @param e {Event} the change event
     */
    _onChangeLocale : qx.core.Environment.select("qx.dynlocale",
    {
      "true" : function(e) {
        for (var i = 0; i < this._names.length; i++) {
          var entry = this._names[i];
          if (entry.name && entry.name.translate) {
            entry.name = entry.name.translate();
          }
          var newText = this._createLabelText(entry.name, entry.item);
          entry.label.setValue(newText);
        }
      },

      "false" : null
    }),


    /**
     * Creates the label text for the given form item.
     *
     * @param name {String} The content of the label without the
     *   trailing * and :
     * @param item {qx.ui.form.IForm} The item, which has the required state.
     * @return {String} The text for the given item.
     */
    _createLabelText : function(name, item)
    {
      var required = "";
      if (item.getRequired()) {
       required = " <span style='color:red'>*</span> ";
      }

      // Create the label. Append a colon only if there's text to display.
      var colon = name.length > 0 || item.getRequired() ? " :" : "";
      return name + required + colon;
    },


    // interface implementation
    addItems : function(items, names, title) {
      throw new Error("Abstract method call");
    },


    // interface implementation
    addButton : function(button) {
      throw new Error("Abstract method call");
    }
  },



  /*
  *****************************************************************************
     DESTRUCTOR
  *****************************************************************************
  */

  destruct : function()
  {
    if (qx.core.Environment.get("qx.dynlocale")) {
      qx.locale.Manager.getInstance().removeListener("changeLocale", this._onChangeLocale, this);
    }
    this._names = null;
  }
});
/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2009 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (martinwittemann)

************************************************************************ */

/**
 * Single column renderer for {@link qx.ui.form.Form}.
 */
qx.Class.define("qx.ui.form.renderer.Single",
{
  extend : qx.ui.form.renderer.AbstractRenderer,


  construct : function(form)
  {
    var layout = new qx.ui.layout.Grid();
    layout.setSpacing(6);
    layout.setColumnFlex(0, 1);
    layout.setColumnAlign(0, "right", "top");
    this._setLayout(layout);

    this.base(arguments, form);
  },


  members :
  {
    _row : 0,
    _buttonRow : null,


    // overridden
    _onFormChange : function() {
      this._buttonRow.destroy();
      this._buttonRow = null;
      this._row = 0;
      this.base(arguments);
    },


    /**
     * Add a group of form items with the corresponding names. The names are
     * displayed as label.
     * The title is optional and is used as grouping for the given form
     * items.
     *
     * @param items {qx.ui.core.Widget[]} An array of form items to render.
     * @param names {String[]} An array of names for the form items.
     * @param title {String?} A title of the group you are adding.
     */
    addItems : function(items, names, title) {
      // add the header
      if (title != null) {
        this._add(
          this._createHeader(title), {row: this._row, column: 0, colSpan: 2}
        );
        this._row++;
      }

      // add the items
      for (var i = 0; i < items.length; i++) {
        var label = this._createLabel(names[i], items[i]);
        this._add(label, {row: this._row, column: 0});
        var item = items[i];
        label.setBuddy(item);
        this._add(item, {row: this._row, column: 1});
        this._row++;

        this._connectVisibility(item, label);

        // store the names for translation
        if (qx.core.Environment.get("qx.dynlocale")) {
          this._names.push({name: names[i], label: label, item: items[i]});
        }
      }
    },


    /**
     * Adds a button the form renderer. All buttons will be added in a
     * single row at the bottom of the form.
     *
     * @param button {qx.ui.form.Button} The button to add.
     */
    addButton : function(button) {
      if (this._buttonRow == null) {
        // create button row
        this._buttonRow = new qx.ui.container.Composite();
        this._buttonRow.setMarginTop(5);
        var hbox = new qx.ui.layout.HBox();
        hbox.setAlignX("right");
        hbox.setSpacing(5);
        this._buttonRow.setLayout(hbox);
        // add the button row
        this._add(this._buttonRow, {row: this._row, column: 0, colSpan: 2});
        // increase the row
        this._row++;
      }

      // add the button
      this._buttonRow.add(button);
    },


    /**
     * Returns the set layout for configuration.
     *
     * @return {qx.ui.layout.Grid} The grid layout of the widget.
     */
    getLayout : function() {
      return this._getLayout();
    },


    /**
     * Creates a label for the given form item.
     *
     * @param name {String} The content of the label without the
     *   trailing * and :
     * @param item {qx.ui.core.Widget} The item, which has the required state.
     * @return {qx.ui.basic.Label} The label for the given item.
     */
    _createLabel : function(name, item) {
      var label = new qx.ui.basic.Label(this._createLabelText(name, item));
      // store labels for disposal
      this._labels.push(label);
      label.setRich(true);
      label.setAppearance("form-renderer-label");
      return label;
    },


    /**
     * Creates a header label for the form groups.
     *
     * @param title {String} Creates a header label.
     * @return {qx.ui.basic.Label} The header for the form groups.
     */
    _createHeader : function(title) {
      var header = new qx.ui.basic.Label(title);
      // store labels for disposal
      this._labels.push(header);
      header.setFont("bold");
      if (this._row != 0) {
        header.setMarginTop(10);
      }
      header.setAlignX("left");
      return header;
    }
  },


  /*
  *****************************************************************************
     DESTRUCTOR
  *****************************************************************************
  */
  destruct : function()
  {
    // first, remove all buttons from the button row because they
    // should not be disposed
    if (this._buttonRow) {
      this._buttonRow.removeAll();
      this._disposeObjects("_buttonRow");
    }
  }
});
/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (martinwittemann)
     * Sebastian Werner (wpbasti)
     * Jonathan Weiß (jonathan_rass)
     * Christian Hagendorn (chris_schmidt)

************************************************************************ */

/**
 * A form widget which allows a single selection. Looks somewhat like
 * a normal button, but opens a list of items to select when tapping on it.
 *
 * Keep in mind that the SelectBox widget has always a selected item (due to the
 * single selection mode). Right after adding the first item a <code>changeSelection</code>
 * event is fired.
 *
 * <pre class='javascript'>
 * var selectBox = new qx.ui.form.SelectBox();
 *
 * selectBox.addListener("changeSelection", function(e) {
 *   // ...
 * });
 *
 * // now the 'changeSelection' event is fired
 * selectBox.add(new qx.ui.form.ListItem("Item 1"));
 * </pre>
 *
 * @childControl spacer {qx.ui.core.Spacer} flexible spacer widget
 * @childControl atom {qx.ui.basic.Atom} shows the text and icon of the content
 * @childControl arrow {qx.ui.basic.Image} shows the arrow to open the popup
 */
qx.Class.define("qx.ui.form.SelectBox",
{
  extend : qx.ui.form.AbstractSelectBox,
  implement : [
    qx.ui.core.ISingleSelection,
    qx.ui.form.IModelSelection
  ],
  include : [qx.ui.core.MSingleSelectionHandling, qx.ui.form.MModelSelection],


  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */


  construct : function()
  {
    this.base(arguments);

    this._createChildControl("atom");
    this._createChildControl("spacer");
    this._createChildControl("arrow");

    // Register listener
    this.addListener("pointerover", this._onPointerOver, this);
    this.addListener("pointerout", this._onPointerOut, this);
    this.addListener("tap", this._onTap, this);

    this.addListener("keyinput", this._onKeyInput, this);
    this.addListener("changeSelection", this.__onChangeSelection, this);
  },


  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */


  properties :
  {
    // overridden
    appearance :
    {
      refine : true,
      init : "selectbox"
    }
  },


  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */


  members :
  {
    /** @type {qx.ui.form.ListItem} instance */
    __preSelectedItem : null,


    /*
    ---------------------------------------------------------------------------
      WIDGET API
    ---------------------------------------------------------------------------
    */

    // overridden
    _createChildControlImpl : function(id, hash)
    {
      var control;

      switch(id)
      {
        case "spacer":
          control = new qx.ui.core.Spacer();
          this._add(control, {flex: 1});
          break;

        case "atom":
          control = new qx.ui.basic.Atom(" ");
          control.setCenter(false);
          control.setAnonymous(true);

          this._add(control, {flex:1});
          break;

        case "arrow":
          control = new qx.ui.basic.Image();
          control.setAnonymous(true);

          this._add(control);
          break;
      }

      return control || this.base(arguments, id);
    },

    // overridden
    /**
     * @lint ignoreReferenceField(_forwardStates)
     */
    _forwardStates : {
      focused : true
    },


    /*
    ---------------------------------------------------------------------------
      HELPER METHODS FOR SELECTION API
    ---------------------------------------------------------------------------
    */


    /**
     * Returns the list items for the selection.
     *
     * @return {qx.ui.form.ListItem[]} List itmes to select.
     */
    _getItems : function() {
      return this.getChildrenContainer().getChildren();
    },

    /**
     * Returns if the selection could be empty or not.
     *
     * @return {Boolean} <code>true</code> If selection could be empty,
     *    <code>false</code> otherwise.
     */
    _isAllowEmptySelection: function() {
      return this.getChildrenContainer().getSelectionMode() !== "one";
    },

    /**
     * Event handler for <code>changeSelection</code>.
     *
     * @param e {qx.event.type.Data} Data event.
     */
    __onChangeSelection : function(e)
    {
      var listItem = e.getData()[0];

      var list = this.getChildControl("list");
      if (list.getSelection()[0] != listItem) {
        if(listItem) {
          list.setSelection([listItem]);
        } else {
          list.resetSelection();
        }
      }

      this.__updateIcon();
      this.__updateLabel();
    },


    /**
     * Sets the icon inside the list to match the selected ListItem.
     */
    __updateIcon : function()
    {
      var listItem = this.getChildControl("list").getSelection()[0];
      var atom = this.getChildControl("atom");
      var icon = listItem ? listItem.getIcon() : "";
      icon == null ? atom.resetIcon() : atom.setIcon(icon);
    },

    /**
     * Sets the label inside the list to match the selected ListItem.
     */
    __updateLabel : function()
    {
      var listItem = this.getChildControl("list").getSelection()[0];
      var atom = this.getChildControl("atom");
      var label = listItem ? listItem.getLabel() : "";
      var format = this.getFormat();
      if (format != null) {
        label = format.call(this, listItem);
      }

      // check for translation
      if (label && label.translate) {
        label = label.translate();
      }
      label == null ? atom.resetLabel() : atom.setLabel(label);
    },


    /*
    ---------------------------------------------------------------------------
      EVENT LISTENERS
    ---------------------------------------------------------------------------
    */


    /**
     * Listener method for "pointerover" event
     * <ul>
     * <li>Adds state "hovered"</li>
     * <li>Removes "abandoned" and adds "pressed" state (if "abandoned" state is set)</li>
     * </ul>
     *
     * @param e {qx.event.type.Pointer} Pointer event
     */
    _onPointerOver : function(e)
    {
      if (!this.isEnabled() || e.getTarget() !== this) {
        return;
      }

      if (this.hasState("abandoned"))
      {
        this.removeState("abandoned");
        this.addState("pressed");
      }

      this.addState("hovered");
    },


    /**
     * Listener method for "pointerout" event
     * <ul>
     * <li>Removes "hovered" state</li>
     * <li>Adds "abandoned" and removes "pressed" state (if "pressed" state is set)</li>
     * </ul>
     *
     * @param e {qx.event.type.Pointer} Pointer event
     */
    _onPointerOut : function(e)
    {
      if (!this.isEnabled() || e.getTarget() !== this) {
        return;
      }

      this.removeState("hovered");

      if (this.hasState("pressed"))
      {
        this.removeState("pressed");
        this.addState("abandoned");
      }
    },


    /**
     * Toggles the popup's visibility.
     *
     * @param e {qx.event.type.Pointer} Pointer event
     */
    _onTap : function(e) {
      this.toggle();
    },


    // overridden
    _onKeyPress : function(e)
    {
      var iden = e.getKeyIdentifier();
      if(iden == "Enter" || iden == "Space")
      {
        // Apply pre-selected item (translate quick selection to real selection)
        if (this.__preSelectedItem)
        {
          this.setSelection([this.__preSelectedItem]);
          this.__preSelectedItem = null;
        }

        this.toggle();
      }
      else
      {
        this.base(arguments, e);
      }
    },

    /**
     * Forwards key event to list widget.
     *
     * @param e {qx.event.type.KeyInput} Key event
     */
    _onKeyInput : function(e)
    {
      // clone the event and re-calibrate the event
      var clone = e.clone();
      clone.setTarget(this._list);
      clone.setBubbles(false);

      // forward it to the list
      this.getChildControl("list").dispatchEvent(clone);
    },


    // overridden
    _onListPointerDown : function(e)
    {
      // Apply pre-selected item (translate quick selection to real selection)
      if (this.__preSelectedItem)
      {
        this.setSelection([this.__preSelectedItem]);
        this.__preSelectedItem = null;
      }
    },


    // overridden
    _onListChangeSelection : function(e)
    {
      var current = e.getData();
      var old = e.getOldData();

      // Remove old listeners for icon and label changes.
      if (old && old.length > 0)
      {
        old[0].removeListener("changeIcon", this.__updateIcon, this);
        old[0].removeListener("changeLabel", this.__updateLabel, this);
      }


      if (current.length > 0)
      {
        // Ignore quick context (e.g. pointerover)
        // and configure the new value when closing the popup afterwards
        var popup = this.getChildControl("popup");
        var list = this.getChildControl("list");
        var context = list.getSelectionContext();

        if (popup.isVisible() && (context == "quick" || context == "key"))
        {
          this.__preSelectedItem = current[0];
        }
        else
        {
          this.setSelection([current[0]]);
          this.__preSelectedItem = null;
        }

        // Add listeners for icon and label changes
        current[0].addListener("changeIcon", this.__updateIcon, this);
        current[0].addListener("changeLabel", this.__updateLabel, this);
      }
      else
      {
        this.resetSelection();
      }
    },

    // overridden
    _onPopupChangeVisibility : function(e)
    {
      this.base(arguments, e);

      // Synchronize the current selection to the list selection
      // when the popup is closed. The list selection may be invalid
      // because of the quick selection handling which is not
      // directly applied to the selectbox
      var popup = this.getChildControl("popup");
      if (!popup.isVisible())
      {
        var list = this.getChildControl("list");

        // check if the list has any children before selecting
        if (list.hasChildren()) {
          list.setSelection(this.getSelection());
        }
      } else {
        // ensure that the list is never biger that the max list height and
        // the available space in the viewport
        var distance = popup.getLayoutLocation(this);
        var viewPortHeight = qx.bom.Viewport.getHeight();
        // distance to the bottom and top borders of the viewport
        var toTop = distance.top;
        var toBottom = viewPortHeight - distance.bottom;
        var availableHeigth = toTop > toBottom ? toTop : toBottom;

        var maxListHeight = this.getMaxListHeight();
        var list = this.getChildControl("list")
        if (maxListHeight == null || maxListHeight > availableHeigth) {
          list.setMaxHeight(availableHeigth);
        } else if (maxListHeight < availableHeigth) {
          list.setMaxHeight(maxListHeight);
        }
      }
    }

  },


  /*
  *****************************************************************************
     DESTRUCT
  *****************************************************************************
  */


  destruct : function() {
    this.__preSelectedItem = null;
  }
});
/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2011 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Christian Hagendorn (chris_schmidt)

************************************************************************ */

/**
 * A form virtual widget which allows a single selection. Looks somewhat like
 * a normal button, but opens a virtual list of items to select when tapping
 * on it.
 *
 * @childControl spacer {qx.ui.core.Spacer} Flexible spacer widget.
 * @childControl atom {qx.ui.basic.Atom} Shows the text and icon of the content.
 * @childControl arrow {qx.ui.basic.Image} Shows the arrow to open the drop-down
 *   list.
 */
qx.Class.define("qx.ui.form.VirtualSelectBox",
{
  extend : qx.ui.form.core.AbstractVirtualBox,
  implement : qx.data.controller.ISelection,

  construct : function(model)
  {
    this.base(arguments, model);

    this._createChildControl("atom");
    this._createChildControl("spacer");
    this._createChildControl("arrow");

    // Register listener
    this.addListener("pointerover", this._onPointerOver, this);
    this.addListener("pointerout", this._onPointerOut, this);

    this.__bindings = [];
    this.initSelection(this.getChildControl("dropdown").getSelection());

    this.__searchTimer = new qx.event.Timer(500);
    this.__searchTimer.addListener("interval", this.__preselect, this);
  },


  properties :
  {
    // overridden
    appearance :
    {
      refine : true,
      init : "virtual-selectbox"
    },


    // overridden
    width :
    {
      refine : true,
      init : 120
    },


    /** Current selected items. */
    selection :
    {
      check : "qx.data.Array",
      event : "changeSelection",
      apply : "_applySelection",
      nullable : false,
      deferredInit : true
    }
  },


  events : {
    /**
     * This event is fired as soon as the content of the selection property changes, but
     * this is not equal to the change of the selection of the widget. If the selection
     * of the widget changes, the content of the array stored in the selection property
     * changes. This means you have to listen to the change event of the selection array
     * to get an event as soon as the user changes the selected item.
     * <pre class="javascript">obj.getSelection().addListener("change", listener, this);</pre>
     */
    "changeSelection" : "qx.event.type.Data"
  },


  members :
  {
    /** @type {String} The search value to {@link #__preselect} an item. */
    __searchValue : "",


    /**
     * @type {qx.event.Timer} The time which triggers the search for pre-selection.
     */
    __searchTimer : null,


    /** @type {Array} Contains the id from all bindings. */
    __bindings : null,


    // overridden
    syncWidget : function(jobs)
    {
      this._removeBindings();
      this._addBindings();
    },


    /*
    ---------------------------------------------------------------------------
      INTERNAl API
    ---------------------------------------------------------------------------
    */


    // overridden
    _createChildControlImpl : function(id, hash)
    {
      var control;

      switch(id)
      {
        case "spacer":
          control = new qx.ui.core.Spacer();

          this._add(control, {flex: 1});
          break;

        case "atom":
          control = new qx.ui.form.ListItem("");
          control.setCenter(false);
          control.setAnonymous(true);

          this._add(control, {flex:1});
          break;

        case "arrow":
          control = new qx.ui.basic.Image();
          control.setAnonymous(true);

          this._add(control);
          break;
      }

      return control || this.base(arguments, id, hash);
    },


    // overridden
    _getAction : function(event)
    {
      var keyIdentifier = event.getKeyIdentifier();
      var isOpen = this.getChildControl("dropdown").isVisible();
      var isModifierPressed = this._isModifierPressed(event);

      if (
        !isOpen && !isModifierPressed &&
        (keyIdentifier === "Enter" || keyIdentifier === "Space")
      ) {
        return "open";
      } else if (isOpen && event.isPrintable()) {
        return "search";
      } else {
        return this.base(arguments, event);
      }
    },

    /**
     * This method is called when the binding can be added to the
     * widget. For e.q. bind the drop-down selection with the widget.
     */
    _addBindings : function()
    {
      var atom = this.getChildControl("atom");

      var modelPath = this._getBindPath("selection", "");
      var id = this.bind(modelPath, atom, "model", null);
      this.__bindings.push(id);

      var labelSourcePath = this._getBindPath("selection", this.getLabelPath());
      id = this.bind(labelSourcePath, atom, "label", this.getLabelOptions());
      this.__bindings.push(id);

      if (this.getIconPath() != null) {
        var iconSourcePath = this._getBindPath("selection", this.getIconPath());
        id = this.bind(iconSourcePath, atom, "icon", this.getIconOptions());
        this.__bindings.push(id);
      }
    },


    /**
     * This method is called when the binding can be removed from the
     * widget. For e.q. remove the bound drop-down selection.
     */
    _removeBindings : function()
    {
      while (this.__bindings.length > 0)
      {
        var id = this.__bindings.pop();
        this.removeBinding(id);
      }
    },


    /*
    ---------------------------------------------------------------------------
      EVENT LISTENERS
    ---------------------------------------------------------------------------
    */


    // overridden
    _handlePointer : function(event)
    {
      this.base(arguments, event);

      var type = event.getType();
      if (type === "tap") {
        this.toggle();
      }
    },


    // overridden
    _handleKeyboard : function(event) {
      var action = this._getAction(event);

      switch(action)
      {
        case "search":
          this.__searchValue += this.__convertKeyIdentifier(event.getKeyIdentifier());
          this.__searchTimer.restart();
          break;

        default:
          this.base(arguments, event);
          break;
      }
    },


    /**
     * Listener method for "pointerover" event.
     *
     * <ul>
     * <li>Adds state "hovered"</li>
     * <li>Removes "abandoned" and adds "pressed" state (if "abandoned" state
     *   is set)</li>
     * </ul>
     *
     * @param event {qx.event.type.Pointer} Pointer event
     */
    _onPointerOver : function(event)
    {
      if (!this.isEnabled() || event.getTarget() !== this) {
        return;
      }

      if (this.hasState("abandoned"))
      {
        this.removeState("abandoned");
        this.addState("pressed");
      }

      this.addState("hovered");
    },


    /**
     * Listener method for "pointerout" event.
     *
     * <ul>
     * <li>Removes "hovered" state</li>
     * <li>Adds "abandoned" and removes "pressed" state (if "pressed" state
     *   is set)</li>
     * </ul>
     *
     * @param event {qx.event.type.Pointer} Pointer event
     */
    _onPointerOut : function(event)
    {
      if (!this.isEnabled() || event.getTarget() !== this) {
        return;
      }

      this.removeState("hovered");

      if (this.hasState("pressed"))
      {
        this.removeState("pressed");
        this.addState("abandoned");
      }
    },


    /*
    ---------------------------------------------------------------------------
      APPLY ROUTINES
    ---------------------------------------------------------------------------
    */


    // property apply
    _applySelection : function(value, old)
    {
      this.getChildControl("dropdown").setSelection(value);
      qx.ui.core.queue.Widget.add(this);
    },


    /*
    ---------------------------------------------------------------------------
      HELPER METHODS
    ---------------------------------------------------------------------------
    */


    /**
     * Preselects an item in the drop-down, when item starts with the
     * __searchValue value.
     */
    __preselect : function()
    {
      this.__searchTimer.stop();

      var searchValue = this.__searchValue;
      if (searchValue === null || searchValue === "") {
        return;
      }

      var model = this.getModel();
      var list = this.getChildControl("dropdown").getChildControl("list");
      var selection = list.getSelection();
      var length = list._getLookupTable().length;
      var startIndex = model.indexOf(selection.getItem(0));
      var startRow = list._reverseLookup(startIndex);

      for (var i = 1; i <= length; i++)
      {
        var row = (i + startRow) % length;
        var item = model.getItem(list._lookup(row));
        if (!item) {
          // group items aren't in the model
          continue;
        }
        var value = item;

        if (this.getLabelPath())
        {
          value = qx.data.SingleValueBinding.resolvePropertyChain(item,
            this.getLabelPath());

          var labelOptions = this.getLabelOptions();
          if (labelOptions)
          {
            var converter = qx.util.Delegate.getMethod(labelOptions,
              "converter");

            if (converter) {
              value = converter(value, item);
            }
          }
        }

        if (
          qx.lang.String.startsWith(value.toLowerCase(), searchValue.toLowerCase())
        )
        {
          selection.push(item);
          break;
        }
      }
      this.__searchValue = "";
    },


    /**
     * Converts the keyIdentifier to a printable character e.q. <code>"Space"</code>
     * to <code>" "</code>.
     *
     * @param keyIdentifier {String} The keyIdentifier to convert.
     * @return {String} The converted keyIdentifier.
     */
    __convertKeyIdentifier : function(keyIdentifier)
    {
      if (keyIdentifier === "Space") {
        return " ";
      } else {
        return keyIdentifier;
      }
    }
  },


  destruct : function()
  {
    this._removeBindings();

    this.__searchTimer.removeListener("interval", this.__preselect, this);
    this.__searchTimer.dispose();
    this.__searchTimer = null;
  }
});
/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2009 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (martinwittemann)

************************************************************************ */

/**
 * The radio container handles a collection of items from which only one item
 * can be selected. Selection another item will deselect the previously selected
 * item. For that, it uses the {@link qx.ui.form.RadioGroup} object.
 *
 * This class is used to create radio groups of {@link qx.ui.form.RadioButton}
 * instances.
 *
 * This widget takes care of the layout of the added items. If you want to
 * take full control of the layout and just use the selection behavior,
 * take a look at the {@link qx.ui.form.RadioGroup} object for a loose coupling.
 */
qx.Class.define("qx.ui.form.RadioButtonGroup",
{
  extend : qx.ui.core.Widget,
  include : [qx.ui.core.MLayoutHandling, qx.ui.form.MModelSelection],
  implement : [
    qx.ui.form.IForm,
    qx.ui.core.ISingleSelection,
    qx.ui.form.IModelSelection
  ],


  /**
   * @param layout {qx.ui.layout.Abstract} The new layout or
   *     <code>null</code> to reset the layout.
   */
  construct : function(layout)
  {
    this.base(arguments);

    // if no layout is given, use the default layout (VBox)
    if (layout == null) {
      this.setLayout(new qx.ui.layout.VBox(4));
    } else {
      this.setLayout(layout);
    }

    // create the radio group
    this.__radioGroup = new qx.ui.form.RadioGroup();

    // attach the listener
    this.__radioGroup.addListener("changeSelection", function(e) {
      this.fireDataEvent("changeSelection", e.getData(), e.getOldData());
    }, this);
  },


  properties :
  {
    /**
     * Flag signaling if the group at all is valid. All children will have the
     * same state.
     */
    valid : {
      check : "Boolean",
      init : true,
      apply : "_applyValid",
      event : "changeValid"
    },

    /**
     * Flag signaling if the group is required.
     */
    required : {
      check : "Boolean",
      init : false,
      event : "changeRequired"
    },

    /**
     * Message which is shown in an invalid tooltip.
     */
    invalidMessage : {
      check : "String",
      init: "",
      event : "changeInvalidMessage",
      apply : "_applyInvalidMessage"
    },


    /**
     * Message which is shown in an invalid tooltip if the {@link #required} is
     * set to true.
     */
    requiredInvalidMessage : {
      check : "String",
      nullable : true,
      event : "changeInvalidMessage"
    }
  },


  events :
  {
    /**
     * Fires after the selection was modified
     */
    "changeSelection" : "qx.event.type.Data"
  },


  members :
  {
    __radioGroup : null,


    /*
    ---------------------------------------------------------------------------
      APPLY ROUTINES
    ---------------------------------------------------------------------------
    */
    // property apply
    _applyInvalidMessage : function(value, old) {
      var children = this._getChildren();
      for (var i = 0; i < children.length; i++) {
        children[i].setInvalidMessage(value);
      }
    },


    // property apply
    _applyValid: function(value, old) {
      var children = this._getChildren();
      for (var i = 0; i < children.length; i++) {
        children[i].setValid(value);
      }
    },


    /*
    ---------------------------------------------------------------------------
      REGISTRY
    ---------------------------------------------------------------------------
    */

    /**
     * The internaly used radio group instance will be returned.
     *
     * @return {qx.ui.form.RadioGroup} Returns the used RadioGroup instance.
     */
    getRadioGroup : function() {
      return this.__radioGroup;
    },


    /**
     * Returns the children list
     *
     * @return {qx.ui.core.LayoutItem[]} The children array.
     */
    getChildren : function() {
      return this._getChildren();
    },


    /**
     * Adds a new child widget.
     *
     * The supported keys of the layout options map depend on the layout
     * used to position the widget. The options are documented in the class
     * documentation of each layout manager {@link qx.ui.layout}.
     *
     * @param child {qx.ui.core.LayoutItem} the widget to add.
     * @param options {Map?null} Optional layout data for widget.
     */
    add : function(child, options) {
      this.__radioGroup.add(child);
      this._add(child, options);
    },


    /**
     * Remove the given child widget.
     *
     * @param child {qx.ui.core.LayoutItem} the widget to remove
     */
    remove : function(child)
    {
      this.__radioGroup.remove(child);
      this._remove(child);
    },


    /**
     * Remove all children.
     *
     * @return {Array} An array of {@link qx.ui.core.LayoutItem}'s.
     */
    removeAll : function()
    {
      // remove all children from the radio group
      var radioItems = this.__radioGroup.getItems();
      for (var i = radioItems.length - 1; i >= 0; i--) {
        this.__radioGroup.remove(radioItems[i]);
      }

      return this._removeAll();
    },



    /*
    ---------------------------------------------------------------------------
      SELECTION
    ---------------------------------------------------------------------------
    */

    /**
     * Returns an array of currently selected items.
     *
     * Note: The result is only a set of selected items, so the order can
     * differ from the sequence in which the items were added.
     *
     * @return {qx.ui.core.Widget[]} List of items.
     */
    getSelection : function() {
      return this.__radioGroup.getSelection();
    },


    /**
     * Replaces current selection with the given items.
     *
     * @param items {qx.ui.core.Widget[]} Items to select.
     * @throws {Error} if the item is not a child element.
     */
    setSelection : function(items) {
      this.__radioGroup.setSelection(items);
    },


    /**
     * Clears the whole selection at once.
     */
    resetSelection : function() {
      this.__radioGroup.resetSelection();
    },


    /**
     * Detects whether the given item is currently selected.
     *
     * @param item {qx.ui.core.Widget} Any valid selectable item
     * @return {Boolean} Whether the item is selected.
     * @throws {Error} if the item is not a child element.
     */
    isSelected : function(item) {
      return this.__radioGroup.isSelected(item);
    },


    /**
     * Whether the selection is empty.
     *
     * @return {Boolean} Whether the selection is empty.
     */
    isSelectionEmpty : function() {
      return this.__radioGroup.isSelectionEmpty();
    },


    /**
     * Returns all elements which are selectable.
     *
     * @param all {Boolean} true for all selectables, false for the
     *   selectables the user can interactively select
     * @return {qx.ui.core.Widget[]} The contained items.
     */
    getSelectables: function(all) {
      return this.__radioGroup.getSelectables(all);
    }
  },


  destruct : function()
  {
    this._disposeObjects("__radioGroup");
  }
});
