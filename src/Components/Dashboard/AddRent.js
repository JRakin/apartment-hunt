import React from 'react';
import Sidebar from './Sidebar';
import { useForm } from 'react-hook-form';

const AddRent = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    const formData = new FormData();
    formData.append('file', data.file[0]);
    console.log(data.file[0]);
    formData.append('name', data.name);
    formData.append('location', data.location);
    formData.append('bath', data.bath);
    formData.append('price', data.price);
    formData.append('bed', data.bed);

    fetch('https://infinite-waters-22422.herokuapp.com/addApartment', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        e.target.reset();
        alert('Done');
      });
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <span>Apartment Title</span>
            <input
              type="text"
              name="name"
              ref={register}
              className="form-control"
            />
            <span>Location</span>
            <input
              type="text"
              name="location"
              ref={register}
              className="form-control"
            />
            <span>No. of Bathroom</span>
            <input
              type="number"
              name="bath"
              ref={register}
              className="form-control"
            />
            <span>Price</span>
            <input
              type="text"
              name="price"
              ref={register}
              className="form-control"
            />
            <span>No. of Bedroom</span>
            <input
              type="number"
              name="bed"
              ref={register}
              className="form-control"
            />
            <span>Thumbnail</span>
            <input
              type="file"
              name="file"
              id="file"
              ref={register}
              className="form-control"
            />{' '}
            <br />
            <input className="btn btn-info" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRent;
