const companies = [
  {
    ID: 1,
    CompanyName: "Progress",
    Address: " Tsarigradsko shose 54B",
    City: "Sofia",
    State: "Sofia City Province",
    Zipcode: 1750,
    Phone: "123456789",
    Fax: "123456789",
    Website: "https://www.progress.com/",
  },
  {
    ID: 2,
    CompanyName: "Nvidia",
    Address: "San Tomas Expressway",
    City: "Santa Clara",
    State: "California",
    Zipcode: 95051,
    Phone: "555 555",
    Fax: "555 555",
    Website: "https://www.nvidia.com",
  },
  {
    ID: 3,
    CompanyName: "Google",
    Address: "Amphitheatre Parkway",
    City: "Mountain View",
    State: "California",
    Zipcode: 1600,
    Phone: "300-300",
    Fax: "300-300",
    Website: "http://www.google.com",
  },
  {
    ID: 4,
    CompanyName: "Apple",
    Address: "One Apple Park Way",
    City: "Cupertino",
    State: "California",
    Zipcode: 95014,
    Phone: "800 800",
    Fax: "800 800",
    Website: "https://www.apple.com/",
  },
];

export default {
  getCompanies() {
    return companies;
  },
};
