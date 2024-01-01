import { Field, Form, Formik } from "formik";

const AddProduct=()=>{
    const submitProduct=(product:any)=>{
            fetch("http://localhost:4000/DashboardProduct", {
              headers: {
                "Content-Type": "application/json",
              },
              method: "post",
              body: JSON.stringify(product),
            });
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