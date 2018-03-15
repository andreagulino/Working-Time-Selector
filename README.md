# Working-Time-Selector (DEIB)
Add this script to TamperMonkey (Chrome/Firefox plugin) to automatically select working hours.

Import plugin.js from the TamperMonkey dashboard.
Go to the working-time-selection page (choosing the right month) and activate the script; it will start the automatic selection (saturdays and sundays are not considered).

The default configuration is the following:

    var HOURS_PER_DAY = 8;
    var ROLLBACK = false;
    
If you want to rollback (all to 0) set 

    var ROLLBACK = true;
