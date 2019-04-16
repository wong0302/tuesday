/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
let app = {
    // Application Constructor
    pages: [],
    notifications: [],
    init:()=>{
        app.addEventListeners();
        app.pages=document.querySelectorAll('.pages');
    },
    addEventListeners: ()=>{
        document.querySelector('.addBtn').addEventListener('click', app.gotoCreatepage);
        document.querySelector('.deleteBtn').addEventListener('click', app.showModal);
        document.querySelector('.noBtn').addEventListener('click', app.showModal);
        document.querySelector('.yesBtn').addEventListener('click', app.deleteReminder);
        document.querySelector('.cancelBtn').addEventListener('click', app.goHomepage);
        document.querySelector('.saveBtn').addEventListener('click', app.createReminder);
    },
    gotoCreatepage: ()=>{
        app.pages[1].classList.add('active');
        app.pages[0].classList.remove('active');
        console.log('clicked');
    },
    goHomepage:()=>{
        app.pages[0].classList.add('active');
        app.pages[1].classList.remove('active');
    },
    createReminder: ()=>{},
    showModal:()=>{},
    createReminderlist:()=>{},
    deleteReminder: ()=>{},
    saveLocalStorage:()=>{},
    getLocalStorage:()=>{},
    getNotification:()=>{}
    
};

document.addEventListener('deviceready', app.init);