import AuthRepository from '../api/AuthRepository';
import cookies from "js-cookie";

import React,{useState} from 'react';
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { useHistory } from 'react-router-dom';

export default function useAuth() {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
    return {
        getUserListing: async (data) => {
            // console.log('data',data)
            var responseData = await AuthRepository.UserRegister(data);
            // console.log(responseData);
            if (responseData.status === 200) {             

                notification.open({
                  message: "Register",
                  description: "Link Sent Please Verify Your Email Account...!!",
                  icon: <SmileOutlined style={{ color: "#108ee9" }} />,
                });
                  history.push('/login');
                return true
              } else{
                notification.open({
                  message: "Error",
                  description: "Registration Failed...!",
                  icon: <SmileOutlined style={{ color: "#108ee9" }} />,
                });
                 history.push('/register');
                return false
              }
       },

       getUserLogin: async (data) => {       
        setLoading(true);
        var responseData = await AuthRepository.UserLogin(data);
        //  console.log(responseData);
        if (responseData.status === 200) {
          notification.open({
            message: "Success",
            description: "Login Successfully...!!",
            icon: <SmileOutlined style={{ color: "#108ee9" }} />,
          });
          cookies.set('token', responseData.data.token)

          setLoading(false);
          history.push('/');
          return loading ? <p style={{display:'none'}}>Loading...</p> : responseData.data;

          }

          else {
            notification.open({
              message: "Warning",
              description: responseData.data.error,
              icon: <SmileOutlined style={{ color: "#108ee9" }} />,
            });
            setLoading(false);
            history.push('/login');
            return false
          }
        },

          getUserLogout: async (data) => {       
              setLoading(true);
            var responseData = await AuthRepository.UserLogout(data);
            // console.log(responseData);
            if (responseData.status === 200) {
              notification.open({
                message: "Success",
                description: "Logout Successfully...!!",
                icon: <SmileOutlined style={{ color: "#108ee9" }} />,
              });
              cookies.remove('token', responseData.data.token)
              setLoading(false);
              history.push('/login');
              return loading ? <p style={{display:'none'}}>Loading...</p> : responseData.data;

              }
              else{
                setLoading(false);
                return false
              }
          },

          getUserProfileListing: async (data) => {
            // console.log('data',data)
            var responseData = await AuthRepository.UserProfileRegister(data);
            console.log(responseData);
            if (responseData.status === 200) {             

                notification.open({
                  message: "Register",
                  description: "Profile Created Successfukky...!!",
                  icon: <SmileOutlined style={{ color: "#108ee9" }} />,
                });
                  history.push('/');
                return true
              } else{
                notification.open({
                  message: "Error",
                  description: "Failed...!",
                  icon: <SmileOutlined style={{ color: "#108ee9" }} />,
                });
                 history.push('/add_new_profile');
                return false
              }
       },
   }
        
  }