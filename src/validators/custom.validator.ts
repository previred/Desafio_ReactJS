const dv = (T: any) => {
  let M = 0,
    S = 1;
  for (; T; T = Math.floor(T / 10)) S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
  return S ? S - 1 : "k";
};

const validateRut = (rut: string | undefined) => {
  if (!rut) return false;
  if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rut)) return false;
  const tmp = rut.split("-");
  let digv = tmp[1];
  const newRut = tmp[0];
  if (digv == "K") digv = "k";
  return dv(newRut) == digv;
};

export { validateRut };
