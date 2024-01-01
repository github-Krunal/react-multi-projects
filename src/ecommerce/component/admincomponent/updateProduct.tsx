import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../../model/product.model";

const UpdateProduct=()=>{
  const {productID}=useParams()
  const [singleProduct,setSingleProduct]=useState<Product>()


  useEffect(()=>{
    const fetchSingleProduct= async()=>{
        let data=await fetch(`http://localhost:4000/DashboardProduct/${productID}`);
        let singleproduct=await data.json();
        setSingleProduct(singleproduct)
    }
    fetchSingleProduct()
  },[productID])
    const submitProduct=(product:any)=>{
            fetch(`http://localhost:4000/DashboardProduct/${singleProduct?.id}`, {
              headers: {
                "Content-Type": "application/json",
              },
              method: "PATCH",
              body: JSON.stringify(product),
            });
    }
    return (
        <div>
             <Formik
        enableReinitialize
        initialValues={{
          Title: singleProduct?.Title,
          Price: singleProduct?.Price,
          Category: singleProduct?.Category,
          ImageUrl: singleProduct?.ImageUrl,
        }}
        onSubmit={(values,{resetForm}) => {
          setTimeout(() => {
            submitProduct(values)
            resetForm()
          }, 500);
        }}
      >
            <Form >
            <label htmlFor="Title">Title</label><br/><br/>
            <Field type="text" name="Title" id="Price" /><br/><br/>
            <label htmlFor="Price">Price</label><br/><br/>
            <Field type="number" name="Price" id="Price" /><br/><br/>
            <label htmlFor="Category">Category</label><br/><br/>
            <Field type="text" name="Category" id="Category" /><br/><br/>
            <label htmlFor="ImageUrl">ImageUrl</label><br/><br/>
            <Field type="text" name="ImageUrl" id="ImageUrl" /><br/><br/>
            <button type="submit"> submit</button>
            </Form>
            </Formik>
        </div>
    )
}
 export default UpdateProduct;