export default function Validation(dataForm) {
  const regexTitle = /^(?!\s*$).{5,}$/i; //que exista;
  const regexSummary = /^(?!\s*$)[\S\s]{1,}(?:\b\w+\b[\S\s]*){8,}$/i;
  const regexHealthScore = /^(100|[1-9]?[1-9])$/i;
  const regexSteps = /^(?!\s*$)[\S\s]{1,}(?:\b\w+\b[\S\s]*){8,}$/i;
  let errors = {};
  if (!dataForm.title && !regexTitle.test(dataForm.title))
    errors.title = "Ingrese un titulo de la receta";

  if (!dataForm.summary && !regexSummary.test(dataForm.summary))
    errors.summary = "ingrese un minimo de 8 palabras para el resumen";

  if (!dataForm.healthScore && !regexHealthScore.test(dataForm.healthScore))
    errors.healthScore = "ingrese un valor entre 1 y 100";

  if (!dataForm.steps && !regexSteps.test(dataForm.steps))
    errors.steps = "ingrese un valor entre 0 y 100";

  return errors;
}
