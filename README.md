# PinK - Pinterest Client for KaiOS

Overview

PinK is a Pinterest client designed specifically for KaiOS, providing a seamless experience for users on KaiOS-enabled devices. This lightweight application offers essential Pinterest features tailored to the KaiOS environment.

Current Functions

    Automatically Register an account on the first usage
    Login if you have an account
    See Pins
    Save Images
    Pinterest AI Tracking: Accurate recommendations based on your clicks and shares, enhancing your Pinterest experience.
    Share Pins: Easily share Pins with friends and followers.
    Send Messages: Connect with others through private messages.
    Read Messages and Pins

Fixed

    UI design issues on the Nokia 8000/6300
    Slow movement and buggy interface when new requests were made (added a service worker to handle them and reduced image weight)
    Login Redirection: Improved user experience by handling failed logins with a clear error message and redirecting back to the login page.
    URL Parsing: Optimized code efficiency by addressing issues with URL parsing, resulting in a smoother performance with fewer API requests.
    multiple words texts appearing as a single word.
    Save local account data when redirecting to login instead of deleting the database
    Add a query param to the login redirect, to be checked in app.js so in case of a login error redirect back to login.html, in case of a register error, redirect back to register.html

To-Do

    Create Boards: Organize your Pins by creating custom boards.
    Search Pins
    Browse User Profiles: Explore other users' profiles 
    Follow Pin Poster
    See Pin Poster
    Comment Pins
    See Pin comments
    

