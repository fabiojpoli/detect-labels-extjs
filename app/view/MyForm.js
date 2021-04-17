/*
 * File: app/view/MyForm.js
 *
 * This file was generated by Sencha Architect version 4.2.9.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 7.3.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 7.3.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('DetectLabelsApp.view.MyForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.myform',

    requires: [
        'DetectLabelsApp.view.MyFormViewModel',
        'DetectLabelsApp.view.MyFormViewController',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.form.field.Display',
        'Ext.form.field.Number',
        'Ext.form.field.TextArea'
    ],

    controller: 'myform',
    viewModel: {
        type: 'myform'
    },
    height: 582,
    width: 517,
    bodyPadding: 10,
    title: 'Detect Labels - Google API',

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            items: [
                {
                    xtype: 'button',
                    text: 'Run',
                    listeners: {
                        click: 'onRunClick'
                    }
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'displayfield',
            anchor: '100%',
            fieldLabel: 'API Url',
            bind: {
                value: '{apiUrl}'
            }
        },
        {
            xtype: 'textfield',
            anchor: '100%',
            fieldLabel: 'API Key',
            bind: {
                value: '{apiKey}'
            }
        },
        {
            xtype: 'numberfield',
            anchor: '100%',
            fieldLabel: 'Max. Results',
            allowDecimals: false,
            bind: {
                value: '{maxResults}'
            }
        },
        {
            xtype: 'textfield',
            anchor: '100%',
            fieldLabel: 'Image URI',
            bind: {
                value: '{imageUri}'
            }
        },
        {
            xtype: 'textareafield',
            anchor: '100%',
            height: 303,
            fieldLabel: 'Response',
            bind: {
                value: '{response}'
            }
        }
    ]

});