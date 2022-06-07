-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Empresas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Empresas` (
  `idEmpresas` INT NOT NULL,
  `Nombre` VARCHAR(45) NOT NULL,
  `Direccion` VARCHAR(45) NOT NULL,
  `RUT` VARCHAR(45) NOT NULL,
  `Telefono` VARCHAR(45) NULL,
  PRIMARY KEY (`idEmpresas`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Empleados`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Empleados` (
  `idEmpleados` INT NOT NULL,
  `Empresas_idEmpresas` INT NOT NULL,
  `Nombre_completo` VARCHAR(45) NOT NULL,
  `RUT` VARCHAR(45) NOT NULL,
  `Email` VARCHAR(45) NULL,
  PRIMARY KEY (`idEmpleados`, `Empresas_idEmpresas`),
  INDEX `fk_Empleados_Empresas_idx` (`Empresas_idEmpresas` ASC) VISIBLE,
  CONSTRAINT `fk_Empleados_Empresas`
    FOREIGN KEY (`Empresas_idEmpresas`)
    REFERENCES `mydb`.`Empresas` (`idEmpresas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
