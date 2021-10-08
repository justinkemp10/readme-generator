const licenseMap = {
  'Apache': {
    badgeName: 'Apache 202.0-blue',
    licenseLink: "https://opensource.org/licenses/Apache-2.0" 
  },
  "BSD 3": {
    badgeName: 'BSD 203--Clause-blue',
    licenseLink: "https://opensource.org/licenses/BSD-3-Clause"
  },
  "MIT": {
    badgeName: "MIT-yellow",
    licenseLink: "https://opensource.org/licenses/MIT"
  }
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badgeName = licenseMap[license].badgeName;
  const link = renderLicenseLink(license);
  const badgeUrl = `https://img.shields.io/badge/License-${badgeName}.svg`;
  return `[![License](${badgeUrl})](${link})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return licenseMap[license].licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This application is covered under ${license}.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseLink = renderLicenseLink(data.license);
  let licenseBadge = renderLicenseBadge(data.license);
  let licenseSection = renderLicenseSection(data.license);
  return `
${licenseBadge}

# Title:

${data.title}

# Description:

${data.description}

# Installation Instructions:

${data.installInstructions}

# Usage Information:

${data.lnkUrl}

# Contribution Guidelines:

${data.gitUrl}

# License:

${licenseSection}
${licenseLink}

# Questions:

${data.github}
${data.email}`;
}

module.exports = generateMarkdown;
