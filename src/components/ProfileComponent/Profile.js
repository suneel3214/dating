import React,{useState} from 'react'
import {
    Box,
    Grid,
    Typography,
    Container,
  } from "@mui/material";
  import './profile.css';
  import 'antd/dist/antd.css';
  import useAuth from "../../hooks/useAuth";
  import { useHistory } from 'react-router-dom';
  import { UploadOutlined } from '@ant-design/icons';
  import { Menu,Modal,Form, Input,Row,Col,Select,Upload,Card,message,Button  } from 'antd';
  const { Option } = Select;
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
    },
  };


const Profile = () => { 

    const [form] = Form.useForm();
    const history = useHistory();
    const { getUserProfileListing } = useAuth();
    const [image , setImage] = useState(null);


    const onFinish = (data) => {
     
      // console.log("data",data)
      data.image = image;
      var form = new FormData();

      form.append('image',image)
      form.append('name',data.name)
      form.append('country',data.country)
      form.append('about',data.about)
      form.append('age',data.age) 
      form.append('ethnicity',data.ethnicity)
      form.append('sexuality',data.sexuality) 
      form.append('gender',data.gender)
      form.append('drinking',data.drinking)
      form.append('smoking',data.smoking)
      form.append('contact',data.contact) 
      form.append('eye',data.eye)
      form.append('hair_color',data.hair_color)
      form.append('hair_length',data.hair_length) 
      form.append('body_size',data.body_size)
      form.append('user_id', localStorage.getItem('userId'))
      getUserProfileListing(form);
      form.resetFields();
    };

    const UploadFile = (file,type) => {
       if(type === 'image'){
        setImage(file);
       }
    }

     return (
       <div>
         <Container fixed>
            <Box sx={{ flexGrow: 1 }} style={{marginTop:'100px'}}>
                <Grid container spacing={2}>
                    <Grid xs={6} md={4}>
                      <img style={{width:'74%',height:'500px'}} src='https://images.pexels.com/photos/2249172/pexels-photo-2249172.jpeg' />
                      <img style={{width:'74%',height:'500px',marginTop: '105px'}} src='https://economictimes.indiatimes.com/thumb/msid-64168290,width-1200,height-900,resizemode-4,imgsize-243202/breadcrumbing-orbiting-and-more-update-your-dating-dictionary-with-these-new-age-terms.jpg?from=mdr' />
                    </Grid>
                    <Grid xs={6} md={8}>
                    <Card>
                      <Form 
                          form={form}
                          name="nest-messages"
                          onFinish={onFinish}
                          validateMessages={validateMessages}
                          layout="vertical" autoComplete="off"
                          >
                          <Row>
                            <Col>
                              <Typography variant="h5" gutterBottom component="div">
                              1. Create a new profile______
                              </Typography>
                              <Form.Item name="name" className='lebal' label="Create a display name for your profile" rules={[{ required: true }]}>
                                <Input name="name"  placeholder='Username'/>
                              </Form.Item>
                              <Form.Item name="country" className='lebal' label="Where are you located?">
                              <Select name="country" placeholder="select your country">
                                  <Option value="india">India</Option>
                                  <Option value="america">America</Option>
                                  <Option value="nepal">Nepal</Option>
                                  <Option value="pakistan">Pakistan</Option>
                                  <Option value="chaina">Chaina</Option>
                                  <Option value="russia">Russia</Option>
                                </Select>
                              </Form.Item>

                              <Typography variant="h5" gutterBottom component="div">
                              2. Description____________
                              </Typography>

                              <Form.Item name="about" className='lebal' label="About Me">
                                <Input.TextArea name="about" placeholder="About Description"/>
                              </Form.Item>

                              <Typography variant="h5" gutterBottom component="div">
                              3. Details________________
                              </Typography>
                              <Form.Item name="age" className='lebal' label="Age" rules={[{ required: true }]}>
                                <Input name="age"  placeholder='Please Enter Your Age'/>
                              </Form.Item>
                              <Form.Item name="ethnicity" className='lebal' label="Ethnicity">
                              <Select name="ethnicity" placeholder="select your Ethnicity">
                                  <Option value="Africa">Africa</Option>
                                  <Option value="America">America</Option>
                                  <Option value="Arab">Arab</Option>
                                  <Option value="Asian">Asian</Option>
                                  <Option value="Indian">Indian</Option>
                                  <Option value="Hispanic">Hispanic</Option>
                                  <Option value="mixed">mixed</Option>
                                  <Option value="Native">Native</Option>
                                  <Option value="Other">Other</Option>
                                </Select>
                              </Form.Item>
                              <Form.Item name="sexuality" className='lebal' label="Sexuality">
                              <Select name="sexuality" placeholder="select your country">
                                  <Option value="Straight">Straight</Option>
                                  <Option value="Gay">Gay</Option>
                                  <Option value="Lesbian">Lesbian</Option>
                                  <Option value="Bisexual">Bisexual</Option>
                                  <Option value="Other">Other</Option>
                                </Select>
                              </Form.Item>
                              <Form.Item name="gender" className='lebal' label="Gender" rules={[{ required: true }]}>
                              <Select name="gender" placeholder="select your Gender">
                              <Option value="male">Male</Option>
                                  <Option value="female">Female</Option>
                                  <Option value="other">Other</Option>
                                </Select>
                              </Form.Item>
                            </Col>
                          <Col >
                            <Typography variant="h5" gutterBottom component="div">
                              4. My Habbits_______________
                              </Typography>
                              <Form.Item name="drinking" className='lebal' label="Drinking">
                              <Select name="drinking" placeholder="Never">
                                  <Option value="Never">Never</Option>
                                  <Option value="Rarely">Rarely</Option>
                                  <Option value="Quit">Quit</Option>
                                  <Option value="Socially">Socially</Option>
                                  <Option value="Often">Often</Option>
                                  <Option value="veryoften">Very Often</Option>
                                </Select>
                              </Form.Item>
                              <Form.Item name="smoking" className='lebal' label="Smoking">
                              <Select name="smoking"  placeholder="Never">
                                <Option value="Never">Never</Option>
                                  <Option value="Rarely">Rarely</Option>
                                  <Option value="Quit">Quit</Option>
                                  <Option value="Socially">Socially</Option>
                                  <Option value="Often">Often</Option>
                                  <Option value="veryoften">Very Often</Option>
                                </Select>
                              </Form.Item>
                              <Typography variant="h5" gutterBottom component="div">
                              5. Contact____________
                              </Typography>
                              <Form.Item name="contact" className='lebal' label="Contact Number" rules={[{ required: true }]}>
                                <Input name="contact"  placeholder='Contact Number'/>
                              </Form.Item>
                            <Typography variant="h5" gutterBottom component="div">
                              5. What do I look like____________
                              </Typography>
                              <Form.Item name="eye" className='lebal' label="My Eyes">
                              <Select name="eye" placeholder="select Your Eyes Color">
                                  <Option value="Amber">Amber</Option>
                                  <Option value="Brown">Brown</Option>
                                  <Option value="Green">Green</Option>
                                  <Option value="Blue">Blue</Option>
                                  <Option value="Gray">Gray</Option>
                                  <Option value="Hazel">Hazel</Option>
                                  <Option value="Other">Other</Option>
                                </Select>
                              </Form.Item>
                              <Form.Item name="hair_color" className='lebal' label="My Hair">
                              <Select name="hair_color"  placeholder="select your hair color">
                                  <Option value="Straight">Blond</Option>
                                  <Option value="Gay">Brown</Option>
                                  <Option value="Lesbian">Black</Option>
                                  <Option value="Bisexual">Red</Option>
                                  <Option value="Other">Other</Option>
                                </Select>
                              </Form.Item>
                              <Form.Item name="hair_length" className='lebal' label="Hair Length">
                              <Select name="hair_length" placeholder="select Your Hair Length">
                                  <Option value="Short">Short</Option>
                                  <Option value="Long">Long</Option>
                                  <Option value="Medium">Medium</Option>
                                  <Option value="Very Long">Very Long</Option>
                                  <Option value="Shaved Haid">Shaved Haid</Option>
                                  <Option value="Bald">Bald</Option>
                                </Select>
                              </Form.Item>
                              <Form.Item name="body_size" className='lebal' label="My Body">
                              <Select name="body_size"  placeholder="select your Body">
                                  <Option value="Slim">Slim</Option>
                                  <Option value="Average">Average</Option>
                                  <Option value="A Little Plump">A Little Plump</Option>
                                  <Option value="Big & Lovely">Big & Lovely</Option>
                                  <Option value="Other">Other</Option>
                                </Select>
                              </Form.Item>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <Form.Item name="image" className='lebal' label="Add Profile Image" rules={[{ required: true }]}>
                              <Upload 
                               type="file"
                               name="image"
                               onChange={(event) => {
                                UploadFile(event.file.originFileObj,'image');
                               }}
                              >
                                <Button icon={<UploadOutlined />}>Click to Upload</Button>
                              </Upload>
                              </Form.Item>
                            </Col>
                          </Row>
                          <Form.Item>
                            <Button type="primary" variant="contained"  color="secondary" htmlType="submit">
                              Submit
                            </Button>
                          </Form.Item>
                      </Form>
                      </Card>
                    </Grid>
                </Grid>
            </Box>
         </Container>
       </div>
     )
}

export default Profile;