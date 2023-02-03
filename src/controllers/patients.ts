import patients from "../models/patients"
import { Request, Response } from "express";

export const addPatient = (req:Request ,res:Response) =>{
    const data = req.body;
    patients
    .save(data)
    .then((id) => {
      res.json({ msg: "Patient added SUCCESSFULLY", id: id });
    })
    .catch((err) => {
      res.json({ msg: "Error, couldn't add a patient ", error: err });
    });
}

export const getPatientById = (req:Request ,res:Response) => {
    const id = req.params.id;
    patients
      .getById(id)
      .then((patient) => {
        res.json({ data: patient });
      })
      .catch((err) => {
        res.json({
          msg: "Error, couldn't retrieve patient with id ${id}",
          error: err,
        });
      });
  };
  
  export const getAll = (req:Request ,res:Response) => {
    patients
      .getAll()
      .then((allPatients) => {
        res.json({ pacientes: allPatients });
      })
      .catch((err) => {
        console.log(err);
        
        res.json({ msg: "Error, couldn't retrieve patients", error: err });
      });
  };

  export const updatePatientById = (req:Request ,res:Response) => {
    const id = req.params.id;    
    const patient = req.body;
    patients
      .updateById(id, patient)
      .then(() => {
        res.json({ msg: "Patient updated succesfully" });
      })
      .catch((err) => {
        console.log(err);
        res.json({
          msg: "Error, couldn't update patient with id ${id}",
          error: err,
        });
      });
  };
  
  export const deletePatientById = (req:Request ,res:Response) => {
    const id = req.params.id;
    patients
      .deleteById(id)
      .then(() => {
        res.json({ msg: "Patient removed successfully" });
      })
      .catch((err) => {
        res.json({ msg: "Error, couldn't delete patient" });
      });
  };

