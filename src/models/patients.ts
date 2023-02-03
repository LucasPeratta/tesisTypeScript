import {db} from "../db/index"


const save = (patient:any) => {
    return db("patients").insert(patient);    
  };

  const getAll = () => {
    return db("patients").select("*");
  };
  
  const getById = (id:string) => {
    return db.select("*").from("patients").where({ id: id });
  };
  
  const updateById = (id:string, patient:any) => {
    return db
      .update({
        name: patient.name,
        dni: patient.dni,
        email: patient.email,
        date: patient.date,
        emr: patient.emr,
      })
      .from("patients")
      .where({ id: id });
  };
  
  const deleteById = (id:string) => {
    return db.delete().from("patients").where({ id: id });
  };
  
  export default {  save, getAll, getById, deleteById, updateById };
  