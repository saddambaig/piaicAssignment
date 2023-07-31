"use strict";
function describe_city(city, country = "Unknown") {
    console.log(city + " is in " + country + ".");
}
describe_city("Karachi", "Pakistan");
describe_city("New York", "USA");
describe_city("Paris");
