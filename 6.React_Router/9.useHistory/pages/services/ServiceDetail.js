import React from "react";
import { useParams, useHistory } from "react-router-dom";

import servicesData from "./servicesData";

function ServiceDetail() {
  const { serviceId } = useParams();
  const history = useHistory();
  console.log(history);
  const thisService = servicesData.find((service) => service._id === serviceId);
  function handlePush() {
    setTimeout(() => {
      history.push("/services"); //using push to go back to an endpoint
    }, 0);
  }
  function handleGoBack() {
    setTimeout(() => {
      history.goBack(); //using goBack to go back to an endpoint
    }, 0);
  }
  function handleGo() {
    setTimeout(() => {
      history.go(-2); //using goBack to an endpoint
    }, 0);
  }
  function handleReplace() {
    setTimeout(() => {
      history.replace();
    }, 0);
  }
  return (
    <div>
      <h1>Service Detail Page</h1>
      <h3>
        {thisService.name} - ${thisService.price}
      </h3>
      <p>{thisService.description}</p>
      <button onClick={handlePush}>click to go back to all services</button>
      <button onClick={handleGoBack}>click to go back</button>
      <button onClick={handleGo}>click to go two steps back </button>
      <button onClick={handleReplace}>click to replace</button>
    </div>
  );
}

export default ServiceDetail;
