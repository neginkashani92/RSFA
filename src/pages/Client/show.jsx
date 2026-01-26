import React from "react";
import { useEffect, useState } from "react";
import axiosClient from "@/lib/axiosClient";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function Show() {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axiosClient
      .get(`/users/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="max-w-7xl flex-col md:flex-row mx-auto flex gap-5 my-5 px-3 md:px-0">
      <div className="flex flex-col w-full md:w-1/5 gap-5">
        <div className="pl-2 flex gap-2 cursor-pointer">
          <span className="w-6 h-6 border bg-navy text-white rounded-full flex items-center justify-center cursor-pointer mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              ></path>
            </svg>
          </span>

          <Button
            variant="link"
            className="size-5 text-md cursor-pointer"
            onClick={() => navigate("/client")}
          >
            Return
          </Button>
        </div>
        <h1 className="text-2xl font-bold mb-4">
          {user?.firstName} {user?.lastName}
        </h1>
      </div>
      <div className="md:w-3/4 w-full border border-1 shadow-md pl-2">
        <div className="space-y-2">
          <p>
            <strong>ID:</strong> {user?.id}
          </p>
          <p>
            <strong>Street:</strong> {user?.address.address}
          </p>
          <p>
            <strong>City:</strong> {user?.address.city}
          </p>
          <p>
            <strong>State:</strong> {user?.address.state}
          </p>
          <p>
            <strong>Postal Code:</strong> {user?.address.postalCode}
          </p>
          <p>
            <strong>Phone:</strong> {user?.phone}
          </p>
          <p>
            <strong>Email:</strong> {user?.email}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Show;
