// api.js

const BASE_URL = "https://api.example.com";

const headers = {
  "Content-Type": "application/json",
  // You might add other headers here like authorization tokens
};

// Helper function to handle the response from the API
const handleResponse = async (response) => {
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  return response.json();
};

// GET request
export const get = async (url) => {
  const response = await fetch(`${BASE_URL}${url}`, { headers });
  return handleResponse(response);
};

// POST request
export const post = async (url, data) => {
  const response = await fetch(`${BASE_URL}${url}`, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });
  return handleResponse(response);
};

// PUT request
export const put = async (url, data) => {
  const response = await fetch(`${BASE_URL}${url}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(data),
  });
  return handleResponse(response);
};

// DELETE request
export const del = async (url) => {
  const response = await fetch(`${BASE_URL}${url}`, {
    method: "DELETE",
    headers,
  });
  return handleResponse(response);
};
