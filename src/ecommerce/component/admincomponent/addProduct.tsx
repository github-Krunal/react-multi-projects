import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

const AddProduct=()=>{
  const navigate=useNavigate()
    const submitProduct=async(product:any)=>{
       let x=await     fetch("http://localhost:4000/DashboardProduct", {
              headers: {
                "Content-Type": "application/json",
              },
              method: "post",
              body: JSON.stringify(product),
            });
            navigate('/admin/product-list')
    }
    return (
        <div>
             <Formik
        initialValues={{
          Title: '',
          Price: '',
          Category: '',
          ImageUrl: '',
          
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
 export default AddProduct;