## Project Description

**Group members:** Yi Zhang & Yiying Song

**Group project:** interactive website for Gym YY

**Problem statement**
* Due to space and time constraints, people can only choose one or two ways to work out.
* Traditionally people often need to go to the gym themselves to find information about classes or trainers.
* A trainer does not have the freedom to choose the time they prefer to lead classes.
* There might be a long wait if a trainer or user wants to create, update, or delete their file since all these processes are probably handled by the front desk.
* Users sometimes need to change their plans if the weather is not good since some outdoor activities are affected and it might take longer to commute.

**Proposed solution**
* Besides common exercise types of equipment, our gym also provides a swimming pool, tennis court, ping pong tables, basketball court, as well as a studio room for yoga and cardio.
* Users, including the ones who are currently not member but are interested in joining, are able to view all the information about our gym on our website on their own devices.
* Our gym allows the trainer to choose the time they prefer to teach, and the admin has access to approve the class as well as determine the location of their classes.
* Users and trainers can create and update account easily; users also have the option to delete their account. However, a user having an account does not mean they are a member, it is the admin who grants their membership and set an expiration date.
* On the available classes page, users have the option to view the predicted weather for the time that specific class is held. Thus they are able to make plans ahead depending on this information.

**Choice of API**

Our team decided to use an API to display the weather on the website. Users can use this information to decide if they want to go to the gym or if they want to participate in indoor or outdoor classes led by trainers. The data are refreshed every time the class page is opened, thus it provides the most update to date weather prediction for the time is the class is held.

**Potential domain objects and their relations**
* For our website, a class is a potential domain object. It contains information about class name, time, location, trainer, and if this class is approved. We also added weather information in this object associated with the class, which provides the most updated weather prediction for the time during the class.
* A profile is also a domain object. Both user and trainer profile contains basic information like name, profile picture, and contacting information. There might be specific sections on their profile depending on their role. For example, a trainer has a short bio to introduce themselves on their profile whereas the user can view what classes are available through the “View Classes” link.
* A list of class objects can be viewed by a user through “View Classes” link on their profile page; for each of the class, users can get detailed profile information about trainer by clicking on their names.

**Potential human users, the goals they can accomplish, and their relations with other users and domain objects**
* A trainer is a person who leads classes at the gym. When a trainer is on the login page, he should choose Trainer category in the menu and type in the username and password. On the profile page, he is able to update his profile picture, and edit information about his first name, last name, expertise, and a short bio. All anonymous users on the home page and signed in users that are viewing available classes are able to view the trainer profile information. On the “My Classes” link, a trainer can create classes by providing class name and time, the class will be approved and assigned with a location by an admin later.
* A user is a person that has a membership at our gym. He can create his account on register page after providing the username and password. His membership though is granted by admin only. When a user is on the login page, he should choose “User” category in the menu and type in the required information. On their profile page, a user can update his profile picture, edit his basic information, and delete the account if they choose to. He can also view available classes, which are created by trainers and approved by admin, through “View Classes” link. On the View Classes page, a list of classes are provided and each of them has detailed information about time, location, trainer, and weather. A user can click on a trainer to view his profile, he can also click on weather icon to see a weather prediction to make plans ahead.
* An admin is the owner of the gym. On the login page, he should choose admin from the menu and type in username and password. On the admin page, he is able to delete a user or trainer account and add the membership expiration date for a user. An admin also approves classes from trainers and determine the location of the classes.
* An anonymous user is a person who has not signed in or is looking for information on the home page. The home page provides basic information about the gym including name, location, hours, as well as images about types of equipment and current trainers. If the user wants to view detailed information like class schedules, he should log in or register for an account.
