/*
 * File: app/view/MyFormViewController.js
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

Ext.define('DetectLabelsApp.view.MyFormViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.myform',

    onRunClick: function(button, e, eOpts) {
        const
        vm = this.getViewModel(),
        data = vm.getData(), // get all data from the view model
        form = this.getView(), // get the form reference to show the mask while the process is running
        {
            apiUrl,
            apiKey,
            imageUri,
            maxResults
        } = data;

        // put the mask
        form.setLoading();

        Ext.Ajax.request({
            // here we concat the apiUrl with the apiKey defined on our form
            url: `${apiUrl}?key=${apiKey}`,
            jsonData: {
                requests: [
                {
                    image: {
                        source: {
                            // our image uri is also flexible
                            gcsImageUri: imageUri
                        }
                    },
                    features: [
                    {
                        // same for our max results
                        maxResults,
                        type: 'LABEL_DETECTION'
                    }
                    ]
                }
                ]
            },
            success(response) {
                // set the value response to the response text comming from the api.
                // It will reflect to our textarea to show the result
                vm.set('response', response.responseText);

                // remove the mask
                form.setLoading(false);
            }
        });
    }

});
