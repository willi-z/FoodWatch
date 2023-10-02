
// https://github.com/mdn/dom-examples/blob/main/to-do-notifications/scripts/todo.js

// Hold an instance of a db object for us to store the IndexedDB data in
let db;
const DBOpenRequest = window.indexedDB.open('toDoList', 1);


DBOpenRequest.onerror = (event) => {
    console.log('Error loading database.');
};

DBOpenRequest.onsuccess = (event) => {
    console.log('Database initialised.');

    // Store the result of opening the database in the db variable. This is used a lot below
    db = DBOpenRequest.result;

    // Run the displayData() function to populate the task list with all the to-do list data already in the IndexedDB
    //displayData();
};

 // This event handles the event whereby a new version of the database needs to be created
  // Either one has not been created before, or a new version number has been submitted via the
  // window.indexedDB.open line above
  //it is only implemented in recent browsers
  DBOpenRequest.onupgradeneeded = (event) => {
    if(event.target == null) {return;}
    db = (event.target as IDBDatabase);

    db.onerror = (event) => {
        console.log('Error loading database.');
    };

    // Create an objectStore for this database
    const objectStore = db.createObjectStore('toDoList', { keyPath: 'taskTitle' });

    // Define what data items the objectStore will contain
    objectStore.createIndex('hours', 'hours', { unique: false });
    objectStore.createIndex('minutes', 'minutes', { unique: false });
    objectStore.createIndex('day', 'day', { unique: false });
    objectStore.createIndex('month', 'month', { unique: false });
    objectStore.createIndex('year', 'year', { unique: false });

    objectStore.createIndex('notified', 'notified', { unique: false });

    console.log('Object store created.');
  };

