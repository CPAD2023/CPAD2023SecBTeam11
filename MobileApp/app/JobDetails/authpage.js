import React, { useState } from 'react';

import { useRouter } from "expo-router";

import fetch from "../../hook/useFetch";
import axios from 'axios';

const MyForm = () => {
    const router = useRouter();

  // Define state variables for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
//   const { data, isLoading, error } = fetch.login(firstName, lastName);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("hello");
    var data = {
        email : firstName,
        password: lastName
      }

    try {
        // Make a POST request using Axios
        const response = await axios.post('http://localhost:8000/signin', data);
        if(response.status == 200){
            router.push('/JobDetails/mainpage');
        }
        else {
            alert('Invalid email or password. Please try again.');
            console.error('Login error:', error);
        }
          console.log('Server response:', response.data);
      } catch (error) {
        // Handle errors
        console.error('Error submitting form:', error);
      }



    // if(data.status == 200){
    //     console.log("done");
    // }
    // Perform actions with form data, e.g., submit to a server or handle locally
    console.log('Form submitted:', { firstName, lastName });

  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;