/* tslint:disable:max-line-length */
export class GuiModel {

    private _guiModel = {
        "application": {
            "title": "Übersicht Doings Team MDM",
            "formList": [
                {
                    "id": "OwnUserForm",
                    "title": "NotImplemented",
                    "formFieldList": [
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "NotImplementedForm",
                    "title": "Not Implemented",
                    "url": "/dummyform",
                    "headerVisible": false,
                    "footerVisible": false,
                    "borderStyle": "None",
                    "formFieldList": [
                        {
                            "id": "NotImplemented",
                            "type": "label",
                            "name": "NotImplementedMessage",
                            "width": 2
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "NotImplementedFormModal",
                    "title": "NotImplemented",
                    "url": "/dummyform",
                    "formFieldList": [
                        {
                            "id": "NotImplemented",
                            "type": "label",
                            "name": "NotImplementedMessage",
                            "width": 2
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "ToDoForm",
                    "title": { default: "To Do" },
                    "url": "/todo",
                    "formFieldList": [
                        {
                            "id":   "title",
                            "type": "text",
                            "name": { default: "Titel" },
                            "required": true,
                            "width": 2
                        },                   
                        {
                            "id": "description",
                            "type": "text",
                            "name": { default: "Verantwortung" },
                            "newRow": true,
                            "maxLength": 20,
                            //"height": 4,
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "pageLabel",
                            "value": "<h4>Eingabe to do pro Mitarbeiter</h4>",
                            "newRow": true
                        },
                        {
                            "type": "button",
                            "name": { default: "Annina" },
                            "icon": "fa-rocket",
                            "color": "orange",
                            "page": "toDoPage",
                            "width": 2,
                            "newRow": true,
                        },
                        {
                            "type": "button",
                            "name": { default: "Kevin" },
                            "icon": "fa-rocket",
                            "color": "alizarin",
                            "page": "toDoPage",
                            "width": 2,
                            "newRow": false,
                        },
                        {
                            "type": "button",
                            "name": { default: "Meli" },
                            "icon": "fa-rocket",
                            "color": "wisteria",
                            "page": "toDoPage",
                            "width": 2,
                            "newRow": false,
                        },
                        {
                            "type": "button",
                            "name": { default: "Levin" },
                            "icon": "fa-rocket",
                            "color": "belize hole",
                            "page": "toDoPage",
                            "width": 2,
                            "newRow": false,
                        },
                        {
                            "type": "button",
                            "name": { default: "Paul" },
                            "icon": "fa-rocket",
                            "color": "lime",
                            "page": "toDoPage",
                            "width": 2,
                            "newRow": false,
                        },
                    ]
                },
                {
                    "id": "toDoPage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": { default: "Neues To Do"},
                            "icon": "fa-user",
                            "color": "orange",
                            "width": 2,
                            "form" : {
                                "form" : "ToDoForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "ToDo",
                            "icon": "fa-check",
                            "color": "clouds",
                            "search": true,
                            "url": "/todo",
                            "form": {
                                "form": "ToDoForm"
                            }
                        }
                    ]
                },
                {
                    "id": "migration",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": { default: "Neues ToDo"},
                            "icon": "fa-user",
                            "color": "orange",
                            "width": 2,
                            "form" : {
                                "form" : "ToDoForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "ToDo",
                            "icon": "fa-check",
                            "color": "clouds",
                            "search": true,
                            "url": "/migration",
                            "form": {
                                "form": "ToDoForm"
                            }
                        }
                    ]
                },
                
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}