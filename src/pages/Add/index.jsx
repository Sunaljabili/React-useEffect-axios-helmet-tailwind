// import React, { useState } from "react";

// const AddPage = ({ setCategories }) => {
//   const [newCategory, setNewCategory] = useState({ name: "", description: "" });
//   const [nameError, setNameError] = useState(false);
//   const [descriptionError, setDescriptionError] = useState(false);

//   function checkValidation() {
//     const valid = { name: false, description: false };
//     if (newCategory.name.length == 0) {
//       setNameError(true);
//       valid.name = true;
//     } else {
//       setNameError(false);
//       valid.description = true;
//     }
//     if (newCategory.description.length == 0) {
//       setDescriptionError(true);
//       valid.description = true;
//     } else {
//       setDescriptionError(false);
//       valid.description = false;
//     }
//     if (valid.name || valid.description) {
//       return false;
//     } else {
//       return true;
//     }
//   }
//   return (
//     <div>
//       <form
//         action=""
//         onSubmit={(e) => {
//           e.preventDefault();
//           //   console.log("new category",newCategory);
//           const valid = checkValidation();
//           checkValidation();
//           //    fetch -POST
//           // state yenilemek.
//           if (valid) {
//             fetch("https://northwind.vercel.app/api/categories", {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify(newCategory),
//             })
//               .then((res) => res.json())
//               .then((data) => {
//                 setCategories((categories) => {
//                   return [...categories, data];
//                 });
//                 setNewCategory({ name: "", description: "" });
//               });
//           }
//         }}
//       >
//         <div>
//           <input
//             value={newCategory.description}
//             onChange={(e) => {
//               setNewCategory({ ...newCategory, description: e.target.value });
//             }}
//             type="text"
//             placeholder="Add Category"
//           />
//           <br />
//           {nameError && (
//             <span style={{ color: "red" }}>Category name is required</span>
//           )}
//         </div>
//         <div>
//           <input
//             value={newCategory.name}
//             onChange={(e) => {
//               setNewCategory({ ...newCategory, name: e.target.value });
//             }}
//             type="text"
//             placeholder="Add Descriprion"
//           />
//           <br />
//           {descriptionError && (
//             <span style={{ color: "red" }}>Description is required</span>
//           )}
//         </div>

//         <button type="submit">Add</button>
//       </form>
//     </div>
//   );
// };

// export default AddPage;
// Validation Form
// FETCH -POST
// State update
import React, { useState } from "react";

const AddPage = ({setCategories}) => {
  const [newCategory, setNewCtegory] = useState({ name: "", description: "" });
  const [nameError, setNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  function checkValidation(){
    const valid ={name:false,description:false}
    if(newCategory.name.length==0){
      setNameError(true)
      valid.name=true;
    }
    else{
      setNameError(false)
      valid.name=false;
    }
    if(newCategory.description.length==0){
      setDescriptionError(true)
      valid.name=true;
    }
    else{
      setDescriptionError(false)
      valid.name=false;
    }

    if(valid.name || valid.description){
      return false
    }
    else{
      return true
    }
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
           const isValid= checkValidation();
           if(isValid){
            fetch("https://northwind.vercel.app/api/categories",{
              method:"POST",
              headers:{
                "Content-Type":"application/json"
              },
              body:JSON.stringify(newCategory)
            })
            .then((res)=>res.json())
            .then((data)=>setCategories((categories)=>{
              return [...categories,data]
            }))
            setNewCtegory({name:"",description:""})
           }
          console.log("---- new Category", newCategory);
          
        }}
        action=""
      >
        <div>
          <input
          value={newCategory.name}
            onChange={(e) => {
              setNewCtegory({ ...newCategory, name: e.target.value });
            }}
            type="text"
            placeholder="Enter category Name"
          />
          <br />
          {nameError && (
            <span style={{ color: "red" }}>Category name is required !!!</span>
          )}
        </div>
        <div>
          <input
          value={newCategory.description}
            onChange={(e) => {
              setNewCtegory({ ...newCategory, description: e.target.value });
            }}
            type="text"
            placeholder="Enter description"
          />
          <br />
          {descriptionError && (
            <span style={{ color: "red" }}>Description is required !!!</span>
          )}
        </div>

        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default AddPage;
