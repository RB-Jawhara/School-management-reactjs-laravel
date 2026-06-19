//import AxiosClient from "../../../api/axios";
import AxiosClient from "../../api/axios.jsx";

const ParentApi = {
  create: async (data) => {
    
    return await AxiosClient.post("/parents", data);
    
    //payload KATSIFT OBJETT LI FIHA DATA DIAL PARENT
    //parent hiya l-route li f-backend li kat-representa l-endpoint li ghadi n3ayto 3lih bach n-create parent, w payload hia data li ghadi nsiftouha l-backend bach y-create parent jdida
  },
    all:async () => {
    return await AxiosClient.get("/parents");

  },
  delete: async (id) => {
    return await AxiosClient.delete(`/parents/${id}`);
  } ,
  update: async (id, payload) => {
    return await AxiosClient.put(`/parents/${id}`, payload);
  },



};
export default ParentApi;

  

    
  
 
  


