export const reviewBudget = (budget, remaining) =>{
  let classname;

  if(budget/4 > remaining){
    classname = "alert alert-danger"
  } else if(budget/2 > remaining){
    classname = "alert alert-warning"
  } else{
    classname = "alert alert-success"
  }

  return classname;
}