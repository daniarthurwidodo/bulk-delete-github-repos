require("dotenv").config();
const axios = require("axios");

// Replace with your GitHub Personal Access Token
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Replace with your GitHub username
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;

// List of repository names to delete
const REPOS_TO_DELETE = [
    "drag-drop-jira-clone", 
    "responsive-registration-form-backend",
    "3d-card-with-encryption",
    "melonku-hyperledger",
    "fe-daniwidodo",
    "basic-hyperledger-nodejs",
    "ng-simple-translation",
    "express-todo-mysql",
    "hyperledger-nodejs-client",
    "hyperledger-nodejs-server",
    "bangturstudio-be",
    "angular-todo-firebase",
    "dungeons-and-dragons-nft"
]; // Add your repo names here

// GitHub API base URL
const GITHUB_API_URL = "https://api.github.com";

// Axios instance with authentication headers
const axiosInstance = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
    Accept: "application/vnd.github.v3+json",
  },
});

// Function to delete a repository
async function deleteRepo(repoName) {
  try {
    const url = `/repos/${GITHUB_USERNAME}/${repoName}`;
    await axiosInstance.delete(url);
    console.log(`Successfully deleted repository: ${repoName}`);
  } catch (error) {
    console.error(
      `Failed to delete repository: ${repoName}`,
      error.response ? error.response.data : error.message
    );
  }
}

// Function to bulk delete repositories
async function bulkDeleteRepos() {
  for (const repoName of REPOS_TO_DELETE) {
    await deleteRepo(repoName);
  }
}

// Run the bulk delete process
bulkDeleteRepos();
