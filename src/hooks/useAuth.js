import AuthRepository from '../api/AuthRepository';
import cookies from "js-cookie";

import React,{useState,useContext} from 'react';
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { useHistory } from 'react-router-dom';
import {UserContext} from '../App';

export default function useAuth() {
const {state,dispatch} = useContext(UserContext);
  const history = useHistory();
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
        var responseData = await AuthRepository.UserLogin(data);
        // console.log("responseData",responseData)
        if (responseData.status === 200) {
          notification.open({
            message: "Success",
            description: "Login Successfully...!!",
            icon: <SmileOutlined style={{ color: "#108ee9" }} />,
          });
          cookies.set('token', responseData.data.token)
          localStorage.setItem("userId", responseData.data.user.id);
          dispatch({type:"USER", payload:true})
          history.push('/');
          return responseData.data;

          }

          else {
            notification.open({
              message: "Warning",
              description: responseData.data.error,
              icon: <SmileOutlined style={{ color: "#108ee9" }} />,
            });
            history.push('/login');
            return false
          }
        },

          getUserLogout: async (data) => {       
            var responseData = await AuthRepository.UserLogout(data);
            // console.log(responseData);
            if (responseData.status === 200) {
              notification.open({
                message: "Success",
                description: "Logout Successfully...!!",
                icon: <SmileOutlined style={{ color: "#108ee9" }} />,
              });
              cookies.remove('token', responseData.data.token)
              history.push('/login');
              return responseData.data;

              }
              else{
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

            getUserProfileList: async (data) => {
              var responseData = await AuthRepository.UserProfileGet(data);
              if(responseData.status === 200){
                return responseData.data;
              }
              return false;
            },
   }
        
  }