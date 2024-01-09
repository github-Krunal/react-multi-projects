import CategoriesForm from "./categoriesForm";
import CategoriesTable from "./CategoriesTable";

const CategoriesDetails=()=>{
    return(
        <div>
            <div style={{display:'flex',justifyContent:"space-between"}}>
                <CategoriesForm/>
                <CategoriesTable/>
            </div>
        </div>
    )
}
export default CategoriesDetails;