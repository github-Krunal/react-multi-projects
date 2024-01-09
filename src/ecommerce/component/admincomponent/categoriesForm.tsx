import { Field, Form, Formik } from "formik";

const CategoriesForm=()=>{
    const submitProduct=async(product:any)=>{
        await     fetch("http://localhost:4000/Categories", {
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
            ImageUrl: '',
         }}
         onSubmit={(values,{resetForm}) => {
            debugger
           setTimeout(() => {
             submitProduct(values)
             resetForm()
           }, 500);
         }}
       >
             <Form >
             <label htmlFor="Title">Title</label><br/><br/>
             <Field type="text" name="Title" id="Title" /><br/><br/>
             <label htmlFor="ImageUrl">ImageUrl</label><br/><br/>
             <Field type="text" name="ImageUrl" id="ImageUrl" /><br/><br/>
             <button type="submit"> submit</button>
             </Form>
             </Formik>
         </div>
     )
}

export default CategoriesForm;