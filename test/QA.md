### App QA checklist.

The important functionality to test with the app is the ability to add and remove items from the browser.

install the app as described in the README.md.

run the Test to make sure the application is install and operating correctly
```
npm test
```

The test output will indicate failures or success.
now run an instance of the installed server
```
npm start
```

navigate to the URL http://localhost:3000/

You should now be presented with the basic interface.

Enter some text content into the input field.
press enter.

the todo will appear in the list below.
hover the item and press the red 'x' button to delete the item.

the item should disappear.

add and item called 'dupe'
add an item called 'dupe'

you should see an alert warning you of the duplicate entry.

add 5 items
delete 5 items.

the list should be empty.

add 2 items
press save.

add 1 item
refresh the browser

The two item previous entered should be displayed.
