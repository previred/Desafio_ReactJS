import React from "react";
import { Grid } from "@material-ui/core";
import { User } from "src/models/user";
import { UIBasicInfo, UIDialog } from "src/modules/components/ui";
import styles from "./Detail.module.scss";

interface DetailProps {
  employee: User;
  onDelete: (employeeId: number) => void;
}
const EmployeeDetail: React.FC<DetailProps> = ({ employee, onDelete }) => {
  return (
    <>
      <Grid container spacing={3} className={styles.container}>
        <Grid item xs={12}>
          <span className={styles.title}>Datos de usuario</span>
        </Grid>
        <Grid item xs={4}>
          <UIBasicInfo
            title="Nombre y apellido"
            text={`${employee.name} ${employee.surname}`}
          />
        </Grid>
        <Grid item xs={4}>
          <UIBasicInfo title="Rut" text={`${employee.rut}-${employee.dv}`} />
        </Grid>
        <Grid item xs={4}>
          <UIBasicInfo title="Email" text={employee.email} />
        </Grid>
        <Grid item xs={4}>
          <UIBasicInfo
            title="Departamento"
            text={employee.department?.description || ""}
          />
        </Grid>
        <Grid item xs={4}>
          <UIBasicInfo
            title="Es administrador"
            text={employee.isAdm ? "Si " : "No"}
          />
        </Grid>
      </Grid>
      <div className={styles.buttonContainer}>
        <UIDialog
          buttonText="Borrar"
          title="Atencion!!"
          buttonExtraStyle={{ minWidth: "150px", marginLeft: "auto" }}
          description={`Esta a punto de eliminar el registro de ${employee.name} ${employee.surname} ¿Está seguro que desea continuar?`}
          onConfirm={() => {
            if (employee.idEmployee) onDelete(employee.idEmployee);
          }}
        />
      </div>
    </>
  );
};

export { EmployeeDetail };
