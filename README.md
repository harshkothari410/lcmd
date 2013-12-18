lcmd
====

Language Coverage Matrix Dashboard

The Language Coverage Matrix dashboard would help automate the information about language support provided by the Language Engineering team for e.g. key maps, web fonts, translation, language selector, i18n support for gender, plurals, grammar rules. The LCM would display this information as well as provide visualization graphs of language coverage using various search criteria such as tools or languages. I will build this web based dashboard using Javascript libraries integrated with MySQL to manage the data. This project is very useful for language engineering team since wikipedia supports more than 300 languages. This tool will help them analyse the details of various available features of individual language. The Language Engineering team can efficiently prioritize and include some missing features , that is the features which are not currently available particular language. The overall impact of this project will lead to an efficient and enhanced user experience for Wikis.

This web based dashboard will also help other products and communities for showing innumerous search results and visualization graphs for the same.

## Instalation

* Clone this LCMD using following command
  * git clone https://github.com/harshkothari410/lcmd.git
or you can simply download zip version / ssh / subversion / HTTPS clone

* After that you have to create database 
  * Database Name : lcmdashboard
  * host : localhost
  * username : root
  * password : root

* If you have different username and password then go to lib directory where you will find dbconnect.php file. You just alter that file using your username and password and save it. 
* Now its time to create tables and enter data from the dump. for that go to database directory and 
* If you are using command line version of MySQL then type following command into that
  * > mysql -u username -p lcmdashboard < lcmdashboard.sql
  * > mysql -u username -p lcmdashboard < data.sql
* If you are using phpmyadmin GUI version then import lcmdashboard.sql and data.sql So your database is created
* Now Finally go to localhost / server and run this project Bingo you will find it running :) :)

If you find any difficulty then mail me to harshkothari410@gmail.com
