import { Knex } from "knex";

function createPatientTable(db: Knex) {
    return db.schema.dropTableIfExists("patients").finally(() => {
      return db.schema.createTable("patients", (table) => {
        table.increments("id").primary();
        table.string("name", 10);
        table.string("dni", 10);
        table.string("email", 20);
        table.string("dob", 20);
        table.string("emr", 20);
      });
    });
  }

export function init(db:any) {
    createPatientTable(db);  
}
  

  