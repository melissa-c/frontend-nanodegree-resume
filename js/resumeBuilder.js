// bio ---------

var bio = {
  "name": "Melissa Chan",
  "role": "Web Developer",
  "contacts": {
    "mobile": "000 000 000",
    "email": "email@email.com",
    "github": "github",
    "twitter": "twitter",
    "location": "Wellington, NZ" 
  },
  "bioPic": ["http://placekitten.com/396/296"],
  "welcomeMessage": "A little about me...",
  "skills": ["Lorem", "Ipsum dolor", "Sit amet", "Consectetur"]
}


bio.display = function() {
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").append(formattedBioPic);


  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts, #footerContacts").append(formattedMobile);

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts, #footerContacts").append(formattedEmail);

  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $("#topContacts, #footerContacts").append(formattedTwitter);

  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts, #footerContacts").append(formattedGithub);
  
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts, #footerContacts").append(formattedLocation);


  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcomeMsg);


  $("#header").append(HTMLskillsStart);
    if (bio.skills.length > 0) {
      for (skill in bio.skills) {
      var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#header:last").append(formattedSkills);
     }
  }
}

bio.display();




// work ----------

var work = {
  "jobs": [
    {
      "employer": "Employer Three",
      "title": "Job Title Three",
      "dates": "2015 - current",
      "location": "Bern, CH",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      "employer": "Employer Two",
      "title": "Job Title Two",
      "dates": "2013 - 2015",
      "location": "Melbourne, AU",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      "employer": "Employer One",
      "title": "Job Title One",
      "dates": "2010 - 2013",
      "location": "Sydney, AU",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
}

function displayWork() {
  for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

displayWork();

function locationizer (work_obj) {
  var locationArray = [];

  for (job in work_obj.jobs) {
    var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);
  }

  return locationArray;
}




// projects --------

var projects = {
    "projects": [
    {
      "title": "Project Two",
      "dates": "2015 - current",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "images": ["http://placekitten.com/197/148"]
    },
    {
      "title": "Project One",
      "dates": "2014 - 2015",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "images": ["http://placekitten.com/197/148"]
    }
  ]
}


projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
    
    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

projects.display();



// education ------

var education = {
    "schools": [
    {
      "name": "The University",
      "degree": "Degree Two",
      "dates": "2001",
      "major": "Bowie",
      "location": "Wellington, NZ"
    },
    {
      "name": "The High School",
      "degree": "Degree One",
      "dates": "1998",
      "major": "Tom",
      "location": "Wellington, NZ"
    }
  ],
    "onlineCourses": [
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "dates": "2016",
      "url": "http://www.udacity.com"
    },
    {
      "title": "JavaScript",
      "school": "Codecademy",
      "dates": "2016",
      "url": "http://www.codecademy.com"
    }
  ]
}


education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    $(".education-entry:last").append(formattedName);

    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedDegree);

    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    $(".education-entry:last").append(formattedMajor);

    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);
  }

    $(".education-entry:last").append(HTMLonlineClasses);
    for (course in education.onlineCourses) {

    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    $(".education-entry:last").append(formattedTitle);

    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    $(".education-entry:last").append(formattedSchool);

    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
    $(".education-entry:last").append(formattedURL);
  }
}

education.display();




// Map -----------

$("#mapDiv").append(googleMap);





// button at end of page ----------

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);





// replace html symbols with character entity refs -------

var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};

