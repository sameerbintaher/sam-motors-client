import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Fade, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { UserContext } from "../../../App";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Explore = () => {
  const { setSelectedService, isAdmin } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("https://peaceful-lake-83415.herokuapp.com/services")
      .then((res) => {
        setServices(res.data);
        setLoading(false);
      })
      .catch((error) => toast.error(error.message));
  }, []);

  return (
    <>
      <section
        id="services"
        className="text-center py-5"
        style={{ backgroundColor: "#000" }}
      >
        <NavBar />
        <h1 className="text-white mt-5">Explore our all services</h1>
        <Row className="justify-content-center mx-auto mt-md-5 pt-5">
          {loading ? (
            <Spinner animation="border" variant="danger" />
          ) : (
            services.map((service) => (
              <Col
                key={service._id}
                md={3}
                className="border rounded-3 m-2 bg-white p-3"
              >
                <img className="img-fluid" src={service.image} />
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <div className="d-flex flex-direction-column justify-content-between align-items-center text-center">
                  <h3 className="text-success">${service.price}</h3>
                  <Button
                    className="btn-primary"
                    as={Link}
                    to={isAdmin ? "/dashboard/orderList" : "/dashboard/book"}
                    onClick={() => setSelectedService(service)}
                  >
                    Buy Now
                  </Button>
                </div>
              </Col>
            ))
          )}
        </Row>
      </section>
      <Footer />
    </>
  );
};

export default Explore;
