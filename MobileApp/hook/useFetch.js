import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const custurl= 'http://localhost:8000/customers';
  const options = {
    method: "GET",
    url: custurl,
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:8000/customers",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    },
  };
  
  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
    console.log("refetch");
  };

  return { data, isLoading, error, refetch };
};

const billFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const custurl= 'http://localhost:8000/bills';
  const options = {
    method: "GET",
    url: custurl,
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:8000/bills",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    },
  };
  
  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
    console.log("refetch");
  };

  return { data, isLoading, error, refetch };
};
const StocksCards = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const custurl= 'http://localhost:8000/inventory';
  const options = {
    method: "GET",
    url: custurl,
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:8000/inventory",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    },
  };
  
  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
    console.log("refetch");
  };

  return { data, isLoading, error, refetch };
};

const login = (email, password) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
 
  
  const fetchData = async () => {
    setIsLoading(true);
    var data = {
      email : email,
      password: password
    }
    try {
      const response = await axios.post('http://localhost:8000/signin', data);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
    console.log("refetch");
  };

  return { data, isLoading, error, refetch };
};



export default { useFetch, billFetch, StocksCards, login };
