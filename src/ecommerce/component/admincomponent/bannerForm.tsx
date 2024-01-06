import { Field, Form, Formik } from "formik";

const BannerForm=()=>{
    const submitProduct=async(product:any)=>{
        await     fetch("http://localhost:4000/BannerSlider", {
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
            Slogan: '',
           BannerText: '',
           Image: '',
           Type: '',
           
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
             <label htmlFor="Title">Slogan</label><br/><br/>
             <Field type="text" name="Slogan" id="Slogan" /><br/><br/>
             <label htmlFor="BannerText">BannerText</label><br/><br/>
             <Field type="text" name="BannerText" id="BannerText" /><br/><br/>
             <label htmlFor="Image">Image</label><br/><br/>
             <Field type="text" name="Image" id="Image" /><br/><br/>
             <label htmlFor="Type">Type</label><br/><br/>
             <Field name="Type" as="select" className="my-select">
   <option value="Slider">Slider</option>
   <option value="Block1">Block1</option>
   <option value="Block2">Block2</option>
 </Field><br/><br/>
             <button type="submit"> submit</button>
             </Form>
             </Formik>
         </div>
     )
}

export default BannerForm