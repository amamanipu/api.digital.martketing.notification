module.exports = class {
  constructor(
    {
      IdNotificacion,
      ApplicationId,
      Descripcion,
      IdEmailTemplate,
      EstadoTabla,
      Estado,
      UsrIng,
      FecIng,
      UsrMod,
      FecMod,
      Titulo,
      Leyenda,
      Ocurre,
      Consideracion,
      Email,
    },
  ) {
    this.IdNotificacion = IdNotificacion;
    this.ApplicationId = ApplicationId;
    this.Descripcion = Descripcion;
    this.IdEmailTemplate = IdEmailTemplate;
    this.EstadoTabla = EstadoTabla;
    this.Estado = Estado;
    this.UsrIng = UsrIng;
    this.FecIng = FecIng;
    this.UsrMod = UsrMod;
    this.FecMod = FecMod;
    this.Titulo = Titulo;
    this.Leyenda = Leyenda;
    this.Ocurre = Ocurre;
    this.Consideracion = Consideracion;
    this.Email = Email;
  }
};
