## Project Description

**Group members:** Yi Zhang & Yiying Song

**Group project:** interactive website for Gym YY

**Heroku link:** https://gyym-cs5610final.herokuapp.com/

**Problem statement**
* Due to space and time constraints, people can only choose one or two ways to work out.
* Traditionally people often need to go to the gym themselves to find information about classes or coaches.
* A coach does not have the freedom to choose the time they prefer to lead classes.
* There might be a long wait if a coach or user wants to create, update, or delete their file since all these processes are probably handled by the front desk.
* Users sometimes need to change their plans if the weather is not good since some outdoor activities are affected and it might take longer to commute.

**Proposed solution**
* Besides common exercise types of equipment, our gym also provides a swimming pool, tennis court, ping pong tables, basketball court, as well as a studio room for yoga and cardio.
* Users, including the ones who are currently not member but are interested in joining, are able to view all the information about our gym on our website on their own devices.
* Our gym allows the coach to choose the time they prefer to teach, and the admin has access to approve the class as well as determine the location of their classes.
* Users and coaches can create and update account easily; users also have the option to delete their account. However, a user having an account does not mean they are a member, it is the admin who grants their membership and set an expiration date.
* On the available classes page, users have the option to view the predicted weather for the time that specific class is held. Thus they are able to make plans ahead depending on this information.

**Choice of API**  

Our team decided to use an API to display the weather on the website. Users can use this information to decide if they want to go to the gym and if they want to participate in indoor or outdoor classes led by coaches. The data are refreshed every time the class page is opened, thus it provides the most up-t-date weather prediction for the time of which the class is held.

**Potential domain objects and their relations**
* For our website, a class is a potential domain object. It contains information about class name, description, time, location, coach, and if this class is approved. We also added weather information in this object associated with the class, which provides the most updated weather prediction for the time during the class.
* A profile is also a domain object. Both user and coach profile contains basic information like name, profile picture, and contacting information. There might be specific sections on their profile depending on their role. For example, a coach has a short bio and a expertise to introduce themselves on their profile whereas the user can view what classes are available through the “View Classes” link.
* A class list contains multiple classes. For a user, the available class list is the list of classes that are approved by admin; for a coach, the class list is the classes they have submitted by themselves, both approved and waiting to be approved; for admin, class list is all classes from coaches that he has approved or wait for his approval.
* A list of class objects can be viewed by a user through “View Classes” link on their profile page; for each of the class, users can get detailed profile information about each coach by clicking on their names. Coaches can add class to class list for admin to approve.

**Potential human users, the goals they can accomplish, and their relations with other users and domain objects**
* A coach is a person who leads classes at the gym. When a coach is on the login page, he should choose Coach category in the radio buttons and type in the username and password. On the profile page, he is able to edit information about his first name, last name, expertise, and a short bio. All anonymous users on the home page and signed in users that are viewing available classes are able to view the coach profile information. On the “View Classes” link, a coach can create classes by providing class name, time, and a short description. The class will be approved and assigned with a location by an admin later.
* A user is a person that has a membership at our gym. He can create his account on register page after providing the username and password. His membership though is granted by admin only. When a user is on the login page, he should choose “User” category in the radio buttons and type in the required information. On their profile page, a user can update his profile picture, edit his basic information, and delete the account if they choose to. He can also view available classes, which are created by coaches and approved by admin, through “View Classes” link. On the View Classes page, a list of classes are provided and each of them has detailed information including class name, time, description, location, coach, and weather. A user can click on a coach to view his profile, he can also view the weather icon to see a weather prediction to make plans ahead.
* An admin is the owner of the gym. On the login page, he should choose admin from the radio buttons and type in username and password. Clicking on Coaches link, the admin can add, delete, and edit information for each coach; clicking on Users link, an admin can edit membership expiration date for each user; clicking on Classes link, an admin can delete or approve classes from coaches and determine the location of the classes, which can be viewed by the corresponding coach. Only after a class is approved and given a location, it will show up on available classes on the user side.
* An anonymous user is a person who has not signed in or is looking for information on the home page. The intro page provides basic information about the gym including name, location, hours, as well as images about types of equipment and current coaches. If the user wants to view detailed information like class schedules, he should log in or register for an account.

**Testing**  
If you want to switch account, click on profile icon on right bottom corner and choose Log out.  
* A user related to another user. Admin can approve classes from coaches by following steps:
  * go to log in and choose admin
  * type in gyym as both username and password
  * click on Classes
  * choose a class to assign a location and click on approve box
  * go back and log out
  * log in as user using "sophie" as both username and password
  * click on View Classes and the class you just approved will show up
* A user views details of a particular domain object listed in the search results. A user can view more information about a coach by following steps:
  * go to log in and choose User in radio button
  * type in "sophie" for both username and password
  * click on View Classes to view all available classes
  * click on a coach to view more detailed info about that coach
* A user views all domain objects related to the user. User can view available classes for him by following steps:
  * go to log in and choose User in radio button
  * use "sophie" as both username and password
  * click on View Classes
  * you can view all approved courses and related information
* A user views all other users related to the user. A user can view all the available coaches that are currently leading classes by following steps:
  * go to log in and choose User in radio button
  * use "sophie" as both username and password
  * click on View Classes
  * you can view available coaches for you
* A user related to a domain object. A coach can submit a class object for admin to approve by following steps:
  * go to log in page and choose Coach
  * use "coach1" as both username and password to log in 
  * click on View classes
  * click on new class
  * fill in required information
  * click on check on top right corner
  * View classes page will have this class
* A domain object related to another domain object. A coach can add a class to class list by the same steps as above.
* An admin creates a user. A user can register with following steps:
  * go to log in page and choose Register
  * type required information
  * edit profile page (fill in first & last name)
  * click on check on top right corner
  * choose log out
  * you can log in again with the account you just created
* An admin lists all users. Admin can view all coaches by following steps:
  * go to log in page and choose admin
  * type "gyym" as both username and password
  * click on Coaches
  * you can view a list of coaches
* An admin edits/updates a particular user. Admin can update info for a coach by folloing steps:
  * on the same page as previous step
  * choose a coach and click on Edit
  * you can edit the username and password for the coach
* An admin removes a user. Admin can delete a coach by following steps:
  * on the same page as previous step
  * click into a coach
  * click on delete

