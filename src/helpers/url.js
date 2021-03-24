export const BACKEND_URL = 'https://runners-bn-backend.herokuapp.com';
localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbmRlbGFydW5uZXJzQGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6IkpvaG4iLCJsYXN0TmFtZSI6InJlcXVlc3RlciIsInJvbGUiOiJyZXF1ZXN0ZXIiLCJpYXQiOjE2MTExMzcwOTd9.BT51h5593P3JVGvqFisuwcAhl-n0DrWUlj7eDeYa5m0');
const token = localStorage.getItem('token');
export default token;
export const id = localStorage.getItem('loggedInUser');
