##Project Description

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
Our team decided to use an API to display the weather on the website. Users can use this information to decide if they want to go to the gym or if they want to participate in indoor or outdoor classes led by coaches. The data are refreshed every time the class page is opened, thus it provides the most update to date weather prediction for the time is the class is held.

**Potential domain objects and their relations**
* For our website, a class is a potential domain object. It contains information about class name, description, time, location, coach, and if this class is approved. We also added weather information in this object associated with the class, which provides the most updated weather prediction for the time during the class.
* A profile is also a domain object. Both user and coach profile contains basic information like name, profile picture, and contacting information. There might be specific sections on their profile depending on their role. For example, a coach has a short bio and a expertise to introduce themselves on their profile whereas the user can view what classes are available through the “View Classes” link.
* A list of class objects can be viewed by a user through “View Classes” link on their profile page; for each of the class, users can get detailed profile information about each coach by clicking on their names.

**Potential human users, the goals they can accomplish, and their relations with other users and domain objects**
* A coach is a person who leads classes at the gym. When a coach is on the login page, he should choose Coach category in the radio buttons and type in the username and password. On the profile page, he is able to edit information about his first name, last name, expertise, and a short bio. All anonymous users on the home page and signed in users that are viewing available classes are able to view the coach profile information. On the “View Classes” link, a coach can create classes by providing class name, time, and a short description. The class will be approved and assigned with a location by an admin later.
* A user is a person that has a membership at our gym. He can create his account on register page after providing the username and password. His membership though is granted by admin only. When a user is on the login page, he should choose “User” category in the radio buttons and type in the required information. On their profile page, a user can update his profile picture, edit his basic information, and delete the account if they choose to. He can also view available classes, which are created by coaches and approved by admin, through “View Classes” link. On the View Classes page, a list of classes are provided and each of them has detailed information including class name, time, description, location, coach, and weather. A user can click on a coach to view his profile, he can also view the weather icon to see a weather prediction to make plans ahead.
* An admin is the owner of the gym. On the login page, he should choose admin from the radio buttons and type in username and password. Clicking on Coaches link, the admin can add, delete, and edit profile picture for each coach;clicking on Users link, an admin can edit membership expiration date for each user; clicking on CLasses link, an admin can delete or approve classes from coaches and determine the location of the classes, which can be viewed by the corresponding coach. Only after a class is approved and given a location, it will show up on available classes on the user side.
* An anonymous user is a person who has not signed in or is looking for information on the home page. The intro page provides basic information about the gym including name, location, hours, as well as images about types of equipment and current coaches. If the user wants to view detailed information like class schedules, he should log in or register for an account.
