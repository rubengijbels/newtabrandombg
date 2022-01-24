PART 1 - Install extension
--------------------------
1. Open browser
2. Open manage extensions
3. Enable developer mode
4. Click "Load Unpacked"
5. Select "extension" folder from this repo
6. Test by opening new tab
7. New tab should be empty with gray background


PART 2 - Automate server
-------------------------
1. Open Automator.app
2. Click "new"
3. Click "Application"
4. Double-click "Run Shell Script"
5. Put this code inside:
source ~/.zprofile
node /Users/rubengijbels/dev/repos/newtabrandombg/server/server.js
6. Test by clicking "run"
7. Open new tab in browser, tab should show random image from folder
8. In Automator: File > Save...
9. Choose name, ex.: "newtabrandombg-server.app", save somewhere
10. Go to: System Preferences > Users and Groups > Login items
11. Browse for newly created app, now it will start automatically



