seat-picking-js
===============
seat-picking-js is a javascript application which provides an interface to book tickets in a cinema hall, and it provides some added functionality like to book only adjacent seats and to not live single seat silos wherever possible . 

Overview
==============
The 'index.html' file contains the form to add name, seat and class , class being 'Gold','Silver','Bronze'. 
Once you click submit button, a get request will open the 'seat.html' file, which is the UI to select seats. You cannot select seats more then what you have input in the form(an error will be shown), and you cannot select seats from other classes. Similarly, you cannot leave single seat silos and you have to choose only adjacent seats wherever possible. 
Once, you have chosen the seats, an acknowledgment alert will pop up.
