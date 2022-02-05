/* global schools */

/* =====================
# Exercise: Working with real data

In this exercise you're going to be mapping the public high schools in
Philadelphia. The data on school facilities in Philadelphia was obtained from
OpenDataPhilly (https://opendataphilly.org/dataset/schools). The data has been
transformed into JavaScript objects and is available to this script under the
variable "schools" (it is loaded from a script called phl_school_facilities.js
in the index.html file right above the line that loads this index.js script).

Follow the instructions in the steps below.
===================== */

let map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 13,
});
L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png',
}).addTo(map);


/* =====================
Step 1: Explore the data

If we look at a few values of the TYPE attribute in the school data, we see that
they are numbers. The metadata provided on OpenDataPhilly does not specify what
each number represents, but there is a TYPE_SPECIFIC attribute that is a
sub-type. In order to determine which type value corresponds to public schools,
let's explore the data.

First, we're going to create a dictionary (using a JavaScript object) that
correlates each school TYPE to an array of TYPE_SPECIFIC values:
*/

const schoolTypeDict = {};

schools.forEach((school) => {
  const type = school.TYPE;
  const subtype = school.TYPE_SPECIFIC;

  // Retrieve any subtypes that have already been correlated with type. If this
  // is the first time we see a given type, then it will not have an array
  // in schoolTypeDict yet. In that case, initialize correlatedSubtypes to an
  // empty array.
  const correlatedSubtypes = schoolTypeDict[type] || [];

  // Find the index of the current school's subtype in the correlatedSubtypes
  // for the school's type. If we cannot find an index (i.e., indexOf returns
  // -1) that means that the subtype is not yet in the array of subtypes
  // correlated with the type.
  if (correlatedSubtypes.indexOf(subtype) === -1) {
    correlatedSubtypes.push(subtype);
  }

  schoolTypeDict[type] = correlatedSubtypes;
});

/*
In your JavaScript console, set a breakpoint inside of the forEach iterator and
step through the code. Try to understand what it's doing. For how to set a
breakpoint, see:
https://github.com/musa-611-spring-2022/musa-611-spring-2022-week3/blob/main/breakpoints.md

In the JavaScript console, run "console.log(schoolTypeDict);" to output the
schoolTypeDict. Which TYPE value represents public schools? (You'll need to know
this moving forward.)
===================== */

/* =====================
Step 2: Prepare the data

Create a new variable "publicHighSchools" that only contains data for the public
high schools in Philadelphia. Figure out how you can identify which schools have
high schools (hint: another attribute besides TYPE will be useful...).


if (grade.includes("HIGH")){
  publicHighSchools.push(grade)
}
publicHighSchools[grade] = grade;


===================== */


let publicHighSchools = [];

schools.forEach((school) => {
  const subtype = school.TYPE_SPECIFIC;
  const name = school.SCHOOL_NAME_LABEL;
  const grade = school.GRADE_LEVEL;
  const lat = school.Y;
  const lon = school.X;
  let schoolName = {};

  if (grade.includes('HIGH') && (subtype.includes('DISTRICT') || subtype.includes('CONTRACTED'))) {
    schoolName.grade = grade;
    schoolName.lat = lat;
    schoolName.lon = lon;
    schoolName.subtype = subtype;
    schoolName.name = name;
    publicHighSchools.push(schoolName);
  }
});

/* =====================
Step 3: Display the data
Add a marker for each of the publicHighSchools to the map (defined up above).
Add a tooltip to each marker that contains the name of the school.
===================== */
const myAPIKey = '818d279906d64c3290305f5265c208e1';
const markerIcon = L.icon({
  iconUrl: `https://api.geoapify.com/v1/icon/?type=awesome&color=%236b2e7a&size=small&icon=school&iconType=material&strokeColor=%2316001c&shadowColor=%232b0e0e&scaleFactor=2&apiKey=${myAPIKey}`,
  iconSize: [31, 46], // size of the icon
  iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
});

const addPlace = (lat, lon, schoolname) => {
  L.marker([lat, lon], { icon: markerIcon }).bindTooltip(schoolname).addTo(map);
};

Object.values(publicHighSchools).forEach((schoolName) => {
  addPlace(schoolName.lat, schoolName.lon, schoolName.name);
});


