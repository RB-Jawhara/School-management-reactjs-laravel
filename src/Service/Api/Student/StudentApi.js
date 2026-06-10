import AxiosClient from "../../../api/axios";


// Hayed "function" w redha "const" object
const StudentApi = {
  getCsrfToken: async () => {
    return await AxiosClient.get('/sanctum/csrf-cookie', {
      baseURL: 'http://127.0.0.1:8000'
    });
  },
  adminLogin: async (email, password) => {
   
    return await AxiosClient.post('/admin/login', { email, password });},
    // return await AxiosClient.post('/user/login', { email, password });
  teacherLogin: async (email, password) => {
    return await AxiosClient.post('/teacher/login', { email, password });
  },
    studentLogin: async (email, password) => {
    return await AxiosClient.post('/user/login', { email, password });
  },

  
 getAdmin: async () => {
        return await AxiosClient.get('/admin');
    },
    getTeacher: async () => {
        return await AxiosClient.get('/teacher');
    },
    getUser: async () => {
        return await AxiosClient.get('/user');
    },
    
  
  logout: async () => {
   
    return await AxiosClient.post('/logout') 
      
    
    
  },
  getUser: async () => {

    return await AxiosClient.get("/user");
    

  }
};

export default StudentApi; // Exporti l-object direct