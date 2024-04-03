import React, { useEffect, useState } from "react";
import { ShowData, deleteUser } from "../Services/API";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AllStudents = () => {
  const [allUsers, setAllUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const getUsers = async () => {
    const response = await ShowData();
    setAllUsers(response?.data.data);
    setIsLoading(false);
  };
  useEffect(() => {
    getUsers();
  }, []);
  console.log(allUsers);

  const handleDelete = async (id) => {
    await deleteUser(id);
    toast.warn("student deleted successfully");
    getUsers();
  };
  return (
    <>
      {isLoading && (
        <div style={{marginLeft:"50%"}}>
        <div class="spinner-border " role="status" >
          <span class="sr-only">Loading...</span>
        </div>
        <h3>Loading...</h3>
        </div>
      )}
      <ToastContainer />
      <div className="container">
      { !isLoading &&  <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">City</th>
              <th scope="col">Class</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allUsers?.map((user, index) => {
              return (
                <>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td>{user?.phone}</td>
                    <td>{user?.address}</td>
                    <td>{user?.city}</td>
                    <td>{user?.class}</td>
                    <td>
                      <Link to={`/edit/${user?._id}`}>
                        {" "}
                        <button
                          className="btn btn-primary"
                          style={{ marginRight: "10px" }}
                        >
                          {" "}
                          Edit{" "}
                        </button>{" "}
                      </Link>
                    </td>{" "}
                    <td>
                      {" "}
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          handleDelete(user?._id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>}
      </div>
    </>
  );
};

export default AllStudents;
