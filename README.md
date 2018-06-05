# Ionic-app-list-of-countries

After installing the required node modules,

# Creating and testing ionic framework

Run the following commands to:
------------------------------
-- Load the app in the desktop browser (can view the mobile view here)
  `ionic serve -l`

-- Load the app in the mobile
1. Create an ionic pro account (select kickstarter)
2. Download ionic DevApp and login in with the ionic pro credentials
3. After connecting the mobile device on the same device as the computer using the wifi, 
   run `ionic serve -c` in the root folder 
   
# Generating a android build:
Requirements
------------
On your Mac,
-- You will find the android sdk present at `/Users/<your-account-name>/Library/Android/sdk`. Export it as `ANDROID_HOME` as a `PATH` variable

-- Go to `/Library/Java/JavaVirtualMachines/` and delete any version of jdk except jdk 1.8 (and install jdk 1.8 if it is not installed in your system)

In the bash_profile file found in the Users/<your-account-name> path, add the following:
----------------------------------------------------------------------------------------
`export ANDROID_HOME=Users/Aditya/Library/Android/sdk`

`export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_171.jdk/Contents/Home`

Run the following command to generate an android build
--------------------------------------------------------
-- `ionic cordova build android`

Place the generated `apk file` in the android phone after enabling the developer options and the USB debugging in your android phone.
