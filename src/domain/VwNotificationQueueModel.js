module.exports = class {
  constructor(
    {
      IdNotification,
      ApplicationId,
      Code,
      Template,
      IdNotificationQueue,
      UserId,
      Email,
      WithCopy,
      Body,
      State,
      DateSend,
      UserInsert,
      DateInsert,
      UserUpdate,
      DateUpdate,
      Subject,
      MailFrom,
      Names,
      LastNames,
      OrganizationId,
      OrganizationName,
    },
  ) {
    this.IdNotification = IdNotification;
    this.ApplicationId = ApplicationId;
    this.Code = Code;
    this.Template = Template;
    this.IdNotificationQueue = IdNotificationQueue;

    this.UserId = UserId;
    this.Email = Email;
    this.WithCopy = WithCopy;
    this.Body = Body;
    this.State = State;
    this.DateSend = DateSend;
    this.UserInsert = UserInsert;
    this.DateInsert = DateInsert;
    this.UserUpdate = UserUpdate;
    this.DateUpdate = DateUpdate;
    this.Subject = Subject;
    this.MailFrom = MailFrom;
    this.Names = Names;
    this.LastNames = LastNames;
    this.OrganizationId = OrganizationId;
    this.OrganizationName = OrganizationName;
  }
};
